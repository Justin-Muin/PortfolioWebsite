import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 700)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' })}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.24 }}
          whileHover={shouldReduceMotion ? undefined : { y: -3 }}
          className="fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-zinc-200/80 bg-white/85 text-zinc-600 shadow-[0_10px_30px_rgba(24,24,27,0.14)] backdrop-blur-xl transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-zinc-800 dark:bg-zinc-950/85 dark:text-zinc-300 dark:shadow-[0_10px_35px_rgba(0,0,0,0.4)] dark:hover:border-indigo-500/50 dark:hover:text-indigo-300"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
