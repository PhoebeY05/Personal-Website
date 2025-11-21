import Tag from '@/components/Tag';
import Video from '@/components/Video';
import { Code, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { isDemoVideo, projects } from '../data/projects';

export default function ProjectPage() {
	const { name: paramName } = useParams<{ name: string }>();

	const project = projects.find((p) => p.name.toLowerCase().replace(/\s+/g, '-') === paramName);

	const demoVideos = project?.demo.filter(isDemoVideo) ?? [];
	const demoImages = project?.demo.filter((demo) => !isDemoVideo(demo)) ?? [];

	const [imageDimensions, setImageDimensions] = useState<Array<{ width: number; height: number }>>([]);

	useEffect(() => {
		const loadImageDimensions = async () => {
			const dimensions = await Promise.all(
				demoImages.map((src) => {
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

		if (demoImages.length > 0) {
			loadImageDimensions();
		}
	}, [demoImages]);

	// Determine grid layout based on image aspect ratios
	const getGridLayout = () => {
		if (imageDimensions.length === 0) return 'grid-cols-1 sm:grid-cols-2';

		const aspectRatios = imageDimensions.map((dim) => dim.width / dim.height);
		const avgAspectRatio = aspectRatios.reduce((sum, ratio) => sum + ratio, 0) / aspectRatios.length;
		const hasPortraitImages = aspectRatios.some((ratio) => ratio < 0.8); // height > width * 1.25

		if (demoImages.length === 1) {
			return 'grid-cols-1 max-w-md mx-auto';
		} else if (hasPortraitImages && avgAspectRatio < 1) {
			// Portrait images - use fewer columns
			return demoImages.length <= 3
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

	if (!project) {
		return <Navigate to="/projects" replace />;
	}

	return (
		<main className="relative h-full text-brand-text p-6 md:p-12 z-10">
			<div className="mx-auto max-w-6xl shadow-2xl">
				<div className="max-w-4xl mx-auto px-6 py-12 bg-brand-bg rounded-2xl">
					<div className="flex justify-between items-start mb-8">
						{/* Title Section */}
						<div className="mb-8">
							<h1 className="text-3xl font-bold text-brand-text mb-2">{project.name}</h1>
							<p className="text-brand-muted">{project.month}</p>
						</div>
						{/* Links */}
						<div className="flex flex-wrap items-center gap-5">
							{project.link && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-blue-600 font-extrabold hover:underline text-lg"
								>
									<ExternalLink size={18} />
									Visit
								</a>
							)}
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-brand-accent font-extrabold hover:underline text-lg"
								>
									<Code size={18} />
									Source Code
								</a>
							)}
						</div>
					</div>

					{/* Description */}
					<p className="text-lg text-brand-text leading-relaxed mb-8">{project.description}</p>

					{/* Tech Stack */}
					<div className="mb-10">
						<h2 className="text-xl font-semibold text-brand-text mb-3">Technologies Used</h2>
						<div className="flex flex-wrap gap-2">
							{project.tags.map((tag, index) => (
								<Tag name={tag} index={index} />
							))}
						</div>
					</div>

					{/* Features */}
					{/* {features.length > 0 && (
						<div className="mb-10">
							<h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Features</h2>
							<ul className="space-y-2 list-disc pl-6 text-zinc-700 dark:text-zinc-300">
								{features.map((f, i) => (
									<li key={i}>{f}</li>
								))}
							</ul>
						</div>
					)} */}
					{/* Images / Videos */}
					{demoVideos.length > 0 && (
						<div className="mb-12">
							<h2 className="text-xl font-semibold text-brand-text mb-4">Videos</h2>
							<div>
								{demoVideos.map((video, i) => (
									<div key={i}>
										<Video src={video} />
									</div>
								))}
							</div>
						</div>
					)}
					{demoImages.length > 0 && (
						<div className="mb-12">
							<h2 className="text-xl font-semibold text-brand-text mb-4">Screenshots</h2>
							<div className={`grid gap-6 ${getGridLayout()}`}>
								{demoImages.map((img, i) => (
									<img
										key={i}
										src={img}
										alt={`${project.name} screenshot ${i + 1}`}
										className="rounded-xl h-64 w-full object-contain"
									/>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
