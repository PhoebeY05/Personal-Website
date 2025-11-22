import Tag from '@/components/Tag';
import { AuroraText } from '@/components/ui/aurora-text';
import { Highlighter } from '@/components/ui/highlighter';
import { HyperText } from '@/components/ui/hyper-text';
import { NumberTicker } from '@/components/ui/number-ticker';
import type { JSX } from 'react';
import Sketch from '../assets/me.png'; // Profile image
import Placeholder from '../assets/placeholder.png';
import AppearOnScroll from '../components/AppearOnScroll';
import SkillProgress from '../components/SkillProgress';
import { skills, type Skill } from '../data/skills';

export default function AboutMe(): JSX.Element {
	// group skills by type
	const grouped = skills.reduce<Record<string, Skill[]>>((acc, s) => {
		(acc[s.type] ||= []).push(s);
		return acc;
	}, {});

	const types = Object.keys(grouped);

	return (
		<main className="relative min-h-screen text-brand-text p-6 md:p-12 z-10">
			<div className="mx-auto max-w-6xl ">
				{/* Hero Section */}
				<section className="text-center mb-12 ">
					{/* responsive sizes: base -> sm -> md */}
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
						Hi, I'm <AuroraText speed={2}>Phoebe</AuroraText>! 👋
					</h1>
					<HyperText className="text-lg font-bold mb-6 text-center">
						Aspiring product creator exploring the intersection of technology and practical solutions
					</HyperText>
				</section>

				{/* About Section: Two-column layout */}
				<section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
					{/* Left column: Profile card */}
					<article className="md:col-span-1">
						<div className="h-full">
							<img
								src={Sketch}
								alt="Profile"
								loading="lazy"
								className="w-full h-full rounded-lg object-cover"
								onError={(e) => {
									console.warn('Profile image failed to load, using placeholder');
									(e.currentTarget as HTMLImageElement).src = Placeholder;
								}}
							/>
						</div>
					</article>

					{/* Right column: About paragraph */}
					<article className="md:col-span-2 flex flex-col h-full gap-6">
						<AppearOnScroll className="flex-1">
							<div className="bg-brand-card rounded-xl p-6 shadow-2xl space-y-4">
								<h2 className="relative text-2xl font-bold mb-6 text-center md:text-left">
									<Highlighter action="box" color="#87CEFA">
										About Me
									</Highlighter>
								</h2>
								<p>
									I thrive in structured, hands-on projects where I can create practical solutions, and I enjoy learning
									through experience rather than memorization. While I'm detail-oriented and love refining ideas, I also
									embrace challenges that push me out of my comfort zone. Beyond tech, I'm reflective, empathetic in
									thought, and constantly looking for ways to grow and improve.
								</p>
							</div>
						</AppearOnScroll>
						<div className="bg-brand-card rounded-xl p-6 shadow-2xl flex flex-col flex-1">
							<h2 className="relative text-2xl font-bold mb-4 text-center md:text-left">
								<Highlighter action="underline" color="#FF9800">
									Currently
								</Highlighter>
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start flex-1 content-center">
								{/* centered card */}
								<AppearOnScroll className="md:col-span-1">
									<div className="bg-brand-secondary rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-2 shadow-inner">
										<NumberTicker value={6} className="text-4xl font-extrabold tracking-tight text-brand-text" />
										<p className="text-md font-medium text-brand-muted">Projects</p>
									</div>
								</AppearOnScroll>
								<AppearOnScroll className="md:col-span-1">
									<div className="bg-brand-secondary rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-2 shadow-inner">
										<NumberTicker
											value={4.93}
											dir="up"
											decimalPlaces={2}
											className="text-4xl font-extrabold tracking-tight text-brand-text"
										/>
										<p className="text-md font-medium text-brand-muted">/5.00 CAP</p>
									</div>
								</AppearOnScroll>
								<AppearOnScroll className="md:col-span-1">
									<div className="bg-brand-secondary rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-2 shadow-inner">
										<NumberTicker value={2} className="text-4xl font-extrabold tracking-tight text-brand-text" />
										<p className="text-md font-medium text-brand-muted">Internships</p>
									</div>
								</AppearOnScroll>
							</div>
						</div>
					</article>
				</section>

				{/* Skills Section*/}
				<AppearOnScroll className="bg-brand-card rounded-xl p-6 shadow-2xl space-y-4">
					<h2 className="text-3xl font-bold mb-6 text-center md:text-left">Skills</h2>

					{/* stacked subcards (vertical) */}
					<div className="flex flex-col gap-4">
						{types.map((type) => (
							<div
								key={type}
								className="group bg-brand-card p-4 mb-2 rounded-xl shadow-lg outline-1 outline-brand-react w-full hover:bg-brand-accent hover:outline-brand-secondary hover:shadow-xl transition-all duration-300 p-6 my-5 transform hover:-translate-y-1 hover:scale-[1.02] motion-reduce:transform-none"
							>
								<h3 className="text-lg text-brand-text font-semibold mb-3">{type}</h3>
								{/* matrix: 1 / 2 / 3 columns (mobile → sm → md+) */}
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
									{grouped[type].map((skill, index) => (
										// two-row card: top = label (can wrap), bottom = progress bar (SkillProgress renders only the bar)
										<div
											key={skill.name}
											className="p-2 bg-brand-card rounded-md h-20 flex flex-col justify-between group-hover:bg-brand-accent transition-colors duration-300"
										>
											<div className="flex">
												<Tag
													name={skill.name}
													index={`${type}-${index}`}
													skillClassName="inline-block py-1 text-sm font-medium text-brand-text leading-tight w-fit"
												></Tag>
											</div>
											<div>
												<SkillProgress {...skill} />
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</AppearOnScroll>
			</div>
		</main>
	);
}
