"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"
import { downloadResume } from "@/lib/navigation"

interface HeroSectionProps {
  onViewProjects: () => void
  onContact: () => void
}

export default function HeroSection({ onViewProjects, onContact }: HeroSectionProps) {
  const handleResumeDownload = async () => {
    try {
      await downloadResume()
    } catch (error) {
      console.error("Error downloading resume:", error)
    }
  }

  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 md:px-6 pt-28 pb-20">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm text-emerald-300/90 font-mono">Available for opportunities</span>
          </div>

          <p className="section-label mb-4">{personalInfo.title}</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="text-foreground">{personalInfo.name}</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-5">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-emerald-400" />
              {personalInfo.location}
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="h-4 w-4 text-emerald-400" />
              {personalInfo.email}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-500 text-white border-none px-8 h-12 text-base"
              onClick={onContact}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/80 text-foreground hover:border-emerald-500/50 hover:bg-secondary hover:text-emerald-400 px-8 h-12 text-base"
              onClick={onViewProjects}
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/80 text-foreground hover:border-emerald-500/50 hover:bg-secondary hover:text-emerald-400 px-8 h-12 text-base"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {personalInfo.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-emerald-400">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  )
}
