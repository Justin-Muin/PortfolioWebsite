import { Code2, Cpu, Users, type LucideIcon } from 'lucide-react'
import { aboutParagraph, aboutHighlights } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Container from '@/components/ui/Container'
import Surface from '@/components/ui/Surface'

const iconMap: Record<string, LucideIcon> = { Code2, Cpu, Users }

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24" aria-label="About">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          <RevealWrapper>
            <SectionHeader label="About" title="Who I am." />
            <p className="text-base leading-8 text-zinc-600 text-pretty dark:text-zinc-400">{aboutParagraph}</p>
          </RevealWrapper>

          <RevealWrapper delay={0.15}>
            <div className="space-y-4 mt-0 md:mt-16">
              {aboutHighlights.map((h, i) => {
                const Icon = iconMap[h.icon]
                return (
                  <Surface
                    key={i}
                    interactive
                    className="flex items-start gap-4 p-5"
                  >
                    <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950" aria-hidden="true">
                      {Icon && <Icon size={20} />}
                    </span>
                    <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">{h.text}</p>
                  </Surface>
                )
              })}
            </div>
          </RevealWrapper>
        </div>
      </Container>
    </section>
  )
}
