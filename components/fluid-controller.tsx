"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Settings, X, Play, Pause, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface FluidControllerProps {
  fluidInstance: any | null
}

export default function FluidController({ fluidInstance }: FluidControllerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [config, setConfig] = useState({
    curl: 30,
    density: 0.97,
    velocity: 0.98,
    bloom: true,
    sunrays: true,
  })

  const togglePause = () => {
    if (!fluidInstance || !fluidInstance.simulation) return

    fluidInstance.simulation.PAUSED = !fluidInstance.simulation.PAUSED
    setIsPaused(fluidInstance.simulation.PAUSED)
  }

  const createSplats = () => {
    if (!fluidInstance || !fluidInstance.simulation) return

    // Create multiple splats at random positions
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const dx = (Math.random() - 0.5) * 10
      const dy = (Math.random() - 0.5) * 10
      const color = {
        r: Math.random() * 0.5 + 0.5,
        g: Math.random() * 0.5 + 0.5,
        b: Math.random() * 0.5 + 0.5,
      }
      fluidInstance.simulation.splat(x, y, dx, dy, color)
    }
  }

  const updateConfig = (key: string, value: number | boolean) => {
    setConfig((prev) => ({ ...prev, [key]: value }))

    if (!fluidInstance || !fluidInstance.simulation) return

    // Update the configuration
    switch (key) {
      case "curl":
        fluidInstance.simulation.CURL = value
        break
      case "density":
        fluidInstance.simulation.DENSITY_DISSIPATION = value
        break
      case "velocity":
        fluidInstance.simulation.VELOCITY_DISSIPATION = value
        break
      case "bloom":
        fluidInstance.simulation.BLOOM = value
        break
      case "sunrays":
        fluidInstance.simulation.SUNRAYS = value
        break
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-black/50 border-gray-700 hover:bg-black/80 hover:border-purple-500/50 backdrop-blur-sm"
          onClick={() => setIsOpen(true)}
        >
          <Settings className="h-5 w-5" />
        </Button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-black/70 backdrop-blur-md border border-gray-800 rounded-lg p-4 w-64"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium">Background Controls</h3>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label className="text-xs">Curl</Label>
                <span className="text-xs text-gray-400">{config.curl}</span>
              </div>
              <Slider
                value={[config.curl]}
                min={0}
                max={50}
                step={1}
                onValueChange={(value) => updateConfig("curl", value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label className="text-xs">Density</Label>
                <span className="text-xs text-gray-400">{config.density.toFixed(2)}</span>
              </div>
              <Slider
                value={[config.density]}
                min={0.9}
                max={1}
                step={0.01}
                onValueChange={(value) => updateConfig("density", value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label className="text-xs">Velocity</Label>
                <span className="text-xs text-gray-400">{config.velocity.toFixed(2)}</span>
              </div>
              <Slider
                value={[config.velocity]}
                min={0.9}
                max={1}
                step={0.01}
                onValueChange={(value) => updateConfig("velocity", value[0])}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-xs">Bloom Effect</Label>
              <Switch checked={config.bloom} onCheckedChange={(checked) => updateConfig("bloom", checked)} />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-xs">Sunrays Effect</Label>
              <Switch checked={config.sunrays} onCheckedChange={(checked) => updateConfig("sunrays", checked)} />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button variant="outline" size="sm" className="bg-black/50 border-gray-700" onClick={togglePause}>
                {isPaused ? <Play className="h-4 w-4 mr-1" /> : <Pause className="h-4 w-4 mr-1" />}
                {isPaused ? "Play" : "Pause"}
              </Button>

              <Button variant="outline" size="sm" className="bg-black/50 border-gray-700" onClick={createSplats}>
                <RefreshCw className="h-4 w-4 mr-1" />
                Splat
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
