import type { JSX } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '@/components/ProjectCard';
import { useEffect, useState } from 'react';

export default function Projects(): JSX.Element {
	const [visibleCards, setVisibleCards] = useState<number[]>([]);

	const sortedProjects = projects.sort((a, b) => {
		const dateA = new Date(a.month);
		const dateB = new Date(b.month);
		return dateB.getTime() - dateA.getTime();
	});

	// Staggered fade-in animation
	useEffect(() => {
		sortedProjects.forEach((_, index) => {
			setTimeout(() => {
				setVisibleCards((prev) => [...prev, index]);
			}, index * 150);
		});
	}, [sortedProjects]);

	return (
		<main className="relative min-h-screen p-6 md:p-12 text-brand-text z-10">
			<div className="mx-auto max-w-6xl relative z-20">
				{/* Section Header */}
				<section className="text-center mb-12">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">My Projects</h1>
					<div className="h-1 w-24 mx-auto bg-brand-accent rounded-full mb-6 animate-pulse-fast"></div>
					<p className="text-brand-text text-lg md:text-xl">
						A showcase of web and app projects I've built with care and creativity.
					</p>
				</section>

				{/* Projects List */}
				{sortedProjects.map((project, index) => (
					<div
						key={project.name}
						className={`transition-all duration-500 ease-out transform ${
							visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
						} hover:-translate-y-1 hover:shadow-xl rounded-2xl`}
					>
						<ProjectCard {...project} />
					</div>
				))}
			</div>
		</main>
	);
}
