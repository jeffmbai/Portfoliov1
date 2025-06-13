"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Server, Database, Globe, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Remove the background gradient and use transparent backgrounds */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            I'm a passionate Software Engineer specializing in frontend and mobile development. With expertise in React,
            React Native, TypeScript, and Next.js, I build responsive, performant, and visually appealing applications
            that deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-sm opacity-75"></div>
              <div className="relative h-full bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    My Journey
                  </h3>
                  <p className="text-gray-300 mb-4">
                    With over 5 years of experience in software development, I've worked on a diverse range of projects
                    from mobile apps to web platforms.
                  </p>
                  <p className="text-gray-300 mb-4">
                    I'm passionate about creating intuitive user interfaces and seamless experiences that solve
                    real-world problems.
                  </p>
                  <p className="text-gray-300">
                    My expertise spans across frontend and mobile development, with a strong focus on React, React
                    Native, and modern JavaScript frameworks.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg blur-sm opacity-75"></div>
              <div className="relative h-full bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                    What I Do
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-emerald-400">•</span>
                      <span>Develop responsive and interactive web applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-emerald-400">•</span>
                      <span>Create cross-platform mobile apps for iOS and Android</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-emerald-400">•</span>
                      <span>Design intuitive user interfaces and experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-emerald-400">•</span>
                      <span>Integrate with backend services and APIs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-emerald-400">•</span>
                      <span>Optimize performance and user experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-purple-600 rounded-lg blur-sm opacity-75"></div>
              <div className="relative h-full bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-purple-400">
                    My Approach
                  </h3>
                  <p className="text-gray-300 mb-4">
                    I believe in writing clean, maintainable code that scales with your business needs.
                  </p>
                  <p className="text-gray-300 mb-4">
                    User-centered design principles guide my development process, ensuring that the end product is not
                    just functional but also delightful to use.
                  </p>
                  <p className="text-gray-300">
                    I stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-black/50 backdrop-blur-sm border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-purple-500/20 mb-4">
                  <Code className="h-7 w-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                <p className="text-gray-400">
                  Building responsive and interactive user interfaces with React, Next.js, and TypeScript.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-black/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-all duration-300 h-full">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-blue-500/20 mb-4">
                  <Smartphone className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mobile</h3>
                <p className="text-gray-400">
                  Developing cross-platform mobile applications with React Native and Expo for iOS and Android.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-black/50 backdrop-blur-sm border-gray-800 hover:border-emerald-500/50 transition-all duration-300 h-full">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-emerald-500/20 mb-4">
                  <Server className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Backend</h3>
                <p className="text-gray-400">
                  Creating robust backend services with Flask, .NET, and C# to power applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-black/50 backdrop-blur-sm border-gray-800 hover:border-amber-500/50 transition-all duration-300 h-full">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-amber-500/20 mb-4">
                  <Database className="h-7 w-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Database & Cloud</h3>
                <p className="text-gray-400">
                  Working with Firebase, MongoDB, Supabase, and Azure for data storage and cloud services.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-black/50 backdrop-blur-sm border-gray-800 hover:border-rose-500/50 transition-all duration-300 h-full">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-rose-500/20 mb-4">
                  <Globe className="h-7 w-7 text-rose-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">API Integration</h3>
                <p className="text-gray-400">
                  Connecting applications with third-party services and RESTful APIs for enhanced functionality.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-black/50 backdrop-blur-sm border-gray-800 hover:border-violet-500/50 transition-all duration-300 h-full">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-violet-500/20 mb-4">
                  <Layers className="h-7 w-7 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">DevOps</h3>
                <p className="text-gray-400">
                  Implementing CI/CD pipelines and deployment strategies for efficient software delivery.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
