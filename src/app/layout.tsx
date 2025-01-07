import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Dock from "@/components/dock";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: "variable",
	fallback: [
		"ui-sans-serif",
		"system-ui",
		"sans-serif",
		"Apple Color Emoji",
		"Segoe UI Emoji",
		"Segoe UI Symbol",
		"Noto Color Emoji",
	],
});

export const metadata: Metadata = {
	title: "/yagnik",
	description:
		"A modern portfolio showcasing frontend development projects, UI components, and creative web experiences built with Next and TailwindCSS.",
	authors: [{ name: "Yagnik Patel", url: "https://x.com/yagnik_pt" }],
	keywords:
		"yagnik, yagnik patel, software developer, web developer, frontend developer, Astro, portfolio",
	metadataBase: new URL("https://yagnik.me"),
	twitter: {
		card: "summary_large_image",
		title: "Yagnik Patel | Software Developer Portfolio",
		site: "https://yagnik.me",
		creator: "@yagnik_pt",
		images: "https://yagnik.me/og-image.png",
		description:
			"A modern portfolio showcasing frontend development projects, UI components, and creative web experiences built with Next and TailwindCSS.",
	},
	openGraph: {
		type: "website",
		url: "https://yagnik.me",
		title: "Yagnik Patel | Software Developer Portfolio",
		description:
			"A modern portfolio showcasing frontend development projects, UI components, and creative web experiences built with Next and TailwindCSS.",
		images: [
			{
				url: "https://yagnik.me/og-image.png",
				width: 1200,
				height: 630,
				alt: "Yagnik Patel - Student @KPGU | Software Developer",
			},
		],
		siteName: "Yagnik Patel | Software Developer Portfolio",
	},
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={`${inter.variable}`} lang="en">
			<body className={"antialiased font-sans flex justify-center"}>
				{children}
				<Dock />
				<Analytics />
			</body>
		</html>
	);
}
