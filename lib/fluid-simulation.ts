// Fluid simulation using webgl-fluid-enhanced
import webGLFluidEnhanced from "webgl-fluid-enhanced"

interface FluidSimulation {
  resize: () => void
  destroy: () => void
}

export function createFluidSimulation(canvas: HTMLCanvasElement): FluidSimulation {
  // Configuration based on triple2s.com style
  const config = {
    // Core simulation settings from user request
    pressureIterations: 10,
    curl: 10,
    transparent: true,
    brightness: 0.2,
    bloomIntensity: 0.1,

    // Additional settings for better visual appeal
    simResolution: 128,
    dyeResolution: 1024,
    densityDissipation: 0.97,
    velocityDissipation: 0.98,
    pressure: 0.8,
    splatRadius: 0.6,
    splatForce: 6000,
    shading: true,
    colorful: true,
    colorUpdateSpeed: 10,
    colorPalette: ["#5f2c82", "#49a09d", "#5D26C1", "#a17fe0", "#59C173"],
    hover: true,
    bloom: true,
    bloomIterations: 8,
    bloomResolution: 256,
    bloomThreshold: 0.6,
    bloomSoftKnee: 0.7,
    sunrays: true,
    sunraysResolution: 196,
    sunraysWeight: 1.0,
  }

  // Initialize the simulation
  const simulation = webGLFluidEnhanced.simulation(canvas, config)

  // Create initial splats for visual interest
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const dx = (Math.random() - 0.5) * 10
      const dy = (Math.random() - 0.5) * 10
      const color = getRandomColorFromPalette()
      simulation.splat(x, y, dx, dy, color)
    }
  }, 200)

  // Set up mouse move handler
  let lastX = 0
  let lastY = 0
  let lastTime = 0

  const handleMouseMove = (e: MouseEvent) => {
    const now = Date.now()
    if (now - lastTime < 20) return // Limit to 50fps for performance

    const x = e.clientX
    const y = e.clientY

    // Calculate velocity based on movement
    const dx = (x - lastX) * 0.5
    const dy = (y - lastY) * 0.5

    // Create splat with velocity
    if (Math.abs(dx) > 0 || Math.abs(dy) > 0) {
      const color = getRandomColorFromPalette()
      simulation.splat(x, y, dx, dy, color)
    }

    lastX = x
    lastY = y
    lastTime = now
  }

  // Set up touch handler for mobile
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault()
    const now = Date.now()
    if (now - lastTime < 20) return

    const touch = e.touches[0]
    const x = touch.clientX
    const y = touch.clientY

    // Calculate velocity based on movement
    const dx = (x - lastX) * 0.5
    const dy = (y - lastY) * 0.5

    // Create splat with velocity
    if (Math.abs(dx) > 0 || Math.abs(dy) > 0) {
      const color = getRandomColorFromPalette()
      simulation.splat(x, y, dx, dy, color)
    }

    lastX = x
    lastY = y
    lastTime = now
  }

  // Helper function to get a random color
  function getRandomColorFromPalette() {
    const palette = ["#5f2c82", "#49a09d", "#5D26C1", "#a17fe0", "#59C173"]
    return palette[Math.floor(Math.random() * palette.length)]
  }

  // Add event listeners
  window.addEventListener("mousemove", handleMouseMove)
  window.addEventListener("touchmove", handleTouchMove, { passive: false })

  // Return API
  return {
    resize: () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      simulation.resize()
    },
    destroy: () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    },
  }
}
