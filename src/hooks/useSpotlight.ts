import { useRef } from 'react'

/**
 * Tracks the cursor inside an element by writing `--{prefix}-x` / `--{prefix}-y`
 * CSS variables, consumed by the `.spotlight-overlay` / `.hero-spotlight`
 * gradients in index.css. Attach `ref` and `onMouseMove` to the element.
 */
export function useSpotlight<T extends HTMLElement>(prefix = 'spot') {
  const ref = useRef<T>(null)

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty(`--${prefix}-x`, `${e.clientX - rect.left}px`)
    el.style.setProperty(`--${prefix}-y`, `${e.clientY - rect.top}px`)
  }

  return { ref, onMouseMove }
}
