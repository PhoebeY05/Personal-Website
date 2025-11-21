import Email from '../assets/email.png';
import GitHub from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png';
import Placeholder from '../assets/placeholder.png';

const socials = [
	{ name: 'GitHub', image: GitHub, link: 'https://https://github.com/PhoebeY05' },
	{ name: 'LinkedIn', image: LinkedIn, link: 'https://www.linkedin.com/in/phoebeyap1305/' },
	{ name: 'Email', image: Email, link: 'mailto:Phoebe1305@outlook.com' },
];

export default function Footer() {
	return (
		<footer className="mt-12 pb-12">
			<div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
				{/* left: copyright */}
				<div className="text-sm text-brand-muted">&copy; 2025 Phoebe. All rights reserved.</div>

				{/* right: socials - small icons side-by-side */}
				<div className="flex items-center space-x-4">
					{socials.map((social) => (
						<a
							key={social.name}
							href={social.link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center p-1 rounded hover:bg-brand-card transition-colors"
						>
							<img
								src={social.image}
								alt={social.name}
								loading="lazy"
								className="h-6 w-6 object-contain"
								onError={(e) => {
									console.warn('Social icon failed to load, using placeholder');
									(e.currentTarget as HTMLImageElement).src = Placeholder;
								}}
							/>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
