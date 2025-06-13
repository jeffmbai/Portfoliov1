"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Code, Smartphone, Database, Server } from "lucide-react"
import Link from "next/link"
import FluidBackground from "@/components/fluid-background"
import FluidController from "@/components/fluid-controller"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import AboutSection from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [fluidInstance, setFluidInstance] = useState<any>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  // Function to expose the fluid instance from the child component
  const handleFluidInstanceReady = (instance: any) => {
    setFluidInstance(instance)
  }

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative min-h-screen" ref={containerRef}>
      {/* Hero Section with WebGL Fluid Background */}
      <FluidBackground onInstanceReady={handleFluidInstanceReady} />
      <FluidController fluidInstance={fluidInstance} />

      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-transparent"
        />

        <div className="container relative z-20 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge className="bg-purple-600/20 text-purple-200 border-purple-500/30 backdrop-blur-sm">
                Frontend Developer
              </Badge>
              <Badge className="bg-blue-600/20 text-blue-200 border-blue-500/30 backdrop-blur-sm">
                Mobile Developer
              </Badge>
              <Badge className="bg-emerald-600/20 text-emerald-200 border-emerald-500/30 backdrop-blur-sm">
                UI/UX Enthusiast
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Software Engineer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern frontend and mobile technologies
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none shadow-lg shadow-purple-900/20"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={scrollToProjects}
              >
                View Projects <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ArrowDown className="h-8 w-8 text-white/70" />
        </div>
      </div>

      {/* Tech Stack Quick Overview */}
      <div className="relative z-10 bg-black/80 backdrop-blur-md py-8 border-y border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                <Code className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-gray-300 text-sm">Frontend</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                <Smartphone className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-gray-300 text-sm">Mobile</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2">
                <Server className="h-6 w-6 text-emerald-400" />
              </div>
              <span className="text-gray-300 text-sm">Backend</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-2">
                <Database className="h-6 w-6 text-amber-400" />
              </div>
              <span className="text-gray-300 text-sm">Database</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
