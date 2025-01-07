"use client";
import { motion as m } from "motion/react";
import Image from "next/image";
import Profile from "@/assets/profile.webp";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SiteHeader() {
	return (
		<m.header
			layout="position"
			layoutId="site-header"
			className="flex justify-between items-center z-10 text-stone-500 max-w-lg mx-auto w-full"
		>
			<Link href="/">
				<Image
					className="size-12 rounded-lg -rotate-6 transition-transform hover:rotate-0 hover:scale-110"
					src={Profile}
					alt="My profile pic"
					priority
				/>
				<span className="sr-only">Home</span>
			</Link>
			<div className="flex items-center gap-1">
				<MapPinIcon className="size-4" />
				<p className="text-sm tracking-tight">Vadodara, IN</p>
			</div>
		</m.header>
	);
}
