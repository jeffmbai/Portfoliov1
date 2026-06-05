"use client"

import { motion } from "framer-motion"
import { skillsData } from "@/lib/data"

export default function SkillsSection() {
  return (
    <section id="skills" className="section-spacing">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header text-center"
        >
          <p className="section-label mb-3">Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech <span className="text-emerald-400">stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Technologies I use to build full-stack web and mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400/80 mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary/80 border border-border/60 text-foreground/90 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
