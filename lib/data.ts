import type { Experience, Project, SkillCategory } from "./types"

export const personalInfo = {
  name: "Goffrey Mbai",
  shortName: "Goffrey",
  title: "Fullstack Software Engineer",
  email: "jeffkinuthia254@gmail.com",
  phone: "+254710984312",
  location: "Kenya",
  portfolio: "https://jeffmbai.netlify.app/",
  github: "https://github.com/jeffmbai",
  linkedin: "https://www.linkedin.com/in/geoffreymbai/",
  twitter: "https://x.com/prowebkenya",
  summary:
    "Full-Stack Software Engineer with 4+ years of experience building responsive web applications, cross-platform mobile apps, RESTful APIs, and cloud-based solutions. Skilled in software architecture, system integration, database design, CI/CD, and Agile development.",
  yearsExperience: "4+",
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Shipped", value: "25+" },
    { label: "Technologies", value: "20+" },
  ],
}

export const experienceData: Experience[] = [
  {
    company: "Turing",
    role: "Software Developer",
    location: "Remote",
    period: "Aug 2025 – Present",
    highlights: [
      "Built frontend and backend for containerized web apps in AI agent workflows",
      "Developed reusable UI components with performance optimizations and caching",
      "Conducted UI/UX evaluations and end-to-end testing for quality assurance",
      "Integrated third-party APIs and delivered technical documentation",
    ],
  },
  {
    company: "BusinessCloud Technologies",
    role: "Software Engineer",
    location: "Nairobi",
    period: "Dec 2023 – Sep 2025",
    highlights: [
      "Developed full-stack applications using C#, .NET, and React",
      "Implemented RESTful APIs and CI/CD pipelines for automated deployments",
      "Built cross-platform mobile apps with React Native and Expo",
      "Integrated Microsoft Identity for secure authentication and authorization",
    ],
  },
  {
    company: "Siweb Technologies",
    role: "Software Engineer",
    location: "Nairobi",
    period: "Oct 2022 – Nov 2023",
    highlights: [
      "Designed full-stack apps with Laravel, CodeIgniter, Flask, and React",
      "Built responsive UIs and RESTful API integrations",
      "Developed server-side logic, database schemas, and complex queries",
    ],
  },
  {
    company: "iosoft technologies",
    role: "Junior Software Engineer",
    location: "Nairobi",
    period: "Jan 2022 – Sep 2022",
    highlights: [
      "Maintained web apps using PHP, CodeIgniter, Flask, React, and MSSQL",
      "Collaborated with teams to translate user needs into technical specs",
      "Customized and configured CMS platforms including WordPress",
    ],
  },
]

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    name: "Mobile",
    skills: ["React Native", "Expo", "Mobile UI/UX"],
  },
  {
    name: "Backend",
    skills: ["C#", ".NET", "Flask", "FastAPI", "RESTful APIs"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["Azure", "Docker", "Kubernetes", "Firebase", "CI/CD"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLAlchemy", "MongoDB", "MSSQL"],
  },
]

export const projectsData: Project[] = [
  {
    title: "Annote",
    description:
      "Modern React Native notes app with Supabase auth, offline SQLite storage, Zustand state management, and automatic sync when connectivity is restored.",
    category: "Open Source",
    technologies: ["React Native", "TypeScript", "Supabase", "SQLite", "Zustand"],
    githubLink: "https://github.com/jeffmbai/Annote",
    featured: true,
  },
  {
    title: "Spotter Flights",
    description:
      "Flight tracking and discovery application built with TypeScript, enabling users to search, monitor, and explore flight information in real time.",
    category: "WebApp",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind"],
    githubLink: "https://github.com/jeffmbai/spotterflights",
    featured: true,
  },
  {
    title: "CollabExercises",
    description:
      "Collaborative exercise platform for team-based fitness challenges, workout tracking, and shared progress monitoring.",
    category: "Open Source",
    technologies: ["React", "TypeScript", "Node.js"],
    githubLink: "https://github.com/jeffmbai/CollabExercises",
    featured: true,
  },
  {
    title: "Triple2S",
    description:
      "Full-stack TypeScript application with modern architecture, responsive design, and scalable backend integration.",
    category: "WebApp",
    technologies: ["TypeScript", "React", "Node.js"],
    githubLink: "https://github.com/jeffmbai/triple2s",
    featured: true,
  },
  {
    title: "Expo Firebase Auth",
    description:
      "Production-ready starter with Firebase setup, TypeScript, Expo Router, tab and drawer navigation, and email verification for registration and login flows.",
    category: "Open Source",
    technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
    githubLink: "https://github.com/jeffmbai/expo-firebase-auth",
    featured: true,
  },
  {
    title: "Digital Asset Wallet",
    description:
      "React Native digital asset wallet for securely storing, buying, selling, and earning digital tokens with an intuitive mobile experience.",
    category: "Mobile",
    technologies: ["React Native", "TypeScript", "Firebase"],
    githubLink: "https://github.com/jeffmbai/Digital-Asset",
    featured: true,
  },
  {
    title: "React Native Fitness App",
    description:
      "Cross-platform fitness tracking mobile app with workout logging, progress charts, and goal-setting features.",
    category: "Mobile",
    technologies: ["React Native", "JavaScript", "Expo"],
    githubLink: "https://github.com/jeffmbai/react-native-fitness-app",
  },
  {
    title: "DT Block Explorer",
    description:
      "Blockchain block explorer with a React and Ant Design frontend using Apollo Client for GraphQL, paired with a TypeScript backend server.",
    category: "WebApp",
    technologies: ["React", "TypeScript", "GraphQL", "Ant Design"],
    githubLink: "https://github.com/jeffmbai/dt-block-explorer-public-client",
    link: "https://github.com/jeffmbai/dt-block-explorer-public-client",
  },
  {
    title: "Bitcoin App",
    description:
      "React Native mobile app integrating Firebase and the Bitcoin.com API for real-time cryptocurrency tracking and wallet management.",
    category: "Mobile",
    technologies: ["React Native", "TypeScript", "Firebase"],
    githubLink: "https://github.com/jeffmbai/Bitcoin-APP",
  },
  {
    title: "CoinCurios",
    description:
      "Financial learning app for children ages 10+, making money management fun through colorful interfaces, engaging activities, and kid-friendly content.",
    category: "Mobile",
    technologies: ["React Native", "Tailwind", "TypeScript", "Firebase", "Expo"],
    link: "https://apps.apple.com/us/app/coin-curios/id6745624359",
    featured: true,
  },
  {
    title: "iPAS",
    description:
      "Cross-platform mobile app for pension management, remittance, and monitoring with an interactive UI for tracking pension progress.",
    category: "Mobile",
    technologies: ["React Native", "MSSQL", "C#", ".NET"],
    link: "https://play.google.com/store/apps/details?id=com.ibusinessclouds.ipas",
  },
  {
    title: "eMEL",
    description:
      "Mobile app for project monitoring and evaluation software, extending web functionalities to mobile with React Native, Microsoft Identity, and Expo.",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "Azure AD", "Expo"],
    link: "https://play.google.com/store/apps/details?id=com.ibusinessclouds.emel",
  },
  {
    title: "TopMarine",
    description:
      "Shipping logistics tracking app where shippers monitor shipment logistics from boarding to offloading, built with React Native and Microsoft Identity.",
    category: "Mobile",
    technologies: ["React Native", "Firebase", ".NET", "C#", "Expo"],
    link: "https://play.google.com/store/apps/details?id=com.ibusinessclouds.icoms",
  },
  {
    title: "iBusiness",
    description:
      "Mobile accounting SaaS companion with offline awareness for all-time access, integrated with Microsoft Identity, Expo, and Firebase.",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "Azure", "Expo", "C#", ".NET"],
    link: "https://play.google.com/store/apps/details?id=com.ibusinessclouds.ibusiness",
  },
  {
    title: "iComms",
    description:
      "Mobile application enhancing business and county administrative operations for key business and government agencies.",
    category: "Mobile",
    technologies: ["React Native", "Firebase", ".NET", "C#", "Expo"],
    link: "https://play.google.com/store/apps/details?id=com.ibusinessclouds.topmarine",
  },
  {
    title: "Infinity",
    description:
      "Automated financial tool for Trading 212 investors — scans portfolios and markets to identify undervalued stocks and recommend optimal dividend reinvestment strategies.",
    category: "WebApp",
    technologies: ["React", "Next.js", "Tailwind", "MongoDB", "CI/CD"],
    link: "https://infinity-orpin.vercel.app/",
    featured: true,
  },
  {
    title: "Project Management Platform",
    description:
      "Comprehensive Project Monitoring and Evaluation software with real-time activity tracking and advanced data visualization for better insights.",
    category: "WebApp",
    technologies: ["React", ".NET", "C#", "MSSQL", "Docker", "Azure"],
    link: "https://emel.cloudmlapps.com/",
  },
  {
    title: "SaaS Accounting Software",
    description:
      "Full accounting SaaS covering procurement, inventory, order-to-cash, and general accounting with C#, React, Docker, Azure, and Microsoft Identity.",
    category: "WebApp",
    technologies: ["React", ".NET", "C#", "MSSQL", "Docker", "Azure"],
    link: "https://app.cloudmlapps.com/",
  },
  {
    title: "Top Marine Web",
    description:
      "Comprehensive shipping and logistics platform allowing users to track shipments from loading to offloading with real-time updates.",
    category: "WebApp",
    technologies: ["React", ".NET", "C#", "MSSQL", "Docker", "Azure"],
    link: "https://topmarine.cloudmlapps.com/",
  },
  {
    title: "Digital Scanner",
    description:
      "Pneumonia detection web application using Flask and machine learning to identify pneumonia from chest X-ray images with high accuracy.",
    category: "WebApp",
    technologies: ["React", "Flask", "Python", "TensorFlow"],
  },
  {
    title: "Tivui",
    description:
      "Multivendor e-commerce platform for furniture and home decor, providing seamless functionality for both buyers and sellers.",
    category: "WebApp",
    technologies: ["React", "Flask", "MySQL"],
    link: "https://tivui.co.ke/",
  },
  {
    title: "Property Control 360",
    description:
      "Property management platform migrated from WordPress to a modern stack. Tenants pay rent online via MPESA while owners manage properties, tenants, and payments.",
    category: "WebApp",
    technologies: ["Next.js", "FastAPI", "Docker", "PostgreSQL"],
    link: "http://propertycontrol360.com/",
  },
  {
    title: "The Covenant of Grace",
    description:
      "Church platform rebuilt with Next.js and FastAPI for sermons, events, blogs, and integrated donation payments for church projects.",
    category: "WebApp",
    technologies: ["Next.js", "FastAPI", "Docker", "PostgreSQL"],
    link: "https://thecovenantofgrace.org/",
  },
  {
    title: "Esco Bar Mobile Catering",
    description:
      "Mobile bar catering booking platform migrated to Next.js with a FastAPI backend and Dockerized deployment for event service orders across the UK.",
    category: "WebApp",
    technologies: ["Next.js", "FastAPI", "Docker", "PostgreSQL"],
    link: "https://esco-bar.co.uk/",
  },
  {
    title: "Centre for Suicide Research",
    description:
      "Support and awareness platform helping victims access help, prevent recurring suicidal thoughts, and organize community events — rebuilt on Next.js and FastAPI.",
    category: "WebApp",
    technologies: ["Next.js", "FastAPI", "Docker", "PostgreSQL"],
    link: "https://csricentre.org/",
  },
]
