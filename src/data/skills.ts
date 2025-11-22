export interface Skill {
	type: string;
	name: string;
	level: 'low' | 'medium' | 'high';
	description: string;
}

export const skills: Skill[] = [
	// Programming Languages
	{
		type: 'Programming Languages',
		name: 'Python',
		level: 'medium',
		description: 'Used for scripting, backend development, and data-related tasks.',
	},
	{
		type: 'Programming Languages',
		name: 'JavaScript',
		level: 'medium',
		description: 'Core language for dynamic web development and full-stack projects.',
	},
	{
		type: 'Programming Languages',
		name: 'TypeScript',
		level: 'medium',
		description: 'Typed JavaScript used for building scalable and maintainable applications.',
	},
	{
		type: 'Programming Languages',
		name: 'Golang',
		level: 'medium',
		description: 'Compiled language used for high-performance backend systems.',
	},
	{
		type: 'Programming Languages',
		name: 'Java',
		level: 'medium',
		description: 'Strongly-typed OOP language used in academic coursework and backend development.',
	},

	// Web Development
	{
		type: 'Web Development',
		name: 'HTML',
		level: 'medium',
		description: 'Foundation of web content and accessible page structure.',
	},
	{
		type: 'Web Development',
		name: 'CSS',
		level: 'medium',
		description: 'Used to design responsive, modern, and visually appealing web interfaces.',
	},
	{
		type: 'Web Development',
		name: 'Flask',
		level: 'medium',
		description: 'Lightweight Python web framework used to build APIs and backend systems.',
	},
	{
		type: 'Web Development',
		name: 'SQL',
		level: 'medium',
		description: 'Experienced with relational databases, schema design, and data queries.',
	},
	{
		type: 'Web Development',
		name: 'Ruby on Rails',
		level: 'medium',
		description: 'Full-stack web framework used to build CRUD apps and REST APIs.',
	},
	{
		type: 'Web Development',
		name: 'Tailwind CSS',
		level: 'medium',
		description: 'Utility-first CSS framework used to quickly build custom, modern UIs.',
	},
	{
		type: 'Web Development',
		name: 'Bootstrap',
		level: 'medium',
		description: 'Component-based CSS framework for rapid, responsive UI development.',
	},

	// App Development
	{
		type: 'App Development',
		name: 'React Native',
		level: 'medium',
		description: 'JavaScript framework for building cross-platform mobile applications.',
	},
	{
		type: 'App Development',
		name: 'Expo Go',
		level: 'medium',
		description: 'Toolkit used to streamline mobile development and testing in React Native.',
	},

	// AI / Data
	{
		type: 'AI / Data',
		name: 'Machine Learning',
		level: 'low',
		description: 'Basic understanding of ML concepts and beginner-level model building.',
	},
	{
		type: 'AI / Data',
		name: 'Natural Language Processing (NLP)',
		level: 'low',
		description: 'Introductory experience working with text-based models and pipelines.',
	},
	{
		type: 'AI / Data',
		name: 'Exploratory Data Analysis (EDA)',
		level: 'medium',
		description: 'Skilled in analyzing datasets to uncover patterns, trends, and insights.',
	},

	// Cybersecurity
	{
		type: 'Cybersecurity',
		name: 'OSINT',
		level: 'low',
		description: 'Familiar with gathering and analyzing publicly available information.',
	},
	{
		type: 'Cybersecurity',
		name: 'Reverse Engineering',
		level: 'low',
		description: 'Entry-level understanding of analyzing binaries and low-level program behavior.',
	},

	// General
	{
		type: 'General',
		name: 'Figma',
		level: 'low',
		description: 'Basic UI/UX design skills for creating wireframes and prototypes.',
	},
	{
		type: 'General',
		name: 'Git',
		level: 'medium',
		description: 'Experienced with version control, branching, and collaborative workflows.',
	},
];

export function isSkill(tag: string) {
	return skills.map((skill) => skill.name).includes(tag);
}
