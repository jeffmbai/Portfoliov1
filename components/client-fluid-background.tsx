"use client"

import { useEffect, useRef } from "react"
import webGLFluidEnhanced from "webgl-fluid-enhanced"

interface ClientFluidBackgroundProps {
  onInstanceReady?: (instance: any) => void
}

export default function ClientFluidBackground({ onInstanceReady }: ClientFluidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Initialize the simulation with the canvas element
    const config = {
      // Core simulation settings from user request
      pressureIterations: 10,
      curl: 10,
      transparent: true,
      brightness: 0.2,
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
      hover: false, // Disable hover effect to use our custom mouse handling
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
    const fluidInstance = webGLFluidEnhanced.simulation(canvasRef.current, config)

    // Expose the fluid instance to the parent component
    if (onInstanceReady) {
      onInstanceReady(fluidInstance)
    }

    // Create initial splats for visual interest when page loads
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        const dx = (Math.random() - 0.5) * 10
        const dy = (Math.random() - 0.5) * 10
        const color = getRandomColorFromPalette()
        fluidInstance.splat(x, y, dx, dy, color)
      }
    }, 200)

    // Handle mouse movement to create splats
    let lastX = 0
    let lastY = 0
    let lastTime = 0

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastTime < 16) return // Limit to ~60fps

      lastTime = now

      const x = e.clientX
      const y = e.clientY

      // Calculate velocity based on movement
      const dx = (x - lastX) * 0.1
      const dy = (y - lastY) * 0.1

      lastX = x
      lastY = y

      const randomColor = getRandomColorFromPalette()
      fluidInstance.splat(x, y, dx, dy, randomColor)
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Handle window resize
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create periodic splats to keep the fluid moving even when mouse is not moving
    const intervalId = setInterval(() => {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const dx = (Math.random() - 0.5) * 5
      const dy = (Math.random() - 0.5) * 5
      const color = getRandomColorFromPalette()
      fluidInstance.splat(x, y, dx, dy, color)
    }, 3000)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      clearInterval(intervalId)
    }
  }, [onInstanceReady])

  // Helper function to get a random color from our palette
  const getRandomColorFromPalette = () => {
    const palette = ["#5f2c82", "#49a09d", "#5D26C1", "#a17fe0", "#59C173"]
    return palette[Math.floor(Math.random() * palette.length)]
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{
        zIndex: 0,
        position: "fixed",
        pointerEvents: "none", // Allow clicking through the canvas
      }}
    />
  )
}
