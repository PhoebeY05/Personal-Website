export interface Project {
	name: string;
	description: string;
	month: string;
	link: string;
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
		demo: ['CS50.mp4'],
		tags: ['Flask', 'Jinja', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQLite3'],
	},
	{
		name: 'AI Content Generator',
		description:
			'A generative-AI platform enabling users to create a complete video product—thumbnail, video, narration, and audio—from a single text prompt, with options to customise, regenerate, and combine content.',
		month: 'July 2024',
		link: 'https://content-generator-xlck.onrender.com',
		demo: [],
		tags: ['Flask', 'Bootstrap', 'HuggingFace APIs', 'Gradio Client', 'MoviePy', 'FFmpeg', 'Python', 'OpenCV', 'PIL'],
	},
	{
		name: 'Blackjack Score Calculator',
		description:
			'A React Native mobile app that automates score calculations for Banluck/Chinese Blackjack, tracks gains/losses, supports different playing styles, and simplifies round management during games.',
		month: 'January 2024',
		link: 'https://github.com/PhoebeY05/Blackjack-Score-Calculator',
		demo: [],
		tags: ['React Native', 'Expo', 'JavaScript'],
	},
	{
		name: 'Web Forum',
		description:
			'A full-stack forum platform with features like posting, commenting, starring, upvoting/downvoting, pinning, filtering, sorting, search, profiles, authentication, and complete CRUD functionality.',
		month: 'December 2024',
		link: 'https://github.com/PhoebeY05/CVWO-Winter-Assignment-2024',
		demo: [],
		tags: ['Ruby on Rails', 'SQLite3', 'Node.js', 'Yarn', 'JavaScript'],
	},
	{
		name: 'Telegram Birthday Bot',
		description:
			'A Telegram bot that notifies users of upcoming birthdays using uploaded calendar files, with commands to upload, add, list, and retrieve birthday data.',
		month: 'May 2024',
		link: 'https://t.me/bday_notification_bot',
		demo: [],
		tags: ['Python', 'Telegram API'],
	},
];
