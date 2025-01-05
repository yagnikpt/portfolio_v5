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
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion as m, MotionConfig } from "motion/react";
import GithubIcon from "@/assets/icons/social/github.svg";
import BlueskyIcon from "@/assets/icons/social/bluesky.svg";
import XIcon from "@/assets/icons/social/x.svg";
import LinkedinIcon from "@/assets/icons/social/linkedin.svg";
import InstagramIcon from "@/assets/icons/social/instagram.svg";

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

export default function Dock() {
	const [socialsOpen, setSocialsOpen] = useState(false);
	const pathname = usePathname();

	return (
		<MotionConfig transition={{ type: "spring", duration: 0.4 }}>
			<m.div
				layout
				className="flex rounded-full p-2 bg-neutral-200 border border-neutral-400 items-center fixed bottom-10 gap-1 z-100 overflow-hidden"
			>
				<AnimatePresence>
					{!socialsOpen ? (
						<>
							<DockItem
								href="/"
								icon={HomeIconOutline}
								activeIcon={HomeIconSolid}
								active={pathname === "/"}
							/>
							<DockItem
								href="/projects"
								icon={FolderIconOutline}
								activeIcon={FolderIconSolid}
								active={pathname === "/projects"}
							/>
							<DockItem
								href="/uibits"
								icon={BeakerIconOutline}
								activeIcon={BeakerIconSolid}
								active={pathname === "/uibits"}
							/>
							<m.button
								layout
								type="button"
								className="p-2 hover:bg-black/10 rounded-full"
								onClick={() => setSocialsOpen(true)}
							>
								<AtSymbolIcon className="size-7 lg:size-6" />
							</m.button>
						</>
					) : (
						<>
							<m.button
								layout
								type="button"
								className="p-2 hover:bg-black/10 rounded-full"
								onClick={() => setSocialsOpen(false)}
							>
								<ChevronLeftIcon className="size-7 lg:size-6" />
							</m.button>
							<m.div layout className="h-7 w-[1px] bg-black/40" />
							{socials.map((social) => (
								<m.a
									layout
									rel="noreferrer"
									target="_blank"
									className="p-2 hover:bg-black/10 rounded-full"
									key={social.label}
									aria-label={social.label}
									href={social.href}
								>
									<social.icon className="size-5" />
								</m.a>
							))}
						</>
					)}
				</AnimatePresence>
			</m.div>
		</MotionConfig>
	);
}

interface DockItemProps {
	href: string;
	icon: typeof HomeIconOutline;
	activeIcon: typeof HomeIconOutline;
	active: boolean;
}

const MLink = m.create(Link);

function DockItem({ href, icon, activeIcon, active }: DockItemProps) {
	const Icon = active ? activeIcon : icon;

	return (
		<MLink layout href={href} className="p-2 hover:bg-black/10 rounded-full">
			<Icon className="size-7 lg:size-6" />
		</MLink>
	);
}
