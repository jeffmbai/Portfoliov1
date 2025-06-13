import type { Project } from "./types"

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart, and checkout functionality.",
    image: "/placeholder.png?height=300&width=500",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and fitness progress.",
    image: "/placeholder.png?height=300&width=500",
    category: "mobile",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "Collaborative task management tool with real-time updates and team features.",
    image: "/placeholder.png?height=300&width=500",
    category: "web",
    tags: ["TypeScript", "React", "Socket.io", "Express"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "Mobile app providing detailed weather forecasts and alerts based on location.",
    image: "/placeholder.png?height=300&width=500",
    category: "mobile",
    tags: ["React Native", "Weather API", "Geolocation", "Charts"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills with interactive elements.",
    image: "/placeholder.png?height=300&width=500",
    category: "web",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: 6,
    title: "Recipe Sharing Platform",
    description: "Social platform for sharing and discovering recipes with user ratings and comments.",
    image: "/placeholder.png?height=300&width=500",
    category: "web",
    tags: ["Next.js", "PostgreSQL", "Auth0", "Cloudinary"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]

export const skills = {
  frontend: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux", "Next.js"],
  mobile: ["React Native", "Expo", "iOS Development", "Android Development", "Mobile UI/UX"],
  backend: ["Node.js", "Express", "Flask", "C#/.NET", "RESTful APIs", "GraphQL"],
  tools: ["Git", "Docker", "CI/CD", "Jest/Testing", "Figma", "VS Code"],
}

export const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description:
      "Lead frontend development for multiple projects, mentoring junior developers and implementing best practices. Reduced load times by 40% through performance optimizations.",
    technologies: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Mobile Developer",
    company: "AppWorks Solutions",
    location: "Remote",
    period: "2019 - 2021",
    description:
      "Developed cross-platform mobile applications using React Native. Implemented complex UI components and integrated with backend services. Improved app stability and user experience.",
    technologies: ["React Native", "Expo", "Redux", "Firebase", "Jest"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "WebSphere Agency",
    location: "Boston, MA",
    period: "2017 - 2019",
    description:
      "Built responsive web applications for various clients. Collaborated with designers and backend developers to deliver high-quality products on time and within budget.",
    technologies: ["JavaScript", "React", "HTML/CSS", "SASS", "Webpack"],
  },
]

export const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2015 - 2017",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed thesis on optimizing user interfaces for mobile applications.",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Washington",
    location: "Seattle, WA",
    period: "2011 - 2015",
    description:
      "Graduated with honors. Participated in multiple hackathons and coding competitions. Served as teaching assistant for introductory programming courses.",
  },
]

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2022",
  },
  {
    id: 2,
    name: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    date: "2021",
  },
  {
    id: 3,
    name: "React Native Specialist",
    issuer: "Udacity",
    date: "2020",
  },
  {
    id: 4,
    name: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "2019",
  },
]
