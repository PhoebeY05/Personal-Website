import type { JSX } from 'react';
import type { Skill } from '../data/skills';

export default function SkillProgress({ name, level }: Skill): JSX.Element {
	// map level to visual percentage
	const percent = level === 'low' ? 25 : level === 'medium' ? 60 : 100;
	return (
		<>
			{/* thicker track with rounded ends */}
			<div
				className="w-full bg-brand-card rounded-full h-4 overflow-hidden outline-2 outline-brand-react group-hover:bg-brand-card group-hover:outline-brand-card transition-all duration-300"
				role="progressbar"
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={percent}
				aria-label={`${name} skill level`}
			>
				{/* animated fill */}
				<div
					className="bg-brand-react h-4 rounded-full transition-[width] duration-300 ease-in-out group-hover:bg-brand-secondary transition-all duration-300"
					style={{ width: `${percent}%` }}
				/>
			</div>
		</>
	);
}
