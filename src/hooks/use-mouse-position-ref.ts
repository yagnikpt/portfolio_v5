import { type RefObject, useEffect, useRef } from "react";

export const useMousePositionRef = (
	containerRef?: RefObject<HTMLElement | SVGElement | null>,
) => {
	const positionRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const updatePosition = (x: number, y: number) => {
			if (containerRef?.current) {
				const rect = containerRef.current.getBoundingClientRect();
				const centeredX = x - rect.left - rect.width / 2;
				const centeredY = y - rect.top - rect.height / 2;

				positionRef.current = { x: centeredX, y: centeredY };
				return;
			}

			positionRef.current = { x, y };
		};

		const handleMouseMove = (ev: MouseEvent) => {
			updatePosition(ev.clientX, ev.clientY);
		};

		const handleTouchMove = (ev: TouchEvent) => {
			const touch = ev.touches[0];

			if (!touch) {
				return;
			}

			updatePosition(touch.clientX, touch.clientY);
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("touchmove", handleTouchMove, { passive: true });

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("touchmove", handleTouchMove);
		};
	}, [containerRef]);

	return positionRef;
};
