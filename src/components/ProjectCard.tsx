import { isDemoVideo } from '@/data/projects';
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
	const demoVideos = demo.filter(isDemoVideo) ?? [];

	return (
		<div className="group rounded-2xl border border-gray-200 bg-brand-card shadow-md hover:shadow-xl transition-all duration-300 p-6 my-5 transform hover:-translate-y-1 hover:scale-[1.02] motion-reduce:transform-none">
			{/* Title + Date */}
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-2xl font-semibold text-brand-text group-hover:text-brand-accent transition-colors">
					<Link to={`/projects/${projectSlug}`}>{name}</Link>
				</h3>
				<span className="text-sm text-brand-muted">{month}</span>
			</div>

			{/* Description */}
			<p className="text-sm text-brand-text mb-4 leading-relaxed">{description}</p>

			{/* Tags */}
			<div className="flex flex-wrap gap-2 mb-6">
				{tags.map((tag, index) => (
					<Tag key={index} name={tag} index={index} />
				))}
			</div>

			{/* Footer Links */}
			<div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
				{github && (
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-3 py-1.5 text-brand-text rounded-lg hover:scale-110 transition-transform duration-200"
						onClick={(e) => e.preventDefault()}
					>
						<Code size={16} />
						Source
					</a>
				)}
				{link && (
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-3 py-1.5 text-indigo-600 rounded-lg hover:scale-110 transition-transform duration-200"
						onClick={(e) => e.preventDefault()}
					>
						<ExternalLink size={16} />
						Visit
					</a>
				)}
				{demoVideos.length === 1 && (
					<a
						href={demoVideos[0]}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-3 py-1.5 text-purple-600 rounded-lg hover:scale-110 transition-transform duration-200"
						onClick={(e) => e.preventDefault()}
					>
						<PlayCircle size={16} />
						Demo
					</a>
				)}
			</div>
		</div>
	);
}
