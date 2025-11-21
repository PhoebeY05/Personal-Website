export interface Skill {
	type: string;
	name: string;
	level: 'low' | 'medium' | 'high';
}

export const skills: Skill[] = [
	// Programming Languages
	{ type: 'Programming Languages', name: 'Python', level: 'medium' },
	{ type: 'Programming Languages', name: 'JavaScript', level: 'medium' },
	{ type: 'Programming Languages', name: 'TypeScript', level: 'medium' },
	{ type: 'Programming Languages', name: 'Golang', level: 'medium' },
	{ type: 'Programming Languages', name: 'Java', level: 'medium' },

	// Web Development
	{ type: 'Web Development', name: 'HTML', level: 'medium' },
	{ type: 'Web Development', name: 'CSS', level: 'medium' },
	{ type: 'Web Development', name: 'Flask', level: 'medium' },
	{ type: 'Web Development', name: 'SQL', level: 'medium' },
	{ type: 'Web Development', name: 'Ruby on Rails', level: 'medium' },
	{ type: 'Web Development', name: 'Tailwind CSS', level: 'medium' },
	{ type: 'Web Development', name: 'Bootstrap', level: 'medium' },

	// App Development
	{ type: 'App Development', name: 'React Native', level: 'medium' },
	{ type: 'App Development', name: 'Expo Go', level: 'medium' },

	// AI / Data
	{ type: 'AI / Data', name: 'Machine Learning', level: 'low' },
	{ type: 'AI / Data', name: 'Natural Language Processing (NLP)', level: 'low' },
	{ type: 'AI / Data', name: 'Exploratory Data Analysis (EDA)', level: 'medium' },

	// Cybersecurity
	{ type: 'Cybersecurity', name: 'OSINT', level: 'low' },
	{ type: 'Cybersecurity', name: 'Reverse Engineering', level: 'low' },

	// General Skills
	{ type: 'General', name: 'Figma', level: 'low' },
	{ type: 'General', name: 'Git', level: 'medium' },
];
