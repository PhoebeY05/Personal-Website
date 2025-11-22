import { useState, useEffect } from 'react';
import Video from './Video';

export default function MediaSection({ images = [], videos = [] }: { images?: string[]; videos?: string[] }) {
	const [imageDimensions, setImageDimensions] = useState<Array<{ width: number; height: number }>>([]);

	useEffect(() => {
		const loadImageDimensions = async () => {
			const dimensions = await Promise.all(
				images.map((src) => {
					return new Promise<{ width: number; height: number }>((resolve) => {
						const img = new Image();
						img.onload = () => resolve({ width: img.width, height: img.height });
						img.onerror = () => resolve({ width: 1, height: 1 }); // fallback
						img.src = src;
					});
				})
			);
			setImageDimensions(dimensions);
		};

		if (images.length > 0) {
			loadImageDimensions();
		}
	}, [images]);

	// Determine grid layout based on image aspect ratios
	const getGridLayout = () => {
		if (imageDimensions.length === 0) return 'grid-cols-1 sm:grid-cols-2';

		const aspectRatios = imageDimensions.map((dim) => dim.width / dim.height);
		const avgAspectRatio = aspectRatios.reduce((sum, ratio) => sum + ratio, 0) / aspectRatios.length;
		const hasPortraitImages = aspectRatios.some((ratio) => ratio < 0.8); // height > width * 1.25

		if (images.length === 1) {
			return 'grid-cols-1 max-w-md mx-auto';
		} else if (hasPortraitImages && avgAspectRatio < 1) {
			// Portrait images - use fewer columns
			return images.length <= 3
				? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
				: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4';
		} else if (avgAspectRatio > 1.5) {
			// Wide landscape images - use fewer columns
			return 'grid-cols-1 max-w-2xl mx-auto';
		} else {
			// Square or normal landscape - use standard layout
			return 'grid-cols-1 sm:grid-cols-2';
		}
	};

	return images.length === 0 || videos.length === 0 ? (
		<>
			{videos.length > 0 && (
				<div className="mb-12">
					<h2 className="text-xl font-semibold text-brand-text mb-4">Videos</h2>
					<div>
						{videos.map((video, i) => (
							<div key={i}>
								<video src={video} controls className="w-full rounded-xl" />
							</div>
						))}
					</div>
				</div>
			)}
			{images.length > 0 && (
				<div className="mb-12">
					<h2 className="text-xl font-semibold text-brand-text mb-4">Screenshots</h2>
					<div className={`grid gap-6 ${getGridLayout()}`}>
						{images.map((img, i) => (
							<img key={i} src={img} alt={`${img}`} className="rounded-xl h-64 w-full object-contain" />
						))}
					</div>
				</div>
			)}
		</>
	) : (
		<div className="mb-12">
			<h2 className="text-xl font-semibold text-brand-text mb-4">Demo</h2>

			<div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
				{/* --- LEFT: Large Video Area --- */}
				<div className="xl:col-span-2 space-y-6">
					{videos.length > 0 && (
						<div>
							<h3 className="text-lg font-semibold mb-2">Video</h3>

							{videos.map((video, i) => (
								<div key={i} className="w-full">
									<Video src={video} />
								</div>
							))}
						</div>
					)}
				</div>

				{/* --- RIGHT: Screenshot Column --- */}
				<div className="space-y-4">
					<h3 className="text-lg font-semibold mb-2">Screenshots</h3>

					{images.map((img, i) => (
						<img key={i} src={img} alt={img} className="w-full rounded-xl object-contain shadow-md" />
					))}
				</div>
			</div>
		</div>
	);
}
