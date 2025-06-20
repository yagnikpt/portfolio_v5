import DynamicButton from "@/components/uibits/dynamic-button";
import GlassForm from "@/components/uibits/glass-form";
import VoiceChatDisclosure from "@/components/uibits/voice-chat-disclosure";
import ChipInteraction from "@/components/uibits/chip-interaction";
import Widgets from "@/components/uibits/widget-slider";
import DynamicActionBar from "@/components/uibits/dynamic-action-bar";
import SlickDropdown from "@/components/uibits/slick-dropdown";
import CreditScoreCard from "@/components/uibits/credit-score-card";
import RecordingTicker from "@/components/uibits/recording-ticker";
import MusicPlayer from "@/components/uibits/music-player";

export default function UIBitsView() {
	return (
		<div>
			<div className="px-4 lg:px-8 max-w-lg mx-auto">
				<p className="text-xl max-w-lg w-full mx-auto mb-10 tracking-tight mt-14">
					Here are some little pieces of UI that i cooked.
				</p>
			</div>
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-12">
				<div className="min-h-[30rem] p-4 lg:p-10 overflow-hidden bg-neutral-100 rounded-xl border-2 border-neutral-200 grid place-content-center relative">
					<VoiceChatDisclosure />
				</div>

				<div className="min-h-[30rem] overflow-hidden bg-neutral-50 rounded-xl border-2 border-neutral-200 grid place-items-center relative">
					<SlickDropdown />
				</div>

				<div className="min-h-[30rem] overflow-hidden bg-cyan-50 rounded-xl border-2 border-cyan-200 grid place-items-center relative">
					<RecordingTicker />
				</div>

				<div className="min-h-[30rem] overflow-hidden bg-stone-100 rounded-xl border-2 border-stone-200 grid place-items-center relative">
					<MusicPlayer />
				</div>

				<div className="min-h-[30rem] overflow-hidden bg-[#faf4ed] rounded-xl border-2 border-[#ebbcba]/30 grid justify-center items-end py-16 relative">
					<DynamicActionBar />
				</div>

				<div className="min-h-[30rem] overflow-hidden bg-neutral-50 rounded-xl border-2 border-neutral-200 grid place-items-center relative">
					<span className="absolute top-0 left-0 text-xs font-semibold text-neutral-800 bg-neutral-200 rounded-ee-xl py-2 px-4">
						Swipe or Drag
					</span>
					<Widgets />
				</div>

				<div className="min-h-[30rem] md:p-10 overflow-hidden bg-indigo-50 rounded-xl border-2 border-indigo-200 grid place-items-center relative">
					<DynamicButton />
				</div>

				<div className="min-h-[30rem] p-10 overflow-hidden bg-purple-50 rounded-xl border-2 border-purple-200 grid place-items-center relative">
					<ChipInteraction />
				</div>

				<div
					style={{
						backgroundImage: "url(/card-bg.webp)",
						backgroundSize: "cover",
						backgroundPosition: "100% 0%",
						backgroundRepeat: "no-repeat",
					}}
					className="bg-[#f8f8f8] min-h-120 rounded-xl border-2 border-neutral-300 grid place-items-center lg:col-span-2 relative px-4"
				>
					<CreditScoreCard />
				</div>

				<div className="min-h-dvh overflow-hidden bg-[#020202] rounded-xl border-2 border-neutral-800 grid place-items-center lg:col-span-2 relative">
					<GlassForm />
				</div>
			</section>
		</div>
	);
}
