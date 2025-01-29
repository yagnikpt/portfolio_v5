import HigrowImage from "@/assets/projects/higrow.webp";
import RPSImage from "@/assets/projects/rps.webp";
import JpDisplayImage from "@/assets/projects/jp.webp";
import GalaryImage from "@/assets/projects/galary.webp";
import SMAImage from "@/assets/projects/sma.webp";
import MangaReaderImage from "@/assets/projects/mangareader.webp";
import PS5Image from "@/assets/projects/ps5.webp";
import FzfCli from "@/assets/projects/fzf-cli.webp";

import NextjsIcon from "@/assets/icons/skill/nextjs.svg";
import SvelteIcon from "@/assets/icons/skill/svelte.svg";
import SupabaseIcon from "@/assets/icons/skill/supabase.svg";
import DenoIcon from "@/assets/icons/skill/deno.svg";
import SocketIOIcon from "@/assets/icons/skill/socketio.svg";
import ReactIcon from "@/assets/icons/skill/react.svg";
import AstroIcon from "@/assets/icons/skill/astro.svg";
import GSAPIcon from "@/assets/icons/skill/gsap.svg";
import TailwindCSSIcon from "@/assets/icons/skill/tailwindcss.svg";
import FirebaseIcon from "@/assets/icons/skill/firebase.svg";
import TypescriptIcon from "@/assets/icons/skill/typescript.svg";
import ReduxIcon from "@/assets/icons/skill/redux.svg";
import MotionIcon from "@/assets/icons/skill/motion.svg";
import GoIcon from "@/assets/icons/skill/golang.svg";

export const projects = [
	{
		name: "fzf",
		discription:
			"A classic fuzzy finder CLI tool that I built while exploring Go.",
		image: FzfCli,
		tech: ["Go", "Bubbletea"],
		techIcons: [GoIcon],
		links: {
			repo: "https://github.com/yagnik-patel-47/fzf-cli",
		},
		category: "Software",
	},
	{
		name: "HiGrow",
		discription:
			"HiGrow is a platform that aims to help empower minds worldwide to learn, compete, and grow together through workshops and contests!",
		image: HigrowImage,
		tech: ["Nextjs", "Supabase"],
		techIcons: [NextjsIcon, SupabaseIcon],
		links: {
			site: "https://higrow-test.vercel.app",
		},
		category: "Real World",
	},
	{
		name: "Mangasss",
		discription:
			"A manga reader app where you can find whatever manga you want to read.",
		image: MangaReaderImage,
		tech: ["Svelte", "TailwindCSS"],
		techIcons: [SvelteIcon, TailwindCSSIcon],
		links: {
			site: "https://mangasss.vercel.app",
		},
		category: "App",
	},
	{
		name: "PvP Rock Paper Scissors",
		discription:
			"A multiplayer online game developed using Deno KV and Socket.IO.",
		image: RPSImage,
		tech: ["Deno", "Socket.io", "Svelte"],
		techIcons: [DenoIcon, SocketIOIcon, SvelteIcon],
		links: {
			site: "https://pvp-rps.vercel.app",
			repo: "https://github.com/yagnik-patel-47/pvp-rps-server",
		},
		category: "Fullstack",
	},
	{
		name: "PS5 Home Screen",
		discription:
			"A clone of the PS5 home screen with identical layout animations.",
		image: PS5Image,
		tech: ["React", "Motion"],
		techIcons: [ReactIcon, MotionIcon],
		links: {
			site: "https://ps5-home-screen.vercel.app",
			repo: "https://github.com/yagnik-patel-47/ps5-home-screen",
		},
		category: "Static",
	},
	{
		name: "Animation Gallery",
		discription: "A single-page image gallery site with stunning animations.",
		image: GalaryImage,
		tech: ["React", "Motion"],
		techIcons: [ReactIcon, MotionIcon],
		links: {
			site: "https://animated0casestudy.vercel.app",
			repo: "https://github.com/yagnik-patel-47/animated_casestudy",
		},
		category: "Static",
	},
	{
		name: "Japanese Art",
		discription: "A static page website featuring impressive animations.",
		image: JpDisplayImage,
		tech: ["Astro", "GSAP", "TailwindCSS"],
		techIcons: [AstroIcon, GSAPIcon, TailwindCSSIcon],
		links: {
			site: "https://jp-display.vercel.app",
			repo: "https://github.com/yagnik-patel-47/jp_display",
		},
		category: "Static",
	},
	{
		name: "Social Media App",
		discription:
			"A social media app clone featuring basic functionalities similar to Instagram.",
		image: SMAImage,
		tech: ["Nextjs", "Firebase", "Typescript", "Redux"],
		techIcons: [NextjsIcon, FirebaseIcon, TypescriptIcon, ReduxIcon],
		links: {
			site: "https://moments-sma.vercel.app",
			repo: "https://github.com/Yagnik-Patel-47/social-media-app",
		},
		category: "Fullstack",
	},
];

export const featuredProjects = [projects[0], projects[1], projects[2]];

export const realWorldProjects = projects.filter(
	(project) => project.category === "real-world",
);
export const fullstackProjects = projects.filter(
	(project) => project.category === "fullstack",
);
export const staticProjects = projects.filter(
	(project) => project.category === "static",
);
export const appProjects = projects.filter(
	(project) => project.category === "app",
);
