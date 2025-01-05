"use client";
import { LayoutGroup, motion as m } from "motion/react";
import { projects } from "@/lib/projects-data";
import ProjectCard from "@/components/project-card";

export default function ProjectsView() {
	return (
		<m.div className="flex flex-col gap-4">
			<LayoutGroup>
				{projects.map((project) => (
					<ProjectCard key={project.name} project={project} />
				))}
			</LayoutGroup>
		</m.div>
	);
}
