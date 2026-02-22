"use client";

import { AnimatePresence, motion as m } from "motion/react";
import { useState } from "react";

interface Props {
	label: string;
	icons: any[];
}

export default function IconsBehindLabel({ label, icons }: Props) {
	const [active, setActive] = useState(false);

	function enableActive() {
		setActive(true);
	}

	function disableActive() {
		setActive(false);
	}

	return (
		<m.span
			className=""
			onHoverEnd={disableActive}
			onHoverStart={enableActive}
			layout
		>
			<AnimatePresence>
				{!active ? (
					<m.span layout>{label}</m.span>
				) : (
					<m.span className="inline-flex gap-2" layout>
						{icons.map((Icon, index) => (
							<Icon className="size-4" key={`${index}-1`} />
						))}
					</m.span>
				)}
			</AnimatePresence>
		</m.span>
	);
}
