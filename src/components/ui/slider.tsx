"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

const Slider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: number[]
    min: number
    max: number
    step?: number
    onValueChange: (value: number[]) => void
  }
>(({ className, value, min, max, step = 1, onValueChange, ...props }, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange([Number.parseFloat(e.target.value)])
  }

  return (
    <div ref={ref} className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
      <div className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-700">
        <div
          className="absolute h-full bg-gradient-to-r from-purple-600 to-blue-600"
          style={{
            width: `${((value[0] - min) / (max - min)) * 100}%`,
          }}
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={handleChange}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      />
      <div
        className="block h-4 w-4 rounded-full border border-gray-700 bg-gray-900 shadow"
        style={{
          position: "absolute",
          left: `calc(${((value[0] - min) / (max - min)) * 100}% - 8px)`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  )
})
Slider.displayName = "Slider"

export { Slider }
