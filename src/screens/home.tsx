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

export default function HomeView() {
	return (
		<m.main
			variants={parent}
			whileInView="visible"
			initial="hidden"
			className="flex flex-col min-h-dvh pt-12 pb-24 justify-center max-w-lg mx-auto text-stone-500 px-8 tracking-tight"
		>
			<SiteHeader />
			<div className="text-xl space-y-4 mt-10">
				<AnimatedText className="leading-snug">
					I am<span className="text-stone-800 font-medium">Yagnik.</span>
				</AnimatedText>
				<AnimatedText className="leading-snug">
					With a keen eye for design and a passion for coding, I fuse aesthetics
					with functionality to create compelling
					<span className="inline-flex items-center text-stone-800 font-medium gap-1">
						digital experiences
						<IconHoverMicroInteraction
							rotate={8}
							bgColor="bg-orange-500"
							tooltip="Check my projects and UI Bits :)"
							className="bg-orange-500"
						>
							<CursorArrowRaysIcon className="size-[14px] text-white" />
						</IconHoverMicroInteraction>
						.
					</span>
					As a versatile
					<span className="inline-flex items-center text-stone-800 font-medium gap-1">
						frontend developer,
						<IconHoverMicroInteraction
							rotate={-8}
							bgColor="bg-purple-500"
							tooltip="Crafting subtle UI experiences that are both performant and intuitive."
							className="bg-purple-500"
						>
							<CodeBracketIcon className="size-[14px] text-white" />
						</IconHoverMicroInteraction>
					</span>
					I specialize in turning innovative ideas into interactive,
					user-friendly interfaces.
				</AnimatedText>
				<AnimatedText className="leading-snug">
					I&apos;m focusing on low-level programming with
					<span className="inline-flex items-center text-stone-800 font-medium gap-1">
						Go
						<IconHoverMicroInteraction
							rotate={8}
							bgColor="bg-sky-600"
							tooltip="Recently enjoying writing code in Go. It's interestingly simple yet powerful."
							className="bg-sky-600"
						>
							<TerminalIcon className="size-[14px] text-white" />
						</IconHoverMicroInteraction>
					</span>
					, which boosts my software skills. I&apos;m also diving into
					networking, learning about protocols and data transmission, to become
					an elite computer engineer skilled in both software and network
					architecture.
				</AnimatedText>
			</div>
			<m.div
				variants={item}
				className="flex justify-between items-center bg-stone-100 p-1 rounded-full mt-8"
			>
				<p className="pl-4 text-sm sm:text-base text-stone-600">
					Would you like to get in touch?
				</p>
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
	const ref = useRef<HTMLSpanElement>(null) as React.RefObject<HTMLSpanElement>;

	useOnClickOutside(ref, () => setIsHovered(false));

	return (
		<m.span
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			onClick={() => setIsHovered(true)}
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
						}}
						animate={{ opacity: 1, rotate: 0, scale: 1 }}
						exit={{
							opacity: 0,
							rotate: -(rotate ?? 0),
							scale: 0.75,
							transition: { duration: 0.1 },
						}}
						className="absolute max-w-60 w-max block left-1/2 -translate-x-1/2 -translate-y-[calc(100%+0.5rem)] top-0 origin-bottom"
					>
						<span
							className={cn(
								"block px-3 py-2 rounded-xl text-neutral-100 text-xs md:text-sm font-medium max-w-lg leading-snug",
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
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="currentColor"
		viewBox="0 0 256 256"
		{...props}
	>
		<title>Terminal</title>
		<path d="M117.31,134l-72,64a8,8,0,1,1-10.63-12L100,128,34.69,70A8,8,0,1,1,45.32,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z" />
	</svg>
);
