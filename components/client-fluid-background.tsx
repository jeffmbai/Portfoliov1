"use client"

import { useEffect, useRef, useState } from "react"

interface ClientFluidBackgroundProps {
  onInstanceReady?: (instance: any) => void
}

export default function ClientFluidBackground({ onInstanceReady }: ClientFluidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return

    // Dynamic import of webgl-fluid-enhanced to avoid SSR issues
    import("webgl-fluid-enhanced").then((webGLFluidEnhanced) => {
      // Initialize the simulation with the canvas element
      const config = {
        // Core simulation settings
        pressureIterations: 10,
        curl: 10,
        transparent: true,
        brightness: 0.1,
        bloomIntensity: 0.1,

        // Additional settings for better visual appeal
        simResolution: 128,
        dyeResolution: 1024,
        densityDissipation: 0.97,
        velocityDissipation: 0.98,
        pressure: 0.8,
        splatRadius: 0.6,
        splatForce: 6000,
        shading: true,
        colorful: true,
        colorUpdateSpeed: 10,
        colorPalette: ["#5f2c82", "#49a09d", "#5D26C1", "#a17fe0", "#59C173"],
        hover: true,
        bloom: true,
        bloomIterations: 8,
        bloomResolution: 256,
        bloomThreshold: 0.6,
        bloomSoftKnee: 0.7,
        sunrays: true,
        sunraysResolution: 196,
        sunraysWeight: 1.0,
      }

      // Initialize the simulation
      const fluidInstance = webGLFluidEnhanced.default.simulation(canvasRef.current, config)
      setIsInitialized(true)

      // Expose the fluid instance to the parent component
      if (onInstanceReady) {
        onInstanceReady(webGLFluidEnhanced.default)
      }

      // Create initial splats for visual interest when page loads
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          const x = Math.random() * window.innerWidth
          const y = Math.random() * window.innerHeight
          const dx = (Math.random() - 0.5) * 10
          const dy = (Math.random() - 0.5) * 10
          const color = getRandomColorFromPalette()
          webGLFluidEnhanced.default.splat(x, y, dx, dy, color)
        }
      }, 200)

      // Handle mouse movement to create splats
      const handleMouseMove = (e: MouseEvent) => {
        if (!isInitialized) return

        // Calculate velocity based on mouse movement
        const x = e.clientX
        const y = e.clientY

        // Create a splat at the mouse position with random color
        const randomColor = getRandomColorFromPalette()
        webGLFluidEnhanced.default.splat(x, y, 0, 0, randomColor)
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

      // Handle window resize
      const handleResize = () => {
        if (canvasRef.current) {
          canvasRef.current.width = window.innerWidth
          canvasRef.current.height = window.innerHeight
        }
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      // Cleanup
      return () => {
        window.removeEventListener("mousemove", throttledMouseMove)
        window.removeEventListener("resize", handleResize)
      }
    })
  }, [onInstanceReady, isInitialized])

  // Helper function to get a random color from our palette
  const getRandomColorFromPalette = () => {
    const palette = ["#5f2c82", "#49a09d", "#5D26C1", "#a17fe0", "#59C173"]
    return palette[Math.floor(Math.random() * palette.length)]
  }

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-80" />
}
