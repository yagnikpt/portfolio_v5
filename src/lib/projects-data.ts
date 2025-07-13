import HigrowImage from "@/assets/projects/higrow.webp";
import RPSImage from "@/assets/projects/rps.webp";
import JpDisplayImage from "@/assets/projects/jp.webp";
import GalaryImage from "@/assets/projects/galary.webp";
import SMAImage from "@/assets/projects/sma.webp";
import MangaReaderImage from "@/assets/projects/mangareader.webp";
import PS5Image from "@/assets/projects/ps5.webp";
import FzfCliImage from "@/assets/projects/fzf_cli.webp";
import FlashbackImage from "@/assets/projects/flashback.gif";
import AdmissionScraperImage from "@/assets/projects/admission_scraper.webp";

import NextjsIcon from "@/assets/icons/skill/nextjs.svg";
import SvelteIcon from "@/assets/icons/skill/svelte.svg";
import SupabaseIcon from "@/assets/icons/skill/supabase.svg";
import BunIcon from "@/assets/icons/skill/bun.svg";
import SocketIOIcon from "@/assets/icons/skill/socketio.svg";
import ReactIcon from "@/assets/icons/skill/react.svg";
import AstroIcon from "@/assets/icons/skill/astro.svg";
import GSAPIcon from "@/assets/icons/skill/gsap.svg";
import TailwindCSSIcon from "@/assets/icons/skill/tailwindcss.svg";
import FirebaseIcon from "@/assets/icons/skill/firebase.svg";
import TypescriptIcon from "@/assets/icons/skill/typescript.svg";
import MotionIcon from "@/assets/icons/skill/motion.svg";
import GoIcon from "@/assets/icons/skill/golang.svg";
import GeminiIcon from "@/assets/icons/skill/gemini.svg";
import SqliteIcon from "@/assets/icons/skill/sqlite.svg";
import PythonIcon from "@/assets/icons/skill/python.svg";
import FastAPIIcon from "@/assets/icons/skill/fastapi.svg";
import PostgreSQLIcon from "@/assets/icons/skill/postgresql.svg";

export const projects = [
	{
		name: "Flashback",
		discription:
			"A powerful command-line tool that serves as your second memory, intelligently storing and retrieving your notes using AI-powered semantic search.",
		image: FlashbackImage,
		tech: ["Go", "Bubbletea", "Gemini", "SQLite"],
		techIcons: [GoIcon, GeminiIcon, SqliteIcon],
		links: {
			repo: "https://github.com/yagnikpt/flashback",
		},
		category: "Software",
	},
	{
		name: "Admission Scraper",
		discription:
			"This project is designed to automate the collection, processing, and storage of university admission announcements.",
		image: AdmissionScraperImage,
		tech: ["Python", "FastAPI", "Gemini", "PostgreSQL"],
		techIcons: [PythonIcon, FastAPIIcon, GeminiIcon, PostgreSQLIcon],
		links: {
			site: "https://mahek2905.github.io/admission-spider",
			repo: "https://github.com/yagnikpt/admission-scraper",
		},
		category: "Fullstack",
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
		name: "fzf",
		discription:
			"A classic fuzzy finder CLI tool that I built while exploring Go.",
		image: FzfCliImage,
		tech: ["Go", "Bubbletea"],
		techIcons: [GoIcon],
		links: {
			repo: "https://github.com/yagnikpt/fzf-cli",
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
		name: "PvP Rock Paper Scissors",
		discription:
			"A multiplayer online game developed using Deno KV and Socket.IO.",
		image: RPSImage,
		tech: ["Bun", "Socket.io", "Svelte"],
		techIcons: [BunIcon, SocketIOIcon, SvelteIcon],
		links: {
			site: "https://pvp-rps.vercel.app",
			repo: "https://github.com/yagnikpt/pvp-rps-server",
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
			repo: "https://github.com/yagnikpt/ps5-home-screen",
		},
		category: "Animation",
	},
	{
		name: "Animation Gallery",
		discription: "A single-page image gallery site with stunning animations.",
		image: GalaryImage,
		tech: ["React", "Motion"],
		techIcons: [ReactIcon, MotionIcon],
		links: {
			site: "https://animated0casestudy.vercel.app",
			repo: "https://github.com/yagnikpt/animated_casestudy",
		},
		category: "Animation",
	},
	{
		name: "Japanese Art",
		discription: "A static page website featuring impressive animations.",
		image: JpDisplayImage,
		tech: ["Astro", "GSAP", "TailwindCSS"],
		techIcons: [AstroIcon, GSAPIcon, TailwindCSSIcon],
		links: {
			site: "https://jp-display.vercel.app",
			repo: "https://github.com/yagnikpt/jp_display",
		},
		category: "Animation",
	},
	{
		name: "Social Media App",
		discription:
			"A social media app clone featuring basic functionalities similar to Instagram.",
		image: SMAImage,
		tech: ["Nextjs", "Firebase", "Typescript"],
		techIcons: [NextjsIcon, FirebaseIcon, TypescriptIcon],
		links: {
			site: "https://moments-sma.vercel.app",
			repo: "https://github.com/yagnikpt/social-media-app",
		},
		category: "Fullstack",
	},
];

export const featuredProjects = [
	projects[0],
	projects[1],
	projects[2],
	projects[3],
	projects[4],
	projects[5],
];
