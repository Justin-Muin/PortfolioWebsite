interface MetricProps {
  label: string
  value: string
  accent?: 'indigo' | 'teal' | 'amber' | 'emerald'
}

const accentClasses: Record<NonNullable<MetricProps['accent']>, string> = {
  indigo: 'text-indigo-600 dark:text-indigo-300',
  teal: 'text-teal-600 dark:text-teal-300',
  amber: 'text-amber-600 dark:text-amber-300',
  emerald: 'text-emerald-600 dark:text-emerald-300',
}

export default function Metric({ label, value, accent = 'indigo' }: MetricProps) {
  return (
    <div className="min-w-0">
      <p className={`font-display text-lg font-semibold ${accentClasses[accent]}`}>{value}</p>
      <p className="mt-1 text-xs font-medium uppercase text-zinc-500 dark:text-zinc-500">{label}</p>
    </div>
  )
}
