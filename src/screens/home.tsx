"use client";
import AnimatedText from "@/components/text-effect";
import { AnimatePresence, motion as m } from "motion/react";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import SiteHeader from "@/components/header";
import CopyMailButton from "@/components/copy-mail";
import {
	CodeBracketIcon,
	CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import Separator from "@/components/separator";
import Image from "next/image";
import PinterestIcon from "@/assets/icons/social/pinterest.svg";
import BentoIcon from "@/assets/icons/social/bento.svg";
import UpworkIcon from "@/assets/icons/social/upwork.svg";
import PythonIcon from "@/assets/icons/skill/python.svg";
import GoIcon from "@/assets/icons/skill/golang.svg";

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
			duration: 0.35,
			type: "spring",
		},
	},
};

interface Props {
	lastPlayed: {
		trackName: string;
		artist: string;
		albumArt: string;
		playedAt: string;
		spotifyUrl: string;
	};
}

export default function HomeView({ lastPlayed }: Props) {
	return (
		<div className="flex flex-col items-center max-w-lg mx-auto px-8 pb-32">
			<m.main
				variants={parent}
				whileInView="visible"
				initial="hidden"
				viewport={{ once: true }}
				className="flex flex-col min-h-svh justify-center py-12 text-stone-500 tracking-tight"
			>
				<SiteHeader />
				<div className="text-xl space-y-4 mt-10">
					<AnimatedText className="leading-snug">
						I am<span className="text-stone-800 font-medium">Yagnik</span>
					</AnimatedText>
					<AnimatedText className="leading-snug">
						With a keen eye for design and a passion for coding, I fuse
						aesthetics with functionality to create compelling
						<span className="inline-flex items-center text-stone-800 font-medium gap-1">
							digital experiences.
							<IconHoverMicroInteraction
								rotate={8}
								tooltip="Check my projects and UI Bits :)"
								className="bg-orange-500 [&_.icon-background]:bg-orange-500"
							>
								<CursorArrowRaysIcon className="size-[14px] text-white" />
							</IconHoverMicroInteraction>
						</span>
						As a versatile
						<span className="inline-flex items-center text-stone-800 font-medium gap-1">
							frontend developer,
							<IconHoverMicroInteraction
								rotate={-8}
								tooltip="Crafting subtle UI experiences that are both performant and intuitive."
								className="bg-purple-500 [&_.icon-background]:bg-purple-500"
							>
								<CodeBracketIcon className="size-[14px] text-white" />
							</IconHoverMicroInteraction>
						</span>
						I specialize in turning innovative ideas into interactive,
						user-friendly interfaces.
					</AnimatedText>
					<AnimatedText className="leading-snug">
						As I dive deeper into computer science, I plan to take on freelance
						work to gain real-world experience and strengthen my collaboration
						skills. I have completed few jobs on{" "}
						<span className="inline-block relative group/upwork">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.upwork.com/freelancers/~01f8c7c6337339b0ee?mp_source=share"
								className="relative text-stone-800 font-medium px-1"
							>
								upwork
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.upwork.com/freelancers/~01f8c7c6337339b0ee?mp_source=share"
								className="absolute inset-y-0 inset-x-1 bg-green-600 text-white z-2 text-center transition-[clip-path,inset-inline] [clip-path:inset(92.5%_0%_0%_0%)] group-hover/upwork:[clip-path:inset(0%_0%_0%_0%)] group-hover/upwork:inset-x-0 duration-200 ease-in-out"
							>
								upwork
							</a>
						</span>
						{/* <a
							target="_blank"
							rel="noreferrer"
							href="https://www.upwork.com/freelancers/~01f8c7c6337339b0ee?mp_source=share"
							className="relative text-stone-800 font-medium transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-green-600 before:transition-all before:duration-200 hover:text-white hover:before:h-full hover:before:z-[-1] px-1 before:w-[calc(100%-0.5rem)] before:ml-1 hover:before:w-full hover:before:ml-0"
						>
							upwork
						</a> */}
						and I&apos;m looking forward to taking on more challenging projects
						that will help me grow as a developer.
					</AnimatedText>
				</div>
				<m.div
					variants={item}
					className="flex justify-between items-center bg-stone-100 p-1 rounded-full mt-8"
				>
					<p className="pl-4 text-sm sm:text-base text-stone-600">
						Want to connect?
					</p>
					<CopyMailButton />
				</m.div>
			</m.main>
			<Separator className="mt-8" text="Extra Gists" />
			<div className="mt-8 text-stone-700 md:text-lg space-y-4">
				<p>
					creating software tools and services with{" "}
					<span className="inline-block">
						<GoIcon className="size-7 inline-block" />.
					</span>
				</p>
				<p>
					heavily interested and learning system design, low-level concepts, and
					building SaaS applications 💸.
				</p>
				<p>
					low-key interested in data analysis{" "}
					<PythonIcon className="size-4 inline-block" /> and LLMs.
				</p>
			</div>
			<Separator className="mt-8" text="About Me" />
			<div className="mt-8 text-stone-700 md:text-lg space-y-4">
				<p>
					I&apos;m a 2nd-year computer science student at KPGU. Though I mostly
					learn and grow for my career on my own, as it&apos;s a typical tier-3
					college.
				</p>
				<p>
					Besides computers, I also enjoy basketball, F1 racing, hip-hop, and
					touching grass .
				</p>
			</div>
			<Separator className="mt-8" text="Social Dump" />
			<div className="mt-8 text-stone-700 md:text-lg space-y-4">
				<SpotifyLastListened lastPlayed={lastPlayed} />
				<p>
					My imagination, my inspiration, actually it&apos;s my escape &mdash;
					<a
						className="underline decoration-wavy underline-offset-2 decoration-stone-400 lg:decoration-stone-300 hover:decoration-stone-500 transition"
						target="_blank"
						rel="noreferrer"
						href="https://pin.it/5pUJO7tB6"
					>
						<PinterestIcon className="text-[#CB1F27] inline-block size-5 mx-2" />
						<span className="text-stone-800 font-medium">Pinterest</span>
					</a>
				</p>
				<p>
					I like Bento, so here&apos;s mine &mdash;
					<a
						className="underline decoration-dotted underline-offset-4 decoration-stone-400 lg:decoration-stone-300 hover:decoration-stone-500 transition"
						target="_blank"
						rel="noreferrer"
						href="https://bento.me/yagnik"
					>
						<BentoIcon className="inline-block size-5 mx-2" />
						<span className="text-stone-800 font-medium">Bento</span>
					</a>
				</p>
			</div>
		</div>
	);
}

const SpotifyLastListened = ({ lastPlayed }: Props) => {
	const timeAgo = (() => {
		const date = new Date(lastPlayed.playedAt);
		const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

		let interval = seconds / 31536000;
		if (interval > 1) return `${Math.floor(interval)} years ago`;

		interval = seconds / 2592000;
		if (interval > 1) return `${Math.floor(interval)} months ago`;

		interval = seconds / 86400;
		if (interval > 1) return `${Math.floor(interval)} days ago`;

		interval = seconds / 3600;
		if (interval > 1) return `${Math.floor(interval)} hours ago`;

		interval = seconds / 60;
		if (interval > 1) return `${Math.floor(interval)} minutes ago`;

		return `${Math.floor(seconds)} seconds ago`;
	})();

	return (
		<p className="align-middle" suppressHydrationWarning>
			Last listened to{" "}
			<a
				className="underline decoration-dashed underline-offset-4 decoration-stone-400 lg:decoration-stone-300 hover:decoration-stone-500 transition"
				target="_blank"
				rel="noreferrer"
				href={lastPlayed.spotifyUrl}
			>
				<span className="font-medium text-stone-800">
					{lastPlayed.trackName}
				</span>
				<span className="inline-flex justify-center items-center relative align-middle">
					<Image
						width={24}
						height={24}
						src={lastPlayed.albumArt}
						alt={`${lastPlayed.trackName} cover`}
						className="size-5 rounded-full inline-block mx-2 animate-spin"
					/>
					<span className="size-1 inline-block bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full" />
				</span>
			</a>
			by {lastPlayed.artist} about {timeAgo}
		</p>
	);
};

interface IconHoverMicroInteractionProps {
	children: React.ReactNode;
	className?: string;
	tooltip?: string;
	rotate?: number;
}

const IconHoverMicroInteraction = ({
	children,
	className,
	tooltip,
	rotate,
}: IconHoverMicroInteractionProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const ref = useRef<HTMLSpanElement>(null) as React.RefObject<HTMLSpanElement>;

	useOnClickOutside(ref, () => setIsHovered(false));

	return (
		<m.span
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			ref={ref}
			style={{ rotate: `${rotate ?? 0}deg` }}
			className={cn(
				"inline-flex justify-center items-center w-fit rounded-md relative size-5",
				className,
			)}
		>
			{children}
			<AnimatePresence>
				{isHovered && (
					<m.span
						initial={{
							opacity: 0,
							rotate: -(rotate ?? 0),
							scale: 0.75,
							filter: "blur(3px)",
						}}
						animate={{ opacity: 1, rotate: 0, scale: 1, filter: "blur(0)" }}
						exit={{
							opacity: 0,
							rotate: -(rotate ?? 0),
							scale: 0.75,
							filter: "blur(3px)",
							transition: { duration: 0.1 },
						}}
						className="absolute max-w-60 w-max block left-1/2 -translate-x-1/2 -translate-y-[calc(100%+0.5rem)] top-0 origin-bottom"
					>
						<span
							className={cn(
								"block px-3 py-2 rounded-xl text-neutral-100 text-xs md:text-sm font-medium max-w-lg leading-snug icon-background",
							)}
						>
							{tooltip}
						</span>
						<span
							className={cn(
								"block absolute top-[calc(100%-0.25rem)] left-1/2 -translate-x-1/2 size-2 rotate-45 icon-background",
							)}
						/>
					</m.span>
				)}
			</AnimatePresence>
		</m.span>
	);
};
