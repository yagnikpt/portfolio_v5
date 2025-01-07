"use client";
import { LayoutGroup, motion as m } from "motion/react";
import { projects } from "@/lib/projects-data";
import ProjectCard from "@/components/project-card";

export default function ProjectsView() {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.3 } }}
			className="flex flex-col items-center mt-14"
		>
			<p className="text-xl max-w-lg w-full mx-auto mb-12 tracking-tight lg:px-8">
				Here you can find select work that I have been working on recently.
			</p>
			<div className="grid lg:grid-cols-2 gap-5 lg:gap-10">
				<LayoutGroup>
					{projects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</LayoutGroup>
			</div>
		</m.div>
	);
}
