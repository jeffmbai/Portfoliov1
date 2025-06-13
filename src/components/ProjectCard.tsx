"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button" // Added this import
import type { Project } from "../lib/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Generate a query for the placeholder image based on the project title and category
  const imageQuery = `${project.title} ${project.category} app screenshot`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card
        className="overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border-gray-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={`/placeholder.svg?height=400&width=600&query=${imageQuery}`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute bottom-2 right-2">
            <Badge className="bg-gray-900/70 text-white border-gray-700">{project.category}</Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700 text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-1" /> Demo
              </a>
            )}
            <Button
              variant="link"
              className="text-sm flex items-center text-blue-400 hover:text-blue-300 transition-colors p-0 h-auto"
              onClick={() => window.open('https://github.com/yourrepo', '_blank')}
            >
              <Github className="h-4 w-4 mr-1" /> Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
