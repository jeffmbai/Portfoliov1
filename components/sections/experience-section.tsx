"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { experienceData } from "@/lib/data"

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Where I&apos;ve <span className="text-emerald-400">worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-6">
            {experienceData.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-0 sm:pl-12"
              >
                <div className="absolute left-0 top-6 hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/30 bg-background">
                  <Briefcase className="h-4 w-4 text-emerald-400" />
                </div>

                <div className="glass-card p-6 md:p-8 hover:border-emerald-500/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                      <p className="text-emerald-400/90 font-medium">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">{job.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
