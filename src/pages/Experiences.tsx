/* eslint-disable react-hooks/exhaustive-deps */
import ExperienceList from '@/components/ExperienceList';
import { experiences, type Experience } from '@/data/experiences';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Experiences() {
	const [index, setIndex] = useState(0);

	const workExperiences = experiences.filter((exp) => exp.type === 'work');
	const volunteerExperiences = experiences.filter((exp) => exp.type === 'volunteering');
	const capitalise = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
	const pages: Experience[][] = [workExperiences, volunteerExperiences];

	const goLeft = () => setIndex((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
	const goRight = () => setIndex((prev) => (prev === pages.length - 1 ? 0 : prev + 1));

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight') goRight();
			if (e.key === 'ArrowLeft') goLeft();
		};
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	}, []);

	return (
		<main className="relative w-screen min-h-screen overflow-x-hidden overflow-y-auto">
			{/* SLIDER WRAPPER */}
			<div
				className="flex h-full transition-transform duration-700 ease-in-out"
				style={{
					width: `${pages.length * 100}vw`,
					transform: `translateX(-${index * 100}vw)`,
				}}
			>
				{pages.map((page, i) => (
					<div key={i} className="w-screen flex flex-col items-center pb-16">
						<h1 className="text-4xl md:text-5xl font-bold text-center mt-8 tracking-tight">
							{capitalise(page[0].type) + ' Experience'}
						</h1>
						<ExperienceList experiences={page} index={index} />
					</div>
				))}
			</div>

			{/* LEFT FIXED ARROW */}
			{index === 1 && (
				<button
					onClick={goLeft}
					className="fixed left-0 top-1/2 -translate-y-1/2 px-2 py-2 cursor-pointer group"
					aria-label="Previous"
				>
					<ChevronLeft
						size={48}
						className="text-brand-text bg-brand-bg/70 rounded-r-lg shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110"
					/>
				</button>
			)}

			{/* RIGHT FIXED ARROW */}
			{index === 0 && (
				<button
					onClick={goRight}
					className="fixed right-0 top-1/2 -translate-y-1/2 px-2 py-2 cursor-pointer group"
					aria-label="Next"
				>
					<ChevronRight
						size={48}
						className="text-brand-text bg-brand-card/70 rounded-l-lg shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110"
					/>
				</button>
			)}
		</main>
	);
}
