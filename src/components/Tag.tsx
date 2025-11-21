interface TagProps {
	name: string;
	index: number;
}

export default function Tag({ name, index }: TagProps) {
	return (
		<>
			<span
				key={index}
				className="text-xs px-2 py-1 rounded-full bg-brand-secondary text-brand-text border border-brand-accent"
			>
				{name}
			</span>
		</>
	);
}
