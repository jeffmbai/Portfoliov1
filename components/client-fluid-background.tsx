"use client"

import { useEffect, useRef } from "react"
import WebGLFluidEnhanced from "webgl-fluid-enhanced"

interface ClientFluidBackgroundProps {
  onInstanceReady?: (instance: any) => void
}

export default function ClientFluidBackground({ onInstanceReady }: ClientFluidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isInitializedRef = useRef<boolean>(false)
  const fluidInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!canvasRef.current || isInitializedRef.current) return

    const canvas = canvasRef.current

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Configuration for the fluid simulation
    const config = {
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      DENSITY_DISSIPATION: 0.97,
      VELOCITY_DISSIPATION: 0.98,
      PRESSURE_ITERATIONS: 20,
      CURL: 30,
      SPLAT_RADIUS: 0.5,
      SHADING: true,
      COLORFUL: true,
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
    }

    try {
      // Initialize the WebGLFluidEnhanced
      fluidInstanceRef.current = new WebGLFluidEnhanced(canvas, config)
      isInitializedRef.current = true

      // Create initial splats
      setTimeout(() => {
        if (fluidInstanceRef.current) {
          for (let i = 0; i < 3; i++) {
            const x = Math.random() * canvas.width
            const y = Math.random() * canvas.height
            const dx = (Math.random() - 0.5) * 10
            const dy = (Math.random() - 0.5) * 10
            const color = {
              r: Math.random() * 0.5 + 0.5,
              g: Math.random() * 0.5 + 0.5,
              b: Math.random() * 0.5 + 0.5,
            }
            fluidInstanceRef.current.splat(x, y, dx, dy, color)
          }
        }
      }, 100)

      // Notify parent component
      if (onInstanceReady) {
        onInstanceReady(fluidInstanceRef.current)
      }

      // Handle mouse movement
      let lastX = 0
      let lastY = 0
      let lastTime = 0

      const handleMouseMove = (e: MouseEvent) => {
        if (!fluidInstanceRef.current) return

        const now = Date.now()
        if (now - lastTime < 16) return // Limit to ~60 fps

        const x = e.clientX
        const y = e.clientY

        // Calculate velocity based on movement
        const dx = x - lastX
        const dy = y - lastY

        lastX = x
        lastY = y
        lastTime = now

        const color = {
          r: Math.random() * 0.5 + 0.5,
          g: Math.random() * 0.5 + 0.5,
          b: Math.random() * 0.5 + 0.5,
        }

        fluidInstanceRef.current.splat(x, y, dx, dy, color)
      }

      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("resize", resizeCanvas)
      }
    } catch (error) {
      console.error("Error initializing WebGL fluid:", error)
    }
  }, [onInstanceReady])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
}
