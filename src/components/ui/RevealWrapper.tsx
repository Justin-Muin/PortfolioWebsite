import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface RevealWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function RevealWrapper({ children, delay = 0, className = '' }: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(8px)' }}
      transition={{ duration: 0.58, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
