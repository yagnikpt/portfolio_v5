import { cn } from "@/lib/utils";

export default function Separator({
	text,
	className,
	textAlign = "right",
}: {
	text: string;
	className?: string;
	textAlign?: "right" | "left";
}) {
	const alignRight = textAlign === "right";
	return (
		<div className={cn("flex items-center gap-2 w-full", className)}>
			<div
				className={cn("h-0.5 bg-zinc-200", alignRight ? "flex-1" : "basis-4")}
			/>
			<p className="text-zinc-500 italic shrink-0 whitespace-nowrap text-sm">
				{text}
			</p>
			<div
				className={cn(
					"h-0.5 bg-zinc-200",
					alignRight ? "basis-8 md:basis-16" : "flex-1",
				)}
			/>
		</div>
	);
}
