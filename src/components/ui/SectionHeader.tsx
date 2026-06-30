interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ label, title, description, centered = false }: SectionHeaderProps) {
  const align = centered ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col ${align} mb-8 sm:mb-12`}>
      <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase text-accent dark:text-accent-dark">
        <span className="h-px w-5 bg-current" aria-hidden="true" />
        {label}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-950 dark:text-zinc-50 text-balance leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-zinc-600 leading-relaxed dark:text-zinc-400">{description}</p>
      )}
    </div>
  )
}
