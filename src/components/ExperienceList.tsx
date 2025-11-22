import type { Experience } from '@/data/experiences';

interface ExperienceListProps {
	experiences: Experience[];
}

// Helper to parse the first year/month from duration
const parseDateFromDuration = (duration: string): Date => {
	// Example duration: "May 2025 – Aug 2024" or "February 2023"
	const parts = duration.split('–').map((p) => p.trim());
	const firstPart = parts[0];

	// Try to parse month and year
	const date = new Date(firstPart);
	if (!isNaN(date.getTime())) return date;

	// If parsing fails (like only month-year string), fallback to current date
	return new Date();
};

export default function ExperienceList({ experiences }: ExperienceListProps) {
	// Sort experiences descending by first date in duration
	const sortedExperiences = [...experiences].sort(
		(a, b) => parseDateFromDuration(b.duration).getTime() - parseDateFromDuration(a.duration).getTime()
	);

	return (
		<div className="relative w-full max-w-4xl mx-auto px-6 py-12">
			{/* Giant left accent */}
			<div className="absolute left-12 top-0 bottom-0 w-1 bg-brand-accent rounded-full" />

			<div className="flex flex-col space-y-12 relative ml-16">
				{sortedExperiences.map((exp, i) => (
					<div
						key={i}
						className="relative w-full p-6 md:p-8 rounded-2xl bg-brand-card/80 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl transition"
					>
						{/* Dot connecting to accent */}
						<div className="absolute -left-7 top-6 w-4 h-4 rounded-full bg-brand-accent border-2 border-brand-card shadow-md" />

						{/* Role / Organisation */}
						<h2 className="text-2xl font-semibold">{exp.role}</h2>
						<h3 className="text-lg font-medium opacity-70 mb-2">{exp.organisation}</h3>

						{/* Duration */}
						<div className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-white/20 border border-brand-react/50 backdrop-blur-sm">
							{exp.duration}
						</div>

						{/* Description */}
						<p className="text-base opacity-80 leading-relaxed">{exp.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
