"use client"

import { useEffect, useRef } from "react"
import { createFluidSimulation } from "@/lib/fluid-simulation"

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const simulation = createFluidSimulation(canvas)

    // Make sure canvas covers the entire viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      simulation.resize()
    }

    // Initialize
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      simulation.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Allow clicking through the canvas
      }}
    />
  )
}
