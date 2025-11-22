import { parseDateFromDuration, type Experience } from '@/data/experiences';
import { Link } from 'react-router-dom';

interface ExperienceListProps {
	experiences: Experience[];
	index: number; // no longer used for background switching
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
	const toExperienceSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

	const sortedExperiences = [...experiences].sort(
		(a, b) => parseDateFromDuration(b.duration).getTime() - parseDateFromDuration(a.duration).getTime()
	);

	return (
		<div className="relative w-full max-w-4xl mx-auto px-6 py-12">
			{/* Giant left accent */}
			<div className="absolute left-12 top-0 bottom-0 w-1 bg-brand-accent rounded-full" />
			<div className="flex flex-col space-y-12 relative ml-16">
				{sortedExperiences.map((exp, i) => (
					<Link key={i} to={`/experience/${toExperienceSlug(exp.name)}`} className="group block">
						<div className="relative">
							<div className="absolute -left-7 top-6 w-4 h-4 rounded-full bg-brand-accent border-2 border-brand-card shadow-md" />
							<div className="relative w-full p-6 md:p-8 rounded-2xl bg-brand-card backdrop-blur-xl shadow-lg transition-colors duration-300">
								{/* Role / Organisation */}
								<h2 className="text-2xl font-semibold">{exp.role}</h2>
								<h3 className="text-lg font-medium opacity-70 mb-2">{exp.organisation}</h3>
								<div className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-brand-bg border-brand-react border-2 backdrop-blur-sm">
									{exp.duration}
								</div>
								<p className="text-base opacity-80 leading-relaxed">{exp.description}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
