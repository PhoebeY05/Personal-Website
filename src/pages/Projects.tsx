import type { JSX } from 'react';
import ProjectsList from '../components/ProjectsList';
import { projects } from '../data/projects';

export default function Projects(): JSX.Element {
	const sortedProjects = projects.sort((a, b) => {
		const dateA = new Date(a.month);
		const dateB = new Date(b.month);
		return dateB.getTime() - dateA.getTime();
	});
	return (
		<main className="relative min-h-screen text-brand-text p-6 md:p-12 z-10">
			<div className="mx-auto max-w-6xl">
				<section className="text-center mb-12">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">My Projects</h1>
				</section>
				<ProjectsList projects={sortedProjects} />
			</div>
		</main>
	);
}
