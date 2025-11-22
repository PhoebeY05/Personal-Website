import Tag from '@/components/Tag';
import { competitions } from '@/data/competitions';
import { motion } from 'framer-motion';

export default function Competitions() {
	// Split competitions by importance
	const highlighted = competitions.filter((c) => c.result && c.result !== 'Participation');
	const participated = competitions.filter((c) => !c.result || c.result === 'Participation');

	return (
		<main className="max-w-6xl mx-auto p-6 md:p-12 text-brand-text">
			<h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Competitions</h1>

			{/* Highlighted Competitions */}
			<section className="mb-16">
				<h2 className="text-2xl font-semibold mb-6">Noteworthy Achievements</h2>

				<div className="grid md:grid-cols-2 gap-10">
					{highlighted.map((comp) => (
						<motion.div
							key={comp.name}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
							className="bg-brand-card border border-brand-secondary backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							{/* Card Header */}
							<div className="flex items-start justify-between">
								<h3 className="text-xl font-bold">{comp.name}</h3>
								<span className="text-sm opacity-70">{comp.month}</span>
							</div>

							{/* Result */}
							<p className="mt-2 text-brand-muted text-lg font-semibold">{comp.result}</p>

							{/* Description */}
							<p className="text-sm mt-3 opacity-90">{comp.description}</p>

							{/* Tags */}
							{comp.tags && comp.tags.length > 0 && (
								<div className="flex flex-wrap gap-2 mt-4">
									{comp.tags.map((tag, i) => (
										<Tag index={i} key={tag} name={tag} />
									))}
								</div>
							)}

							{/* Buttons */}
							<div className="flex gap-4 mt-5">
								{comp.link && (
									<a href={comp.link} target="_blank" className="text-brand-accent hover:underline text-sm">
										View Writeup
									</a>
								)}
								{comp.certificate && (
									<a href={comp.certificate} target="_blank" className="text-brand-accent hover:underline text-sm">
										Certificate
									</a>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* 📄 Participation Only */}
			<section>
				<h2 className="text-2xl font-semibold mb-6">Other Competitions</h2>

				<div className="space-y-5">
					{participated.map((comp) => (
						<motion.div
							key={comp.name}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
							className="flex items-center justify-between bg-white/5 dark:bg-white/10 border border-white/5 p-4 rounded-xl"
						>
							<div>
								<h3 className="font-medium text-lg">{comp.name}</h3>
								<p className="text-sm opacity-70">{comp.month}</p>
							</div>

							{comp.competitionLink && (
								<a href={comp.competitionLink} target="_blank" className="text-brand-accent text-sm hover:underline">
									View
								</a>
							)}
						</motion.div>
					))}
				</div>
			</section>
		</main>
	);
}
