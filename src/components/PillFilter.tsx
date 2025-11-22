// components/PillFilter.tsx
import type { FC } from 'react';

interface PillFilterProps {
	options: { key: string; label: string }[];
	selected: string;
	onSelect: (key: string) => void;
}

const PillFilter: FC<PillFilterProps> = ({ options, selected, onSelect }) => {
	return (
		<div className="flex justify-center">
			<div className="flex items-center gap-6 bg-brand-card/40 border border-brand-secondary p-2 rounded-full shadow-lg backdrop-blur-xl">
				{options.map((option) => (
					<button
						key={option.key}
						onClick={() => onSelect(option.key)}
						className={`
							w-28 text-center px-4 py-2 rounded-full text-sm font-semibold tracking-wide
							transition-all duration-300
							${selected === option.key ? 'bg-brand-accent text-black shadow-md' : 'opacity-70 hover:opacity-100'}
						`}
					>
						{option.label}
					</button>
				))}
			</div>
		</div>
	);
};

export default PillFilter;
