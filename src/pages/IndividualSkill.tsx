import ProjectsList from '@/components/ProjectsList';
import { getProjectsFromSkill } from '@/data/projects';
import { skills } from '@/data/skills';
import { Navigate, useParams } from 'react-router-dom';

export default function IndividualSkill() {
	const { name: paramName } = useParams<{ name: string }>();

	const skill = skills.find((s) => s.name.toLowerCase().replace(/\s+/g, '-') === paramName);

	if (!skill) {
		return <Navigate to="/404" replace />;
	}

	const relatedProjects = getProjectsFromSkill(skill!.name);

	return (
		<main className="relative min-h-screen text-brand-text p-6 md:p-12 z-10">
			<div className="mx-auto max-w-6xl">
				<section className="text-center mb-12">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">{skill.name}</h1>
				</section>
				<ProjectsList projects={relatedProjects} />
			</div>
		</main>
	);
}
