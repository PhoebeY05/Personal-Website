// components/PillFilter.tsx
import type { FC } from 'react';
import { motion } from 'framer-motion';

interface PillFilterProps {
	options: { key: string; label: string }[];
	selected: string;
	onSelect: (key: string) => void;
}

const PillFilter: FC<PillFilterProps> = ({ options, selected, onSelect }) => {
	return (
		<div className="flex justify-center">
			<div className="relative flex items-center gap-6 bg-brand-card/40 border border-brand-secondary p-2 rounded-full shadow-lg backdrop-blur-xl">
				{options.map((option) => {
					const isActive = selected === option.key;
					return (
						<motion.button
							key={option.key}
							onClick={() => onSelect(option.key)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="relative z-10 px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-colors duration-300"
						>
							<span
								className={`relative z-10 ${isActive ? 'text-brand-text' : 'text-brand-muted opacity-70 hover:opacity-100'}`}
							>
								{option.label}
							</span>
							{isActive && (
								<motion.div
									layoutId="pillUnderline"
									className="absolute inset-0 rounded-full bg-brand-accent shadow-md z-0"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ type: 'spring', stiffness: 500, damping: 30 }}
								/>
							)}
						</motion.button>
					);
				})}
			</div>
		</div>
	);
};

export default PillFilter;
