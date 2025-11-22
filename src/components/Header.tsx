import { AnimatedShinyText } from './ui/animated-shiny-text';

interface HeaderProps {
	title: string;
	description: string;
}

export default function Header({ title, description }: HeaderProps) {
	return (
		<section className="text-center mb-12">
			<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
				<AnimatedShinyText>{title}</AnimatedShinyText>
			</h1>
			<p className="text-brand-text text-lg md:text-xl">{description}</p>
		</section>
	);
}
