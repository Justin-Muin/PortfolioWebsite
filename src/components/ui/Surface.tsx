interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  interactive?: boolean
}

export default function Surface({ children, className = '', interactive = false, ...props }: SurfaceProps) {
  return (
    <div
      className={`rounded-lg border border-zinc-200/80 bg-white/82 shadow-[0_1px_0_rgba(24,24,27,0.04),0_18px_60px_rgba(24,24,27,0.08)] backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/72 dark:shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_70px_rgba(0,0,0,0.32)] ${
        interactive
          ? 'transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_1px_0_rgba(24,24,27,0.04),0_24px_70px_rgba(24,24,27,0.12)] dark:hover:border-zinc-700'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
