export interface Project {
  title: string
  description: string
  category: "Mobile" | "WebApp" | "Website" | "Open Source"
  technologies: string[]
  link?: string
  githubLink?: string
  featured?: boolean
}

export interface Experience {
  company: string
  role: string
  location: string
  period: string
  highlights: string[]
}

export interface SkillCategory {
  name: string
  skills: string[]
}
