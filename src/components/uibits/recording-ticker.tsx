"use client";
import { cn } from "@/lib/utils";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function RecordingTicker() {
	const [isRecording, setIsRecording] = useState(false);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		let interval: NodeJS.Timeout | undefined;
		if (isRecording) {
			interval = setInterval(() => {
				setSeconds((prev) => prev + 1);
			}, 1000);
		} else if (interval) {
			clearInterval(interval);
		}
		return () => {
			if (interval) clearInterval(interval);
		};
	}, [isRecording]);

	function formatTime(seconds: number) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${String(minutes).padStart(1, "0")}:${String(
			remainingSeconds,
		).padStart(2, "0")}`;
	}

	return (
		<div className="relative flex flex-col items-center w-40 aspect-square rounded-3xl bg-white py-6 justify-between border border-slate-200 shadow-lg shadow-blue-500/15 overflow-hidden">
			<span className="text-lg font-medium -mt-2">{formatTime(seconds)}</span>

			<button
				type="button"
				aria-label={isRecording ? "Stop" : "Pause"}
				className="size-10 grid place-items-center bg-[#161616] text-neutral-200 rounded-full relative top-3 z-10"
				onClick={() => setIsRecording(!isRecording)}
			>
				{isRecording ? (
					<PauseIcon className="size-4" />
				) : (
					<PlayIcon className="size-4" />
				)}
			</button>

			<div
				className="absolute inset-0 border-28 scale-112 border-[#007aff] top-[45%] h-full rounded-full z-2"
				style={{ clipPath: "inset(0% 50% 0% 0%)" }}
			/>
			<div className="flex items-center flex-col absolute left-1/2 -translate-x-1/2 top-[calc(2/5*100%-10px)] z-5">
				<div className="triangle bg-blue-500 size-2 after:size-2 before:size-2" />
				<div className="w-1 h-1 bg-[#017cff] rounded-full -top-0.25 relative" />
			</div>
			<div className="bg-white px-0.5 absolute left-1/2 top-[calc(50%-1px)] -translate-1/2 z-4">
				<div className="w-1 h-8 bg-[#017cff] rounded-full" />
			</div>
			<div
				className="absolute inset-0 h-full top-[45%] z-3"
				style={{ clipPath: "inset(0% 0% 0% 50%)" }}
			>
				{Array.from({ length: 20 }).map((_, i) => (
					<div
						key={`${i.toString()}-first-layer`}
						className={cn(
							"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-reverse",
						)}
						style={{ animationPlayState: isRecording ? "running" : "paused" }}
					>
						<div
							className={cn(
								"w-1 rounded-lg",
								i % 5 === 0 ? "h-4 bg-black" : "h-3 bg-[#d6d6d6]",
							)}
							style={{
								transform: `rotate(${i * (360 / 20)}deg) translateY(-72px)`,
							}}
						/>
					</div>
				))}
			</div>
			<div
				className="absolute inset-0 h-full top-[45%] z-3"
				style={{ clipPath: "inset(0% 50% 0% 0%)" }}
			>
				{Array.from({ length: 20 }).map((_, i) => (
					<div
						key={`${i.toString()}-second-layer`}
						className={cn(
							"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-reverse",
						)}
						style={{ animationPlayState: isRecording ? "running" : "paused" }}
					>
						<div
							className={cn(
								"w-1 rounded-lg",
								i % 5 === 0 ? "h-4 bg-white" : "h-3 bg-[#3093ff]",
							)}
							style={{
								transform: `rotate(${i * (360 / 20)}deg) translateY(-72px)`,
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
