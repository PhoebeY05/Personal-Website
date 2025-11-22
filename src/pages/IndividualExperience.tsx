import type { JSX } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { experiences } from '@/data/experiences';
import { motion } from 'motion/react';
import Tag from '@/components/Tag';

export default function IndividualExperience(): JSX.Element {
	const { name: paramName } = useParams<{ name: string }>();

	// Find the experience matching the param (slugified)
	const experience = experiences.find((exp) => exp.name.toLowerCase().replace(/\s+/g, '-') === paramName);

	if (!experience) return <Navigate to="/404" replace />;

	return (
		<main className="min-h-screen w-full bg-brand-bg text-brand-text p-6 md:p-12 flex justify-center">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-4xl w-full bg-brand-card/70 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl"
			>
				{/* Header */}
				<h1 className="text-4xl md:text-5xl font-bold mb-2">{experience.role}</h1>
				<h2 className="text-xl md:text-2xl font-medium opacity-80 mb-2">{experience.organisation}</h2>
				<p className="text-sm md:text-base opacity-70 mb-4">{experience.duration}</p>

				{/* Tags */}
				<div className="flex flex-wrap gap-2 mb-6">
					{experience.tags.map((tag, idx) => (
						<Tag name={tag} index={idx} />
					))}
				</div>

				{/* Description */}
				<p className="text-base md:text-lg leading-relaxed mb-6">{experience.description}</p>

				{/* Tasks */}
				{experience.tasks.length > 0 && (
					<div>
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
							className="text-indigo-600 hover:underline"
						>
							View Certificate
						</a>
					</div>
				)}
			</motion.div>
		</main>
	);
}
