"use client";
import { motion as m, MotionConfig, stagger } from "motion/react";
import { calculateTimeAgo } from "@/lib/utils";
import { useState } from "react";
import SiteHeader from "@/components/header";
import CopyMailButton from "@/components/micro/copy-mail";
import Separator from "@/components/separator";
import Image from "next/image";
import PinterestIcon from "@/assets/icons/social/pinterest.svg";
import DinqIcon from "@/assets/icons/social/dinq.svg";
import GoIcon from "@/assets/icons/skill/golang.svg";
import PythonIcon from "@/assets/icons/skill/python.svg";
import NextIcon from "@/assets/icons/skill/nextjs.svg";
import SvelteIcon from "@/assets/icons/skill/svelte.svg";
import { CogIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import { ActivityCalendar } from "react-activity-calendar";
import { useMediaQuery } from "usehooks-ts";
import IconTooltipPopover from "@/components/micro/icon-tooltip-popover";
import Link from "next/link";

const parent = {
	hidden: {},
	visible: {
		transition: {
			delayChildren: stagger(0.2),
		},
	},
};

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

interface Props {
	lastPlayed: {
		trackName: string;
		artist: string;
		albumArt: string;
		playedAt: string;
		spotifyUrl: string;
	};
	contributions: {
		date: string;
		count: number;
		level: number;
	}[];
}

const gitHubTheme = {
	dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
	light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

export default function HomeView({ lastPlayed, contributions }: Props) {
	const isMobile = useMediaQuery("(max-width: 640px)", {
		initializeWithValue: false,
	});
	return (
		<MotionConfig reducedMotion="user">
			<div className="flex flex-col items-center max-w-lg mx-auto px-8 pb-32">
				<m.main
					variants={parent}
					whileInView="visible"
					initial="hidden"
					viewport={{ once: true }}
					className="flex flex-col min-h-dvh justify-center py-12 text-stone-500 tracking-tight"
				>
					<SiteHeader />
					<m.div className="text-lg space-y-4 mt-10">
						<m.div
							id="first-para"
							variants={item}
							className="leading-snug hover:text-stone-900 transition-colors duration-200 overflow-visible"
							onAnimationComplete={(definition) => {
								if (definition === "visible") {
									const el = document.querySelector(
										"#first-para",
									) as HTMLElement;
									el.style.maskImage = "none";
								}
							}}
						>
							Hi, I’m Yagnik — a computer science student learning how to{" "}
							<span className="inline-flex items-center text-stone-800 font-medium gap-1">
								build systems
								<IconTooltipPopover
									rotate={-8}
									tooltip="I thrive on understanding how things work at a deeper level."
									className="bg-blue-500 [&_.icon-background]:bg-blue-500"
								>
									<CogIcon className="size-4 text-white" />
								</IconTooltipPopover>
							</span>{" "}
							that are both efficient and elegant. I enjoy exploring the
							intersection of backend engineering, DevOps, and automation.
						</m.div>
						<m.div
							id="second-para"
							variants={item}
							className="leading-snug hover:text-stone-900 transition-colors duration-200"
							onAnimationComplete={(definition) => {
								if (definition === "visible") {
									const el = document.querySelector(
										"#second-para",
									) as HTMLElement;
									el.style.maskImage = "none";
								}
							}}
						>
							Beyond backend systems, I have a keen eye for great design and
							occasionally enjoy replicating{" "}
							<span className="inline-flex items-center text-stone-800 font-medium gap-1">
								beautiful UIs
								<IconTooltipPopover
									rotate={8}
									tooltip="click the flask icon in the dock :)"
									className="bg-orange-500 [&_.icon-background]:bg-orange-500"
								>
									<CursorArrowRaysIcon className="size-4 text-white" />
								</IconTooltipPopover>
							</span>{" "}
							through code.
						</m.div>
						<m.div
							id="third-para"
							variants={item}
							className="leading-snug hover:text-stone-900 transition-colors duration-200"
							onAnimationComplete={(definition) => {
								if (definition === "visible") {
									const el = document.querySelector(
										"#third-para",
									) as HTMLElement;
									el.style.maskImage = "none";
								}
							}}
						>
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
									className="absolute inset-y-0 inset-x-1 bg-green-600 text-white z-2 text-center transition-[clip-path,inset-inline] [clip-path:inset(93%_0%_0%_0%)] group-hover/upwork:[clip-path:inset(0%_0%_0%_0%)] group-hover/upwork:inset-x-0 duration-200 ease-in-out"
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
									className="absolute inset-y-0 inset-x-1 bg-[#F2C94B] text-black z-2 text-center transition-[clip-path,inset-inline] [clip-path:inset(93%_0%_0%_0%)] group-hover/contra:[clip-path:inset(0%_0%_0%_0%)] group-hover/contra:inset-x-0 duration-200 ease-in-out"
								>
									contra.
								</a>
							</span>
							{`If you have a project in mind, I’d love to hear about
						it.`}
						</m.div>
					</m.div>
					<m.div variants={item} className="mt-8 w-full">
						<ActivityCalendar
							theme={gitHubTheme}
							colorScheme="light"
							showColorLegend={false}
							showMonthLabels={false}
							showTotalCount={false}
							blockSize={10}
							data={isMobile ? contributions.slice(49) : contributions}
						/>
					</m.div>
					<m.div
						variants={item}
						className="flex justify-between items-center bg-[#ececee] p-1 rounded-full mt-8"
					>
						<p className="pl-4 text-sm text-stone-600 font-medium">
							Want to connect?
						</p>
						<CopyMailButton />
					</m.div>
				</m.main>
				<Separator className="mt-8" text="Extra Gists" />
				<div className="mt-8 text-stone-700 text-sm md:text-base space-y-4 text-pretty">
					<p>
						Enjoy creating personal software tools with{" "}
						<span className="inline-block">
							<GoIcon className="size-7 inline-block" />
							<span className="sr-only">Go</span>
						</span>
						{" and "}
						<span className="inline-block">
							<PythonIcon className="size-4 inline-block" />
							<span className="sr-only">Python</span>
						</span>
						.
					</p>
					<p>
						Awesome with <NextIcon className="size-4 inline-block" />
						nextjs, <SvelteIcon className="size-4 inline-block" />
						svelte, and other{" "}
						<span className="inline-block relative group/skills">
							<Link
								href="/skills"
								className="relative text-stone-800 font-medium px-1"
							>
								frameworks & tools
							</Link>
							<Link
								href="/skills"
								className="absolute inset-y-0 inset-x-1 bg-slate-800 text-background z-2 text-center transition-[clip-path,inset-inline] [clip-path:inset(93%_0%_0%_0%)] group-hover/skills:[clip-path:inset(0%_0%_0%_0%)] group-hover/skills:inset-x-0 duration-200 ease-in-out"
							>
								frameworks & tools
							</Link>
						</span>
						.
					</p>
					<p>Low-key interested in security.</p>
				</div>
				<Separator className="mt-8" text="About Me" />
				<div className="mt-8 text-stone-700 text-sm md:text-base space-y-4 text-pretty">
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
				<div className="mt-8 text-stone-700 text-sm md:text-base space-y-4">
					<SpotifyLastListened lastPlayed={lastPlayed} />
					<p>
						My imagination, my inspiration, actually it&apos;s my escape &mdash;{" "}
						<a
							className="underline decoration-wavy underline-offset-2 decoration-stone-400 lg:decoration-stone-300 hover:decoration-[#CB1F27] transition"
							target="_blank"
							rel="noreferrer"
							href="https://pin.it/5pUJO7tB6"
						>
							<PinterestIcon className="text-[#CB1F27] inline-block size-5 mx-2" />
							<span className="text-stone-800 font-medium">Pinterest</span>
						</a>
					</p>
					<p>
						I liked Bento, but it shutdown so here&apos;s something similer
						&mdash;{" "}
						<a
							className="underline decoration-dotted underline-offset-4 decoration-stone-400 lg:decoration-stone-300 hover:decoration-neutral-950 transition"
							target="_blank"
							rel="noreferrer"
							href="https://dinq.me/yagnik"
						>
							<DinqIcon className="inline-block size-4 mx-2" />
							<span className="text-stone-800 font-medium">DINQ</span>
						</a>
					</p>
				</div>
			</div>
		</MotionConfig>
	);
}

const SpotifyLastListened = ({ lastPlayed }: Omit<Props, "contributions">) => {
	const [timeAgo] = useState(() => calculateTimeAgo(lastPlayed.playedAt));

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
			by {lastPlayed.artist} about{" "}
			<span suppressHydrationWarning>{timeAgo}</span>.
		</p>
	);
};
