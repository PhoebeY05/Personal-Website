import type { JSX } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { experiences } from '@/data/experiences';
import { motion } from 'motion/react';
import Tag from '@/components/Tag';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';

export default function IndividualExperience(): JSX.Element {
	const { name: paramName } = useParams<{ name: string }>();

	const experience = experiences.find((exp) => exp.name.toLowerCase().replace(/\s+/g, '-') === paramName);

	if (!experience) return <Navigate to="/404" replace />;

	return (
		<main className="min-h-screen w-full text-brand-text p-6 md:p-12 flex justify-center">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-5xl w-full bg-brand-card backdrop-blur-xl border border-brand-muted rounded-3xl p-8 md:p-12 shadow-xl"
			>
				{/* Header: Name + Duration left, Role + Org right */}
				<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-6">
					{/* Left: Name + Duration */}
					<div className="flex flex-col items-start md:max-w-[60%] flex-shrink-0 gap-1">
						<h1 className="text-3xl md:text-5xl font-bold leading-tight text-brand-accent">{experience.name}</h1>
						<p className="text-sm md:text-base opacity-60">{experience.duration}</p>
					</div>

					{/* Right: Role + Organisation */}
					<div className="flex flex-col items-start md:items-end text-left md:text-right flex-1 gap-1">
						<span className="text-xl md:text-2xl font-semibold">
							<AnimatedShinyText>{experience.role}</AnimatedShinyText>
						</span>{' '}
						<h3 className="text-lg md:text-xl opacity-70">{experience.organisation}</h3>
					</div>
				</div>

				{/* Tags */}
				{experience.tags.length > 0 && (
					<div className="flex flex-wrap gap-2 mb-6">
						{experience.tags.map((tag, idx) => (
							<Tag key={idx} name={tag} index={idx} />
						))}
					</div>
				)}

				{/* Description */}
				<p className="text-base md:text-lg leading-relaxed mb-6">{experience.description}</p>

				{/* Tasks */}
				{experience.tasks.length > 0 && (
					<div className="mb-6">
						<h3 className="text-xl font-semibold mb-3">Key Contributions / Tasks:</h3>
						<ul className="list-disc list-inside space-y-2 text-base md:text-lg opacity-80">
							{experience.tasks.map((task, idx) => (
								<li key={idx}>{task}</li>
							))}
						</ul>
					</div>
				)}

				{/* Optional: Images */}
				{experience.images.length > 0 && (
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
						{experience.images.map((img, idx) => (
							<img
								key={idx}
								src={img}
								alt={`${experience.role} image ${idx + 1}`}
								className="rounded-xl shadow-md object-cover w-full h-64"
							/>
						))}
					</div>
				)}

				{/* Optional: Certificate */}
				{experience.certificate && (
					<div className="mt-8">
						<h3 className="text-xl font-semibold mb-2">Certificate:</h3>
						<a
							href={experience.certificate}
							target="_blank"
							rel="noopener noreferrer"
							className="text-brand-accent hover:underline"
						>
							View Certificate
						</a>
					</div>
				)}
			</motion.div>
		</main>
	);
}
