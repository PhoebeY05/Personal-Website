import { getProjectsFromSkill } from '@/data/projects';
import { skills } from '@/data/skills';
import { motion } from 'motion/react';
import { Link, Navigate, useParams } from 'react-router-dom';

export default function IndividualSkill() {
	const { name: paramName } = useParams<{ name: string }>();

	// Match param (e.g., "web-development") to real skill name
	const skill = skills.find((s) => s.name.toLowerCase().replace(/\s+/g, '-') === paramName);

	if (!skill) return <Navigate to="/404" replace />;

	const relatedProjects = getProjectsFromSkill(skill.name);
	const toProjectSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

	return (
		<main className="relative min-h-screen text-brand-text p-6 md:p-12 z-10">
			<div className="mx-auto max-w-5xl">
				<motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
					{/* --- SKILL HEADER --- */}
					<section className="py-16 text-center bg-gradient-to-b from-brand-react to-brand-secondary rounded-3xl mb-12">
						<h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">{skill.name}</h1>

						<p className="text-lg max-w-2xl opacity-80 mx-auto mb-6">{skill.description}</p>

						<span className="px-4 py-1 rounded-full bg-white/20 border border-brand-card backdrop-blur-md text-sm font-medium capitalize">
							Level: {skill.level}
						</span>
					</section>
				</motion.section>

				{/* --- PROJECTS SECTION --- */}
				<div className="grid md:grid-cols-2 gap-8 mt-12">
					{relatedProjects.map((p) => (
						<Link to={`/projects/${toProjectSlug(p.name)}`} className="block">
							<motion.div
								key={p.name}
								whileHover={{ scale: 1.02 }}
								className="p-6 rounded-2xl bg-brand-card backdrop-blur border border-brand-react shadow-sm"
							>
								<h3 className="text-xl font-semibold">{p.name}</h3>
								<p className="opacity-75 mt-2">{p.description}</p>
							</motion.div>
						</Link>
					))}
				</div>
			</div>
		</main>
	);
}
