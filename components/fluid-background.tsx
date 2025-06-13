"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

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
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-700/20 blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-700/20 blur-[100px]" />
    </div>
  )
}

export default function FluidBackground({ onInstanceReady }: FluidBackgroundProps) {
  return (
    <Suspense fallback={<BackgroundPlaceholder />}>
      <ClientFluidBackground onInstanceReady={onInstanceReady} />
    </Suspense>
  )
}
