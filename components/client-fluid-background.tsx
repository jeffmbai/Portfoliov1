"use client"

import { useEffect, useRef, useState } from "react"
import WebGLFluidEnhanced from "webgl-fluid-enhanced"

interface ClientFluidBackgroundProps {
  onInstanceReady?: (instance: any) => void
}

export default function ClientFluidBackground({ onInstanceReady }: ClientFluidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fluidRef = useRef<WebGLFluidEnhanced | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return

    // Create a new WebGLFluidEnhanced instance
    const fluid = new WebGLFluidEnhanced()
    fluidRef.current = fluid

    // Configure the simulation
    fluid.setConfig({
      // Core simulation settings from user request
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
    })

    // Start the simulation
    fluid.start()
    setIsInitialized(true)

    // Expose the fluid instance to the parent component
    if (onInstanceReady) {
      onInstanceReady(fluid)
    }

    // Create initial splats for visual interest when page loads
    setTimeout(() => {
      fluid.multipleSplats(5)
    }, 200)

    // Handle mouse movement to create splats
    const handleMouseMove = (e: MouseEvent) => {
      if (!isInitialized || !fluidRef.current) return

      // Calculate velocity based on mouse movement
      const x = e.clientX
      const y = e.clientY

      // Create a splat at the mouse position with random color
      const randomColor = getRandomColorFromPalette()
      fluidRef.current.splatAtLocation(x, y, 0, 0, randomColor)
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
      if (fluidRef.current) {
        fluidRef.current.stop()
      }
    }
  }, [onInstanceReady])

  // Helper function to get a random color from our palette
  const getRandomColorFromPalette = () => {
    const palette = ["#5f2c82", "#49a09d", "#5D26C1", "#a17fe0", "#59C173"]
    return palette[Math.floor(Math.random() * palette.length)]
  }

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-80" />
}
