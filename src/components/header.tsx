"use client";
import { motion as m } from "motion/react";
import Image from "next/image";
import Profile from "@/assets/profile.webp";
import { MapPinIcon } from "@heroicons/react/24/solid";

const MImage = m.create(Image);

export default function SiteHeader() {
	return (
		<m.header
			layout="position"
			layoutId="site-header"
			className="flex justify-between items-center z-10 text-[#5d5d5d]"
		>
			<MImage
				className="md:size-14 size-20 rounded-lg -rotate-5"
				src={Profile}
				alt="My profile pic"
				priority
				whileHover={{
					scale: 1.05,
					boxShadow: "0 20px 25px -5px #0000001a, 0 8px 10px -6px #0000001a",
				}}
			/>
			<div className="flex items-center gap-1">
				<MapPinIcon className="size-5" />
				<p className="font-medium">Vadodara, IN</p>
			</div>
		</m.header>
	);
}
