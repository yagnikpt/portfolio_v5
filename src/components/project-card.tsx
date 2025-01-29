"use client";
import {
	AnimatePresence,
	LayoutGroup,
	motion as m,
	MotionConfig,
} from "motion/react";
import type { featuredProjects } from "@/lib/projects-data";
import ArrowOutIcon from "@/assets/icons/external-link.svg";
import GithubIcon from "@/assets/icons/social/github.svg";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MImage = m.create(Image);

export default function ProjectCard({
	project,
}: { project: (typeof featuredProjects)[number] }) {
	const [expanded, setExpanded] = useState(false);

	return (
		<MotionConfig
			transition={{ duration: 0.5, type: "spring", bounce: 0 }}
			reducedMotion="user"
		>
			<m.div
				layout
				className="bg-zinc-100 px-3 pb-3 md:px-4 md:pb-4 max-w-2xl rounded-2xl"
			>
				<LayoutGroup>
					<m.button
						layout
						onClick={() => setExpanded((p) => !p)}
						className={cn(
							"flex justify-between w-full pt-6 pb-4 px-3 lg:px-6 text-start overflow-hidden items-center",
							!expanded && "gap-2",
						)}
					>
						<AnimatePresence>
							<div key={`project-${project.name}`} className="space-y-1 w-full">
								<m.h2
									layout="position"
									className="text-base font-medium md:font-normal md:text-xl"
								>
									{project.name}
								</m.h2>
								<m.div layout className="overflow-hidden">
									{expanded ? (
										<m.p
											key={"full"}
											layout="position"
											layoutId={`${project.name}-desc`}
											className={cn("text-xs md:text-sm text-pretty")}
										>
											{project.discription}
										</m.p>
									) : (
										<m.p
											key={"hidden"}
											layout="position"
											layoutId={`${project.name}-desc`}
											className={cn("text-xs md:text-sm line-clamp-1")}
										>
											{project.discription}
										</m.p>
									)}
								</m.div>
								{expanded && (
									<div className="flex justify-between items-center mt-2">
										<div className="flex items-center gap-2">
											{project.techIcons.map((Icon, index) => (
												<m.div
													layoutId={`tech-${project.name}-${project.tech[index]}`}
													key={`tech-${project.name}-${project.tech[index]}`}
												>
													<Icon className="size-7 md:size-8 rounded-lg" />
												</m.div>
											))}
										</div>
										<m.div layout className="flex space-x-4">
											{project.links.repo && (
												<a
													aria-label="project repo link"
													rel="noreferrer"
													target="_blank"
													href={project.links.repo}
												>
													<GithubIcon className="size-6" />
												</a>
											)}
											{project.links.site && (
												<a
													aria-label="site link"
													rel="noreferrer"
													target="_blank"
													href={project.links.site}
												>
													<ArrowOutIcon className="size-6" />
												</a>
											)}
										</m.div>
									</div>
								)}
							</div>
							<m.div
								layout
								className={cn(
									"flex justify-end items-center shrink-0 -space-x-5 ",
								)}
							>
								{!expanded &&
									project.techIcons.map((Icon, index) => (
										<m.div
											layoutId={`tech-${project.name}-${project.tech[index]}`}
											key={`tech-${project.name}-${project.tech[index]}`}
										>
											<Icon className="size-8 md:size-10 rounded-lg md:rounded-xl" />
										</m.div>
									))}
							</m.div>
						</AnimatePresence>
					</m.button>
					<m.button
						onClick={() => setExpanded((p) => !p)}
						layout
						className="relative after:rounded-2xl after:absolute after:inset-0 after:inset-ring-black/20 after:inset-ring-5 hover:after:inset-ring-8 after:transition"
					>
						<MImage
							layout
							className="w-full object-cover rounded-2xl"
							src={project.image}
							alt={project.name}
							priority
							quality={100}
						/>
					</m.button>
				</LayoutGroup>
			</m.div>
		</MotionConfig>
	);
}
