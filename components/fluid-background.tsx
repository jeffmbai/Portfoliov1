"use client"

import { Suspense, useState, useEffect } from "react"
import dynamic from "next/dynamic"
import FallbackBackground from "./fallback-background"

interface FluidBackgroundProps {
  onInstanceReady?: (instance: any) => void
}

// Import the fluid background component with SSR disabled
const ClientFluidBackground = dynamic(() => import("./client-fluid-background"), {
  ssr: false,
})

// Simple placeholder while the WebGL component loads
function BackgroundPlaceholder() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 bg-black">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-700/20 blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-700/20 blur-[100px]" />
    </div>
  )
}

export default function FluidBackground({ onInstanceReady }: FluidBackgroundProps) {
  const [webglFailed, setWebglFailed] = useState(false)

  useEffect(() => {
    // Check if WebGL is supported
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      if (!gl) {
        setWebglFailed(true)
      }
    } catch (e) {
      setWebglFailed(true)
    }

    // Set a timeout to switch to fallback if WebGL doesn't initialize in time
    const timeout = setTimeout(() => {
      setWebglFailed(true)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  if (webglFailed) {
    return <FallbackBackground />
  }

  return (
    <Suspense fallback={<BackgroundPlaceholder />}>
      <ClientFluidBackground onInstanceReady={onInstanceReady} />
    </Suspense>
  )
}
