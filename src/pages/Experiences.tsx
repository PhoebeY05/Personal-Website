/* eslint-disable react-hooks/exhaustive-deps */
import ExperienceList from '@/components/ExperienceList';
import { experiences, type Experience } from '@/data/experiences';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Experiences() {
	const [index, setIndex] = useState(0);
	const [bgIndex, setBgIndex] = useState(0); // background applied after transition

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

	// Apply background only after slide animation
	useEffect(() => {
		if (index !== bgIndex) {
			const t = setTimeout(() => setBgIndex(index), 100);
			return () => clearTimeout(t);
		}
	}, [index, bgIndex]);

	return (
		<main
			className={`relative w-screen min-h-screen overflow-x-hidden overflow-y-auto ${
				index == 0 ? 'bg-brand-bg' : 'bg-brand-card'
			}`}
		>
			{/* SLIDER WRAPPER */}
			<div
				className="flex h-full transition-transform duration-700 ease-in-out"
				style={{
					width: `${pages.length * 100}vw`,
					transform: `translateX(-${index * 100}vw)`,
				}}
			>
				{pages.map((page, i) => (
					<div className="w-screen flex flex-col items-center pb-16">
						<h1 className="text-4xl md:text-5xl font-bold text-center mt-8 tracking-tight">
							{capitalise(page[0].type) + ' Experience'}
						</h1>
						<ExperienceList experiences={page} index={index} />
					</div>
				))}
			</div>

			{/* LEFT SLIM BORDER WITH PROTRUDING ARROW */}
			{index === 1 && (
				<div
					onClick={goLeft}
					className="absolute left-0 top-0 h-full w-2 bg-brand-bg cursor-pointer flex items-center justify-end"
				>
					<ChevronLeft
						size={48}
						className="rounded-xs text-brand-text -mr-6 hover:scale-110 transition-transform bg-brand-bg"
					/>
				</div>
			)}

			{/* RIGHT SLIM BORDER WITH PROTRUDING ARROW */}
			{index === 0 && (
				<div
					onClick={goRight}
					className="absolute right-0 top-0 h-full w-2 bg-brand-card cursor-pointer flex items-center justify-start"
				>
					<ChevronRight
						size={48}
						className="rounded-xs text-brand-text -ml-6 hover:scale-110 transition-transform bg-brand-card"
					/>
				</div>
			)}
		</main>
	);
}
