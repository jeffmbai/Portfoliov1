import { Suspense } from "react"
import { lazy } from "react"

interface FluidBackgroundProps {
  onInstanceReady?: (instance: any) => void
}

// Import the fluid background component with lazy loading
const ClientFluidBackground = lazy(() => import("./ClientFluidBackground"))

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
  return (
    <Suspense fallback={<BackgroundPlaceholder />}>
      <ClientFluidBackground onInstanceReady={onInstanceReady} />
    </Suspense>
  )
}
