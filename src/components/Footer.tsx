import { useEffect, useState } from 'react';
import Email from '../assets/email.png';
import GitHubDark from '../assets/github-dark.png';
import GitHubLight from '../assets/github-light.png';
import LinkedIn from '../assets/linkedin.png';
import Medium from '../assets/medium.png';
import Placeholder from '../assets/placeholder.png';

export default function Footer() {
	const [isDark, setIsDark] = useState(() => {
		// Check if your app uses a 'dark' class on html/body or CSS variables
		return (
			document.documentElement.classList.contains('dark') ||
			getComputedStyle(document.documentElement).getPropertyValue('--bg').includes('#0c0c0f')
		);
	});

	useEffect(() => {
		// Watch for changes to the dark class or CSS variables
		const observer = new MutationObserver(() => {
			const newIsDark =
				document.documentElement.classList.contains('dark') ||
				getComputedStyle(document.documentElement).getPropertyValue('--bg').includes('#0c0c0f');
			setIsDark(newIsDark);
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class', 'data-theme'],
		});

		return () => observer.disconnect();
	}, []);

	const GitHub = isDark ? GitHubDark : GitHubLight;
	const socials = [
		{ name: 'GitHub', image: GitHub, link: 'https://github.com/PhoebeY05' },
		{ name: 'LinkedIn', image: LinkedIn, link: 'https://www.linkedin.com/in/phoebeyap1305/' },
		{ name: 'Medium', image: Medium, link: 'https://medium.com/@Phoebe1305' },
		{ name: 'Email', image: Email, link: 'mailto:Phoebe1305@outlook.com' },
	];

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
							className="inline-flex items-center p-1 rounded hover:scale-110 transition-transform duration-200"
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
