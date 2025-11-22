import { getCompetitionsFromSkill, type Competition } from '@/data/competitions';
import type { Experience } from '@/data/experiences';
import { getExperiencesFromSkill, parseDateFromDuration } from '@/data/experiences';
import type { Project } from '@/data/projects';
import { getProjectsFromSkill } from '@/data/projects';
import { skills } from '@/data/skills';
import { motion } from 'motion/react';
import { Link, Navigate, useParams } from 'react-router-dom';

// Detect Experience by presence of 'duration'
const isExperienceEntity = (item: Project | Experience | Competition): item is Experience => 'duration' in item;

// helper: extract a comparable start date from either Project.month or Experience.duration
const getStartDate = (item: Project | Experience | Competition): Date => {
	if (isExperienceEntity(item)) {
		const d = parseDateFromDuration(item.duration);
		return isNaN(d.getTime()) ? new Date(0) : d;
	}
	// item.month may be undefined, fall back to epoch (new Date(0))
	const d = item.month ? new Date(item.month) : new Date(0);
	return isNaN(d.getTime()) ? new Date(0) : d;
};

export default function IndividualSkill() {
	const { name: paramName } = useParams<{ name: string }>();

	const skill = skills.find((s) => s.name.toLowerCase().replace(/\s+/g, '-') === paramName);
	if (!skill) return <Navigate to="/404" replace />;

	const relatedProjects = getProjectsFromSkill(skill.name);
	const relatedExperiences = getExperiencesFromSkill(skill.name);
	const relatedCompetitions = getCompetitionsFromSkill(skill.name);

	// unified list sorted by start date (newest first)
	const related: (Project | Experience | Competition)[] = [
		...relatedProjects,
		...relatedExperiences,
		...relatedCompetitions,
	].sort((a, b) => getStartDate(b).getTime() - getStartDate(a).getTime());
	const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

	return (
		<main className="relative min-h-screen text-brand-text p-6 md:p-12 z-10">
			<div className="mx-auto max-w-5xl">
				<motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					<section className="p-16 text-center bg-gradient-to-b from-brand-react to-brand-secondary rounded-3xl mb-12">
						<h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">{skill.name}</h1>
						<p className="text-lg max-w-2xl opacity-80 mx-auto mb-6">{skill.description}</p>
						<span className="px-4 py-1 rounded-full bg-white/20 border border-brand-card backdrop-blur-md text-sm font-medium capitalize">
							Level: {skill.level}
						</span>
					</section>
				</motion.section>

				{/* --- RESPONSIVE ZIG-ZAG TIMELINE --- */}
				<div className="relative ml-0 md:ml-8">
					{/* Vertical line for desktop */}
					<div className="hidden md:block absolute top-0 left-1/2 w-[2px] h-full bg-brand-accent"></div>

					{related.map((r, index) => {
						const isLeft = index % 2 === 0;
						return (
							<motion.div
								key={`${r.name}-${isExperienceEntity(r) ? 'exp' : 'other'}-${index}`}
								initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.15 }}
								className="relative mb-16 w-full flex flex-col md:flex-row md:justify-between items-center md:items-start"
							>
								{/* Marker and date */}
								<div className="flex flex-col items-center md:absolute md:top-2 md:left-1/2 md:-translate-x-1/2">
									<div className="w-3 h-3 md:w-4 md:h-4 bg-brand-accent rounded-full border-2 border-brand-card z-10"></div>
									<span
										className={`text-sm font-extrabold text-brand-text mt-2 md:mt-0 md:absolute md:top-0 md:whitespace-nowrap ${
											!isLeft ? 'md:right-6' : 'md:left-6'
										}`}
									>
										{!isExperienceEntity(r) ? r.month : r.duration}
									</span>
								</div>
								{/* Card */}
								<div
									className={`w-full md:w-5/12 mt-4 md:mt-0 ${
										isLeft ? 'md:mr-auto md:ml-0 text-left md:text-right' : 'md:ml-auto md:mr-0 text-left'
									}`}
								>
									<Link
										to={!isExperienceEntity(r) ? `/projects/${toSlug(r.name)}` : `/experience/${toSlug(r.name)}`}
										className="group block"
									>
										<div className="p-6 rounded-2xl bg-brand-card backdrop-blur border border-brand-react shadow-sm transition-transform duration-200 group-hover:scale-[1.02]">
											<h3 className="text-xl font-semibold">{r.name}</h3>
											<p className="opacity-75 mt-2">{r.description}</p>
										</div>
									</Link>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</main>
	);
}
