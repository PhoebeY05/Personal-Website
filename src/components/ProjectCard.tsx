import { ExternalLink, PlayCircle } from 'lucide-react';

type ProjectCardProps = {
	name: string;
	description: string;
	month: string;
	link?: string;
	demo?: string[];
	tags: string[];
};

export default function ProjectCard({ name, description, month, link, demo = [], tags }: ProjectCardProps) {
	return (
		<div className="group rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-brand-card my-4">
			{/* Title + Date */}
			<div className="flex items-start justify-between mb-3">
				<h3 className="text-xl font-semibold text-brand-text group-hover:text-brand-accent transition-colors">
					{name}
				</h3>
				<span className="text-sm text-brand-muted">{month}</span>
			</div>

			{/* Description */}
			<p className="text-sm text-brand-text mb-4 leading-relaxed">{description}</p>

			{/* Tags */}
			<div className="flex flex-wrap gap-2 mb-4">
				{tags.map((tag, index) => (
					<span
						key={index}
						className="text-xs px-2 py-1 rounded-full bg-brand-secondary text-brand-text border border-brand-accent"
					>
						{tag}
					</span>
				))}
			</div>

			{/* Footer */}
			<div className="flex items-center gap-4 pt-2">
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
