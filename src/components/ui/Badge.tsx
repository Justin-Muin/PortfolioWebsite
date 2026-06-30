interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-zinc-200/80 bg-zinc-100/70 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400 ${className}`}
    >
      {children}
    </span>
  )
}
