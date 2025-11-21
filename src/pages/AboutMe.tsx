import { NumberTicker } from '@/components/ui/number-ticker';
import type { JSX } from 'react';
import Sketch from '../assets/Sketch.png'; // Profile image
import Placeholder from '../assets/placeholder.png';
import SkillProgress from '../components/SkillProgress';
import { TypingAnimation } from '../components/ui/typing-animation';
import { skills, type Skill } from '../data/skills';

export default function AboutMe(): JSX.Element {
	// group skills by type
	const grouped = skills.reduce<Record<string, Skill[]>>((acc, s) => {
		(acc[s.type] ||= []).push(s);
		return acc;
	}, {});

	const types = Object.keys(grouped);

	return (
		<main className="min-h-screen bg-brand-bg text-brand-text p-6 md:p-12">
			<div className="mx-auto max-w-6xl">
				{/* Hero Section */}
				<section className="text-center mb-12">
					<h1 className="text-5xl md:text-6xl font-bold mb-2">Hi, I'm Phoebe! 👋</h1>
					<TypingAnimation className="text-2xl font-bold mb-6 text-center md:text-left" typeSpeed={50}>
						Aspiring product creator exploring the intersection of technology and practical solutions
					</TypingAnimation>
				</section>

				{/* About Section: Two-column layout */}
				<section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-8">
					{/* Left column: Profile card */}
					<aside className="md:col-span-1">
						<div>
							<img
								src={Sketch}
								alt="Profile"
								loading="lazy"
								className="h-full rounded-lg mb-4 object-cover"
								onError={(e) => {
									console.warn('Profile image failed to load, using placeholder');
									(e.currentTarget as HTMLImageElement).src = Placeholder;
								}}
							/>
						</div>
					</aside>

					{/* Right column: About paragraph */}
					<article className="md:col-span-2">
						<div className="bg-brand-card rounded-xl p-6 shadow-sm space-y-4 mb-3">
							<h2 className="text-2xl font-bold mb-6 text-center md:text-left">About Me</h2>
							<p>
								I thrive in structured, hands-on projects where I can create practical solutions, and I enjoy learning
								through experience rather than memorization. While I’m detail-oriented and love refining ideas, I also
								embrace challenges that push me out of my comfort zone. Beyond tech, I’m reflective, empathetic in
								thought, and constantly looking for ways to grow and improve.
							</p>
						</div>
						<div className="bg-brand-card rounded-xl p-6 shadow-sm space-y-4 mb-3">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-8">
								{/* centered card */}
								<aside className="md:col-span-1">
									<div className="bg-brand-secondary rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-2 shadow-inner">
										<NumberTicker value={6} className="text-4xl font-extrabold tracking-tight text-brand-text" />
										<p className="text-sm font-medium text-brand-muted">Projects</p>
									</div>
								</aside>
								<aside className="md:col-span-1">
									<div className="bg-brand-secondary rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-2 shadow-inner">
										<NumberTicker
											value={4.93}
											dir="up"
											decimalPlaces={2}
											className="text-4xl font-extrabold tracking-tight text-brand-text"
										/>
										<p className="text-sm font-medium text-brand-muted">/5.00 CAP</p>
									</div>
								</aside>
								<aside className="md:col-span-1">
									<div className="bg-brand-secondary rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-2 shadow-inner">
										<NumberTicker value={2} className="text-4xl font-extrabold tracking-tight text-brand-text" />
										<p className="text-sm font-medium text-brand-muted">Internships</p>
									</div>
								</aside>
							</div>
						</div>
					</article>
				</section>

				{/* Skills Section*/}
				<section className="bg-brand-card rounded-xl p-6 shadow-sm space-y-4">
					<h2 className="text-3xl font-bold mb-6 text-center md:text-left">Skills</h2>

					{/* stacked subcards (vertical) */}
					<div className="flex flex-col gap-4">
						{types.map((type) => (
							<div key={type} className="bg-brand-card/80 p-4 rounded-xl shadow-sm w-full">
								<h3 className="text-lg text-brand-text font-semibold mb-3">{type}</h3>
								{/* matrix: 1 / 2 / 3 columns (mobile → sm → md+) */}
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
									{grouped[type].map((skill) => (
										// two-row card: top = label (can wrap), bottom = progress bar (SkillProgress renders only the bar)
										<div key={skill.name} className="p-2 bg-brand-card rounded-md h-20 flex flex-col justify-between">
											<span className="text-sm font-medium text-brand-text leading-tight">{skill.name}</span>
											<div>
												<SkillProgress {...skill} />
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</main>
	);
}
