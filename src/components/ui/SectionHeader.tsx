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
      <span className="text-xs font-semibold tracking-widest uppercase text-accent dark:text-accent-dark mb-3">
        {label}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 text-balance leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">{description}</p>
      )}
    </div>
  )
}
