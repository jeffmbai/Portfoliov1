"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const frontendSkills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Next.js", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "HTML5/CSS3", level: 95 },
  { name: "JavaScript", level: 95 },
]

const mobileSkills = [
  { name: "React Native", level: 90 },
  { name: "Expo", level: 85 },
  { name: "iOS Development", level: 80 },
  { name: "Android Development", level: 80 },
  { name: "Mobile UI/UX", level: 85 },
  { name: "Offline Storage", level: 75 },
]

const backendSkills = [
  { name: "Flask", level: 70 },
  { name: ".NET/C#", level: 65 },
  { name: "Node.js", level: 75 },
  { name: "Express", level: 70 },
  { name: "RESTful APIs", level: 85 },
  { name: "GraphQL", level: 65 },
]

const databaseSkills = [
  { name: "Firebase", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Supabase", level: 80 },
  { name: "SQL", level: 70 },
  { name: "NoSQL", level: 75 },
  { name: "Data Modeling", level: 70 },
]

const devopsSkills = [
  { name: "Azure", level: 75 },
  { name: "DevOps", level: 70 },
  { name: "CI/CD", level: 75 },
  { name: "Docker", level: 70 },
  { name: "Git", level: 85 },
  { name: "GitHub Actions", level: 75 },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-black/80 backdrop-blur-sm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-700 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-700 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            My technical toolkit includes a wide range of modern technologies for building web and mobile applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-900/50 border border-gray-800">
                <TabsTrigger
                  value="frontend"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-white"
                >
                  Frontend
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-white"
                >
                  Mobile
                </TabsTrigger>
                <TabsTrigger
                  value="backend"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-white"
                >
                  Backend
                </TabsTrigger>
                <TabsTrigger
                  value="database"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-white"
                >
                  Database
                </TabsTrigger>
                <TabsTrigger
                  value="devops"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/20 data-[state=active]:to-blue-600/20 data-[state=active]:text-white"
                >
                  DevOps
                </TabsTrigger>
              </TabsList>
            </div>

            <Card className="bg-gray-900/30 border-gray-800">
              <CardContent className="p-6">
                <TabsContent value="frontend" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {frontendSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="mb-4"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-white">{skill.name}</span>
                          <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="mobile" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mobileSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="mb-4"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-white">{skill.name}</span>
                          <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="backend" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {backendSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="mb-4"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-white">{skill.name}</span>
                          <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="h-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-amber-600"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="database" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {databaseSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="mb-4"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-white">{skill.name}</span>
                          <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="h-2.5 rounded-full bg-gradient-to-r from-amber-600 to-rose-600"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="devops" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {devopsSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="mb-4"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-white">{skill.name}</span>
                          <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="h-2.5 rounded-full bg-gradient-to-r from-rose-600 to-purple-600"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
