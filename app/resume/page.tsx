"use client"

import { motion } from "framer-motion"
import { Download, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { experienceData, personalInfo, skillsData } from "@/lib/data"
import { downloadResume } from "@/lib/navigation"

export default function ResumePage() {
  const handleResumeDownload = async () => {
    try {
      await downloadResume()
    } catch (error) {
      console.error("Error downloading resume:", error)
    }
  }

  return (
    <main className="min-h-screen pt-20 px-4 md:px-6 pb-10">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <p className="section-label mb-2">Resume</p>
            <h1 className="text-3xl md:text-4xl font-bold">{personalInfo.name}</h1>
            <p className="text-muted-foreground mt-1">{personalInfo.title}</p>
          </div>
          <Button onClick={handleResumeDownload} className="bg-emerald-600 hover:bg-emerald-500">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </div>

        <div className="glass-card p-6 md:p-8 mb-8">
          <h2 className="text-sm font-mono uppercase tracking-wider text-emerald-400/80 mb-3">Summary</h2>
          <p className="text-muted-foreground leading-relaxed">{personalInfo.summary}</p>
        </div>

        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="h-5 w-5 text-emerald-400" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            {experienceData.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-emerald-400/90 text-sm">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{job.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {job.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-emerald-400 mt-1.5">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillsData.map((category) => (
              <div key={category.name} className="glass-card p-5">
                <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400/80 mb-3">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-md bg-secondary/80 border border-border/60">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
