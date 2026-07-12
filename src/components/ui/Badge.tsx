interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-zinc-200/80 bg-zinc-100/70 px-2.5 py-1 text-xs font-medium text-zinc-600 transition-colors hover:border-indigo-300/70 hover:bg-indigo-50/70 hover:text-indigo-700 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300 ${className}`}
    >
      {children}
    </span>
  )
}
