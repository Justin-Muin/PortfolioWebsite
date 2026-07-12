import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface TypewriterProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseMs?: number
  className?: string
}

export default function Typewriter({
  phrases,
  typingSpeed = 55,
  deletingSpeed = 28,
  pauseMs = 2200,
  className = '',
}: TypewriterProps) {
  const shouldReduceMotion = useReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const phrase = phrases[phraseIndex % phrases.length]

  useEffect(() => {
    if (shouldReduceMotion) return

    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && charCount < phrase.length) {
      timeout = setTimeout(() => setCharCount((c) => c + 1), typingSpeed)
    } else if (!deleting && charCount === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && charCount > 0) {
      timeout = setTimeout(() => setCharCount((c) => c - 1), deletingSpeed)
    } else {
      timeout = setTimeout(() => {
        setDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
      }, 260)
    }
    return () => clearTimeout(timeout)
  }, [charCount, deleting, phrase, phrases.length, pauseMs, typingSpeed, deletingSpeed, shouldReduceMotion])

  if (shouldReduceMotion) {
    return <span className={className}>{phrases[0]}</span>
  }

  return (
    <span className={className} aria-label={phrases.join(', ')}>
      <span aria-hidden="true">{phrase.slice(0, charCount)}</span>
      <span className="animate-caret text-indigo-500 dark:text-indigo-300" aria-hidden="true">
        ▍
      </span>
    </span>
  )
}
