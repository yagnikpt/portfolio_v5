import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

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

const sourceSerif4 = Source_Serif_4({
	variable: "--font-source-serif-4",
	subsets: ["latin"],
	weight: "variable",
	fallback: [
		"ui-serif",
		"Georgia",
		"Cambria",
		"Times New Roman",
		"Times",
		"serif",
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
		<html className={`${inter.variable} ${sourceSerif4.variable}`} lang="en">
			<body className={"antialiased font-sans"}>{children}</body>
		</html>
	);
}
