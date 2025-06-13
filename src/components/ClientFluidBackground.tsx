"use client"

import { useEffect, useRef } from "react"
import WebGLFluidEnhanced from "webgl-fluid-enhanced"

interface ClientFluidBackgroundProps {
  onInstanceReady?: (instance: any) => void
}

export default function ClientFluidBackground({ onInstanceReady }: ClientFluidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fluidInstanceRef = useRef<any>(null)
  const initRef = useRef(false)

  useEffect(() => {
    if (!canvasRef.current || initRef.current) return

    try {
      const canvas = canvasRef.current
      const config = {
        TRANSPARENT: true,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        BLOOM: true,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.8,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1.0,
        TEXTURE_DOWNSAMPLE: 1,
        DENSITY_DISSIPATION: 0.98,
        VELOCITY_DISSIPATION: 0.99,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        SPLAT_RADIUS: 0.25,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 10,
        PAUSED: false,
        HOVER: true,
        MOVE_SPEED: 10,
        POINTERS_SIZE: 10,
      }

      // Corrected: Call WebGLFluidEnhanced directly as a function
      fluidInstanceRef.current = WebGLFluidEnhanced(canvas, config)

      if (onInstanceReady) {
        onInstanceReady(fluidInstanceRef.current)
      }

      // Create initial splats for visual interest when page loads
      setTimeout(() => {
        if (fluidInstanceRef.current) {
          for (let i = 0; i < 5; i++) {
            const x = Math.random() * window.innerWidth
            const y = Math.random() * window.innerHeight
            const dx = (Math.random() - 0.5) * 10
            const dy = (Math.random() - 0.5) * 10
            const color = {
              r: Math.random() * 0.5 + 0.2,
              g: Math.random() * 0.5 + 0.2,
              b: Math.random() * 0.5 + 0.5,
            }
            fluidInstanceRef.current.splat(x, y, dx, dy, color)
          }
        }
      }, 200)

      initRef.current = true
    } catch (error) {
      console.error("Error initializing WebGL fluid:", error)
    }

    return () => {
      if (fluidInstanceRef.current && fluidInstanceRef.current.destroy) {
        try {
          fluidInstanceRef.current.destroy()
        } catch (error) {
          console.error("Error destroying WebGL fluid:", error)
        }
      }
    }
  }, [onInstanceReady])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />
}
