"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { downloadResume, scrollToSection } from "@/lib/navigation"

const navItems = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false)
    scrollToSection(id)
  }

  const handleResumeDownload = async () => {
    try {
      await downloadResume()
    } catch (error) {
      console.error("Error downloading resume:", error)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/40 py-2.5" : "bg-transparent py-3",
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-sm font-medium tracking-tight"
          >
            <span className="text-emerald-400">{"<"}</span>
            <span className="text-foreground">{personalInfo.shortName.toLowerCase()}</span>
            <span className="text-emerald-400">{"/>"}</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="nav-link px-3 py-1.5 text-sm rounded-lg"
              >
                {item.name}
              </button>
            ))}
            <button
              type="button"
              onClick={handleResumeDownload}
              className="nav-link px-3 py-1.5 text-sm rounded-lg"
            >
              Resume
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-emerald-400 transition-colors"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Button
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-500 text-white ml-1"
              onClick={() => handleNavClick("contact")}
            >
              Hire Me
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden hover:text-emerald-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/40"
          >
            <nav className="container max-w-6xl mx-auto px-4 py-3 flex flex-col gap-0.5">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="nav-link py-2 text-sm text-left w-full rounded-lg px-2"
                >
                  {item.name}
                </button>
              ))}
              <button
                type="button"
                onClick={handleResumeDownload}
                className="nav-link py-2 text-sm text-left w-full rounded-lg px-2"
              >
                Resume
              </button>
              <div className="flex gap-4 pt-2 border-t border-border/40">
                <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-emerald-400 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-emerald-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
