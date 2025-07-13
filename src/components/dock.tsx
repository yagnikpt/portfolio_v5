"use client";

import {
	HomeIcon as HomeIconSolid,
	FolderIcon as FolderIconSolid,
	BeakerIcon as BeakerIconSolid,
} from "@heroicons/react/24/solid";
import {
	HomeIcon as HomeIconOutline,
	FolderIcon as FolderIconOutline,
	BeakerIcon as BeakerIconOutline,
	AtSymbolIcon,
	ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { AnimatePresence, motion as m, MotionConfig } from "motion/react";
import GithubIcon from "@/assets/icons/social/github.svg";
// import BlueskyIcon from "@/assets/icons/social/bluesky.svg";
import XIcon from "@/assets/icons/social/x.svg";
import LinkedinIcon from "@/assets/icons/social/linkedin.svg";
import InstagramIcon from "@/assets/icons/social/instagram.svg";
import BuyMeACoffeeIcon from "@/assets/icons/social/bmc.svg";
import { cn } from "@/lib/utils";

const socials = [
	{
		label: "Github",
		href: "https://github.com/yagnikpt",
		icon: GithubIcon,
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
	{
		label: "Buy me a coffee",
		href: "https://buymeacoffee.com/yagnik",
		icon: BuyMeACoffeeIcon,
	},
];

export default function Dock() {
	const [socialsOpen, setSocialsOpen] = useState(false);
	const pathname = usePathname();
	const [currentHover, setCurrentHover] = useState<null | string>(null);

	return (
		<MotionConfig
			transition={{ type: "spring", duration: 0.4, bounce: 0 }}
			reducedMotion="user"
		>
			<m.div
				className="fixed bottom-8 z-100 rounded-full"
				// style={{ viewTransitionName: "dock" }}
				layoutRoot
				onHoverEnd={() => setCurrentHover(null)}
			>
				<m.div
					layout
					className="px-2 py-1 lg:p-1 overflow-hidden ring ring-inset ring-zinc-950/35 inset-shadow-2xs text-zinc-200 bg-zinc-950/70 backdrop-blur-xs"
					style={{ borderRadius: 28 }}
				>
					<div className="flex items-center rounded-full overflow-hidden">
						<AnimatePresence>
							{!socialsOpen ? (
								<>
									<DockLink
										type="app"
										label="Home"
										href="/"
										icon={HomeIconOutline}
										activeIcon={HomeIconSolid}
										active={pathname === "/"}
										currentHover={currentHover}
										setCurrentHover={setCurrentHover}
									/>
									<DockLink
										type="app"
										label="Projects"
										href="/projects"
										icon={FolderIconOutline}
										activeIcon={FolderIconSolid}
										active={pathname === "/projects"}
										currentHover={currentHover}
										setCurrentHover={setCurrentHover}
									/>
									<DockLink
										type="app"
										label="UI bits"
										href="/uibits"
										icon={BeakerIconOutline}
										activeIcon={BeakerIconSolid}
										active={pathname === "/uibits"}
										currentHover={currentHover}
										setCurrentHover={setCurrentHover}
									/>
									<DockButton
										label="Socials"
										icon={AtSymbolIcon}
										onClick={() => setSocialsOpen(true)}
										currentHover={currentHover}
										setCurrentHover={setCurrentHover}
									/>
								</>
							) : (
								<>
									<DockButton
										label="Back"
										icon={ChevronLeftIcon}
										onClick={() => setSocialsOpen(false)}
										currentHover={currentHover}
										setCurrentHover={setCurrentHover}
									/>
									<m.div
										layout
										className="h-7 lg:h-6 w-[1px] mx-0.5 bg-white/10"
									/>
									{socials.map((social) => (
										<DockLink
											key={social.label}
											href={social.href}
											type="external"
											icon={social.icon}
											label={social.label}
											currentHover={currentHover}
											setCurrentHover={setCurrentHover}
										/>
									))}
								</>
							)}
						</AnimatePresence>
					</div>
				</m.div>
			</m.div>
		</MotionConfig>
	);
}

interface DockButtonProps {
	onClick: () => void;
	icon: typeof HomeIconOutline;
	label: string;
	currentHover: string | null;
	setCurrentHover: (hover: string | null) => void;
}

function DockButton({
	onClick,
	icon,
	label,
	currentHover,
	setCurrentHover,
}: DockButtonProps) {
	const Icon = icon;

	return (
		<m.button
			onHoverStart={() => setCurrentHover(label)}
			type="button"
			onClick={onClick}
			layout
			className="p-2 rounded-lg relative"
		>
			<AnimatePresence>
				{currentHover === label && (
					<m.div
						key={label}
						transition={{ duration: 0.1 }}
						className="absolute inset-0 bg-white/10 rounded-lg"
						layout="position"
						layoutId="hover-bg"
					/>
				)}
			</AnimatePresence>
			<Icon className="size-7 lg:size-6" />
			<span className="sr-only">{label}</span>
		</m.button>
	);
}

interface DockLinkProps {
	href: string;
	icon: typeof HomeIconOutline;
	activeIcon?: typeof HomeIconOutline;
	active?: boolean;
	type: "app" | "external";
	label: string;
	currentHover: string | null;
	setCurrentHover: (hover: string | null) => void;
}
const MLink = m.create(Link);

function DockLink({
	href,
	icon,
	activeIcon,
	active,
	type,
	label,
	currentHover,
	setCurrentHover,
}: DockLinkProps) {
	const Icon = active ? (activeIcon ?? icon) : icon;
	const Comp = type === "app" ? MLink : m.a;

	return (
		<Comp
			rel={type === "app" ? undefined : "noreferrer"}
			target={type === "app" ? undefined : "_blank"}
			onHoverStart={() => setCurrentHover(label)}
			layout
			href={href}
			className="rounded-lg relative size-10 grid place-content-center cursor-default"
		>
			<AnimatePresence>
				{currentHover === label && (
					<m.div
						transition={{ duration: 0.1 }}
						key={href}
						className="absolute inset-0 bg-white/10 rounded-lg"
						layout="position"
						layoutId="hover-bg"
					/>
				)}
			</AnimatePresence>
			<Icon
				className={cn(type === "app" ? "size-7 lg:size-6" : "size-6 lg:size-5")}
			/>
			<span className="sr-only">{label}</span>
		</Comp>
	);
}
