"use client";

import Image from "next/image";
import Profile from "@/assets/profile.webp";
import { MapPinIcon } from "@heroicons/react/24/solid";
import CopyMailButton from "@/components/copy-mail";
import GithubIcon from "@/assets/icons/social/github.svg";
import BlueskyIcon from "@/assets/icons/social/bluesky.svg";
import XIcon from "@/assets/icons/social/x.svg";
import LinkedinIcon from "@/assets/icons/social/linkedin.svg";
import InstagramIcon from "@/assets/icons/social/instagram.svg";
import AnimatedText from "@/components/text-effect";
import { AnimatePresence, motion as m } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const socials = [
	{
		label: "Github",
		href: "https://github.com/yagnik-patel-47",
		icon: GithubIcon,
	},
	{
		label: "Bluesky",
		href: "https://bsky.app/profile/yagnik-pt.bsky.social",
		icon: BlueskyIcon,
	},
	{
		label: "X",
		href: "https://x.com/yagnik_pt",
		icon: XIcon,
	},
	{
		label: "Linkedin",
		href: "https://linkedin.com/in/yagnikpt",
		icon: LinkedinIcon,
	},
	{
		label: "Instagram",
		href: "https://instagram.com/yagnik._._.patel",
		icon: InstagramIcon,
	},
];

const parent = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.025,
		},
	},
};

const item = {
	hidden: {
		opacity: 0,
		y: 7.5,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			type: "spring",
		},
	},
};

export default function Home() {
	return (
		<m.main
			variants={parent}
			animate="visible"
			initial="hidden"
			className="flex flex-col min-h-dvh py-8 justify-center max-w-lg mx-auto gap-14 text-[#5d5d5d]"
		>
			<header className="flex justify-between items-center">
				<Image
					className="size-14 rounded-lg -rotate-5"
					src={Profile}
					alt="My profile pic"
					priority
				/>
				<div className="flex group/socials -space-x-5 hover:space-x-3 overflow-hidden rounded-full hover:bg-zinc-100 hover:pl-5 hover:pr-2 transition-all">
					{socials.map((social) => (
						<a
							key={social.label}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1 relative transition-all duration-200 opacity-0 group-hover/socials:opacity-100 text-[#5d5d5d]"
							aria-label={social.label}
							href={social.href}
						>
							<Image className="size-5" src={social.icon} alt={social.label} />
						</a>
					))}
					<div className="size-9 relative flex justify-center items-center group-hover/socials:-mr-9 group-hover/socials:opacity-0 transition-all duration-200">
						<div className="size-3 bg-neutral-800 rounded-full" />
						<div className="absolute size-3 bg-neutral-800 rounded-full animate-pulse-grow" />
					</div>
				</div>
			</header>
			<div className="font-medium text-xl space-y-4">
				<AnimatedText>
					I am<span className="text-[#222222] font-bold">Yagnik.</span>
				</AnimatedText>
				<AnimatedText className="text-pretty">
					With 16 years of experience bridging design and development, I craft
					exceptional
					<span className="inline-flex items-center text-[#222222] font-bold gap-1">
						digital experiences
						<IconHoverMicroInteraction
							rotate={8}
							bgColor="bg-blue-500"
							tooltip="Design"
							className="bg-blue-500"
						>
							<PaintBrushIcon className="size-4 text-white" />
						</IconHoverMicroInteraction>
					</span>
					that unite form and function. As a
					<span className="inline-flex items-center text-[#222222] font-bold gap-1">
						frontend specialist,
						<IconHoverMicroInteraction
							rotate={-8}
							bgColor="bg-purple-500"
							tooltip="Code and Code"
							className="bg-purple-500"
						>
							<TerminalIcon className="size-4 text-white" />
						</IconHoverMicroInteraction>
					</span>
					I transform creative concepts into seamless, intuitive interfaces.
				</AnimatedText>
				<AnimatedText className="text-pretty">
					My dual expertise as both designer and developer enables me to
					navigate the entire creative process - from initial wireframes to
					pixel-perfect implementation, ensuring projects not only look stunning
					but perform flawlessly across
					<span className="inline-flex items-center text-[#222222] font-bold gap-1">
						all platforms.
						<IconHoverMicroInteraction
							rotate={8}
							bgColor="bg-orange-500"
							tooltip="Working day to day with Next.js, React-Native and Rust."
							className="bg-orange-500"
						>
							<PlugSocketIcon className="size-4 text-white" />
						</IconHoverMicroInteraction>
					</span>
				</AnimatedText>
			</div>
			<m.div variants={item} className="flex justify-end gap-4 items-center">
				<div className="flex items-center gap-1">
					<MapPinIcon className="size-5" />
					<p className="font-medium">Vadodara, IN</p>
				</div>
				<CopyMailButton />
			</m.div>
		</m.main>
	);
}

interface IconHoverMicroInteractionProps {
	children: React.ReactNode;
	bgColor: string;
	className?: string;
	tooltip?: string;
	rotate?: number;
}

const IconHoverMicroInteraction = ({
	children,
	className,
	tooltip,
	bgColor,
	rotate,
}: IconHoverMicroInteractionProps) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<m.span
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			style={{ rotate: `${rotate ?? 0}deg` }}
			className={cn("inline-block p-1 w-fit rounded-lg relative", className)}
		>
			{children}
			<AnimatePresence>
				{isHovered && (
					<m.span
						initial={{
							opacity: 0,
							rotate: -(rotate ?? 0),
							scale: 0.75,
						}}
						animate={{ opacity: 1, rotate: 0, scale: 1 }}
						exit={{ opacity: 0, rotate: -(rotate ?? 0), scale: 0.75 }}
						className="absolute max-w-60 w-max block left-1/2 -translate-x-1/2 -translate-y-[125%] top-0 origin-bottom"
					>
						<span
							className={cn(
								"block px-3 py-2 rounded-xl text-neutral-100 text-xs font-medium max-w-lg",
								bgColor,
							)}
						>
							{tooltip}
						</span>
						<span
							className={cn(
								"block absolute top-[calc(100%-0.25rem)] left-1/2 -translate-x-1/2 size-2 rotate-45",
								bgColor,
							)}
						/>
					</m.span>
				)}
			</AnimatePresence>
		</m.span>
	);
};

const TerminalIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<title>Terminal</title>
		<path
			d="M12 19H21M3 5L11 12L3 19"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const PaintBrushIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width={24}
		height={24}
		color={"#000000"}
		fill={"none"}
		{...props}
	>
		<title>Paint Brush</title>
		<path
			d="M6 12C5.13023 12.7386 1.94713 14.5658 2.00054 15.9012C2.01513 16.2661 2.3205 16.5714 2.93122 17.1822L3.90287 18.1538M12 18C11.2614 18.8698 9.43417 22.0529 8.09878 21.9995C7.73393 21.9849 7.42856 21.6795 6.81784 21.0688L5.84618 20.0971M3.90287 18.1538L6.29464 15.762M3.90287 18.1538L5.84618 20.0971M5.84618 20.0971L7.04207 18.9012"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M13.9389 18.481C13.6199 18.8243 13.4604 18.996 13.2454 18.9999C13.0304 19.0039 12.8585 18.8319 12.5146 18.4881L5.51186 11.4849C5.16804 11.1411 4.99612 10.9692 5.00007 10.7542C5.00401 10.5392 5.17563 10.3797 5.51887 10.0607C5.75113 9.84487 5.93925 9.69256 6.14283 9.56702C7.90764 8.47876 10.1485 9.5093 11.9332 8.49885C13.9897 7.33452 15.7947 5.18592 17.4986 3.25974C18.2273 2.43601 18.5916 2.02414 19.1056 2.00066C20.0323 1.95831 22.0415 3.97332 21.9993 4.89475C21.9758 5.40882 21.5638 5.77316 20.7398 6.50183C18.8135 8.20531 16.6647 10.01 15.5006 12.0664C14.4902 13.8513 15.5207 16.0922 14.4325 17.8571C14.307 18.0607 14.1547 18.2488 13.9389 18.481Z"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const PlugSocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width={24}
		height={24}
		color={"#000000"}
		fill={"none"}
		{...props}
	>
		<title>Plug Socket</title>
		<path
			d="M17.854 12.16C17.471 12.6105 16.7631 12.6138 16.3165 12.1671L11.8329 7.68351C11.3862 7.23686 11.3895 6.529 11.84 6.14596L13.071 5.09939C13.9559 4.34704 15.0349 3.84824 16.2044 3.6509L16.9294 3.52858C17.614 3.41306 18.3339 3.65221 18.8475 4.16577L19.8342 5.15255C20.3478 5.66611 20.5869 6.38601 20.4714 7.07063L20.3491 7.79559C20.1518 8.9651 19.653 10.0441 18.9006 10.929L17.854 12.16Z"
			stroke="currentColor"
			strokeWidth="1.5"
		/>
		<path
			d="M19.5 4.5L21.5 2.5"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M2.5 21.5L4.5 19.5"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M6.14596 11.84C6.52901 11.3895 7.23686 11.3862 7.68351 11.8329L12.1671 16.3165C12.6138 16.7631 12.6105 17.471 12.16 17.854L10.929 18.9006C10.0441 19.653 8.9651 20.1518 7.79559 20.3491L7.07063 20.4714C6.38601 20.5869 5.66611 20.3478 5.15255 19.8342L4.16577 18.8475C3.65221 18.3339 3.41306 17.614 3.52858 16.9294L3.6509 16.2044C3.84824 15.0349 4.34704 13.9559 5.09939 13.071L6.14596 11.84Z"
			stroke="currentColor"
			strokeWidth="1.5"
		/>
		<path
			d="M8.5 12.5L10.5 10.5M11.5 15.5L13.5 13.5"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
