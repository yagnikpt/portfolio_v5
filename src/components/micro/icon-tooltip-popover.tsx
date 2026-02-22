import { useRef, useState } from "react";
import { motion as m, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "usehooks-ts";

interface IconTooltipPopupProps {
	children: React.ReactNode;
	className?: string;
	tooltip?: string;
	rotate?: number;
}

const IconTooltipPopup = ({
	children,
	className,
	tooltip,
	rotate,
}: IconTooltipPopupProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const ref = useRef(null);

	function open() {
		timeoutRef.current = setTimeout(() => {
			setIsHovered(true);
		}, 250);
	}

	function close() {
		clearTimeout(timeoutRef.current || undefined);
		setIsHovered(false);
	}

	// @ts-expect-error
	useOnClickOutside(ref, close);

	return (
		<m.span
			onHoverStart={open}
			onHoverEnd={close}
			onClick={open}
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

export default IconTooltipPopup;
