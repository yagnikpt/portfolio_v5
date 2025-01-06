"use client";
import { LayoutGroup, motion as m } from "motion/react";
import { projects } from "@/lib/projects-data";
import ProjectCard from "@/components/project-card";

export default function ProjectsView() {
	return (
		<m.div className="flex flex-col gap-4 items-center">
			<p className="text-xl max-w-lg w-full mx-auto mb-10 tracking-tight">
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
