import type { JSX } from 'react';
import Sketch from '../assets/Sketch.png'; // Profile image
import Placeholder from '../assets/placeholder.png';

export default function AboutMe(): JSX.Element {
	const skills = ['Python', 'Flask', 'SQL', 'HTML/CSS/JS', 'Cybersecurity', 'AI/ML', 'React', 'App Development'];

	return (
		<main className="min-h-screen bg-brand-bg text-brand-text p-6 md:p-12">
			<div className="mx-auto max-w-6xl">
				{/* Hero Section */}
				<section className="text-center mb-12">
					<h1 className="text-5xl md:text-6xl font-bold mb-2">Hi, I'm Phoebe! 👋</h1>
					<p className="text-xl md:text-2xl text-brand-muted">
						Aspiring product creator exploring the intersection of technology and practical solutions
					</p>
				</section>

				{/* About Section: Two-column layout */}
				<section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-12">
					{/* Left column: Profile card */}
					<aside className="md:col-span-1">
						<div className="bg-brand-card rounded-xl p-6 shadow-sm">
							<img
								src={Sketch}
								alt="Profile"
								loading="lazy"
								className="w-full rounded-lg mb-4 object-cover"
								onError={(e) => {
									console.warn('Profile image failed to load, using placeholder');
									(e.currentTarget as HTMLImageElement).src = Placeholder;
								}}
							/>
							<h2 className="text-2xl font-semibold">Phoebe Yap</h2>
							<p className="text-brand-muted mt-2">
								Curious and persistent problem-solver with a passion for programming, AI, web, and app development.
							</p>
						</div>
					</aside>

					{/* Right column: About paragraph */}
					<article className="md:col-span-2">
						<div className="bg-brand-card rounded-xl p-6 shadow-sm space-y-4 mb-3">
							<h2 className="text-3xl font-bold mb-6 text-center md:text-left">About Me</h2>
							<p>
								I thrive in structured, hands-on projects where I can create practical solutions, and I enjoy learning
								through experience rather than memorization. While I’m detail-oriented and love refining ideas, I also
								embrace challenges that push me out of my comfort zone. Beyond tech, I’m reflective, empathetic in
								thought, and constantly looking for ways to grow and improve.
							</p>
						</div>
						<div className="bg-brand-card rounded-xl p-6 shadow-sm space-y-4">
							{/* Skills Section*/}
							<section>
								<h2 className="text-3xl font-bold mb-6 text-center md:text-left">Skills</h2>
								<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
									{skills.map((skill) => (
										<div
											key={skill}
											className="bg-brand-accent p-4 rounded-lg shadow-sm text-center hover:scale-105 transition-transform"
										>
											<p className="font-semibold">{skill}</p>
										</div>
									))}
								</div>
							</section>
						</div>
					</article>
				</section>
			</div>
		</main>
	);
}
