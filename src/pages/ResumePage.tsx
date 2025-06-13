"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Download, Briefcase, GraduationCap, Award } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { experiences, education, certifications, skills } from "../lib/data"

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <Link
                to="/"
                className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
            </div>
            <Button className="mt-4 md:mt-0" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </a>
            </Button>
          </div>

          <div className="space-y-12">
            {/* Experience Section */}
            <section>
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-purple-500 mr-3" />
                <h2 className="text-2xl font-bold">Work Experience</h2>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className="text-purple-400">{exp.company}</p>
                          </div>
                          <div className="mt-2 md:mt-0 text-right">
                            <p className="text-gray-400">{exp.period}</p>
                            <p className="text-sm text-gray-500">{exp.location}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="bg-purple-500/10 text-purple-300 border-purple-500/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-blue-500 mr-3" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold">{edu.degree}</h3>
                            <p className="text-blue-400">{edu.institution}</p>
                          </div>
                          <div className="mt-2 md:mt-0 text-right">
                            <p className="text-gray-400">{edu.period}</p>
                            <p className="text-sm text-gray-500">{edu.location}</p>
                          </div>
                        </div>
                        <p className="text-gray-300">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 text-purple-400">Frontend Development</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.frontend.map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-purple-500/10 text-purple-300 border-purple-500/30"
                            variant="outline"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 text-blue-400">Mobile Development</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.mobile.map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-blue-500/10 text-blue-300 border-blue-500/30"
                            variant="outline"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 text-emerald-400">Backend Development</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.backend.map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                            variant="outline"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 text-amber-400">Tools & Methodologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.tools.map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-amber-500/10 text-amber-300 border-amber-500/30"
                            variant="outline"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-emerald-500 mr-3" />
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{cert.name}</h3>
                            <p className="text-sm text-gray-400">{cert.issuer}</p>
                          </div>
                          <Badge variant="outline" className="bg-emerald-500/10 text-emerald-300 border-emerald-500/30">
                            {cert.date}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
