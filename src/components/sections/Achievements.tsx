import { Trophy } from 'lucide-react'
import { achievements } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function Achievements() {
  if (achievements.length === 0) return null

  return (
    <section
      id="achievements"
      className="py-16 sm:py-24 px-4 sm:px-6"
      aria-label="Achievements"
    >
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeader label="Achievements" title="Recognition & awards." />
        </RevealWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <RevealWrapper key={i} delay={i * 0.08}>
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                    <Trophy size={16} className="text-amber-500" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-zinc-900 dark:text-zinc-50 text-sm leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{item.org}</span>
                      <span className="text-xs text-zinc-400">·</span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">{item.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mt-auto">{item.description}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
