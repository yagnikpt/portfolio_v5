import GalleryView from "@/screens/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "~/gallery",
	description: "A curated collection of photos captured through my lens.",
};

export default function Gallery() {
	return (
		// <main className="pt-12 lg:pt-20 pb-32 container mx-auto px-8 lg:px-24">
		// 	<div className="max-w-lg mx-auto lg:px-8">
		// 		<SiteHeader />
		// 	</div>
		// </main>
		<GalleryView />
	);
}
