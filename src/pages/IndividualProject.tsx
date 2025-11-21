import Tag from '@/components/Tag';
import Video from '@/components/Video';
import { Code, ExternalLink } from 'lucide-react';
import { Navigate, useParams } from 'react-router-dom';
import { isDemoVideo, projects } from '../data/projects';

export default function ProjectPage() {
	const { name: paramName } = useParams<{ name: string }>();

	const project = projects.find((p) => p.name.toLowerCase().replace(/\s+/g, '-') === paramName);

	const demoVideos = project?.demo.filter(isDemoVideo) ?? [];
	const demoImages = project?.demo.filter((demo) => !isDemoVideo(demo)) ?? [];

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
							<h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Videos</h2>
							<div className="grid sm:grid-cols-2 gap-6">
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
							<h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Screenshots</h2>
							<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
								{demoImages.map((img, i) => (
									<img
										key={i}
										src={img}
										alt={`${project.name} screenshot ${i + 1}`}
										className="rounded-xl border shadow-sm"
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
