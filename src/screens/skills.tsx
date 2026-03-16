"use client";
import DrizzleIcon from "@/assets/icons/skill/drizzle-orm.svg";
import PostgresIcon from "@/assets/icons/skill/postgresql.svg";
import NextIcon from "@/assets/icons/skill/nextjs.svg";
import ReactIcon from "@/assets/icons/skill/react.svg";
import FastAPIIcon from "@/assets/icons/skill/fastapi.svg";
import TailwindCSSIcon from "@/assets/icons/skill/tailwindcss.svg";
import ShadcnIcon from "@/assets/icons/skill/shadcn.svg";
import NeonIcon from "@/assets/icons/services/neon.svg";
import FedoraIcon from "@/assets/icons/tools/fedora.svg";
import ZedIcon from "@/assets/icons/tools/zed.svg";
import OpenCodeIcon from "@/assets/icons/tools/opencode.svg";

import { skillIcons } from "@/lib/skills";

import { cn } from "@/lib/utils";
import Separator from "@/components/separator";

export default function SkillsView() {
	return (
		<div className="flex flex-col items-center mt-14 max-w-lg mx-auto lg:px-8">
			<div className="text-stone-500 leading-relaxed space-y-4">
				<p className="text-pretty">
					I mostly build things with{" "}
					<SkillBadge name="NextJS" icon={NextIcon} />,{" "}
					<SkillBadge name="React" icon={ReactIcon} /> +{" "}
					<SkillBadge name="FastAPI" icon={FastAPIIcon} />. For styling I keep
					things simple with{" "}
					<SkillBadge name="TailwindCSS" icon={TailwindCSSIcon} /> &{" "}
					<SkillBadge name="shadcn/ui" icon={ShadcnIcon} />.
				</p>

				<p className="text-pretty">
					For databases I tend to use{" "}
					<SkillBadge name="PostgreSQL" icon={PostgresIcon} /> running on{" "}
					<SkillBadge name="Neon" icon={NeonIcon} />, with{" "}
					<SkillBadge name="Drizzle" icon={DrizzleIcon} largeIcon />.
				</p>

				<p className="text-pretty">
					My setup is <SkillBadge name="Fedora" icon={FedoraIcon} /> +{" "}
					<SkillBadge name="Zed" icon={ZedIcon} />, usually with a terminal open
					and <SkillBadge name="OpenCode" icon={OpenCodeIcon} /> nearby.
				</p>
			</div>
			<div className="">
				{skillIcons.map((skill) => (
					<div key={skill.title}>
						<Separator
							className="mt-8 mb-4"
							text={skill.title}
							textAlign="left"
						/>
						<div className="flex flex-wrap gap-2">
							{skill.icons.map((icon) => (
								<SkillBadge
									key={icon.label}
									name={icon.label}
									icon={icon.icon}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

interface SkillBadgeProps {
	name: string;
	icon: any;
	largeIcon?: boolean;
}

function SkillBadge({ name, icon, largeIcon = false }: SkillBadgeProps) {
	const Icon = icon;
	return (
		<span
			className={cn(
				"inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:bg-muted/60 py-2 border border-[#dfdfdf] h-5.5 cursor-default gap-1.5 bg-[#ECECEE] px-1.5 pr-2 text-xs align-middle text-foreground",
				largeIcon ? "[&_svg]:size-4.5" : "[&_svg]:size-3.5",
			)}
		>
			<Icon />
			{name}
		</span>
	);
}
