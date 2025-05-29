"use client";
import { AnimatePresence, LayoutGroup, MotionConfig } from "motion/react";
import { projects } from "@/lib/projects-data";
import ProjectCard from "@/components/project-card";
import { useState } from "react";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion as m } from "motion/react";
import { cn } from "@/lib/utils";

const filters = ["Software", "Real World", "App", "Fullstack", "Animation"];

export default function ProjectsView() {
	const [activeFilter, setActiveFilter] = useState<string | null>(null);

	return (
		<div className="flex flex-col items-center mt-14">
			<p className="text-xl max-w-lg w-full mx-auto mb-6 tracking-tight lg:px-8">
				Here you can find select work that I have been working on recently.
			</p>
			<LayoutGroup>
				<Filters
					activeFilter={activeFilter}
					setActiveFilter={setActiveFilter}
				/>
				<m.div layout className="grid lg:grid-cols-2 gap-5 lg:gap-10">
					<AnimatePresence mode="popLayout" initial={false}>
						{activeFilter
							? projects
									.filter((pro) => pro.category === activeFilter)
									.map((project) => (
										<ProjectCard key={project.name} project={project} />
									))
							: projects.map((project) => (
									<ProjectCard key={project.name} project={project} />
								))}
					</AnimatePresence>
				</m.div>
			</LayoutGroup>
		</div>
	);
}

const MXMarkIcon = m.create(XMarkIcon);
const MFunnelIcon = m.create(FunnelIcon);

interface Props {
	activeFilter: string | null;
	setActiveFilter: (filter: string | null) => void;
}

function Filters({ activeFilter, setActiveFilter }: Props) {
	const [state, setState] = useState(true);

	return (
		<MotionConfig
			transition={{ type: "spring", duration: 0.4, bounce: 0 }}
			reducedMotion="user"
		>
			<LayoutGroup>
				<AnimatePresence>
					<m.div
						layout="size"
						className="flex flex-row-reverse flex-wrap gap-2 mb-12 w-full lg:px-8 max-w-lg"
					>
						<m.div layout="size" className="relative">
							<m.button
								layout
								type="button"
								onClick={() => {
									if (state) {
										setState(false);
										setActiveFilter(null);
									} else {
										setState(true);
									}
								}}
								className={cn(
									"px-4 py-1 flex items-center rounded-full bg-zinc-200 text-sm font-medium text-zinc-800 gap-1 shrink-0 text-nowrap whitespace-nowrap z-2 relative overflow-hidden",
									!state && "p-1.5",
								)}
							>
								{state ? (
									<>
										<m.span layout="position" className="inline-block text-sm">
											{activeFilter ? "Reset" : "Close"}
										</m.span>
										<MXMarkIcon strokeWidth={2} layoutId="icon" className="size-4" />
									</>
								) : (
									<>
										<m.span className="sr-only">Filter</m.span>
										<MFunnelIcon strokeWidth={2} layoutId="icon" className="size-4" />
									</>
								)}
							</m.button>
							{filters.map((filter) => (
								<m.div
									layoutId={filter}
									key={filter}
									className="size-7 bg-zinc-200 absolute top-0 right-0 rounded-full"
								/>
							))}
						</m.div>
						{state &&
							filters.map((filter) => (
								<m.button
									layoutId={filter}
									type="button"
									key={filter}
									onClick={() => setActiveFilter(filter)}
									className={`px-4 py-1 rounded-full text-sm font-medium shrink-0 text-nowrap whitespace-nowrap ${
										activeFilter === filter
											? "bg-zinc-950 text-white"
											: "bg-zinc-200 text-zinc-800"
									}`}
								>
									{filter}
								</m.button>
							))}
					</m.div>
				</AnimatePresence>
			</LayoutGroup>
		</MotionConfig>
	);
}
