import { Code, ExternalLink, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tag from './Tag';

type ProjectCardProps = {
	name: string;
	description: string;
	month: string;
	link?: string;
	github?: string;
	demo?: string[];
	tags: string[];
};

export default function ProjectCard({ name, description, month, link, github, demo = [], tags }: ProjectCardProps) {
	const projectSlug = name.toLowerCase().replace(/\s+/g, '-');

	return (
		<div className="group rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-brand-card my-4">
			{/* Title + Date */}
			<div className="flex items-start justify-between mb-3">
				<h3 className="text-xl font-semibold text-brand-text group-hover:text-brand-accent transition-colors">
					<Link to={`/projects/${projectSlug}`}>{name}</Link>
				</h3>
				<span className="text-sm text-brand-muted">{month}</span>
			</div>

			{/* Description */}
			<p className="text-sm text-brand-text mb-4 leading-relaxed">{description}</p>

			{/* Tags */}
			<div className="flex flex-wrap gap-2 mb-4">
				{tags.map((tag, index) => (
					<Tag name={tag} index={index} />
				))}
			</div>

			{/* Footer */}
			<div className="flex items-center gap-4 pt-2">
				{github && (
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1 text-sm text-brand-accent hover:underline"
					>
						<Code size={18} />
						Source Code
					</a>
				)}
				{link && (
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
					>
						<ExternalLink size={16} />
						Visit
					</a>
				)}

				{demo.length > 0 && (
					<div className="flex gap-3">
						<a
							href={name}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-sm text-purple-600 hover:underline"
						>
							<PlayCircle size={16} />
							Demo
						</a>
					</div>
				)}
			</div>
		</div>
	);
}
