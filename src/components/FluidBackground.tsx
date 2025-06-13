"use client"

import { useEffect, useState } from "react"
import ClientFluidBackground from "./ClientFluidBackground"

interface FluidBackgroundProps {
  onInstanceReady?: (instance: any) => void
}

export default function FluidBackground({ onInstanceReady }: FluidBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <ClientFluidBackground onInstanceReady={onInstanceReady} />
}
