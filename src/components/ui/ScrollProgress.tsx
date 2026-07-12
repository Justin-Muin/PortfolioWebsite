import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 32, mass: 0.4 })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-teal-400"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
