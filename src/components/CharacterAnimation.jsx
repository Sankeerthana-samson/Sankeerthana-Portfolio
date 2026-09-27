import { useEffect, useRef } from 'react';

const FRAME_COUNT = 192;
const FRAME_RATE = 24;
const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 720;
const MOBILE_QUERY = '(max-width: 767px)';
const ZONES = ['left', 'center', 'right'];

const getFramePath = (zone, frameNumber) => {
	const basePath = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;

	return `${basePath}character/frames/${zone}/frame-${String(frameNumber).padStart(4, '0')}.webp`;
};

const loadFrame = (source) => new Promise((resolve, reject) => {
	const image = new Image();
	image.decoding = 'async';
	image.onload = () => resolve(image);
	image.onerror = reject;
	image.src = source;
});

export default function CharacterAnimation() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext('2d');

		if (!canvas || !context) {
			return undefined;
		}

		let animationFrameId = 0;
		let lastFrameTime = 0;
		let isDisposed = false;
		let currentZone = null;
		let currentFrame = 0;
		let animationMode = 'idle';
		let loadedFrames = null;
		const mediaQuery = window.matchMedia(MOBILE_QUERY);

		const drawFrame = (zone, frameIndex) => {
			const image = loadedFrames?.[zone]?.[frameIndex];

			if (image) {
				context.clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
				context.drawImage(image, 0, 0, FRAME_WIDTH, FRAME_HEIGHT);
			}
		};

		const setIdleFrame = () => {
			currentZone = 'left';
			currentFrame = 0;
			animationMode = 'idle';
			drawFrame('left', 0);
		};

		const animate = (timestamp) => {
			if (isDisposed) {
				return;
			}

			if (!lastFrameTime) {
				lastFrameTime = timestamp;
			}

			if (timestamp - lastFrameTime >= 1000 / FRAME_RATE) {
				lastFrameTime = timestamp;

				if (animationMode === 'forward' && currentZone) {
					currentFrame += 1;

					if (currentFrame >= FRAME_COUNT - 1) {
						currentFrame = FRAME_COUNT - 1;
						animationMode = 'hold';
					}

					drawFrame(currentZone, currentFrame);
				} else if (animationMode === 'return' && currentZone) {
					currentFrame -= 1;

					if (currentFrame <= 0) {
						setIdleFrame();
					} else {
						drawFrame(currentZone, currentFrame);
					}
				}
			}

			animationFrameId = window.requestAnimationFrame(animate);
		};

		const startZoneAnimation = (zone) => {
			if (!loadedFrames || !ZONES.includes(zone)) {
				return;
			}

			currentZone = zone;
			currentFrame = 0;
			animationMode = 'forward';
			lastFrameTime = 0;
			drawFrame(zone, currentFrame);
		};

		const returnToIdle = () => {
			if (animationMode === 'idle') {
				return;
			}

			animationMode = 'return';
			lastFrameTime = 0;
		};

		const getZoneFromPointer = (event) => {
			if (mediaQuery.matches) {
				return null;
			}

			const bounds = canvas.getBoundingClientRect();
			const horizontalPosition = (event.clientX - bounds.left) / bounds.width;

			if (horizontalPosition < 1 / 3) {
				return 'left';
			}

			if (horizontalPosition > 2 / 3) {
				return 'right';
			}

			return 'center';
		};

		const handlePointerMove = (event) => {
			const nextZone = getZoneFromPointer(event);

			if (nextZone && nextZone !== currentZone) {
				startZoneAnimation(nextZone);
			}
		};

		const handlePointerLeave = () => {
			returnToIdle();
		};

		const handleViewportChange = () => {
			if (mediaQuery.matches && loadedFrames) {
				startZoneAnimation('center');
			} else if (!mediaQuery.matches) {
				returnToIdle();
			}
		};

		const preloadFrames = async () => {
			try {
				const frames = await Promise.all(ZONES.map(async (zone) => {
					const zoneFrames = await Promise.all(
						Array.from({ length: FRAME_COUNT }, (_, index) => loadFrame(getFramePath(zone, index + 1))),
					);
					return [zone, zoneFrames];
				}));

				if (isDisposed) {
					return;
				}

				loadedFrames = Object.fromEntries(frames);
				canvas.width = FRAME_WIDTH;
				canvas.height = FRAME_HEIGHT;
				setIdleFrame();

				if (mediaQuery.matches) {
					startZoneAnimation('center');
				}
			} catch (error) {
				if (!isDisposed) {
					console.error('Unable to preload character animation frames.', error);
				}
			}
		};

		canvas.addEventListener('pointermove', handlePointerMove);
		canvas.addEventListener('pointerleave', handlePointerLeave);
		mediaQuery.addEventListener?.('change', handleViewportChange);
		window.requestAnimationFrame(animate);
		preloadFrames();

		return () => {
			isDisposed = true;
			window.cancelAnimationFrame(animationFrameId);
			canvas.removeEventListener('pointermove', handlePointerMove);
			canvas.removeEventListener('pointerleave', handlePointerLeave);
			mediaQuery.removeEventListener?.('change', handleViewportChange);
			loadedFrames = null;
		};
	}, []);

	return (
		<div
			style={{
				width: '100%',
				maxWidth: `${FRAME_WIDTH}px`,
				aspectRatio: `${FRAME_WIDTH} / ${FRAME_HEIGHT}`,
				margin: '0 auto',
				overflow: 'hidden',
			}}
		>
			<canvas
				ref={canvasRef}
				aria-label="Interactive character animation"
				style={{
					display: 'block',
					width: '100%',
					height: '100%',
				}}
			/>
		</div>
	);
}
