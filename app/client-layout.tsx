"use client"

import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
