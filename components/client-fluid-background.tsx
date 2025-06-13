"use client"

import { useEffect, useRef } from "react"

interface ClientFluidBackgroundProps {
  onInstanceReady?: (instance: any) => void
}

export default function ClientFluidBackground({ onInstanceReady }: ClientFluidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<WebGLRenderingContext | null>(null)
  const animationFrameRef = useRef<number>(0)
  const fluidInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!canvasRef.current || typeof window === "undefined") return

    const canvas = canvasRef.current

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Try to get WebGL context
    try {
      // Try to get WebGL2 first, then fall back to WebGL
      contextRef.current =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        (canvas.getContext("experimental-webgl") as WebGLRenderingContext)

      if (!contextRef.current) {
        throw new Error("WebGL not supported")
      }

      console.log("WebGL context created successfully")

      // Import the library dynamically to avoid SSR issues
      import("webgl-fluid-enhanced")
        .then((WebGLFluidModule) => {
          const WebGLFluidEnhanced = WebGLFluidModule.default

          try {
            console.log("Initializing WebGL Fluid Enhanced")

            // Configuration for the fluid simulation
            const config = {
              TRANSPARENT: true,
              BACK_COLOR: { r: 0, g: 0, b: 0, a: 0 },
              PRESSURE_ITERATIONS: 20,
              CURL: 30,
              SPLAT_RADIUS: 0.5,
              SHADING: true,
              COLORFUL: true,
              COLOR_UPDATE_SPEED: 10,
              PAUSED: false,
              BLOOM: true,
              BLOOM_ITERATIONS: 8,
              BLOOM_RESOLUTION: 256,
              BLOOM_INTENSITY: 0.8,
              BLOOM_THRESHOLD: 0.6,
              BLOOM_SOFT_KNEE: 0.7,
              SUNRAYS: true,
              SUNRAYS_RESOLUTION: 196,
              SUNRAYS_WEIGHT: 1.0,
              DENSITY_DISSIPATION: 0.98,
              VELOCITY_DISSIPATION: 0.99,
            }

            // Create the fluid instance
            fluidInstanceRef.current = new WebGLFluidEnhanced(canvas, config)
            console.log("WebGL Fluid Enhanced initialized successfully", fluidInstanceRef.current)

            // Create initial splats
            setTimeout(() => {
              if (fluidInstanceRef.current && typeof fluidInstanceRef.current.splat === "function") {
                for (let i = 0; i < 3; i++) {
                  const x = Math.random() * canvas.width
                  const y = Math.random() * canvas.height
                  const dx = (Math.random() - 0.5) * 10
                  const dy = (Math.random() - 0.5) * 10
                  const r = Math.random() * 0.5 + 0.5
                  const g = Math.random() * 0.5 + 0.5
                  const b = Math.random() * 0.5 + 0.5
                  fluidInstanceRef.current.splat(x, y, dx, dy, { r, g, b })
                }
              }
            }, 100)

            // Notify parent component
            if (onInstanceReady) {
              onInstanceReady(fluidInstanceRef.current)
            }

            // Handle mouse movement
            const handleMouseMove = (e: MouseEvent) => {
              if (!fluidInstanceRef.current || typeof fluidInstanceRef.current.splat !== "function") return

              const x = e.clientX
              const y = e.clientY
              const dx = (e.movementX || 0) * 10
              const dy = (e.movementY || 0) * 10
              const r = Math.random() * 0.5 + 0.5
              const g = Math.random() * 0.5 + 0.5
              const b = Math.random() * 0.5 + 0.5

              fluidInstanceRef.current.splat(x, y, dx, dy, { r, g, b })
            }

            // Throttle mouse move events
            let lastTime = 0
            const throttledMouseMove = (e: MouseEvent) => {
              const now = Date.now()
              if (now - lastTime > 20) {
                // 50fps max
                lastTime = now
                handleMouseMove(e)
              }
            }

            window.addEventListener("mousemove", throttledMouseMove)

            return () => {
              window.removeEventListener("mousemove", throttledMouseMove)
            }
          } catch (error) {
            console.error("Error initializing WebGL Fluid Enhanced:", error)
          }
        })
        .catch((error) => {
          console.error("Error loading WebGL Fluid Enhanced module:", error)
        })
    } catch (error) {
      console.error("WebGL initialization error:", error)
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [onInstanceReady])

  return (
    <>
      {/* Fallback gradient background in case WebGL fails */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-black via-purple-900/30 to-black z-0" />

      {/* WebGL canvas */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" style={{ opacity: 1 }} />
    </>
  )
}
