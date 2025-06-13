"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Smartphone, Globe, Code } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import type { Project } from "../lib/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Generate a placeholder image URL
  const imageUrl = `https://source.unsplash.com/300x200/?${encodeURIComponent(project.title.toLowerCase())}`

  // Determine icon based on category
  const getCategoryIcon = () => {
    switch (project.category.toLowerCase()) {
      case "mobile":
        return <Smartphone className="h-4 w-4 mr-1" />
      case "webapp":
        return <Code className="h-4 w-4 mr-1" />
      case "website":
        return <Globe className="h-4 w-4 mr-1" />
      default:
        return null
    }
  }

  return (
    <Card
      className="overflow-hidden border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col bg-gray-900/50 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center">
          <Badge variant="outline" className="bg-black/70 border-gray-700 text-white flex items-center">
            {getCategoryIcon()}
            {project.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-gray-800/70 text-gray-300 border border-gray-700">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto">
          {project.link && (
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 hover:border-purple-500/50 bg-black/30 hover:bg-black/50"
              onClick={() => window.open(project.link, "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" /> View Project
            </Button>
          )}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.3 }}>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}
