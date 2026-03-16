import SiteHeader from "@/components/header";
import SkillsView from "@/screens/skills";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "~/skills",
	description: "Tools and tech that i work with.",
};

export default function Projects() {
	return (
		<main className="pt-12 lg:pt-20 pb-32 container mx-auto px-8 lg:px-24">
			<div className="max-w-lg mx-auto lg:px-8">
				<SiteHeader />
			</div>
			<SkillsView />
		</main>
	);
}
