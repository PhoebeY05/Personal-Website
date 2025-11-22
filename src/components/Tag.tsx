import { isSkill } from '@/data/skills';
import { Link } from 'react-router-dom';

interface TagProps {
	name: string;
	index: number;
}

export default function Tag({ name, index }: TagProps) {
	const skillSlug = name.toLowerCase().replace(/\s+/g, '-');

	return (
		<>
			{isSkill(name) ? (
				<span
					key={index}
					className="text-xs px-2 py-1 rounded-full bg-brand-secondary text-brand-text border border-brand-accent"
				>
					<Link to={`/skills/${skillSlug}`}>{name}</Link>
				</span>
			) : (
				<span
					key={index}
					className="text-xs px-2 py-1 rounded-full bg-brand-bg text-brand-text border border-brand-accent"
				>
					{name}
				</span>
			)}
		</>
	);
}
