import type { JSX } from 'react';
import type { Skill } from '../data/skills';

export default function SkillProgress({ name, level }: Skill): JSX.Element {
	// map level to visual percentage
	const percent = level === 'low' ? 25 : level === 'medium' ? 60 : 100;
	return (
		<div className="flex flex-col items-start w-full space-y-2">
			{/* label above the bar */}
			<span className="text-sm font-medium text-brand-text">{name}</span>

			{/* thicker track with rounded ends */}
			<div
				className="w-full bg-brand-card rounded-full h-4 overflow-hidden outline-2 outline-brand-react"
				role="progressbar"
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={percent}
				aria-label={`${name} skill level`}
			>
				{/* animated fill */}
				<div
					className="bg-brand-accent h-4 rounded-full transition-[width] duration-300 ease-in-out"
					style={{ width: `${percent}%` }}
				/>
			</div>
		</div>
	);
}
