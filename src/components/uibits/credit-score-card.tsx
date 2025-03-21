import { StarIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { SparklesIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { Shuffle } from "lucide-react";
import GojoImage from "@/assets/codebits/voicechat/gojo.webp";
import GetoImage from "@/assets/codebits/voicechat/geto.webp";
import TojiImage from "@/assets/codebits/voicechat/toji.webp";
import FushiguroImage from "@/assets/codebits/voicechat/fushiguro.webp";
import Image from "next/image";

const constpeps = [
	{
		name: "Gojo",
		image: GojoImage,
		speaking: false,
	},
	{
		name: "Geto",
		image: GetoImage,
		speaking: false,
	},
	{
		name: "Toji",
		image: TojiImage,
		speaking: true,
	},
	{
		name: "Megumi",
		image: FushiguroImage,
		speaking: true,
	},
];

export default function CreditScoreCard() {
	return (
		<div className="max-w-2xl w-full">
			<div className="flex items-center justify-evenly flex-wrap mb-2 rounded-3xl bg-green-700/10 p-3 md:p-1.5 md:pr-3 gap-2 text-xs text-gray-600 w-fit">
				<div className="flex gap-1 items-center">
					<div className="flex -space-x-2">
						{constpeps.map((pep) => (
							<Image
								key={pep.name}
								src={pep.image}
								alt={pep.name}
								className="size-6 md:size-7 rounded-full border-1 border-white"
							/>
						))}
					</div>
					<p className="font-semibold">20k+</p>
				</div>
				<p className="text-gray-400 max-sm:hidden">|</p>
				<p>Trusted by 58,980+ users</p>
				<p className="text-gray-400 max-sm:hidden">|</p>
				<div className="flex gap-1 items-center">
					<div className="flex gap-0.25 items-center">
						{Array.from({ length: 5 }).map((_, i) => (
							<StarIcon
								key={i.toString()}
								className="size-3.5 text-yellow-500"
							/>
						))}
					</div>
					<p className="font-semibold">4.98/5</p>
				</div>
			</div>
			<div className="space-y-2 rounded-3xl bg-green-700/10 p-2">
				<div className="flex flex-col md:flex-row justify-between md:items-center p-1.5 px-2 gap-1">
					<p className="text-xs md:text-sm text-gray-800 flex items-center gap-1">
						<ArrowTrendingUpIcon className="size-4 mr-1 shrink-0" />
						<span>
							Average improvement of{" "}
							<span className="font-medium">+148 points</span> in 90 Days
						</span>
					</p>
					<p className="text-xs text-gray-600 flex items-center gap-1">
						<SparklesIcon className="size-4 shrink-0 mr-1" />
						<span>
							Powered by <span className="font-semibold">GPT-4o</span>
						</span>
					</p>
				</div>
				<div className="bg-white p-6 rounded-2xl shadow-xl shadow-green-800/30">
					<div className="flex items-end justify-between mb-2">
						<p className="text-sm font-medium text-gray-800">
							Credit Score Estimator
						</p>
						<button
							type="button"
							className="relative flex items-center gap-1.5 ring-2 ring-gray-300 px-2.5 py-1.5 rounded-lg shadow-md"
						>
							<Shuffle className="size-3.5 text-gray-500" />
							<span className="text-sm font-medium">Calculate</span>
						</button>
					</div>
					<div className="relative flex items-center mb-10">
						<div className="absolute h-3/5 w-0.75 bg-green-600/85 rounded-tr-full rounded-br-full" />
						<input
							type="number"
							inputMode="numeric"
							placeholder="Enter your credit score..."
							className="w-full py-2 px-3 text-2xl rounded-lg focus:outline-0 focus-visible:ring-2 ring-green-600/85 transition not-placeholder-shown:ring-2"
						/>
					</div>
					<div className="flex justify-between items-center">
						<p className="flex items-center gap-2 text-xs text-gray-500 mt-4">
							<InformationCircleIcon className="size-4 shrink-0" />
							<span>
								Scores between <span className="font-bold">900-1500</span> mean
								that your marketing assets are so effective.
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
