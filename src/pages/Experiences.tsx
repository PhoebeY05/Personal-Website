/* eslint-disable react-hooks/set-state-in-effect */
import ExperienceList from '@/components/ExperienceList';
import { experiences } from '@/data/experiences';
import { useState, useEffect } from 'react';

export default function Experiences() {
	const [filter, setFilter] = useState<'all' | 'work' | 'volunteering'>('all');
	const [visible, setVisible] = useState(false);

	// Filter experiences
	const filtered = experiences.filter((exp) => (filter === 'all' ? true : exp.type === filter));

	// Small fade animation on filter change
	useEffect(() => {
		setVisible(false);
		setTimeout(() => setVisible(true), 50);
	}, [filter]);

	return (
		<main className="relative min-h-screen p-6 md:p-12 text-brand-text">
			<div className="max-w-5xl mx-auto">
				{/* Header */}
				<section className="text-center mb-10">
					<h1 className="text-4xl md:text-5xl font-bold mb-3">Experience</h1>
					<p className="opacity-80 text-lg">Work & Volunteering journeys that shaped who I am.</p>
				</section>

				{/* Toggle Filter */}
				<div className="flex justify-center mb-10">
					<div className="flex bg-brand-card/40 border border-brand-secondary p-1 rounded-full shadow-lg backdrop-blur-xl">
						{[
							{ key: 'all', label: 'All' },
							{ key: 'work', label: 'Work' },
							{ key: 'volunteering', label: 'Volunteering' },
						].map((item) => (
							<button
								key={item.key}
								onClick={() => setFilter(item.key as 'all' | 'work' | 'volunteering')}
								className={`
									px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
									${filter === item.key ? 'bg-brand-accent text-black shadow-md' : 'text-brand-text opacity-70 hover:opacity-100'}
								`}
							>
								{item.label}
							</button>
						))}
					</div>
				</div>

				{/* List */}
				<div
					className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
				>
					{filtered.length > 0 ? (
						<ExperienceList experiences={filtered} />
					) : (
						<p className="text-center opacity-60">No experiences available for this category.</p>
					)}
				</div>
			</div>
		</main>
	);
}
