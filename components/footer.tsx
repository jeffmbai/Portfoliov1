import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="font-mono text-sm">
              <span className="text-emerald-400">{"<"}</span>
              {personalInfo.shortName.toLowerCase()}
              <span className="text-emerald-400">{"/>"}</span>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">{personalInfo.title}</p>
          </div>

          <div className="flex gap-4">
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
