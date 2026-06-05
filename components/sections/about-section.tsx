"use client"

import { motion } from "framer-motion"
import { Code2, Cloud, Database, Layers, Smartphone, Globe } from "lucide-react"
import { personalInfo } from "@/lib/data"

const expertise = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, Next.js, TypeScript, and Tailwind for responsive, performant interfaces.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Cross-platform apps with React Native and Expo for iOS and Android.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
  },
  {
    icon: Layers,
    title: "Backend",
    description: "RESTful APIs and services with C#, .NET, Flask, and FastAPI.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Azure, Docker, Kubernetes, Firebase, and CI/CD pipeline automation.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    icon: Database,
    title: "Databases",
    description: "PostgreSQL, MySQL, SQLAlchemy, MongoDB, and MSSQL Server.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Globe,
    title: "Integration",
    description: "Third-party APIs, Microsoft Identity, and system architecture design.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <p className="section-label mb-3">About</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Building products that{" "}
            <span className="text-emerald-400">scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            {personalInfo.summary} I thrive in Agile environments, collaborating with cross-functional teams to
            deliver high-quality software from concept to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass-card p-6 group hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
