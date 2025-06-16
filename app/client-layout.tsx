"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FluidBackground from "@/components/fluid-background"
// import FluidController from "@/components/fluid-controller"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [fluidInstance, setFluidInstance] = useState<any>(null)

  const handleFluidInstanceReady = (instance: any) => {
    setFluidInstance(instance)
  }

  return (
    <>
      <FluidBackground onInstanceReady={handleFluidInstanceReady} />
      {/* <FluidController fluidInstance={fluidInstance} /> */}
      <Header />
      {children}
      <Footer />
    </>
  )
}
