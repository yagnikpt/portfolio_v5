import React, { isValidElement } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
	children: React.ReactNode;
	className?: string;
}

const AnimatedText = ({ children, className = "" }: AnimatedTextProps) => {
	return <p className={className}>{split(children)}</p>;
};

export default AnimatedText;

const variant = {
	hidden: {
		opacity: 0,
		filter: "blur(2px)",
		y: 7.5,
	},
	visible: {
		opacity: 1,
		filter: "blur(0)",
		y: 0,
		transition: {
			opacity: { duration: 0.2 },
			filter: { duration: 0.2 },
			duration: 0.35,
			type: "spring",
		},
	},
};

const split = (
	children: React.ReactNode,
	initialCounter?: { value: number },
	styles?: string,
): React.ReactNode[] => {
	const mappedChildren: React.ReactNode[] = [];
	let counter = { value: 0 };
	if (initialCounter) {
		counter = initialCounter;
	}

	if (typeof children === "string") {
		for (const word of children.split(" ")) {
			mappedChildren.push(
				<motion.span
					key={counter.value.toString()}
					className={cn(
						"inline-block align-middle will-change-transform",
						styles,
					)}
					variants={variant}
					viewport={{ once: true }}
					onViewportEnter={(e) =>
						setTimeout(
							() => e?.target.classList.remove("will-change-transform"),
							1000 * 0.35 * (counter.value * 0.025),
						)
					}
				>
					{word}&nbsp;
				</motion.span>,
			);
			counter.value++;
		}
		return mappedChildren;
	}

	React.Children.forEach(children, (child) => {
		if (isValidElement(child)) {
			// @ts-expect-error types are not correct
			if (Object.keys(child.props).includes("data-break-children")) {
				// @ts-expect-error types are not correct
				if (typeof child.props.children === "string") {
					const childs = split(
						// @ts-expect-error types are not correct
						child.props.children,
						counter,
						// @ts-expect-error types are not correct
						child?.props.className ?? undefined,
					);
					mappedChildren.push(...childs);
				} else {
					// @ts-expect-error types are not correct
					for (const innerChild of child.props.children) {
						const childs = split(
							innerChild,
							counter,
							// @ts-expect-error types are not correct
							child?.props.className ?? undefined,
						);
						mappedChildren.push(...childs);
					}
				}
			} else {
				mappedChildren.push(
					<motion.span
						className={cn(
							"inline-flex align-middle will-change-transform",
							styles,
						)}
						key={counter.value.toString()}
						variants={variant}
						viewport={{ once: true }}
						onViewportEnter={(e) =>
							setTimeout(
								() => e?.target.classList.remove("will-change-transform"),
								1000 * 0.35 * (counter.value * 0.025),
							)
						}
					>
						{child}&nbsp;
					</motion.span>,
				);
				counter.value++;
			}
		}
		if (typeof child === "string") {
			if (child.trim() !== "") {
				for (const word of child.split(/\s+/)) {
					mappedChildren.push(
						<motion.span
							key={counter.value.toString()}
							className={cn(
								"inline-block align-middle will-change-transform",
								styles,
							)}
							variants={variant}
							viewport={{ once: true }}
							onViewportEnter={(e) =>
								setTimeout(
									() => e?.target.classList.remove("will-change-transform"),
									1000 * 0.35 * (counter.value * 0.025),
								)
							}
						>
							{word}&nbsp;
						</motion.span>,
					);
					counter.value++;
				}
			}
		}
	});

	return mappedChildren;
};
