import { skills } from '@/data'

const allSkills = skills.flatMap((group) => group.skills)
const rowA = allSkills.filter((_, i) => i % 2 === 0)
const rowB = allSkills.filter((_, i) => i % 2 === 1)

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-mask marquee-paused overflow-hidden">
      <div
        className={`flex w-max items-center gap-10 py-3 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.22em] text-zinc-400 transition-colors hover:text-zinc-950 dark:text-zinc-600 dark:hover:text-zinc-100"
            aria-hidden={i >= items.length}
          >
            {item}
            <span className="text-indigo-400/70 dark:text-indigo-500/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="relative border-y border-zinc-200/70 bg-white/45 py-3 dark:border-zinc-800/70 dark:bg-zinc-950/45"
    >
      <MarqueeRow items={rowA} />
      <MarqueeRow items={rowB} reverse />
    </section>
  )
}
