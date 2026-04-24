"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import { allGalleryImages } from "@/lib/gallery-images";
import { motion, stagger, useAnimate } from "motion/react";

import Floating, {
	FloatingElement,
} from "@/components/fancy/image/parallax-floating";

const MImage = motion.create(Image);

type FloatingItem = {
	depth: number;
	style: {
		top: string;
		left: string;
		width: string;
		height: string;
	};
};

const clamp = (value: number, min: number, max: number) =>
	Math.min(Math.max(value, min), max);

const lerp = (start: number, end: number, t: number) =>
	start + (end - start) * t;

const getZoneCount = (count: number, ratio: number) =>
	Math.max(1, Math.round(count * ratio));

const createMagazineWallLayout = (
	index: number,
	count: number,
	aspectRatio: number,
): FloatingItem => {
	const leftCount = getZoneCount(count, 0.29);
	const rightCount = getZoneCount(count, 0.29);
	const topCount = getZoneCount(count, 0.21);
	const used = leftCount + rightCount + topCount;
	const bottomCount = Math.max(1, count - used);

	let zone: "left" | "right" | "top" | "bottom";
	let zoneIndex = 0;
	let zoneCount = 1;

	if (index < leftCount) {
		zone = "left";
		zoneIndex = index;
		zoneCount = leftCount;
	} else if (index < leftCount + rightCount) {
		zone = "right";
		zoneIndex = index - leftCount;
		zoneCount = rightCount;
	} else if (index < leftCount + rightCount + topCount) {
		zone = "top";
		zoneIndex = index - leftCount - rightCount;
		zoneCount = topCount;
	} else {
		zone = "bottom";
		zoneIndex = index - leftCount - rightCount - topCount;
		zoneCount = bottomCount;
	}

	const t = zoneCount === 1 ? 0.5 : zoneIndex / (zoneCount - 1);
	const band = zoneIndex % 3;
	const collageOffset = [-3, 0, 3][band];

	const densityOffset = clamp((16 - count) * 2, -6, 12);
	const baseWidth = clamp(
		aspectRatio > 1.2
			? 104 + densityOffset
			: aspectRatio < 0.85
				? 88 + densityOffset
				: 96 + densityOffset,
		100,
		200,
	);

	const width = `clamp(${baseWidth}px, ${aspectRatio > 1.2 ? 12 : 11}vw, ${baseWidth + 56}px)`;
	const height = `calc(${width} / ${aspectRatio.toFixed(4)})`;
	const depth = 0.9 + ((index % 5) + 1) * 0.2;

	let top = 0;
	let left = 0;

	if (zone === "left") {
		left = 6 + band * 4 + (zoneIndex % 2 === 0 ? 0 : 2);
		top = lerp(10, 68, t) + collageOffset;
	} else if (zone === "right") {
		left = 72 - band * 4 - (zoneIndex % 2 === 0 ? 0 : 2);
		top = lerp(10, 68, t) - collageOffset;
	} else if (zone === "top") {
		left = lerp(24, 62, t) + collageOffset;
		top = 6 + band * 4;
	} else {
		left = lerp(22, 64, t) - collageOffset;
		top = 70 - band * 4;
	}

	return {
		depth,
		style: {
			top: `${clamp(top, 2, 84)}%`,
			left: `${clamp(left, 2, 84)}%`,
			width,
			height,
		},
	};
};

const GalleryView = () => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate(
			"img",
			{ opacity: [0, 1] },
			{ duration: 0.45, delay: stagger(0.1) },
		);
	}, [animate]);

	const floatingItems = useMemo(
		() =>
			allGalleryImages.map((image, index) =>
				createMagazineWallLayout(
					index,
					allGalleryImages.length,
					image.width / image.height,
				),
			),
		[],
	);

	return (
		<div
			className="relative flex h-dvh w-dvw items-center justify-center overflow-hidden bg-background"
			ref={scope}
		>
			<motion.div
				className="z-50 flex flex-col items-center space-y-4 px-6 text-center"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.88, delay: 1.2 }}
			>
				<p className="z-50 font-serif text-muted-foreground font-semibold text-5xl md:text-7xl">
					color clicks.
				</p>
			</motion.div>

			<Floating
				sensitivity={-15}
				easingFactor={0.05}
				className="overflow-hidden"
			>
				{allGalleryImages.map((image, index) => {
					const item = floatingItems[index];

					return (
						<FloatingElement
							key={image.src}
							depth={item.depth}
							style={item.style}
						>
							<MImage
								loading="eager"
								initial={{ opacity: 0 }}
								src={image}
								alt={`Gallery ${index + 1}`}
								className="h-full w-full rounded-md object-cover shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:scale-[1.03]"
								draggable={false}
								unselectable="on"
							/>
						</FloatingElement>
					);
				})}
			</Floating>
		</div>
	);
};

export default GalleryView;
