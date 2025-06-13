"use client"

import { useEffect, useRef } from "react"
import webGLFluidEnhanced from "webgl-fluid-enhanced"

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    webGLFluidEnhanced.simulation(canvasRef.current, {
      // Core simulation settings
      pressureIterations: 10,
      curl: 10,
      transparent: true,
      brightness: 0.1,
      bloomIntensity: 0.1,

      // Additional settings for better visual appeal
      DENSITY_DISSIPATION: 0.97,
      VELOCITY_DISSIPATION: 0.98,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      VELOCITY_UPSAMPLE: true,
      SPLAT_FORCE: 6000,
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,
      PAUSED: false,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: true,
      BLOOM: true,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: true,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: 1.0,
      COLOR_PALETTE: ["#5f2c82", "#49a09d", "#5D26C1", "#a17fe0", "#59C173"],
    })

    // Create initial splats for visual interest when page loads
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        const dx = (Math.random() - 0.5) * 10
        const dy = (Math.random() - 0.5) * 10
        const color = {
          r: Math.random() * 0.5 + 0.2,
          g: Math.random() * 0.5 + 0.2,
          b: Math.random() * 0.5 + 0.5,
        }
        webGLFluidEnhanced.splat(x, y, dx, dy, color)
      }
    }, 100)

    // Handle window resize
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-80" />
}
