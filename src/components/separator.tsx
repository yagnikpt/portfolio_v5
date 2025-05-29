import { cn } from "@/lib/utils";

export default function Separator({
	text,
	className,
}: { text: string; className?: string }) {
	return (
		<div className={cn("flex items-center gap-2 w-full", className)}>
			<div className="flex-1 h-0.5 bg-zinc-200" />
			<p className="text-zinc-500 italic shrink-0 whitespace-nowrap">{text}</p>
			<div className="basis-8 md:basis-16 h-0.5 bg-zinc-200" />
		</div>
	);
}
