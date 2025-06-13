"use client"

import { useEffect, useRef, useState } from "react"
import webGLFluidEnhanced from "webgl-fluid-enhanced"

interface ClientFluidBackgroundProps {
  onInstanceReady?: (instance: any) => void
}

export default function ClientFluidBackground({ onInstanceReady }: ClientFluidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (!canvasRef.current || typeof window === "undefined") return

    // Make sure the canvas fills the screen
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
      }
    }

    handleResize()

    // Initialize the simulation with the canvas element
    const config = {
      // Core simulation settings
      PRESSURE_ITERATIONS: 10,
      CURL: 10,
      TRANSPARENT: true,
      BRIGHTNESS: 0.1,
      BLOOM_INTENSITY: 0.1,

      // Additional settings for better visual appeal
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      DENSITY_DISSIPATION: 0.97,
      VELOCITY_DISSIPATION: 0.98,
      PRESSURE: 0.8,
      SPLAT_RADIUS: 0.6,
      SPLAT_FORCE: 6000,
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,
      COLOR_PALETTE: ["#5f2c82", "#49a09d", "#5D26C1", "#a17fe0", "#59C173"],
      HOVER: true,
      BLOOM: true,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: true,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: 1.0,
    }

    try {
      // Initialize the simulation
      const instance = webGLFluidEnhanced.simulation(canvasRef.current, config)
      setIsInitialized(true)

      // Expose the fluid instance to the parent component
      if (onInstanceReady) {
        onInstanceReady(instance)
      }

      // Create initial splats for visual interest when page loads
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          const x = Math.random() * window.innerWidth
          const y = Math.random() * window.innerHeight
          const dx = (Math.random() - 0.5) * 10
          const dy = (Math.random() - 0.5) * 10
          const color = getRandomColorFromPalette()
          instance.splat(x, y, dx, dy, color)
        }
      }, 200)
    } catch (error) {
      console.error("Error initializing WebGL fluid:", error)
    }

    window.addEventListener("resize", handleResize)

    // Handle mouse movement to create splats
    const handleMouseMove = (e: MouseEvent) => {
      if (!isInitialized || !webGLFluidEnhanced) return

      // Calculate velocity based on mouse movement
      const x = e.clientX
      const y = e.clientY

      // Create a splat at the mouse position with random color
      const randomColor = getRandomColorFromPalette()
      try {
        webGLFluidEnhanced.splat(x, y, 0, 0, randomColor)
      } catch (error) {
        console.error("Error creating splat:", error)
      }
    }

    // Add throttled mouse move event listener
    let lastTime = 0
    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastTime > 50) {
        // Throttle to 50ms
        lastTime = now
        handleMouseMove(e)
      }
    }

    window.addEventListener("mousemove", throttledMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [onInstanceReady, isInitialized])

  // Helper function to get a random color from our palette
  const getRandomColorFromPalette = () => {
    const palette = ["#5f2c82", "#49a09d", "#5D26C1", "#a17fe0", "#59C173"]
    return palette[Math.floor(Math.random() * palette.length)]
  }

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
}
