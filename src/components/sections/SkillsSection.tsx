"use client"

import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs"

export default function SkillsSection() {
  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
    ],
    mobile: [
      { name: "React Native", level: 85 },
      { name: "Expo", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
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
            I've developed expertise in various technologies throughout my career.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                <TabsTrigger value="frontend" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300">
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="mobile" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-300">
                  Mobile
                </TabsTrigger>
                <TabsTrigger value="backend" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-300">
                  Backend
                </TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-300">
                  Tools
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="frontend">
              <SkillsTab skills={skills.frontend} color="purple" />
            </TabsContent>

            <TabsContent value="mobile">
              <SkillsTab skills={skills.mobile} color="blue" />
            </TabsContent>

            <TabsContent value="backend">
              <SkillsTab skills={skills.backend} color="emerald" />
            </TabsContent>

            <TabsContent value="tools">
              <SkillsTab skills={skills.tools} color="amber" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function SkillsTab({ skills, color }: { skills: {name: string, level: number}[], color: string }) {
  const colorClasses = {
    purple: "bg-purple-500/20 text-purple-300",
    blue: "bg-blue-500/20 text-blue-300",
    emerald: "bg-emerald-500/20 text-emerald-300",
    amber: "bg-amber-500/20 text-amber-300"
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
              className={`h-2.5 rounded-full ${colorClasses[color as keyof typeof colorClasses]}`}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
