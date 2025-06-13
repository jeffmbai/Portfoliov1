"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "../components/ui/button"
import FluidBackground from "../components/FluidBackground"
import FluidController from "../components/FluidController"
import AboutSection from "../components/sections/AboutSection"
import SkillsSection from "../components/sections/SkillsSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import ContactSection from "../components/sections/ContactSection"

export default function HomePage() {
  const [fluidInstance, setFluidInstance] = useState<any>(null)

  const handleFluidInstanceReady = (instance: any) => {
    setFluidInstance(instance)
  }

  return (
    <>
      <FluidBackground onInstanceReady={handleFluidInstanceReady} />
      <FluidController fluidInstance={fluidInstance} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Frontend & Mobile
                </span>
                <br />
                Developer
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                I build exceptional digital experiences with modern technologies, focusing on responsive design and
                seamless user interactions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 hover:border-purple-500/50 bg-black/30 hover:bg-black/50"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/30 border border-white/10 hover:bg-black/50"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
