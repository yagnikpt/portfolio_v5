"use client";
import { AnimatePresence, motion as m, MotionConfig } from "motion/react";
import { type RefObject, useRef, useState } from "react";
import {
	DocumentIcon,
	BellIcon,
	FolderIcon,
	Square3Stack3DIcon,
} from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useOnClickOutside } from "usehooks-ts";

const items = [
	{
		icon: Square3Stack3DIcon,
		label: "Task",
		desc: "Create a new task",
	},
	{
		icon: BellIcon,
		label: "Reminder",
		desc: "Create reminders with alerts",
	},
	{
		icon: DocumentIcon,
		label: "Note",
		desc: "Capture ideas on the fly",
	},
	{
		icon: FolderIcon,
		label: "Project",
		desc: "Organize better with projects",
	},
];

export default function SlickDropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

	useOnClickOutside(ref, () => setIsOpen(false));

	return (
		<MotionConfig transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}>
			{/* <m.div layoutRoot> */}
			<m.div layout className="space-y-2 overflow-hidden">
				<AnimatePresence mode="popLayout" initial={false}>
					{isOpen && (
						<div key={"stfu"}>
							<m.button
								initial={{ scale: 0.75 }}
								animate={{ scale: 1 }}
								transition={{ duration: 0.3, type: "tween" }}
								key={"close"}
								className="bg-[#f3efeb] px-5 py-2 grid place-items-center rounded-full mx-auto"
								onClick={() => setIsOpen(false)}
							>
								<XMarkIcon className="size-6 text-neutral-500" />
								<span className="sr-only">Close</span>
							</m.button>
						</div>
					)}

					<m.div
						layout
						className={cn("border-2 border-zinc-200 overflow-hidden z-2")}
						style={{
							borderRadius: "1.5rem",
							// background: isOpen ? "#fefefe" : "#f0ece6",
						}}
						animate={{
							background: isOpen ? "#fefefe" : "#f0ece6",
							borderRadius: 24,
						}}
					>
						{!isOpen && (
							<m.button
								layout="size"
								className="px-6 py-2 rounded-full"
								key={"open"}
								initial={{ opacity: 0.5, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, type: "tween", delay: 0.1 }}
								onClick={() => setIsOpen(true)}
							>
								<PlusIcon className="size-6 text-neutral-500" />
							</m.button>
						)}
						{isOpen && (
							<m.div
								key={"dropdown"}
								initial={{ y: 15 }}
								animate={{ y: 0 }}
								transition={{ duration: 0.3, delay: 0.1, type: "tween" }}
								className="p-3 space-y-2"
								ref={ref}
							>
								{items.map((item, index) => (
									<m.button
										key={`item-${index.toString()}`}
										initial={{ opacity: 0, filter: "blur(6px)" }}
										animate={{
											opacity: 1,
											filter: "blur(0px)",
											transition: {
												duration: 0.2,
												delay: index * 0.05,
												type: "tween",
											},
										}}
										className="flex gap-3 items-center p-1.5 hover:bg-[#f4f2ec] hover:scale-105 transition rounded-xl w-full group"
									>
										<div className="grid place-items-center bg-[#f3efeb] group-hover:bg-[#fcfcf9] size-10 rounded-lg transition">
											<item.icon className="size-6 text-neutral-500" />
										</div>
										<div className="text-left">
											<p className="font-semibold text-neutral-900 leading-tight">
												{item.label}
											</p>
											<p className="text-sm text-zinc-600">{item.desc}</p>
										</div>
									</m.button>
								))}
							</m.div>
						)}
					</m.div>
				</AnimatePresence>
			</m.div>
			{/* </m.div> */}
		</MotionConfig>
	);
}
