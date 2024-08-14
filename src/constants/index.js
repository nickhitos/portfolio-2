import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	pickrell,
	tesla,
	boeing,
	carrent,
	jobit,
	tripguide,
	threejs,
	codeday,
	bei,
	report,
	vista,
	summarigo,
	frontend,
	database,
	laptop,
	phone,
	kevin,
	campuspaths,
	_333gle,
	mark,
	william,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Frontend Developer",
		icon: frontend,
	},
	{
		title: "Backend Developer",
		icon: database,
	},
	{
		title: "Web Developer",
		icon: laptop,
	},
	{
		title: "React Native Developer",
		icon: phone,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Junior React Developer",
		company_name: "Pickrell Global Technologies",
		icon: pickrell,
		iconBg: "#e9e9e9",
		date: "Apr 2024 - June 2024",
		points: [
			"Developed and implemented five pages of an admin dashboard using Tailwind and NextJS to manage supply orders, enhancing efficiency of order management by 20%.",
			"Created custom and reusable React components with TypeScript to streamline development and enhance code maintainability.",
			"Managed project tasks and progress using Jira to maintain clear communication with team members and stakeholders.",
		],
	},
	{
		title: "Software Engineer Intern",
		company_name: "CodeDay",
		icon: codeday,
		iconBg: "#e9e9e9",
		date: "June 2022 - Aug 2022",
		points: [
			"Spearheaded the development of a comprehensive full-stack web application, utilizing the RedwoodJS framework, to construct an advanced task-tracking application from concept to completion.",
			"Implemented CRUD functionality to user lists using React, while managing data requests and responses with GraphQL and Prisma, resulting in a 50% decrease in average response time.",
			"Led team of three interns by organizing meetings, delegating tasks, and assisting in debugging to deliver minimum viable product.",
		],
	},
	{
		title: "Front End Developer",
		company_name: "Brain Exercise Initiative",
		icon: bei,
		iconBg: "#e9e9e9",
		date: "Apr 2022 - July 2022",
		points: [
			"Implemented search bar using JavaScript, to enable users to swiftly find and locate desired information from the platform's content, leading to a 25% decrease in average search time.",
			"Integrated Figma designs into the development process, ensuring adherence to design specifications while collaborating with designers to address UI/UX considerations and maintain consistency across the website.",
			"Collaborated with two developers, using version control systems to maintain project timelines and ensure project completion.",
		],
	},
	{
		title: "Operations Field Manager Intern",
		company_name: "Boeing",
		icon: boeing,
		iconBg: "#e9e9e9",
		date: "June 2019 - Aug 2019",
		points: [
			"Contributed to the development of an internal tool that relays attendance in real time in order to retrieve valuable insights for efficient decision-making and resource optimization.",
			"Acted as a liaison between field management and business intelligence in order to acquire and analyse user-centric insights for strategic enhancements through contextual inquiry and stakeholder interviews.",
			"Inspected safety and compliance of all equipment, shipping containers, and transport vehicles.	",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I’ve collaborated with others, but Nicolas’s unique approach stands out. His dedication and passion for his work is truly inspiring.",
		name: "Kevin Kieu",
		title: "Mechanical Engineering @ UW",
		image: kevin,
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their client's success like Nicolas does.",
		name: "William Wu",
		title: "Biochemistry @ UW",
		image: william,
	},
	{
		testimonial:
			"Collaborating with him has been a pleasure. I highly recommend his work to anyone looking for top-tier technical expertise.",
		name: "Mark Jason Joven",
		title: "Biochemistry @ UW",
		image: mark,
	},
];

const projects = [
	{
		name: "Reproduction Report",
		description:
			'Reproduced "Understanding the Effect of Model Compression on Social Bias in Large Language Models", by Gustavo Goncalves and Emma Strubell, by running experiments and adapting codebase to run on Google Cloud and University of Washington GPUs',
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "PyTorch",
				color: "green-text-gradient",
			},
			{
				name: "Pandas",
				color: "pink-text-gradient",
			},
			{
				name: "Bash",
				color: "blue-text-gradient",
			},
		],
		showLink: true,
		image: report,
		source_code_link:
			"https://github.com/nickhitos/reproduction-EMNLP2023-llm-compression-social-bias",
	},
	{
		name: "Vista",
		description:
			"A full-stack real-estate admin dashboard featuring Google OAuth, integrated data visualization tools, the ability to search and filter rental properties, and the ability to manage rental properties through CRUD operations.",
		tags: [
			{
				name: "TypeScript",
				color: "blue-text-gradient",
			},
			{
				name: "React",
				color: "green-text-gradient",
			},
			{
				name: "NodeJS",
				color: "pink-text-gradient",
			},
			{
				name: "MongoDB",
				color: "blue-text-gradient",
			},
		],
		showLink: true,
		image: vista,
		source_code_link: "https://mern-dash.netlify.app/dashboard",
	},
	{
		name: "SummariGo",
		description:
			"With cutting-edge AI technology powered by GPT (Generative Pre-trained Transformer), SummariGo aims to streamline your reading experience by providing concise, coherent, and informative summaries of lengthy articles and websites.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Vite",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "Redux",
				color: "blue-text-gradient",
			},
		],
		showLink: true,
		image: summarigo,
		source_code_link: "https://summarigo.netlify.app",
	},
	{
		name: "333gle",
		description:
			"A file search system that parses HTTP requests and forms responses with an HTML webpage of query results. The multithreaded web server listens on a port and accepts client requests to query its inverted index, where documents are mapped to words.",
		tags: [
			{
				name: "C++",
				color: "blue-text-gradient",
			},
			{
				name: "C",
				color: "green-text-gradient",
			},
			{
				name: "POSIX",
				color: "pink-text-gradient",
			},
			{
				name: "HTML",
				color: "blue-text-gradient",
			},
		],
		showLink: false,
		image: _333gle,
		source_code_link: "https://about.gitlab.com",
	},
	{
		name: "Campus Paths",
		description:
			"Campus Paths calculates and displays the shortest route between two buildings on the University of Washington campus using Dijkstra’s algorithm. Users input their start and end destination, and the app displays the shortest path.",
		tags: [
			{
				name: "Java",
				color: "blue-text-gradient",
			},
			{
				name: "TypeScript",
				color: "green-text-gradient",
			},
			{
				name: "React",
				color: "pink-text-gradient",
			},
			{
				name: "Spark",
				color: "blue-text-gradient",
			},
		],
		showLink: false,
		image: campuspaths,
		source_code_link: "https://about.gitlab.com",
	},
];

export { services, technologies, experiences, testimonials, projects };
