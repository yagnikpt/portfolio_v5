"use client";
import AnimatedText from "@/components/text-effect";
import { AnimatePresence, motion as m, MotionConfig } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import SiteHeader from "@/components/header";
import CopyMailButton from "@/components/copy-mail";
import Separator from "@/components/separator";
import Image from "next/image";
import PinterestIcon from "@/assets/icons/social/pinterest.svg";
import BentoIcon from "@/assets/icons/social/bento.svg";
import GoIcon from "@/assets/icons/skill/golang.svg";
import { CogIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";

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
		<MotionConfig reducedMotion="user">
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
						<AnimatedText className="leading-snug hover:text-stone-900 transition-colors duration-200">
							{/* Hey, I'm Yagnik Patel. */}
							Hi, I’m Yagnik — a computer science student learning how to{" "}
							<span className="inline-flex items-center text-stone-800 font-medium gap-1">
								building systems
								<IconHoverMicroInteraction
									rotate={8}
									tooltip="I thrive on understanding how things work at a deeper level."
									className="bg-blue-500 [&_.icon-background]:bg-blue-500"
								>
									<CogIcon className="size-4 text-white" />
								</IconHoverMicroInteraction>
							</span>{" "}
							that are both efficient and elegant. I enjoy exploring the
							intersection of backend engineering, DevOps, and automation.
							{/* I am<span className="text-stone-800 font-medium">Yagnik</span> */}
						</AnimatedText>
						<AnimatedText className="leading-snug hover:text-stone-900 transition-colors duration-200">
							Beyond backend systems, I have a keen eye for great design and
							occasionally enjoy replicating{" "}
							<span className="inline-flex items-center text-stone-800 font-medium gap-1">
								beautiful UIs
								<IconHoverMicroInteraction
									rotate={8}
									tooltip="click the flask icon in the dock :)"
									className="bg-orange-500 [&_.icon-background]:bg-orange-500"
								>
									<CursorArrowRaysIcon className="size-4 text-white" />
								</IconHoverMicroInteraction>
							</span>{" "}
							through code.
						</AnimatedText>
						<AnimatedText className="leading-snug hover:text-stone-900 transition-colors duration-200">
							I’m also open to freelance work and love collaborating on
							meaningful projects. I offer my services on{" "}
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
							</span>{" "}
							and{" "}
							<span className="inline-block relative group/contra">
								<a
									target="_blank"
									rel="noreferrer"
									href="https://contra.com/yagnikpt_xtet44je?referralExperimentNid=SOCIAL_REFERRAL_PROGRAM&referrerUsername=yagnikpt_xtet44je"
									className="relative text-stone-800 font-medium px-1"
								>
									contra.
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									href="https://contra.com/yagnikpt_xtet44je?referralExperimentNid=SOCIAL_REFERRAL_PROGRAM&referrerUsername=yagnikpt_xtet44je"
									className="absolute inset-y-0 inset-x-1 bg-[#F2C94B] text-black z-2 text-center transition-[clip-path,inset-inline] [clip-path:inset(92.5%_0%_0%_0%)] group-hover/contra:[clip-path:inset(0%_0%_0%_0%)] group-hover/contra:inset-x-0 duration-200 ease-in-out"
								>
									contra.
								</a>
							</span>
							{`If you have a project in mind, I’d love to hear about
						it.`}
						</AnimatedText>
					</div>
					<m.div
						variants={item}
						transition={{ duration: 0.35, type: "spring" }}
						className="flex justify-between items-center bg-[#ececee] p-1 rounded-full mt-8"
					>
						<p className="pl-4 text-sm sm:text-base text-stone-600 font-medium">
							Want to connect?
						</p>
						<CopyMailButton />
					</m.div>
				</m.main>
				<Separator className="mt-8" text="Extra Gists" />
				<div className="mt-8 text-stone-700 md:text-lg space-y-4">
					<p>
						enjoy creating software tools and services with{" "}
						<span className="inline-block">
							<GoIcon className="size-7 inline-block" />
							<span className="sr-only">Go</span>
						</span>
						.
					</p>
					<p>awesome with nextjs, svelte, and other frameworks and tools.</p>
					<p>low-key interested in DL and LLMs.</p>
				</div>
				<Separator className="mt-8" text="About Me" />
				<div className="mt-8 text-stone-700 md:text-lg space-y-4">
					<p>
						I&apos;m a 3rd-year computer science student at KPGU. Though I
						mostly learn and grow for my career on my own, as it&apos;s a
						typical tier-3 college.
					</p>
					<p>
						Besides computers, I also enjoy basketball, F1 racing, hip-hop
						music, and touching grass.
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
		</MotionConfig>
	);
}

const SpotifyLastListened = ({ lastPlayed }: Props) => {
	const timeAgo = (() => {
		const date = new Date(lastPlayed.playedAt);
		const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

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
						className="size-5 rounded-full inline-block mx-2 animate-spin duration-3000"
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

	return (
		<m.span
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
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
						animate={{
							opacity: 1,
							rotate: 0,
							scale: 1,
							filter: "blur(0)",
						}}
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
