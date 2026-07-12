interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  interactive?: boolean
}

/** Shared card-surface styling, also consumed by SpotlightCard and ProjectCard. */
export const surfaceBase =
  'rounded-2xl border border-zinc-200/80 bg-white/80 shadow-[0_1px_0_rgba(24,24,27,0.04),0_18px_60px_rgba(24,24,27,0.08)] backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/70 dark:shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_70px_rgba(0,0,0,0.32)]'

/** Hover border/shadow treatment — translation is left to each component. */
export const surfaceHover =
  'transition duration-300 hover:border-indigo-300/60 hover:shadow-[0_1px_0_rgba(24,24,27,0.04),0_24px_70px_rgba(99,102,241,0.14)] dark:hover:border-indigo-500/40 dark:hover:shadow-[0_1px_0_rgba(255,255,255,0.04),0_24px_80px_rgba(99,102,241,0.16)]'

export default function Surface({ children, className = '', interactive = false, ...props }: SurfaceProps) {
  return (
    <div
      className={`${surfaceBase} ${interactive ? `${surfaceHover} hover:-translate-y-1` : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
