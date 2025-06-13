"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projectsData } from "@/lib/data"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Mobile", "WebApp", "Website"]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category.toLowerCase() === activeCategory.toLowerCase())

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -current.clientWidth : current.clientWidth
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-700 blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-purple-700 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Explore my portfolio of mobile and web applications, showcasing my expertise in frontend development, API
            integration, and cloud services.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "border-gray-700 hover:border-purple-500/50 transition-all duration-300",
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/50 text-white"
                  : "bg-transparent text-gray-400 hover:text-white",
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/50 border-gray-700 hover:bg-black/80 hover:border-purple-500/50"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6 min-w-max px-4">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-[320px] snap-start"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/50 border-gray-700 hover:bg-black/80 hover:border-purple-500/50"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  )
}
