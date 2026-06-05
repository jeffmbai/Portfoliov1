"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projectsData } from "@/lib/data"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/types"

const categories = ["All", "Featured", "Open Source", "Mobile", "WebApp"] as const

function filterProjects(category: string): Project[] {
  if (category === "All") return projectsData
  if (category === "Featured") return projectsData.filter((p) => p.featured)
  return projectsData.filter((p) => p.category === category)
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Featured")
  const filteredProjects = filterProjects(activeCategory)

  return (
    <section id="projects" className="section-spacing">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <p className="section-label mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Selected <span className="text-emerald-400">projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            From open-source tools on GitHub to production mobile apps and enterprise web platforms.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border-border/60 transition-all",
                activeCategory === category
                  ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300"
                  : "bg-transparent text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-secondary/70",
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No projects in this category.</p>
        )}
      </div>
    </section>
  )
}
