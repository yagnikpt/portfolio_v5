import DynamicButton from "@/components/uibits/dynamic-button";
import GlassForm from "@/components/uibits/glass-form";
import VoiceChatDisclosure from "@/components/uibits/voice-chat-disclosure";
import ChipInteraction from "@/components/uibits/chip-interaction";
import Widgets from "@/components/uibits/widget-slider";
import DynamicActionBar from "@/components/uibits/dynamic-action-bar";
import SlickDropdown from "@/components/uibits/slick-dropdown";

export default function UIBitsView() {
	return (
		<div>
			<div className="px-4 lg:px-8 max-w-lg mx-auto">
				<p className="text-xl max-w-lg w-full mx-auto mb-10 tracking-tight mt-14">
					Here are some little pieces of UI I like to show off.
				</p>
			</div>
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-12">
				<div className="min-h-[30rem] p-4 lg:p-10 overflow-hidden bg-neutral-100 rounded-xl border-2 border-neutral-200 grid place-content-center relative">
					<span className="absolute top-0 right-0 text-xs font-semibold text-neutral-800 bg-neutral-200 rounded-es-xl py-2 px-4">
						Tool:{" "}
						<a
							className="underline inline-block"
							href="https://motion.dev"
							target="_blank"
							rel="noreferrer"
						>
							Motion
						</a>
					</span>
					<VoiceChatDisclosure />
				</div>
				<div className="min-h-[30rem] overflow-hidden bg-neutral-50 rounded-xl border-2 border-neutral-200 grid place-items-center relative">
					<span className="absolute top-0 right-0 text-xs font-semibold text-neutral-800 bg-neutral-200 rounded-es-xl py-2 px-4">
						Tool:{" "}
						<a
							className="underline inline-block"
							href="https://motion.dev"
							target="_blank"
							rel="noreferrer"
						>
							Motion
						</a>
					</span>
					<span className="absolute top-0 left-0 text-xs font-semibold text-neutral-800 bg-neutral-200 rounded-ee-xl py-2 px-4">
						Work in progress
					</span>
					<SlickDropdown />
				</div>
				<div className="min-h-[30rem] overflow-hidden bg-[#faf4ed] rounded-xl border-2 border-[#ebbcba]/30 grid justify-center items-end py-16 relative">
					<span className="absolute top-0 right-0 text-xs font-semibold text-neutral-800 bg-[#ebbcba]/30 rounded-es-xl py-2 px-4">
						Tool:{" "}
						<a
							className="underline inline-block"
							href="https://motion.dev"
							target="_blank"
							rel="noreferrer"
						>
							Motion
						</a>
					</span>
					<DynamicActionBar />
				</div>
				<div className="min-h-[30rem] overflow-hidden bg-neutral-50 rounded-xl border-2 border-neutral-200 grid place-items-center relative">
					<span className="absolute top-0 right-0 text-xs font-semibold text-neutral-800 bg-neutral-200 rounded-es-xl py-2 px-4">
						Tool:{" "}
						<a
							className="underline inline-block"
							href="https://motion.dev"
							target="_blank"
							rel="noreferrer"
						>
							Motion
						</a>
					</span>
					<span className="absolute top-0 left-0 text-xs font-semibold text-neutral-800 bg-neutral-200 rounded-ee-xl py-2 px-4">
						Swipe or Drag
					</span>
					<Widgets />
				</div>
				<div className="min-h-[30rem] md:p-10 overflow-hidden bg-indigo-50 rounded-xl border-2 border-indigo-200 grid place-items-center relative">
					<span className="absolute top-0 right-0 text-xs font-semibold text-neutral-800 bg-indigo-200 rounded-es-xl py-2 px-4">
						Tool:{" "}
						<a
							className="underline inline-block"
							href="https://motion.dev"
							target="_blank"
							rel="noreferrer"
						>
							Motion
						</a>
					</span>
					<DynamicButton />
				</div>
				<div className="min-h-[30rem] p-10 overflow-hidden bg-purple-50 rounded-xl border-2 border-purple-200 grid place-items-center relative">
					<span className="absolute top-0 right-0 text-xs font-semibold text-neutral-800 bg-purple-200 rounded-es-xl py-2 px-4">
						Tool:{" "}
						<a
							className="underline inline-block"
							href="https://motion.dev"
							target="_blank"
							rel="noreferrer"
						>
							Motion
						</a>
					</span>
					<ChipInteraction />
				</div>

				<div className="min-h-dvh overflow-hidden bg-[#020202] rounded-xl border-2 border-neutral-800 grid place-items-center lg:col-span-2 relative">
					<span className="absolute top-0 right-0 text-xs font-medium text-neutral-200 bg-neutral-800 rounded-es-xl py-2 px-4 z-10">
						Recipe: Animating linear-gradient with{" "}
						<a
							className="underline"
							href="https://developer.mozilla.org/en-US/docs/Web/CSS/@property"
						>
							@property
						</a>
					</span>
					<GlassForm />
				</div>
			</section>
		</div>
	);
}
