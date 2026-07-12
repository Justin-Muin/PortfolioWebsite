import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

interface ParallaxLayerProps {
  children?: React.ReactNode
  className?: string
  /** Y offset (px) when the layer enters the viewport. */
  from?: number
  /** Y offset (px) when the layer leaves the viewport. */
  to?: number
  /** Rotation (deg) when the layer enters the viewport. */
  rotateFrom?: number
  /** Rotation (deg) when the layer leaves the viewport. */
  rotateTo?: number
}

/**
 * Decorative layer that translates (and optionally rotates) as it passes
 * through the viewport, creating a scroll-linked parallax effect. Purely
 * visual — always pointer-events-none and hidden from assistive tech.
 */
export default function ParallaxLayer({
  children,
  className = '',
  from = 56,
  to = -56,
  rotateFrom = 0,
  rotateTo = 0,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [from, to])
  const rotate = useTransform(scrollYProgress, [0, 1], [rotateFrom, rotateTo])

  return (
    <motion.div
      ref={ref}
      className={`pointer-events-none ${className}`}
      style={shouldReduceMotion ? undefined : { y, rotate }}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  )
}
