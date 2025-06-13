"use client"

import { useEffect, useState } from "react"

export default function WebGLDebug() {
  const [debugInfo, setDebugInfo] = useState<{
    webglSupported: boolean
    webgl2Supported: boolean
    extensions: string[]
    error: string | null
  }>({
    webglSupported: false,
    webgl2Supported: false,
    extensions: [],
    error: null,
  })

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas")

      // Check WebGL 1 support
      const gl1 = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      const webglSupported = !!gl1

      // Check WebGL 2 support
      const gl2 = canvas.getContext("webgl2")
      const webgl2Supported = !!gl2

      // Get extensions
      const extensions = gl1 ? gl1.getSupportedExtensions() || [] : []

      setDebugInfo({
        webglSupported,
        webgl2Supported,
        extensions,
        error: null,
      })
    } catch (error) {
      setDebugInfo({
        webglSupported: false,
        webgl2Supported: false,
        extensions: [],
        error: error instanceof Error ? error.message : "Unknown error",
      })
    }
  }, [])

  if (!debugInfo.error && debugInfo.webglSupported) {
    return null // Don't show anything if WebGL is working
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 backdrop-blur-md p-4 rounded-lg border border-red-500 text-white text-sm max-w-xs">
      <h3 className="font-bold text-red-400 mb-2">WebGL Debug Info</h3>
      {debugInfo.error && <p className="text-red-300 mb-2">Error: {debugInfo.error}</p>}
      <p>WebGL 1.0 Support: {debugInfo.webglSupported ? "✅" : "❌"}</p>
      <p>WebGL 2.0 Support: {debugInfo.webgl2Supported ? "✅" : "❌"}</p>
      {!debugInfo.webglSupported && (
        <p className="mt-2 text-yellow-300">
          Your browser doesn't support WebGL, which is required for the fluid background. Try using a modern browser
          like Chrome, Firefox, or Edge.
        </p>
      )}
    </div>
  )
}
