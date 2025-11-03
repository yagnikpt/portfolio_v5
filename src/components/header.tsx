"use client";
import { motion as m } from "motion/react";
import Image from "next/image";
import Profile from "@/assets/profile.webp";
import { GlobeAltIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Link } from "next-view-transitions";
import { useEffect, useState } from "react";

const item = {
	hidden: {
		opacity: 0,
		maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
	},
	visible: {
		opacity: 1,
		maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1))",
		transition: { duration: 0.5, opacity: { duration: 0.3 } },
	},
};

export default function SiteHeader() {
	const [time, setTime] = useState(
		new Date().toLocaleTimeString("en-US", {
			timeZone: "Asia/Kolkata",
			hour12: false,
			hour: "numeric",
			minute: "numeric",
		}),
	);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(
				new Date().toLocaleTimeString("en-US", {
					timeZone: "Asia/Kolkata",
					hour12: false,
					hour: "numeric",
					minute: "numeric",
				}),
			);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<m.header
			id="site-header"
			className="flex justify-between items-center z-10 text-zinc-500 max-w-lg mx-auto w-full"
			variants={item}
			onAnimationComplete={(definition) => {
				if (definition === "visible") {
					const el = document.querySelector("#site-header") as HTMLElement;
					el.style.maskImage = "none";
				}
			}}
		>
			<Link href="/">
				<Image
					className="size-12 rounded-lg -rotate-6 transition-transform hover:rotate-0 hover:scale-110"
					src={Profile}
					alt="My profile pic"
					priority
					quality={100}
				/>
				<span className="sr-only">Home</span>
			</Link>
			<div className="flex flex-col items-end gap-0.5">
				<div className="flex items-center gap-1">
					<GlobeAltIcon className="size-4" />
					<p className="text-sm tracking-tight">Vadodara, IN</p>
				</div>
				<div className="flex items-center gap-1">
					<ClockIcon className="size-4" />
					<p className="text-sm tracking-tight" suppressHydrationWarning>
						{time}
					</p>
				</div>
			</div>
		</m.header>
	);
}
