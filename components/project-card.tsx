"use client"

import Link from "next/link"
import { ExternalLink, Github, Smartphone, Globe, Code, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

const categoryConfig = {
  Mobile: { icon: Smartphone, color: "text-teal-400", bg: "bg-teal-500/10 border-teal-500/20" },
  WebApp: { icon: Code, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  Website: { icon: Globe, color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
  "Open Source": { icon: Sparkles, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const config = categoryConfig[project.category]
  const CategoryIcon = config.icon

  return (
    <article className="glass-card p-6 h-full flex flex-col group hover:border-emerald-500/25 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <Badge variant="outline" className={`${config.bg} ${config.color} border flex items-center gap-1`}>
          <CategoryIcon className="h-3 w-3" />
          {project.category}
        </Badge>
        {project.featured && (
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/80">Featured</span>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-300 transition-colors">{project.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="text-xs px-2 py-0.5 rounded-md bg-secondary/60 text-muted-foreground">
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-xs px-2 py-0.5 rounded-md bg-secondary/60 text-muted-foreground">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      <div className="flex gap-2 mt-auto">
        {project.link && (
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-border/60 text-foreground hover:border-emerald-500/40 hover:bg-secondary hover:text-emerald-400 text-xs"
            asChild
          >
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
              Live Demo
            </Link>
          </Button>
        )}
        {project.githubLink && (
          <Button
            variant="outline"
            size="sm"
            className="border-border/60 text-foreground hover:border-emerald-500/40 hover:bg-secondary hover:text-emerald-400"
            asChild
          >
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
              <Github className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </article>
  )
}
