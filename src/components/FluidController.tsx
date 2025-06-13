"use client"

import { useEffect, useState } from "react"
import { Sliders, X } from "lucide-react"
import { Button } from "./ui/button"
import { Slider } from "./ui/slider"
import { Switch } from "./ui/switch"
import { Label } from "./ui/label"

interface FluidControllerProps {
  fluidInstance: any
}

export default function FluidController({ fluidInstance }: FluidControllerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [config, setConfig] = useState({
    SPLAT_RADIUS: 0.25,
    SPLAT_FORCE: 6000,
    CURL: 30,
    PRESSURE: 0.8,
    BLOOM_INTENSITY: 0.8,
    SUNRAYS_WEIGHT: 1.0,
    COLORFUL: true,
  })

  const togglePanel = () => {
    setIsOpen(!isOpen)
  }

  const updateConfig = (key: string, value: number | boolean) => {
    setConfig((prev) => ({ ...prev, [key]: value }))

    if (fluidInstance && fluidInstance.config) {
      try {
        fluidInstance.config[key] = value
      } catch (error) {
        console.error(`Error updating ${key}:`, error)
      }
    }
  }

  useEffect(() => {
    if (fluidInstance && fluidInstance.config) {
      try {
        setConfig({
          SPLAT_RADIUS: fluidInstance.config.SPLAT_RADIUS || 0.25,
          SPLAT_FORCE: fluidInstance.config.SPLAT_FORCE || 6000,
          CURL: fluidInstance.config.CURL || 30,
          PRESSURE: fluidInstance.config.PRESSURE || 0.8,
          BLOOM_INTENSITY: fluidInstance.config.BLOOM_INTENSITY || 0.8,
          SUNRAYS_WEIGHT: fluidInstance.config.SUNRAYS_WEIGHT || 1.0,
          COLORFUL: fluidInstance.config.COLORFUL !== false,
        })
      } catch (error) {
        console.error("Error reading fluid config:", error)
      }
    }
  }, [fluidInstance])

  if (!fluidInstance) return null

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-black/50 backdrop-blur-md border border-white/20 shadow-lg"
        onClick={togglePanel}
        aria-label="Toggle fluid controls"
      >
        <Sliders className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="absolute bottom-14 right-0 w-72 bg-black/80 backdrop-blur-md rounded-lg border border-white/20 shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium">Fluid Controls</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={togglePanel}
              aria-label="Close fluid controls"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="splat-radius">Splat Radius</Label>
                <span className="text-xs text-gray-400">{config.SPLAT_RADIUS.toFixed(2)}</span>
              </div>
              <Slider
                id="splat-radius"
                min={0.1}
                max={1}
                step={0.01}
                value={[config.SPLAT_RADIUS]}
                onValueChange={(value) => updateConfig("SPLAT_RADIUS", value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="splat-force">Splat Force</Label>
                <span className="text-xs text-gray-400">{config.SPLAT_FORCE.toFixed(0)}</span>
              </div>
              <Slider
                id="splat-force"
                min={1000}
                max={10000}
                step={100}
                value={[config.SPLAT_FORCE]}
                onValueChange={(value) => updateConfig("SPLAT_FORCE", value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="curl">Curl</Label>
                <span className="text-xs text-gray-400">{config.CURL.toFixed(0)}</span>
              </div>
              <Slider
                id="curl"
                min={0}
                max={50}
                step={1}
                value={[config.CURL]}
                onValueChange={(value) => updateConfig("CURL", value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="pressure">Pressure</Label>
                <span className="text-xs text-gray-400">{config.PRESSURE.toFixed(2)}</span>
              </div>
              <Slider
                id="pressure"
                min={0.1}
                max={2}
                step={0.01}
                value={[config.PRESSURE]}
                onValueChange={(value) => updateConfig("PRESSURE", value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="bloom">Bloom Intensity</Label>
                <span className="text-xs text-gray-400">{config.BLOOM_INTENSITY.toFixed(2)}</span>
              </div>
              <Slider
                id="bloom"
                min={0}
                max={2}
                step={0.01}
                value={[config.BLOOM_INTENSITY]}
                onValueChange={(value) => updateConfig("BLOOM_INTENSITY", value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="sunrays">Sunrays Weight</Label>
                <span className="text-xs text-gray-400">{config.SUNRAYS_WEIGHT.toFixed(2)}</span>
              </div>
              <Slider
                id="sunrays"
                min={0}
                max={2}
                step={0.01}
                value={[config.SUNRAYS_WEIGHT]}
                onValueChange={(value) => updateConfig("SUNRAYS_WEIGHT", value[0])}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="colorful">Colorful Mode</Label>
              <Switch
                id="colorful"
                checked={config.COLORFUL}
                onCheckedChange={(checked) => updateConfig("COLORFUL", checked)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
