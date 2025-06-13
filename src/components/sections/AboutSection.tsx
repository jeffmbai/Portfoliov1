"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Server, Lightbulb } from "lucide-react"
import { Card, CardContent } from "../ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400 md:text-lg">
              I'm a passionate software engineer specializing in frontend and mobile development, with a focus on
              creating intuitive and performant user experiences.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
            <p className="text-gray-300 mb-4">
              With over 5 years of experience in software development, I've worked on a wide range of projects from
              responsive web applications to cross-platform mobile apps. My journey began with a deep curiosity about
              how digital experiences are built, which led me to pursue a degree in Computer Science.
            </p>
            <p className="text-gray-300">
              Throughout my career, I've collaborated with talented teams to deliver high-quality products that solve
              real-world problems. I'm constantly learning and exploring new technologies to stay at the forefront of
              the rapidly evolving tech landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Approach</h3>
            <p className="text-gray-300 mb-4">
              I believe in writing clean, maintainable code that stands the test of time. My approach to development is
              centered around understanding user needs and business goals to create solutions that are not only
              technically sound but also deliver real value.
            </p>
            <p className="text-gray-300">
              I'm passionate about performance optimization, accessibility, and creating seamless user experiences
              across different devices and platforms. I enjoy tackling complex problems and breaking them down into
              manageable components.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                <p className="text-gray-400">
                  Building responsive and interactive user interfaces with modern frameworks and libraries.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
                <p className="text-gray-400">
                  Creating cross-platform mobile applications that provide native-like experiences.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Backend Integration</h3>
                <p className="text-gray-400">
                  Connecting frontend applications with backend services and APIs for seamless data flow.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
                <p className="text-gray-400">
                  Analyzing complex requirements and finding elegant solutions to technical challenges.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
