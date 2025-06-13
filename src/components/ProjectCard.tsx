"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card
        className={`overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border-gray-800 ${
          featured ? "border-purple-500/30" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image || "/placeholder.png"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          {featured && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-purple-600 text-white">Featured</Badge>
            </div>
          )}
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-3">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-1" /> Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github className="h-4 w-4 mr-1" /> Code
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
