"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend")

  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Redux", level: 80 },
      { name: "Next.js", level: 75 },
    ],
    mobile: [
      { name: "React Native", level: 85 },
      { name: "Expo", level: 80 },
      { name: "iOS Development", level: 70 },
      { name: "Android Development", level: 65 },
      { name: "Mobile UI/UX", level: 75 },
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "Flask", level: 65 },
      { name: "C#/.NET", level: 60 },
      { name: "RESTful APIs", level: 80 },
      { name: "GraphQL", level: 65 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "Jest/Testing", level: 80 },
      { name: "Figma", level: 65 },
      { name: "VS Code", level: 95 },
    ],
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-400 md:text-lg">
            I've developed expertise in various technologies and tools throughout my career. Here's a breakdown of my
            technical skills.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                <TabsTrigger
                  value="frontend"
                  className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300 data-[state=active]:shadow-none"
                >
                  Frontend
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-300 data-[state=active]:shadow-none"
                >
                  Mobile
                </TabsTrigger>
                <TabsTrigger
                  value="backend"
                  className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-300 data-[state=active]:shadow-none"
                >
                  Backend
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className="data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-300 data-[state=active]:shadow-none"
                >
                  Tools
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="frontend" className="mt-0">
              <SkillsTab skills={skills.frontend} color="purple" />
            </TabsContent>

            <TabsContent value="mobile" className="mt-0">
              <SkillsTab skills={skills.mobile} color="blue" />
            </TabsContent>

            <TabsContent value="backend" className="mt-0">
              <SkillsTab skills={skills.backend} color="emerald" />
            </TabsContent>

            <TabsContent value="tools" className="mt-0">
              <SkillsTab skills={skills.tools} color="amber" />
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
          >
            <div className="text-4xl font-bold mb-2 text-purple-400">5+</div>
            <div className="text-gray-400">Years of Experience</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
          >
            <div className="text-4xl font-bold mb-2 text-blue-400">30+</div>
            <div className="text-gray-400">Projects Completed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
          >
            <div className="text-4xl font-bold mb-2 text-emerald-400">15+</div>
            <div className="text-gray-400">Technologies</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
          >
            <div className="text-4xl font-bold mb-2 text-amber-400">10+</div>
            <div className="text-gray-400">Happy Clients</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface Skill {
  name: string
  level: number
}

interface SkillsTabProps {
  skills: Skill[]
  color: "purple" | "blue" | "emerald" | "amber"
}

function SkillsTab({ skills, color }: SkillsTabProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-purple-500/20 text-purple-300"
      case "blue":
        return "bg-blue-500/20 text-blue-300"
      case "emerald":
        return "bg-emerald-500/20 text-emerald-300"
      case "amber":
        return "bg-amber-500/20 text-amber-300"
      default:
        return "bg-purple-500/20 text-purple-300"
    }
  }

  return (
    <div className="space-y-6">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span className="text-gray-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2.5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`h-2.5 rounded-full ${getColorClasses(color)}`}
            ></motion.div>
          </div>
        </div>
      ))}
    </div>
  )
}
