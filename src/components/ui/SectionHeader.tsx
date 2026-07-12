interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  centered?: boolean
  index?: string
}

export default function SectionHeader({ label, title, description, centered = false, index }: SectionHeaderProps) {
  const align = centered ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col ${align} mb-10 sm:mb-14`}>
      <span className="mb-4 inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-300">
        {index && (
          <span className="text-gradient text-sm font-bold tracking-normal" aria-hidden="true">
            {index}
          </span>
        )}
        <span className="gradient-hairline h-px w-8" aria-hidden="true" />
        {label}
      </span>
      <h2 className="font-display text-3xl font-bold leading-tight text-zinc-950 text-balance sm:text-4xl md:text-[2.65rem] dark:text-zinc-50">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
      )}
    </div>
  )
}
