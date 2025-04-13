import { useEffect, useRef } from "react";

const GridBackground = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const drawGrid = () => {
			if (!ctx || !canvas) return;

			// Очищаем canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Устанавливаем стиль сетки
			ctx.strokeStyle = "#00ff00";
			ctx.lineWidth = 0.5;

			// Размер ячейки сетки
			const gridSize = 40;

			// Рисуем вертикальные линии
			for (let x = 0; x < canvas.width; x += gridSize) {
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, canvas.height);
				ctx.stroke();
			}

			// Рисуем горизонтальные линии
			for (let y = 0; y < canvas.height; y += gridSize) {
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(canvas.width, y);
				ctx.stroke();
			}
		};

		// Устанавливаем размер canvas
		const resizeCanvas = () => {
			if (!canvas) return;
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			drawGrid();
		};

		// Инициализация и обработка ресайза
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		// Анимация мерцания
		const animate = () => {
			if (!ctx || !canvas) return;

			// Случайное изменение прозрачности
			const opacity = 0.1 + Math.random() * 0.1;
			ctx.globalAlpha = opacity;
			drawGrid();

			requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 0,
				pointerEvents: "none",
			}}
		/>
	);
};

export default GridBackground;
