const BASE = import.meta.env.BASE_URL; // "/" locally, "/repo-name/" on GitHub Pages

// CVWO
const CVWO = `${BASE}experiences/CVWO/cvwo.jpeg`;
const CVWO1 = `${BASE}experiences/CVWO/KWSH.jpg`;
const CVWO2 = `${BASE}experiences/CVWO/Lunch.jpg`;
const CVWO3 = `${BASE}experiences/CVWO/GIC.jpg`;

// R&S
const RohdeAndSchwarz1 = `${BASE}experiences/RohdeAndSchwarz/worktable.jpeg`;
const RohdeAndSchwarz2 = `${BASE}experiences/RohdeAndSchwarz/gift.jpeg`;

// PFK
const PFK1 = `${BASE}experiences/PFK/trial.jpeg`;

// RTTO
const RTTO1 = `${BASE}experiences/RTTO/rtto.jpeg`;

export interface Experience {
	type: string;
	name: string;
	duration: string;
	role: string;
	organisation: string;
	description: string;
	tasks: string[];
	images: string[];
	certificate: string;
	tags: string[];
}

export const experiences: Experience[] = [
	{
		type: 'work',
		name: 'Computing for Voluntary Welfare Organisations',
		duration: 'May 2025 – Aug 2025',
		role: 'Software Engineer Intern',
		organisation: 'NUS CVWO',
		description:
			'Worked across backend and frontend systems supporting large-scale applications in the social service sector. Contributed to migrations, feature development, mobile app development, and DevOps workflows.',
		tasks: [
			// High-level tasks
			'HPC migration for LBSA Rails App',
			'Built and maintained features for the KWSH NOK App',
			'Developed and modified backend services across AAC and Cornerstone systems',
			'Worked on multiple large codebases spanning backend, frontend, and mobile',
			'Followed internal Git workflow and DevOps lifecycle',
		],
		images: [CVWO1, CVWO2, CVWO3],
		certificate: CVWO,
		tags: ['Golang', 'React', 'Frontend', 'Backend', 'Mobile', 'DevOps', 'Expo Go', 'Git'],
	},

	{
		type: 'work',
		name: 'Rohde & Schwarz Engineering Internship',
		duration: 'March 2024 – May 2024',
		role: 'Power Supplies Intern',
		organisation: 'Rohde & Schwarz',
		description:
			'Worked on hardware assembly, prime testing, and documentation for engineering systems while assisting in technical processes and device preparation.',
		tasks: [
			'Created feature specification documentation',
			'Assembled devices, including torque-based fastening and wiring',
			'Performed prime testing (connectivity test, jumper wires, BDVX board viewer)',
			'Soldering and de-soldering components',
			'Prepared documentation using Drawio and MS Word (TOC, references, formatting)',
			'Modified Pytest run configurations for testing procedures',
		],
		images: [RohdeAndSchwarz1, RohdeAndSchwarz2],
		certificate: '',
		tags: ['Hardware', 'Testing', 'Documentation', 'Soldering'],
	},

	{
		type: 'volunteering',
		name: 'Programming for Kids (PFK)',
		duration: 'March 2025 – June 2025',
		role: 'Volunteer',
		organisation: 'Pioneer House',
		description:
			'Taught programming fundamentals to primary school students through Scratch, guiding them through mini-projects, exercises, and hands-on class activities.',
		tasks: [
			// Trial run
			'Assisted younger kids during trial teaching session',
			'Helped troubleshoot Scratch issues such as voice recording and background coloring',

			// Actual sessions
			'Guided P4 students in Scratch programming',
			'Led icebreakers and provided one-on-one support during activities',
			'Interacted with various volunteers across NTU, RVJC, ACSI, and JPJC',
			'Lecturer for a session, teaching and walking around to check progress',
			'Helped students debug and complete their final projects',
		],
		images: [PFK1],
		certificate: '',
		tags: ['Scratch', 'Teaching', 'Programming Basics'],
	},
	{
		type: 'volunteering',
		name: 'Rice To The Occasion (RTTO) VIA',
		duration: 'February 2023',
		role: 'Volunteer',
		organisation: 'Temasek Junior College',
		description:
			'Partnered with Bedok Youth Network to run a community carnival for senior citizens to promote digital safety and provide welfare support.',
		tasks: [
			'Taught elderly participants how to identify and prevent scams',
			'Guided beneficiaries in selecting items for their welfare packs',
			'Helped pack welfare items and assisted beneficiaries with transporting them via trolley',
		],
		images: [RTTO1],
		certificate: '',
		tags: ['Digital Safety', 'Senior Care'],
	},
	{
		type: 'work',
		name: 'CS1101S TA',
		duration: 'Aug 2025 – November 2025',
		role: 'Undergraduate Teaching Assistant',
		organisation: 'National University of Singapore',
		description:
			'Prepared and conducted weekly tutorial lessons, evaluated twice-weekly programming assignments, and held consultations, for a class of 6 students.',
		tasks: [
			'Prepared weekly tutorial lessons',
			'Evaluated programming assignments twice a week',
			'Guided and evaluated student pairs during assessments',
		],
		images: [],
		certificate: '',
		tags: ['Teaching', 'Source'],
	},
];

export function parseDateFromDuration(duration: string): Date {
	const parts = duration.split('–').map((p) => p.trim());
	const firstPart = parts[0];
	const date = new Date(firstPart);
	if (!isNaN(date.getTime())) return date;
	return new Date();
}

export function getExperiencesFromSkill(skill: string) {
	return experiences.filter((exp) => exp.tags.includes(skill));
}
