/* eslint-disable react-hooks/rules-of-hooks */
import Tag from '@/components/Tag';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { experiences } from '@/data/experiences';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Stack from '../components/Stack';

export default function IndividualExperience(): JSX.Element {
	const { name: paramName } = useParams<{ name: string }>();

	const experience = experiences.find((exp) => exp.name.toLowerCase().replace(/\s+/g, '-') === paramName);

	if (!experience) return <Navigate to="/404" replace />;

	const imageCards = experience.images.map((src, i) => ({
		id: i + 1,
		img: src,
	}));

	const computeCardSize = () => {
		const w = window.innerWidth;
		const factor = w >= 768 ? 0.4 : 0.8; // md breakpoint
		const size = Math.round(w * factor);
		return { width: size, height: size };
	};

	const [cardSize, setCardSize] = useState(() => computeCardSize());

	useEffect(() => {
		const onResize = () => setCardSize(computeCardSize());
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	return (
		<main className="min-h-screen w-full text-brand-text p-6 md:p-12 flex justify-center">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-5xl w-full bg-brand-card backdrop-blur-xl border border-brand-muted rounded-3xl p-8 md:p-12 shadow-xl"
			>
				{/* Header: Name + Duration left, Role + Org right */}
				<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-6">
					{/* Left: Name + Duration */}
					<div className="flex flex-col items-start md:max-w-[60%] flex-shrink-0 gap-1">
						<h1 className="text-3xl md:text-5xl font-bold leading-tight text-brand-accent">{experience.name}</h1>
						<p className="text-sm md:text-base opacity-60">{experience.duration}</p>
					</div>

					{/* Right: Role + Organisation */}
					<div className="flex flex-col items-start md:items-end text-left md:text-right flex-1 gap-1">
						<span className="text-xl md:text-2xl font-semibold">
							<AnimatedShinyText>{experience.role}</AnimatedShinyText>
						</span>{' '}
						<h3 className="text-lg md:text-xl opacity-70">{experience.organisation}</h3>
					</div>
				</div>

				{/* Tags + Certificate (side by side) */}
				{(experience.tags.length > 0 || experience.certificate) && (
					<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-6">
						{experience.tags.length > 0 && (
							<div className="flex flex-wrap gap-2">
								{experience.tags.map((tag, idx) => (
									<Tag key={idx} name={tag} index={idx} />
								))}
							</div>
						)}
						{experience.certificate && (
							<div className="md:text-right">
								<a
									href={experience.certificate}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-3 text-brand-accent hover:underline text-md font-black rounded-lg hover:scale-110 transition-transform duration-200"
								>
									<ExternalLink size={18} />
									View Certificate
								</a>
							</div>
						)}
					</div>
				)}

				{/* Description */}
				<p className="text-base md:text-lg leading-relaxed mb-6">{experience.description}</p>

				{/* Tasks */}
				{experience.tasks.length > 0 && (
					<div className="mb-6">
						<h3 className="text-xl font-semibold mb-3">Key Contributions / Tasks:</h3>
						<ul className="list-disc list-inside space-y-2 text-base md:text-lg opacity-80">
							{experience.tasks.map((task, idx) => (
								<li key={idx}>{task}</li>
							))}
						</ul>
					</div>
				)}

				{/* Images (certificate removed from here) */}
				{experience.images.length > 0 && (
					<div className="flex flex-col items-center my-6">
						<div className="relative inline-block">
							<Stack
								randomRotation={true}
								sensitivity={200}
								sendToBackOnClick={true}
								cardDimensions={cardSize}
								cardsData={imageCards}
							/>
							<p className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-max text-md opacity-60">
								Swipe/Click to see more!
							</p>
						</div>
					</div>
				)}
			</motion.div>
		</main>
	);
}
