"use client";

import {
	createContext,
	type CSSProperties,
	type HTMLAttributes,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useRef,
} from "react";
import { useAnimationFrame } from "motion/react";

import { cn } from "@/lib/utils";
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";

interface FloatingContextType {
	registerElement: (id: string, element: HTMLDivElement, depth: number) => void;
	unregisterElement: (id: string) => void;
}

const FloatingContext = createContext<FloatingContextType | null>(null);

interface FloatingProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	sensitivity?: number;
	easingFactor?: number;
}

const clamp = (value: number, min: number, max: number) =>
	Math.min(Math.max(value, min), max);

const Floating = ({
	children,
	className,
	sensitivity = 18,
	easingFactor = 0.08,
	...props
}: FloatingProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const elementsMap = useRef(
		new Map<
			string,
			{
				element: HTMLDivElement;
				depth: number;
				currentPosition: { x: number; y: number };
			}
		>(),
	);
	const mousePositionRef = useMousePositionRef(containerRef);

	const registerElement = useCallback(
		(id: string, element: HTMLDivElement, depth: number) => {
			elementsMap.current.set(id, {
				element,
				depth,
				currentPosition: { x: 0, y: 0 },
			});
		},
		[],
	);

	const unregisterElement = useCallback((id: string) => {
		elementsMap.current.delete(id);
	}, []);

	useAnimationFrame(() => {
		const container = containerRef.current;

		if (!container) return;

		const { width, height } = container.getBoundingClientRect();
		const normalizedX =
			width > 0 ? clamp(mousePositionRef.current.x / (width / 2), -1, 1) : 0;
		const normalizedY =
			height > 0 ? clamp(mousePositionRef.current.y / (height / 2), -1, 1) : 0;

		elementsMap.current.forEach((data) => {
			const travel = data.depth * sensitivity;
			const targetX = normalizedX * travel;
			const targetY = normalizedY * travel;

			const dx = targetX - data.currentPosition.x;
			const dy = targetY - data.currentPosition.y;

			data.currentPosition.x += dx * easingFactor;
			data.currentPosition.y += dy * easingFactor;

			data.element.style.transform = `translate3d(${data.currentPosition.x}px, ${data.currentPosition.y}px, 0)`;
		});
	});

	return (
		<FloatingContext.Provider value={{ registerElement, unregisterElement }}>
			<div
				ref={containerRef}
				className={cn("absolute top-0 left-0 h-full w-full", className)}
				{...props}
			>
				{children}
			</div>
		</FloatingContext.Provider>
	);
};

export default Floating;

interface FloatingElementProps
	extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
	children: ReactNode;
	className?: string;
	depth?: number;
	style?: CSSProperties;
}

export const FloatingElement = ({
	children,
	className,
	depth = 1,
	style,
	...props
}: FloatingElementProps) => {
	const elementRef = useRef<HTMLDivElement>(null);
	const idRef = useRef(Math.random().toString(36).substring(7));
	const context = useContext(FloatingContext);

	useEffect(() => {
		if (!elementRef.current || !context) return;

		const nonNullDepth = depth ?? 0.01;

		context.registerElement(idRef.current, elementRef.current, nonNullDepth);
		return () => context.unregisterElement(idRef.current);
	}, [depth, context]);

	return (
		<div
			ref={elementRef}
			className={cn("absolute will-change-transform", className)}
			style={style}
			{...props}
		>
			{children}
		</div>
	);
};
