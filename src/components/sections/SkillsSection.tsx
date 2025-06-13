"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

export default function SkillsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Redux", level: 85 },
        { name: "Framer Motion", level: 80 },
      ],
    },
    {
      id: "mobile",
      title: "Mobile",
      skills: [
        { name: "React Native", level: 90 },
        { name: "Expo", level: 85 },
        { name: "iOS Development", level: 75 },
        { name: "Android Development", level: 75 },
        { name: "Mobile UI/UX", level: 85 },
        { name: "App Performance", level: 80 },
        { name: "Push Notifications", level: 75 },
        { name: "Offline Storage", level: 80 },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 80 },
        { name: "Flask", level: 75 },
        { name: "C#", level: 70 },
        { name: ".NET", level: 70 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "Microservices", level: 70 },
      ],
    },
    {
      id: "tools",
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 75 },
        { name: "Testing", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-700 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-700 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            I've developed a diverse skill set across frontend, mobile, and backend technologies. Here's a breakdown of
            my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8"
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-transparent">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-0 border border-gray-700 bg-gray-800/50"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
              5+
            </div>
            <p className="text-gray-400">Years of Experience</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-2">
              30+
            </div>
            <p className="text-gray-400">Projects Completed</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-amber-400 mb-2">
              15+
            </div>
            <p className="text-gray-400">Happy Clients</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400 mb-2">
              10+
            </div>
            <p className="text-gray-400">Technologies Mastered</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
