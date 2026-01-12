const BASE = import.meta.env.BASE_URL; // "/" locally, "/repo-name/" on GitHub Pages

const Whitehacks = `${BASE}competitions/whitehacks.png`;
const BuildingBloCS = `${BASE}competitions/bbcs.png`;
const Cyberthon = `${BASE}competitions/cyberthon.jpg`;

export interface Competition {
	type: 'hackathon' | 'ctf';
	name: string;
	description: string;
	competitionLink?: string; // Link to competition website
	month: string;
	result?: string;
	certificate?: string;
	link?: string; // Link to Writeup or Project
	tags?: string[];
}

export const competitions: Competition[] = [
	{
		type: 'hackathon',
		name: 'IDEATE 2025',
		description: 'Participated in IDEATE 2025, a hackathon focused on innovative project ideation.',
		month: '2025',
		result: 'Participation',
		competitionLink: 'https://www.ideate2025.com/',
		certificate: '',
		link: '',
		tags: ['Product Ideation'],
	},
	{
		type: 'hackathon',
		name: 'TikTok TechJam 2024',
		description:
			'Participated in TikTok TechJam 2024, a product and engineering-focused hackathon involving rapid prototyping, feature ideation, and building creative solutions aligned with real-world TikTok use cases.',
		month: '2024',
		result: 'Participation',
		competitionLink: 'https://tiktoktechjam2024.devpost.com/',
		certificate: '',
		link: 'https://github.com/PhoebeY05/TikTok-TechJam',
		tags: ['Flask', 'Jinja', 'HTML', 'Bootstrap', 'HuggingFace', 'Gradio Client', 'FFmpeg', 'Python', 'OpenCV', 'PIL'],
	},
	{
		type: 'hackathon',
		name: 'BuildingBloCS 2022',
		description:
			'Conference hackathon focused on collaborative building projects. My first exposure to web development.',
		month: 'June 2022',
		result: '2nd Runner-Up',
		competitionLink: 'https://old.buildingblocs.sg/2022/events/june-conference/',
		certificate: BuildingBloCS,
		link: '',
		tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
	},
	{
		type: 'hackathon',
		name: 'NAISC 2023',
		description: 'Project-based hackathon where I first learnt about Exploratory Data Analysis (EDA).',
		month: 'January 2023',
		result: 'Participation',
		competitionLink: 'https://learn.aisingapore.org/national-ai-student-challenge/',
		certificate: '',
		link: '',
		tags: ['Python', 'Jupyter Notebook', 'AI'],
	},
	{
		type: 'ctf',
		name: 'Cyberthon 2023',
		description:
			'First experience with cybersecurity competitions. Competed in analytics challenges and participated in related tech workshops.',
		month: 'April 2023',
		result: '57 out of 87',
		competitionLink: 'https://cyberthon.hci.edu.sg/',
		certificate: Cyberthon,
		link: '',
		tags: ['Kali Linux', 'Reverse Engineering', 'Pwn', 'Network', 'Cryptography', 'Web', 'Mobile Malware Analysis'],
	},
	{
		type: 'ctf',
		name: 'SEETF 2023',
		description: 'Participated in SEETF 2023 (Singapore & regional students).',
		month: 'June 2023',
		result: '169 out of 431 (all), 42 out of 74 (SG students)',
		competitionLink: 'https://2023.seetf.sg/',
		certificate: '',
		link: '',
		tags: ['Cryptography', 'Reverse Engineering', 'Pwn', 'Web'],
	},
	{
		type: 'ctf',
		name: 'Imaginary CTF',
		description: 'Participated in Imaginary CTF, a capture-the-flag cybersecurity competition.',
		month: 'July 2023',
		result: '557 out of 880',
		competitionLink: 'https://2023.imaginaryctf.org/',
		certificate: '',
		link: '',
		tags: ['Forensics', 'Cryptography', 'Reverse Engineering', 'Pwn', 'Web'],
	},
	{
		type: 'ctf',
		name: 'SMU Whitehacks',
		description:
			'Completed 14 challenges; scored 5796/9972 points. Achieved first blood and 3rd to solve 1 challenge. Unexpectedly won a prize for my writeup after the competition as well.',
		month: 'March 2024',
		result: '26 out of 103',
		competitionLink: 'https://whitehacks.computing.smu.edu.sg/',
		certificate: Whitehacks,
		link: 'https://github.com/PhoebeY05/SMU-Whitehacks-Writeups',
		tags: ['OSINT', 'Pwn', 'Cryptography', 'Forensics', 'Web'],
	},
	{
		type: 'hackathon',
		name: 'HackSmith v6.0',
		description:
			'Team-based hackathon where I built a cybersecurity-focused web app. Implemented a FastAPI backend and integrated a responsive frontend to deliver a working prototype and demo.',
		month: 'December 2025',
		result: 'Participation',
		competitionLink: '',
		certificate: '',
		link: '', // https://github.com/PhoebeY05/HackSmith-v6.0-Backend
		tags: ['Cybersecurity', 'Python', 'FastAPI', 'TypeScript', 'React'],
	},
	{
		type: 'hackathon',
		name: 'ERNIE AI Developer Challenge',
		description:
			'Built an end-to-end document-to-knowledge-graph pipeline on Baidu AI Studio using ERNIE for entity and relation extraction and PaddleOCR for OCR, transforming PDFs into an interactive graph for exploration and search.',
		month: 'December 2025',
		result: 'Participation',
		competitionLink: 'https://baiduernieai.devpost.com/',
		certificate: '',
		link: '', // https://github.com/PhoebeY05/Knowledge-Graph
		tags: ['AI', 'AI Studio', 'PaddleOCR', 'ERNIE'],
	},
];

export function getCompetitionsFromSkill(skill: string) {
	return competitions.filter((comp) => comp.tags?.includes(skill));
}

export const important = competitions
	.filter((comp) => comp.result != 'Participation' || comp.link || comp.certificate)
	.sort((a, b) => {
		const dateA = new Date(a.month);
		const dateB = new Date(b.month);
		return dateB.getTime() - dateA.getTime();
	});
export const notImportant = competitions.filter(
	(comp) => comp.result == 'Participation' && !comp.link && !comp.certificate
);
