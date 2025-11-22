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
}

export const experiences: Experience[] = [
	{
		type: 'work',
		name: 'Computing for Voluntary Welfare Organisations (CVWO)',
		duration: 'May 2025 – Aug 2025',
		role: 'Software Engineer Intern',
		organisation: 'NUS CVWO',
		description:
			'Worked across backend and frontend systems supporting large-scale applications in the social service sector. Contributed to migrations, feature development, mobile app development, and DevOps workflows.',
		tasks: [
			// High-level tasks
			'HPC migration for LBSA Rails App',
			'Maintained and built features for the KWSH NOK App',
			'Developed and modified backend services across AAC and Cornerstone systems',
			'Worked on multiple large codebases spanning backend, frontend, and mobile',
			'Followed internal Git workflow and DevOps lifecycle',

			// Backend (AAC & Cornerstone)
			'Implemented handlers, policies, params, data access, and views in Golang backend',
			'Created and modified methods across large backend codebases (AAC ~40838 LoC, Cornerstone ~315281 LoC)',

			// Frontend
			'Built and maintained frontend pages for AAC (~366431 LoC)',
			'Contributed to AAC Volunteer App frontend (~73718 LoC)',
			'Contributed to KWSH NOK App frontend (~32358 LoC)',

			// Mobile Development
			'Implemented DevOps workflow for Expo-based mobile apps',
			'Set up push notification pipeline using Expo Notifications',

			// Workflow & Learning
			'Used reducers to manage API calls and global state',
			'Applied useAppDispatch and useAppSelector for reducer integration',
			'Followed Work Lifecycle Git workflow',
		],
		images: [],
		certificate: '',
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
		images: [],
		certificate: '',
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
		images: [],
		certificate: '',
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
		images: [],
		certificate: '',
	},
];
