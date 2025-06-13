import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FluidBackground from "@/components/fluid-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description: "Personal portfolio showcasing frontend and mobile development expertise",
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Fluid background that will appear on all pages */}
          <FluidBackground />
          <div className="relative z-10">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
