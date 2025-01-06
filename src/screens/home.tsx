"use client";
import AnimatedText from "@/components/text-effect";
import { AnimatePresence, motion as m } from "motion/react";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import SiteHeader from "@/components/header";
import CopyMailButton from "@/components/copy-mail";

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
			animate="visible"
			initial="hidden"
			className="flex flex-col min-h-dvh pt-12 pb-24 justify-center max-w-lg mx-auto text-stone-500 px-8 tracking-tight"
		>
			<SiteHeader />
			<div className="text-xl space-y-4 mt-10">
				<AnimatedText className="leading-snug md:leading-normal">
					I am<span className="text-stone-800 font-medium">Yagnik.</span>
				</AnimatedText>
				<AnimatedText className="leading-snug md:leading-normal">
					With a keen eye for design and a passion for coding, I fuse aesthetics
					with functionality to create compelling
					<span className="inline-flex items-center text-stone-800 font-medium gap-1">
						digital experiences
						<IconHoverMicroInteraction
							rotate={8}
							bgColor="bg-blue-500"
							tooltip="Check my projects and UI Bits :)"
							className="bg-blue-500"
						>
							<PaintBrushIcon className="size-3 text-white" />
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
							<TerminalIcon className="size-3 text-white" />
						</IconHoverMicroInteraction>
					</span>
					I specialize in turning innovative ideas into interactive,
					user-friendly interfaces.
				</AnimatedText>
				<AnimatedText className="leading-snug md:leading-normal">
					I&apos;m focusing on low-level programming with
					<span className="inline-flex items-center text-stone-800 font-medium gap-1">
						Go
						<IconHoverMicroInteraction
							rotate={8}
							bgColor="bg-sky-600"
							tooltip="Recently enjoying writing code in Go. It's interestingly simple yet powerful."
							className="bg-sky-600"
						>
							<TerminalIcon className="size-3 text-white" />
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
				<p className="pl-4 text-sm sm:text-base">
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
			className={cn("inline-block p-1 w-fit rounded-md relative", className)}
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
								"block px-3 py-2 rounded-xl text-neutral-100 text-xs md:text-sm font-medium max-w-lg",
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
