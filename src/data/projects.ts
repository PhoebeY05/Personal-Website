// Reading Records demos
import ReadingRecords from '../assets/demos/ReadingRecords/reading-records.mp4';

// AI Content Generator demos
import AIContentGenerator1 from '../assets/demos/AIContentGenerator/ai-content-generator.mov';
import AIContentGenerator2 from '../assets/demos/AIContentGenerator/ai-content-generator.png';

// Blackjack Calculator demos
import BlackjackCalculator1 from '../assets/demos/BlackjackCalculator/home.png';
import BlackjackCalculator2 from '../assets/demos/BlackjackCalculator/name.png';
import BlackjackCalculator3 from '../assets/demos/BlackjackCalculator/mode.png';
import BlackjackCalculator4 from '../assets/demos/BlackjackCalculator/combo.png';
import BlackjackCalculator5 from '../assets/demos/BlackjackCalculator/standard.png';
import BlackjackCalculator6 from '../assets/demos/BlackjackCalculator/special.png';
import BlackjackCalculator7 from '../assets/demos/BlackjackCalculator/number.png';
import BlackjackCalculator8 from '../assets/demos/BlackjackCalculator/score.png';

// Telegram Bot demos
import TelegramBot1 from '../assets/demos/TelegramBot/start.png';
import TelegramBot2 from '../assets/demos/TelegramBot/cal.png';
import TelegramBot3 from '../assets/demos/TelegramBot/add.png';
import TelegramBot4 from '../assets/demos/TelegramBot/list.png';

export interface Project {
	name: string;
	description: string;
	month: string;
	link: string;
	github: string;
	demo: string[];
	tags: string[];
}

export const projects: Project[] = [
	{
		name: 'Reading Records',
		description:
			'A comprehensive book-tracking web app for managing unpublished novels (e.g., Wattpad, 晋江文学城) with features like login privacy, status tracking, timelines, search, automated reading duration, and category-based organisation.',
		month: 'February 2024',
		link: 'https://phoebe05.pythonanywhere.com/',
		github: 'https://github.com/PhoebeY05/Reading-Records',
		demo: [ReadingRecords],
		tags: ['Flask', 'Jinja', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQLite3'],
	},
	{
		name: 'AI Content Generator',
		description:
			'A generative-AI platform enabling users to create a complete video product—thumbnail, video, narration, and audio—from a single text prompt, with options to customise, regenerate, and combine content.',
		month: 'July 2024',
		link: 'https://content-generator-xlck.onrender.com',
		github: 'https://github.com/PhoebeY05/TikTok-TechJam',
		demo: [AIContentGenerator1, AIContentGenerator2],
		tags: ['Flask', 'Bootstrap', 'HuggingFace APIs', 'Gradio Client', 'MoviePy', 'FFmpeg', 'Python', 'OpenCV', 'PIL'],
	},
	{
		name: 'Blackjack Score Calculator',
		description:
			'A React Native mobile app that automates score calculations for Banluck/Chinese Blackjack, tracks gains/losses, supports different playing styles, and simplifies round management during games.',
		month: 'January 2024',
		link: '',
		github: 'https://github.com/PhoebeY05/Blackjack-Score-Calculator',
		demo: [
			BlackjackCalculator1,
			BlackjackCalculator2,
			BlackjackCalculator3,
			BlackjackCalculator4,
			BlackjackCalculator5,
			BlackjackCalculator6,
			BlackjackCalculator7,
			BlackjackCalculator8,
		],
		tags: ['React Native', 'Expo', 'JavaScript'],
	},
	{
		name: 'Web Forum',
		description:
			'A full-stack forum platform with features like posting, commenting, starring, upvoting/downvoting, pinning, filtering, sorting, search, profiles, authentication, and complete CRUD functionality.',
		month: 'December 2024',
		link: 'https://webforum-ydus.onrender.com/',
		github: 'https://github.com/PhoebeY05/CVWO-Winter-Assignment-2024',
		demo: [],
		tags: ['Ruby on Rails', 'SQLite3', 'Node.js', 'Yarn', 'JavaScript'],
	},
	{
		name: 'Telegram Birthday Bot',
		description:
			'A Telegram bot that notifies users of upcoming birthdays using uploaded calendar files, with commands to upload, add, list, and retrieve birthday data.',
		month: 'May 2024',
		link: 'https://t.me/bday_notification_bot',
		github: 'https://github.com/PhoebeY05/Telegram-Birthday-Bot',
		demo: [TelegramBot1, TelegramBot2, TelegramBot3, TelegramBot4],
		tags: ['Python', 'Telegram API'],
	},
];

export function getProjectByName(name: string): Project {
	return projects.find((project) => project.name === name)!;
}

export function isDemoVideo(demo: string) {
	return demo.endsWith('.mp4') || demo.endsWith('.mov');
}
