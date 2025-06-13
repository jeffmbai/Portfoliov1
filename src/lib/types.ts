export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: "web" | "mobile" | "other"
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

export interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
}

export interface Education {
  id: number
  degree: string
  institution: string
  location: string
  period: string
  description: string
}

export interface Certification {
  id: number
  name: string
  issuer: string
  date: string
}
