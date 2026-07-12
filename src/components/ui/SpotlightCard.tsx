import { useSpotlight } from '@/hooks/useSpotlight'
import { surfaceBase, surfaceHover } from './Surface'

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  interactive?: boolean
}

/**
 * Card surface with a radial glow that follows the cursor.
 * Falls back to a plain surface on touch devices (no mousemove).
 */
export default function SpotlightCard({
  children,
  className = '',
  interactive = true,
  ...props
}: SpotlightCardProps) {
  const { ref, onMouseMove } = useSpotlight<HTMLDivElement>()

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`group/spot relative overflow-hidden ${surfaceBase} ${
        interactive ? `${surfaceHover} hover:-translate-y-1` : ''
      } ${className}`}
      {...props}
    >
      <div
        className="spotlight-overlay pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        aria-hidden="true"
      />
      {children}
    </div>
  )
}
