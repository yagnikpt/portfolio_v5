"use client";
import MusicCover from "@/assets/codebits/music_cover.webp";
import { cn } from "@/lib/utils";
import { motion as m } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MImage = m.create(Image);

const SONG = {
	name: "Grapejuice",
	artist: "Harry Styles",
	length: "3:12",
	seconds: 192,
};

export default function MusicPlayer() {
	const [paused, setPaused] = useState(false);
	const coverRef = useRef<HTMLButtonElement>(null);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [totalSeconds, setTotalSeconds] = useState(0);

	useEffect(() => {
		const int = setInterval(() => {
			if (paused) return;
			setSeconds((prev) => {
				if (prev >= 59) {
					setMinutes((m) => m + 1);
					return 0;
				}
				return prev + 1;
			});
			setTotalSeconds((prev) => prev + 1);
			if (totalSeconds >= SONG.seconds) {
				setTotalSeconds(0);
				setMinutes(0);
				setSeconds(0);
			}
		}, 1000);

		return () => {
			clearInterval(int);
		};
	}, [totalSeconds, paused]);

	useEffect(() => {
		const element = coverRef.current;

		if (element) {
			if (paused) {
				element.style.animationPlayState = "paused";
				const computedStyle = window.getComputedStyle(element);
				const currentTransform = computedStyle.transform;
				element.style.transform = currentTransform;
				element.classList.remove("animate-spin-slow");
				requestAnimationFrame(() => {
					element.style.transform = "rotate(0deg)";
				});
			} else {
				element.classList.add("animate-spin-slow");
				element.style.animationPlayState = "running";
				element.style.transform = "";
			}
		}
	}, [paused]);

	return (
		<div className="w-60 aspect-square bg-stone-200 rounded-4xl flex items-center flex-col p-4 relative overflow-hidden shadow-xl">
			<m.button
				className={cn(
					"absolute grid place-items-center w-full h-full aspect-square top-0 -translate-y-[55%] animate-spin-slow cursor-pointer transition-[transform,translate,scale] duration-400 z-2 ease-out peer",
					paused
						? "translate-y-0 rounded-4xl scale-100"
						: "-translate-y-[55%] hover:-translate-y-[50%] rounded-full scale-105",
				)}
				onClick={() => setPaused((p) => !p)}
				ref={coverRef}
			>
				<MImage
					className="w-full h-full aspect-square absolute z-0"
					src={MusicCover}
					alt="Harry Styles"
					style={{ borderRadius: 150 }}
					animate={{ borderRadius: paused ? 32 : 150 }}
					transition={{ duration: 0.3, type: "spring", bounce: 0 }}
				/>
				<svg
					width="164"
					height="164"
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
					className={cn(
						"z-1 transition duration-300",
						paused ? "opacity-0" : "opacity-100",
					)}
				>
					<circle
						cx="50"
						cy="50"
						r="15"
						fill="#CCC"
						stroke="#666"
						strokeWidth="2"
					/>

					<circle cx="50" cy="50" r="5" fill="#e7e5e4" />
				</svg>
			</m.button>
			<div
				style={{ opacity: paused ? 0 : 1 }}
				className={cn(
					"absolute inset-0 shadow-2xl rounded-full transition -translate-y-[55%] peer-hover:-translate-y-[50%] pointer-events-none",
				)}
			/>
			<div className="mt-auto pb-1 flex flex-col items-center">
				<p className="text-stone-600 mt-4 text-sm">Harry Styles</p>
				<p className="text-stone-900 mt-1 font-semibold">Grapejuice</p>
				<div className="w-10 h-1 bg-stone-400 rounded-full mt-1 relative overflow-hidden">
					<div
						style={{ width: `${(totalSeconds / SONG.seconds) * 100}%` }}
						className="absolute left-0 top-0 h-full bg-stone-600"
					/>
				</div>
				<p className="text-stone-600 mt-1 text-sm">
					<span className="font-medium text-stone-800">
						{minutes}
						<span className="mx-0.5">:</span>
						{seconds < 10 ? "0" : ""}
						{seconds}
					</span>
					<span className="mx-1">/</span>3:12
				</p>
			</div>
		</div>
	);
}
