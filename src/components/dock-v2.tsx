"use client";
import { AnimatePresence, motion as m, MotionConfig } from "motion/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import { HomeIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { useScrollLock } from "usehooks-ts";

const textMap: Record<string, string> = {
	"/": "~/",
	"/projects": "~/projects",
	"/uibits": "~/uibits",
};

const cKey = "wrapper";
const iKey = "items";

export default function DockV2() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const { lock, unlock } = useScrollLock({
		autoLock: false,
	});

	const handleOpen = () => {
		setOpen(true);
		lock();
	};
	const handleClose = () => {
		setOpen(false);
		unlock();
	};

	return (
		<MotionConfig transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}>
			<AnimatePresence mode="popLayout" initial={false}>
				{open && (
					<m.div
						role="button"
						onClick={handleClose}
						key={"backdrop"}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ type: "tween", duration: 0.2 }}
						className="fixed inset-0 bg-black/5 z-10 backdrop-blur-xs"
					/>
				)}
			</AnimatePresence>
			<div
				className={cn(
					"fixed bottom-8 z-51 select-none",
					"[--width-opened:80vw] sm:[--width-opened:350px] [--width:220px]",
					"text-white/90",
				)}
			>
				<div className="relative">
					<m.button
						type="button"
						layoutId={cKey}
						className={cn(
							"relative flex h-12 items-center overflow-hidden px-3 outline-hidden!",
							"min-w-(--width) bg-neutral-900",
						)}
						style={{
							borderRadius: 40,
							// boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 48px 0px",
						}}
						aria-label="Open"
						tabIndex={0}
						onClick={handleOpen}
					>
						<div className="absolute bottom-full left-1/2 w-(--width) -translate-x-1/2">
							<m.div
								layoutId={`${iKey}`}
								layout="position"
								className="h-auto w-full"
							>
								<Items />
							</m.div>
						</div>
						<m.div className="flex items-center gap-2 w-full">
							<m.div layoutId="text-icon">
								<HomeIcon className="size-5" />
							</m.div>

							<m.span className="font-medium" layout="position" layoutId="text">
								{textMap[pathname] ?? textMap["/"]}
							</m.span>
						</m.div>
						<div className="absolte top-0 right-0 bottom-0">
							<m.div layoutId="but">
								<ChevronUpIcon className="size-5" />
							</m.div>
						</div>
					</m.button>
					<div className="absolute bottom-0 left-1/2 -translate-x-1/2">
						<AnimatePresence mode="popLayout" initial={false}>
							{open && (
								<m.div
									key="cont"
									aria-label="Close"
									tabIndex={0}
									layoutId={`${cKey}`}
									className={cn(
										"justify-center overflow-hidden p-2 pb-14",
										"w-(--width-opened) bg-neutral-900 relative",
									)}
									style={{
										borderRadius: 24,
										// boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 48px 0px",
									}}
								>
									<button
										type="button"
										onClick={handleClose}
										className="absolute bottom-5 right-5 left-5"
									>
										<m.div className="flex items-center gap-2 w-full">
											<m.div layoutId="text-icon">
												<HomeIcon className="size-5" />
											</m.div>
											<m.span
												className="font-medium"
												layout="position"
												layoutId="text"
											>
												~/
											</m.span>
										</m.div>
									</button>
									<div className="absolute bottom-5 right-5">
										<m.div style={{ rotate: -180 }} layoutId="but">
											<ChevronUpIcon className="size-5" />
										</m.div>
									</div>
									<m.div layoutId={`${iKey}`} layout="position">
										<Items />
									</m.div>
								</m.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</MotionConfig>
	);
}

function Items() {
	return (
		<div className="m-3 mb-4 z-9 grid gap-1 font-medium group">
			<Link
				href="/"
				className="text-lg group-hover:text-white/40 hover:text-white/90"
			>
				~/
			</Link>
			<Link
				href="/projects"
				className="text-lg group-hover:text-white/40 hover:text-white/90"
			>
				~/projects
			</Link>
			<Link
				href="/uibits"
				className="text-lg group-hover:text-white/40 hover:text-white/90"
			>
				~/uibits
			</Link>
		</div>
	);
}
