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
      // Initialize the WebGLFluidEnhanced using the constructor
      fluidInstanceRef.current = new WebGLFluidEnhanced(canvas, config)
      isInitializedRef.current = true

      // Notify parent component
      if (onInstanceReady) {
        onInstanceReady(fluidInstanceRef.current)
      }

      // Create initial splats
      setTimeout(() => {
        createRandomSplats(5)
      }, 100)

      // Handle mouse movement
      let lastX = 0
      let lastY = 0
      let lastTime = 0

      const handleMouseMove = (e: MouseEvent) => {
        const now = Date.now()
        if (now - lastTime < 16) return // Limit to ~60 fps

        // Get mouse position relative to canvas
        const rect = canvas.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        // Calculate velocity based on movement
        const dx = (x - lastX) * 0.1
        const dy = (y - lastY) * 0.1

        lastX = x
        lastY = y
        lastTime = now

        const color = {
          r: Math.random() * 0.5 + 0.5,
          g: Math.random() * 0.5 + 0.5,
          b: Math.random() * 0.5 + 0.5,
        }

        try {
          // Try different methods to create splats
          if (fluidInstanceRef.current) {
            // Method 1: Try direct property access
            if (typeof fluidInstanceRef.current.addSplat === "function") {
              fluidInstanceRef.current.addSplat(x, y, dx, dy, color)
            }
            // Method 2: Try accessing through config
            else if (
              fluidInstanceRef.current.config &&
              typeof fluidInstanceRef.current.config.addSplat === "function"
            ) {
              fluidInstanceRef.current.config.addSplat(x, y, dx, dy, color)
            }
            // Method 3: Try using the splat method directly
            else if (typeof fluidInstanceRef.current.splat === "function") {
              fluidInstanceRef.current.splat(x, y, dx, dy, color)
            }
          }
        } catch (error) {
          console.error("Error adding splat:", error)
        }
      }

      // Function to create random splats
      function createRandomSplats(count: number) {
        if (!fluidInstanceRef.current) return

        for (let i = 0; i < count; i++) {
          const x = Math.random() * canvas.width
          const y = Math.random() * canvas.height
          const dx = (Math.random() - 0.5) * 10
          const dy = (Math.random() - 0.5) * 10
          const color = {
            r: Math.random() * 0.5 + 0.5,
            g: Math.random() * 0.5 + 0.5,
            b: Math.random() * 0.5 + 0.5,
          }

          try {
            // Try different methods to create splats
            if (typeof fluidInstanceRef.current.addSplat === "function") {
              fluidInstanceRef.current.addSplat(x, y, dx, dy, color)
            } else if (
              fluidInstanceRef.current.config &&
              typeof fluidInstanceRef.current.config.addSplat === "function"
            ) {
              fluidInstanceRef.current.config.addSplat(x, y, dx, dy, color)
            } else if (typeof fluidInstanceRef.current.splat === "function") {
              fluidInstanceRef.current.splat(x, y, dx, dy, color)
            }
          } catch (error) {
            console.error("Error creating random splat:", error)
          }
        }
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
