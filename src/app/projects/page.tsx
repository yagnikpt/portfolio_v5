import SiteHeader from "@/components/header";
import ProjectsView from "@/screens/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "~/projects",
	description: "Projects I've worked on",
};

export default function Projects() {
	return (
		<main className="pt-12 lg:pt-20 pb-32 container mx-auto px-8 lg:px-24">
			<div className="max-w-lg mx-auto lg:px-8">
				<SiteHeader />
			</div>
			<ProjectsView />
		</main>
	);
}
