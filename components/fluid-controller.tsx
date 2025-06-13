"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface FluidControllerProps {
  fluidInstance: any | null
}

export default function FluidController({ fluidInstance }: FluidControllerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [config, setConfig] = useState({
    curl: 30,
    density: 0.97,
    velocity: 0.98,
    bloom: true,
    sunrays: true,
  })

  // For now, let's just provide a simple controller that doesn't try to modify the fluid instance
  // until we better understand its API

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
                onValueChange={(value) => setConfig((prev) => ({ ...prev, curl: value[0] }))}
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
                onValueChange={(value) => setConfig((prev) => ({ ...prev, density: value[0] }))}
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
                onValueChange={(value) => setConfig((prev) => ({ ...prev, velocity: value[0] }))}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-xs">Bloom Effect</Label>
              <Switch
                checked={config.bloom}
                onCheckedChange={(checked) => setConfig((prev) => ({ ...prev, bloom: checked }))}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-xs">Sunrays Effect</Label>
              <Switch
                checked={config.sunrays}
                onCheckedChange={(checked) => setConfig((prev) => ({ ...prev, sunrays: checked }))}
              />
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Note: Controls are currently in view-only mode while we resolve WebGL compatibility issues.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
