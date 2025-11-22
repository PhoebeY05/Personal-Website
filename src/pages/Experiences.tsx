/* eslint-disable react-hooks/exhaustive-deps */
import ExperienceList from '@/components/ExperienceList';
import { experiences, type Experience } from '@/data/experiences';
import { useState, useEffect } from 'react';

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
		<main className="relative w-screen h-screen overflow-hidden">
			{/* SLIDER WRAPPER */}
			<div
				className="flex h-full transition-transform duration-700 ease-in-out"
				style={{
					width: `${pages.length * 100}vw`,
					transform: `translateX(-${index * 100}vw)`,
				}}
			>
				{pages.map((page, i) => (
					<div className="w-screen h-full flex flex-col items-center">
						<h1 className="text-4xl md:text-5xl font-bold text-center mt-8 tracking-tight">
							{capitalise(page[0].type) + ' Experience'}
						</h1>
						<ExperienceList key={i} experiences={page} />
					</div>
				))}
			</div>

			{/* LEFT BUTTON */}
			{index > 0 && (
				<button
					onClick={goLeft}
					className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white shadow-lg hover:scale-110 transition"
				>
					←
				</button>
			)}

			{/* RIGHT BUTTON */}
			{index < pages.length - 1 && (
				<button
					onClick={goRight}
					className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white shadow-lg hover:scale-110 transition"
				>
					→
				</button>
			)}

			{/* INDICATORS */}
			{/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
				{pages.map((_: JSX.e, i: Key | null | undefined) => (
					<div
						key={i}
						className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-black scale-125' : 'bg-gray-400'}`}
					/>
				))}
			</div> */}
		</main>
	);
}
