import type { Metadata } from "next";
import SiteHeader from "@/components/header";
import UIBitsView from "@/screens/uibits";

export const metadata: Metadata = {
	title: "~/ui bits",
	description:
		"A collection of little UI components and interactions I like to show off.",
};

export default function UIBits() {
	return (
		<main className="pt-12 lg:pt-20 pb-32 container mx-auto px-4 lg:px-24">
			<div className="px-4 lg:px-8 max-w-lg mx-auto">
				<SiteHeader />
			</div>
			<UIBitsView />
		</main>
	);
}
