"use client"

import { motion } from "framer-motion"
import { Download, Briefcase, GraduationCap, Award, Code } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">My Resume</h1>
              <p className="text-gray-400">Frontend & Mobile Developer</p>
            </div>
            <Button
              className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none"
              onClick={() => {
                // In a real app, this would download the resume PDF
                alert("Resume download functionality would be implemented here")
              }}
            >
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </motion.div>

          <div className="space-y-12">
            {/* Experience Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 mr-3 text-purple-500" />
                <h2 className="text-2xl font-bold">Work Experience</h2>
              </div>

              <div className="space-y-6">
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                      <div className="mt-2 md:mt-0">
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                          2021 - Present
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">TechCorp Inc.</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 text-purple-400">•</span>
                        <span>
                          Led the frontend development team in building responsive web applications using React,
                          TypeScript, and modern CSS frameworks.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 text-purple-400">•</span>
                        <span>
                          Implemented state management solutions with Redux and Context API, improving application
                          performance by 40%.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 text-purple-400">•</span>
                        <span>
                          Collaborated with UX/UI designers to create intuitive user interfaces and seamless user
                          experiences.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="text-xl font-semibold">Mobile Developer</h3>
                      <div className="mt-2 md:mt-0">
                        <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">2019 - 2021</Badge>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">AppWorks Solutions</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 text-blue-400">•</span>
                        <span>
                          Developed cross-platform mobile applications using React Native and Expo for iOS and Android
                          platforms.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 text-blue-400">•</span>
                        <span>
                          Integrated RESTful APIs and implemented offline-first functionality for seamless user
                          experience.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 text-blue-400">•</span>
                        <span>
                          Optimized application performance and reduced load times by 50% through code refactoring and
                          implementing best practices.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="text-xl font-semibold">Web Developer</h3>
                      <div className="mt-2 md:mt-0">
                        <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">
                          2017 - 2019
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">Digital Creations</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 text-emerald-400">•</span>
                        <span>
                          Built responsive websites and web applications using HTML, CSS, JavaScript, and jQuery.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 text-emerald-400">•</span>
                        <span>
                          Collaborated with backend developers to integrate frontend interfaces with server-side logic.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1 text-emerald-400">•</span>
                        <span>
                          Implemented responsive design principles to ensure optimal viewing experience across devices.
                        </span>
                      </li>
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
                <GraduationCap className="h-6 w-6 mr-3 text-blue-500" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="space-y-6">
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="text-xl font-semibold">Master of Computer Science</h3>
                      <div className="mt-2 md:mt-0">
                        <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">2015 - 2017</Badge>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">Stanford University</p>
                    <p className="text-gray-300">
                      Specialized in Human-Computer Interaction and Software Engineering. Graduated with honors.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                      <div className="mt-2 md:mt-0">
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">2011 - 2015</Badge>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">University of California, Berkeley</p>
                    <p className="text-gray-300">
                      Focused on software development and web technologies. Participated in multiple hackathons and
                      coding competitions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <Code className="h-6 w-6 mr-3 text-emerald-500" />
                <h2 className="text-2xl font-bold">Technical Skills</h2>
              </div>

              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Frontend Development</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">React</Badge>
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">TypeScript</Badge>
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">JavaScript</Badge>
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">HTML5</Badge>
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">CSS3</Badge>
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Tailwind CSS</Badge>
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Next.js</Badge>
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Redux</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Mobile Development</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">React Native</Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">Expo</Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">iOS</Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">Android</Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">Mobile UI/UX</Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">Push Notifications</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Backend & Database</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">Node.js</Badge>
                        <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">Express</Badge>
                        <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">Flask</Badge>
                        <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">C#</Badge>
                        <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">.NET</Badge>
                        <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">MongoDB</Badge>
                        <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">Firebase</Badge>
                        <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30">SQL</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Tools & Others</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/30">Git</Badge>
                        <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/30">Docker</Badge>
                        <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/30">CI/CD</Badge>
                        <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/30">Azure</Badge>
                        <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/30">AWS</Badge>
                        <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/30">Testing</Badge>
                        <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/30">Agile</Badge>
                        <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/30">Figma</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Certifications Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 mr-3 text-amber-500" />
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>

              <div className="space-y-4">
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold">AWS Certified Developer</h3>
                        <p className="text-gray-400">Amazon Web Services</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <Badge className="bg-amber-500/20 text-amber-300 hover:bg-amber-500/30">2022</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold">Microsoft Certified: Azure Developer Associate</h3>
                        <p className="text-gray-400">Microsoft</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">2021</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold">React Native Specialist</h3>
                        <p className="text-gray-400">Meta (formerly Facebook)</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">2020</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  )
}
