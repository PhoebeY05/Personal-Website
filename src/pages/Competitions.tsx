import PillFilter from '@/components/PillFilter';
import Tag from '@/components/Tag';
import { important, notImportant, type Competition } from '@/data/competitions';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Competitions() {
	const [filter, setFilter] = useState<'all' | 'ctf' | 'hackathon'>('all');

	const filterComps = (arr: Competition[]) => {
		if (filter === 'all') return arr;
		return arr.filter((c) => c.type === filter);
	};

	const filteredImportant = filterComps(important);
	const filteredNotImportant = filterComps(notImportant);

	return (
		<main className="max-w-6xl mx-auto p-6 md:p-12 text-brand-text">
			<h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Competitions</h1>
			{/* Toggle Filter */}
			<div className="mb-10">
				<PillFilter
					options={[
						{ key: 'all', label: 'All' },
						{ key: 'hackathon', label: 'Hackathons' },
						{ key: 'ctf', label: 'CTFs' },
					]}
					selected={filter}
					onSelect={(key) => setFilter(key as 'ctf' | 'hackathon' | 'all')}
				/>
			</div>

			{/* Highlighted Competitions */}
			<section className="mb-16">
				<h2 className="text-2xl font-semibold mb-6">Noteworthy Achievements</h2>

				<div className="grid md:grid-cols-2 gap-10">
					{filteredImportant.length > 0 &&
						filteredImportant.map((comp, i) => (
							<motion.div
								key={`${comp.name}-${filter}-${i}`} // unique key
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4 }}
								className="bg-brand-card border border-brand-secondary backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								{/* Card Header */}
								<div className="flex items-start justify-between">
									{comp.competitionLink ? (
										<a href={comp.competitionLink} target="_blank" className="hover:underline text-sm">
											<h3 className="text-xl font-bold">{comp.name}</h3>
										</a>
									) : (
										<h3 className="text-xl font-bold">{comp.name}</h3>
									)}
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
								<div className="flex gap-3 mt-6">
									{comp.link && (
										<a
											href={comp.link}
											target="_blank"
											className="
											flex items-center gap-2 px-4 py-2 
											border border-brand-accent/40 text-brand-accent 
											rounded-full text-sm font-semibold
											hover:bg-brand-accent/10 hover:border-brand-accent 
											transition-all duration-300
										"
										>
											<span>Writeup</span>
										</a>
									)}

									{comp.certificate && (
										<a
											href={comp.certificate}
											target="_blank"
											className="
											flex items-center gap-2 px-4 py-2
											border border-brand-accent/40 text-brand-accent 
											rounded-full text-sm font-semibold
											hover:bg-brand-accent/10 hover:border-brand-accent
											transition-all duration-300
										"
										>
											<span>Certificate</span>
										</a>
									)}
								</div>
							</motion.div>
						))}
				</div>
			</section>

			{/* Participation Only */}
			<section className="bg-brand-secondary p-4 rounded-md">
				<h2 className="text-2xl font-semibold mb-6">Other Competitions</h2>

				<div className="space-y-5">
					{filteredNotImportant.length > 0 &&
						filteredNotImportant.map((comp) => (
							<motion.div
								key={comp.name}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								className="
									flex items-center justify-between 
									bg-brand-card/60 dark:bg-white/10
									border border-white/10 
									p-5 rounded-xl shadow-sm
									hover:shadow-md hover:bg-brand-card/80
									transition-all duration-300
								"
							>
								<div>
									<h3 className="font-semibold text-lg">{comp.name}</h3>
									<p className="text-sm opacity-70">{comp.month}</p>
								</div>

								<div className="flex gap-4">
									{comp.link && (
										<a
											href={comp.link}
											target="_blank"
											className="text-brand-accent text-sm font-semibold hover:underline"
										>
											View Product
										</a>
									)}

									{comp.competitionLink && (
										<a
											href={comp.competitionLink}
											target="_blank"
											className="text-brand-accent text-sm font-semibold hover:underline"
										>
											See More
										</a>
									)}
								</div>
							</motion.div>
						))}
				</div>
			</section>
		</main>
	);
}
