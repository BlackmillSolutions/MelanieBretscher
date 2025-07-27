"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  value: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({ value, duration = 2000, className = "" }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateValue()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateValue = () => {
    // Handle special cases
    if (value === "24/7") {
      animateHours()
      return
    }

    // Extract numeric value and suffix from the string
    const numericMatch = value.match(/^(\d+(?:\.\d+)?)/)
    const suffix = value.replace(/^\d+(?:\.\d+)?/, "")
    
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const targetNumber = parseFloat(numericMatch[1])
    const startTime = Date.now()
    const startValue = 0

    // Determine step size based on value type
    let stepSize = 1
    if (value.includes("+") && targetNumber >= 1000) {
      // For patient numbers (2000+), count in steps of 10
      stepSize = 10
    } else if (value.includes("%")) {
      // For percentages (95%), count in steps of 5
      stepSize = 5
    }

    const updateValue = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = startValue + (targetNumber - startValue) * easeOutQuart

      // Round to step size
      const roundedValue = Math.round(currentValue / stepSize) * stepSize
      const finalValue = Math.min(roundedValue, targetNumber)

      setDisplayValue(finalValue.toFixed(0) + suffix)

      if (progress < 1) {
        requestAnimationFrame(updateValue)
      } else {
        // Ensure final value is exact
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(updateValue)
  }

  const animateHours = () => {
    const startTime = Date.now()
    const startValue = 0
    const targetValue = 24

    const updateValue = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = startValue + (targetValue - startValue) * easeOutQuart

      // Round to whole number
      const roundedValue = Math.round(currentValue)
      const finalValue = Math.min(roundedValue, targetValue)

      setDisplayValue(finalValue + "/7")

      if (progress < 1) {
        requestAnimationFrame(updateValue)
      } else {
        // Ensure final value is exact
        setDisplayValue("24/7")
      }
    }

    requestAnimationFrame(updateValue)
  }

  return (
    <div ref={elementRef} className={className}>
      {displayValue}
    </div>
  )
} 