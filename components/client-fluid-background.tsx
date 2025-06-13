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
      // Instead of trying to use the library's methods directly, let's use it as a black box
      // that handles the rendering internally
      fluidInstanceRef.current = WebGLFluidEnhanced.create(canvas, config)
      isInitializedRef.current = true

      // Notify parent component
      if (onInstanceReady) {
        onInstanceReady(fluidInstanceRef.current)
      }

      // Let's not try to create initial splats, as the library might handle this internally
      // or have a different API than we expect

      // Handle mouse movement using the library's built-in mouse handling
      // We won't try to call splat directly
    } catch (error) {
      console.error("Error initializing WebGL fluid:", error)
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [onInstanceReady])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
}
