import { Code2, Cpu, Users, type LucideIcon } from 'lucide-react'
import { aboutParagraph, aboutHighlights } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Container from '@/components/ui/Container'
import SpotlightCard from '@/components/ui/SpotlightCard'
import ParallaxLayer from '@/components/ui/ParallaxLayer'

const iconMap: Record<string, LucideIcon> = { Code2, Cpu, Users }

const chipGradients = [
  'from-indigo-500 to-violet-500',
  'from-violet-500 to-fuchsia-500',
  'from-teal-500 to-emerald-500',
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28" aria-label="About">
      <ParallaxLayer from={120} to={-120} className="absolute -right-28 top-16 -z-10">
        <div className="h-80 w-80 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/15" />
      </ParallaxLayer>
      <ParallaxLayer from={-80} to={80} className="absolute -left-24 bottom-0 -z-10">
        <div className="h-64 w-64 rounded-full bg-indigo-400/15 blur-3xl dark:bg-indigo-500/15" />
      </ParallaxLayer>
      <ParallaxLayer from={90} to={-90} rotateFrom={0} rotateTo={90} className="absolute left-[5%] bottom-14 -z-10 hidden md:block">
        <div className="h-24 w-24 rounded-full border-2 border-dashed border-indigo-400/40 dark:border-indigo-500/30" />
      </ParallaxLayer>
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          <RevealWrapper>
            <SectionHeader index="01" label="About" title="Who I am." />
            <p className="text-base leading-8 text-zinc-600 text-pretty dark:text-zinc-400">{aboutParagraph}</p>
          </RevealWrapper>

          <div className="mt-0 space-y-4 md:mt-20">
            {aboutHighlights.map((h, i) => {
              const Icon = iconMap[h.icon]
              return (
                <RevealWrapper key={i} delay={0.12 + i * 0.08}>
                  <SpotlightCard className="flex items-start gap-4 p-5">
                    <span
                      className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md ${chipGradients[i % chipGradients.length]}`}
                      aria-hidden="true"
                    >
                      {Icon && <Icon size={19} />}
                    </span>
                    <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">{h.text}</p>
                  </SpotlightCard>
                </RevealWrapper>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
