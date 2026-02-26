import { Code2, Cpu, Users, type LucideIcon } from 'lucide-react'
import { aboutParagraph, aboutHighlights } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'

const iconMap: Record<string, LucideIcon> = { Code2, Cpu, Users }

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6" aria-label="About">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          {/* Left: Header + text */}
          <RevealWrapper>
            <SectionHeader label="About" title="Who I am." />
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">{aboutParagraph}</p>
          </RevealWrapper>

          {/* Right: Highlight bullets */}
          <RevealWrapper delay={0.15}>
            <div className="space-y-4 mt-0 md:mt-16">
              {aboutHighlights.map((h, i) => {
                const Icon = iconMap[h.icon]
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
                  >
                    <span className="text-accent dark:text-accent-dark flex-shrink-0 mt-0.5" aria-hidden="true">
                      {Icon && <Icon size={20} />}
                    </span>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{h.text}</p>
                  </div>
                )
              })}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
