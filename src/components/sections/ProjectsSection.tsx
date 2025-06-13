"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { projectsData } from "../../lib/data"
import ProjectCard from "../ProjectCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "Mobile", label: "Mobile Apps" },
    { id: "WebApp", label: "Web Apps" },
    { id: "Website", label: "Websites" },
  ]

  const filteredProjects =
    activeCategory === "all" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-700 blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-700 blur-[100px]" />
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
            Explore my portfolio of projects spanning mobile applications, web platforms, and websites. Each project
            showcases my skills in frontend development, mobile app creation, and full-stack implementation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-0 border border-gray-700 bg-gray-800/50"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
