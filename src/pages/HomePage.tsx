"use client"

import { useRef, useState } from "react"
import FluidBackground from "../components/FluidBackground"
import FluidController from "../components/FluidController"
import AboutSection from "../components/sections/AboutSection"
import SkillsSection from "../components/sections/SkillsSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import ContactSection from "../components/sections/ContactSection"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "../components/ui/button"

export default function HomePage() {
  const [fluidInstance, setFluidInstance] = useState<any>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  const handleFluidInstanceReady = (instance: any) => {
    setFluidInstance(instance)
  }

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen">
      <FluidBackground onInstanceReady={handleFluidInstanceReady} />
      {fluidInstance && <FluidController fluidInstance={fluidInstance} />}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="block">Hi, I'm</span>
                <span className="gradient-text">John Doe</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                Software Engineer specializing in frontend and mobile development, creating intuitive and performant
                user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                size="lg"
                asChild
              >
                <a href="#contact">Hire Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex space-x-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} aria-label="Scroll down" className="text-gray-400 hover:text-white">
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </section>

      <div ref={aboutRef}>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  )
}
