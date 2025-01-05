import SiteHeader from "@/components/header";
import ProjectsView from "@/screens/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "~/projects",
	description: "Projects I've worked on",
};

export default function Projects() {
	return (
		<main className="flex flex-col min-h-dvh pt-12 pb-20 justify-center max-w-lg w-full mx-auto gap-14 px-4">
			<SiteHeader />
			<ProjectsView />
		</main>
	);
}
