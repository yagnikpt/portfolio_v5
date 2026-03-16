import TypescriptIcon from "@/assets/icons/skill/typescript.svg";
import PythonIcon from "@/assets/icons/skill/python.svg";
import GolangIcon from "@/assets/icons/skill/golang.svg";
import PostgreSQLIcon from "@/assets/icons/skill/postgresql.svg";
import RedisIcon from "@/assets/icons/skill/redis.svg";
import SQLiteIcon from "@/assets/icons/skill/sqlite.svg";

import NextIcon from "@/assets/icons/skill/nextjs.svg";
import ReactIcon from "@/assets/icons/skill/react.svg";
import SvelteIcon from "@/assets/icons/skill/svelte.svg";
import AstroIcon from "@/assets/icons/skill/astro.svg";
import FastAPIIcon from "@/assets/icons/skill/fastapi.svg";
import TailwindIcon from "@/assets/icons/skill/tailwindcss.svg";
import MotionIcon from "@/assets/icons/skill/motion.svg";
import DrizzleIcon from "@/assets/icons/skill/drizzle-orm.svg";
import BetterAuthIcon from "@/assets/icons/skill/better-auth.svg";

import GitIcon from "@/assets/icons/tools/git.svg";
import BunIcon from "@/assets/icons/tools/bun.svg";
import GoReleaserIcon from "@/assets/icons/tools/goreleaser.svg";

import FlyIcon from "@/assets/icons/services/fly.svg";
import VercelIcon from "@/assets/icons/services/vercel.svg";
import AzureIcon from "@/assets/icons/services/azure.svg";
import FirebaseIcon from "@/assets/icons/services/firebase.svg";
import NeonIcon from "@/assets/icons/services/neon.svg";
import SupabaseIcon from "@/assets/icons/services/supabase.svg";
import HuggingFaceIcon from "@/assets/icons/services/hugging_face.svg";

import OpenCodeIcon from "@/assets/icons/tools/opencode.svg";
import FigmaIcon from "@/assets/icons/tools/figma.svg";
import PostmanIcon from "@/assets/icons/tools/postman.svg";

import DockerIcon from "@/assets/icons/tools/docker.svg";
import LinuxIcon from "@/assets/icons/tools/linux.svg";
import GithubIcon from "@/assets/icons/social/github.svg";

const CoreSkills = [
	{
		label: "Go",
		icon: GolangIcon,
	},
	{
		label: "Python",
		icon: PythonIcon,
	},
	{
		label: "TypeScript",
		icon: TypescriptIcon,
	},
	{
		label: "PostgreSQL",
		icon: PostgreSQLIcon,
	},
	{
		label: "Redis",
		icon: RedisIcon,
	},
	{
		label: "SQLite",
		icon: SQLiteIcon,
	},
];

const FrameworksSkills = [
	{
		label: "Next.js",
		icon: NextIcon,
	},
	{
		label: "React",
		icon: ReactIcon,
	},
	{
		label: "Svelte",
		icon: SvelteIcon,
	},
	{
		label: "Astro",
		icon: AstroIcon,
	},
	{
		label: "FastAPI",
		icon: FastAPIIcon,
	},
	{
		label: "Tailwind CSS",
		icon: TailwindIcon,
	},
	{
		label: "Motion",
		icon: MotionIcon,
	},
	{
		label: "Drizzle ORM",
		icon: DrizzleIcon,
	},
	{
		label: "Better Auth",
		icon: BetterAuthIcon,
	},
];

const ToolSkills = [
	{
		label: "Git",
		icon: GitIcon,
	},
	{
		label: "Bun",
		icon: BunIcon,
	},
	{
		label: "GoReleaser",
		icon: GoReleaserIcon,
	},
];

const PlatformSkills = [
	{
		label: "Fly.io",
		icon: FlyIcon,
	},
	{
		label: "Vercel",
		icon: VercelIcon,
	},
	{
		label: "Azure",
		icon: AzureIcon,
	},
	{
		label: "Firebase",
		icon: FirebaseIcon,
	},
	{
		label: "Neon",
		icon: NeonIcon,
	},
	{
		label: "Supabase",
		icon: SupabaseIcon,
	},
	{
		label: "Hugging Face",
		icon: HuggingFaceIcon,
	},
];

const SoftwareSkills = [
	{
		label: "OpenCode",
		icon: OpenCodeIcon,
	},
	{
		label: "Figma",
		icon: FigmaIcon,
	},
	{
		label: "Postman",
		icon: PostmanIcon,
	},
];

const DevOpsSkills = [
	{
		label: "Linux",
		icon: LinuxIcon,
	},
	{
		label: "Docker",
		icon: DockerIcon,
	},
	{
		label: "Github Actions(CI/CD)",
		icon: GithubIcon,
	},
];

const skillIcons = [
	{
		title: "Core",
		icons: CoreSkills,
	},
	{
		title: "Frameworks",
		icons: FrameworksSkills,
	},
	{
		title: "Tools",
		icons: ToolSkills,
	},
	{
		title: "Platforms",
		icons: PlatformSkills,
	},
	{
		title: "Software",
		icons: SoftwareSkills,
	},
	{
		title: "DevOps",
		icons: DevOpsSkills,
	},
];

export { skillIcons };
