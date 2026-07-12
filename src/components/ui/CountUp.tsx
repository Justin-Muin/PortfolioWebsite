import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

interface CountUpProps {
  value: number
  decimals?: number
  suffix?: string
  duration?: number
  className?: string
}

export default function CountUp({ value, decimals = 0, suffix = '', duration = 1.6, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })
  const shouldReduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(() => (0).toFixed(decimals))

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    })
    return () => controls.stop()
  }, [isInView, value, decimals, duration, shouldReduceMotion])

  return (
    <span ref={ref} className={className}>
      {shouldReduceMotion ? value.toFixed(decimals) : display}
      {suffix}
    </span>
  )
}
