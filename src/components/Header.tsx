"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "./ThemeProvider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white">
            <span className="gradient-text">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <a href="/#about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="/#skills" className="text-sm text-gray-300 hover:text-white transition-colors">
              Skills
            </a>
            <a href="/#projects" className="text-sm text-gray-300 hover:text-white transition-colors">
              Projects
            </a>
            <Link to="/resume" className="text-sm text-gray-300 hover:text-white transition-colors">
              Resume
            </Link>
            <a href="/#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none"
              asChild
            >
              <a href="/#contact">Hire Me</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <a href="/#about" className="text-sm text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
              About
            </a>
            <a
              href="/#skills"
              className="text-sm text-gray-300 hover:text-white transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="/#projects"
              className="text-sm text-gray-300 hover:text-white transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <Link
              to="/resume"
              className="text-sm text-gray-300 hover:text-white transition-colors"
              onClick={toggleMenu}
            >
              Resume
            </Link>
            <a
              href="/#contact"
              className="text-sm text-gray-300 hover:text-white transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none w-full"
              asChild
            >
              <a href="/#contact" onClick={toggleMenu}>
                Hire Me
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
