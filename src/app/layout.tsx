import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Dock from "@/components/dock";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";

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

const siteUrl =
	`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` ||
	"https://yagnik.codes";

export const metadata: Metadata = {
	title: "/yagnik",
	description:
		"A modern portfolio showcasing frontend development projects, UI components, and creative web experiences built with Next and TailwindCSS.",
	authors: [{ name: "Yagnik Patel", url: "https://github.com/yagnikpt" }],
	keywords:
		"yagnik, yagnik patel, software developer, web developer, frontend developer, portfolio",
	metadataBase: new URL(siteUrl),
	twitter: {
		card: "summary_large_image",
		title: "Yagnik Patel",
		site: siteUrl,
		creator: "@yagnik_pt",
		images: `${siteUrl}/og-image.jpg`,
		description:
			"A modern portfolio showcasing frontend development projects, UI components, and creative web experiences built with Next and TailwindCSS.",
	},
	openGraph: {
		type: "website",
		url: siteUrl,
		title: "Yagnik Patel",
		description:
			"A modern portfolio showcasing frontend development projects, UI components, and creative web experiences built with Next and TailwindCSS.",
		siteName: "Yagnik Patel",
	},
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html className={inter.variable} lang="en">
				<body className="antialiased font-sans flex justify-center bg-background text-foreground">
					{children}
					<Dock />
					<Analytics />
					<SpeedInsights />
				</body>
			</html>
		</ViewTransitions>
	);
}
