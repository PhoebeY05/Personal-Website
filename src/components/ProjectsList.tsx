import type { Project } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface ProjectsListProps {
	projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
	return (
		<div>
			{projects.map((project) => (
				<ProjectCard key={project.name} {...project} />
			))}
		</div>
	);
}
