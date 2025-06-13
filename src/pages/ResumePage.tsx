"use client"
import { motion } from "framer-motion"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Resume</h1>
            <p className="text-gray-400">My professional background and qualifications</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Experience Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-purple-500 mr-2" />
                <h2 className="text-2xl font-bold">Work Experience</h2>
              </div>

              <div className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                      <span className="text-purple-500">2021 - Present</span>
                    </div>
                    <p className="text-gray-300 mb-2">Tech Company Inc.</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Led the development of cross-platform mobile applications using React Native</li>
                      <li>Implemented CI/CD pipelines for automated testing and deployment</li>
                      <li>Mentored junior developers and conducted code reviews</li>
                      <li>Integrated various third-party APIs and services</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-semibold">Frontend Developer</h3>
                      <span className="text-purple-500">2018 - 2021</span>
                    </div>
                    <p className="text-gray-300 mb-2">Digital Solutions Ltd.</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Developed responsive web applications using React and TypeScript</li>
                      <li>Collaborated with UX/UI designers to implement pixel-perfect designs</li>
                      <li>Optimized application performance and loading times</li>
                      <li>Worked with RESTful APIs and GraphQL</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-semibold">Junior Web Developer</h3>
                      <span className="text-purple-500">2016 - 2018</span>
                    </div>
                    <p className="text-gray-300 mb-2">Web Creations Agency</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Built and maintained client websites using HTML, CSS, and JavaScript</li>
                      <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                      <li>Assisted in the development of WordPress themes and plugins</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-semibold">Master of Computer Science</h3>
                      <span className="text-blue-500">2014 - 2016</span>
                    </div>
                    <p className="text-gray-300">University of Technology</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-semibold">Bachelor of Software Engineering</h3>
                      <span className="text-blue-500">2010 - 2014</span>
                    </div>
                    <p className="text-gray-300">State University</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>
          </div>

          <div className="lg:col-span-1">
            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <Card className="bg-gray-800/50 border-gray-700 h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Skills</h2>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-purple-500">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>React</Badge>
                      <Badge>TypeScript</Badge>
                      <Badge>Tailwind CSS</Badge>
                      <Badge>HTML5/CSS3</Badge>
                      <Badge>JavaScript</Badge>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-500">Mobile</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>React Native</Badge>
                      <Badge>Expo</Badge>
                      <Badge>iOS</Badge>
                      <Badge>Android</Badge>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-purple-500">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Flask</Badge>
                      <Badge>.NET</Badge>
                      <Badge>C#</Badge>
                      <Badge>Node.js</Badge>
                      <Badge>Express</Badge>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-500">Database & Cloud</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Firebase</Badge>
                      <Badge>MongoDB</Badge>
                      <Badge>Supabase</Badge>
                      <Badge>Azure</Badge>
                      <Badge>SQL</Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-purple-500">Tools & Others</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Git</Badge>
                      <Badge>Docker</Badge>
                      <Badge>CI/CD</Badge>
                      <Badge>DevOps</Badge>
                      <Badge>Agile</Badge>
                    </div>
                  </div>
                </CardContent\
