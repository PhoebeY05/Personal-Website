import { parseDateFromDuration, type Experience } from '@/data/experiences';
import { Link } from 'react-router-dom';

interface ExperienceListProps {
	experiences: Experience[];
	index: number;
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
					<Link key={i} to={`/experience/${toExperienceSlug(exp.name)}`} className="group block will-change-transform">
						<div className="relative transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.02]">
							<div
								className="absolute -left-7 top-6 w-4 h-4 rounded-full bg-brand-accent border-2 border-brand-card shadow-md
									transition-all duration-300 ease-out group-hover:scale-125 group-hover:bg-brand-react"
							/>
							<div
								className="relative w-full p-6 md:p-8 rounded-2xl bg-brand-card backdrop-blur-xl shadow-lg
									transition-all duration-300 ease-out group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-brand-react"
							>
								{/* Role / Organisation */}
								<h2 className="text-2xl font-semibold transition-colors duration-300">{exp.role}</h2>
								<h3 className="text-lg font-medium opacity-70 mb-2">{exp.organisation}</h3>
								<div
									className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-brand-bg border-brand-react border-2 backdrop-blur-sm
										transition-colors duration-300 group-hover:bg-brand-react group-hover:border-0"
								>
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
