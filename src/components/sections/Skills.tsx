import { BrainCircuit, Code2, Layers, Wrench, type LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { skills } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Container from '@/components/ui/Container'
import SpotlightCard from '@/components/ui/SpotlightCard'
import ParallaxLayer from '@/components/ui/ParallaxLayer'

const categoryIcons: Record<string, LucideIcon> = {
  Languages: Code2,
  'Frameworks & Libraries': Layers,
  'Tools & Platforms': Wrench,
  Concepts: BrainCircuit,
}

const chipGradients = [
  'from-indigo-500 to-violet-500',
  'from-teal-500 to-emerald-500',
  'from-amber-500 to-orange-500',
  'from-violet-500 to-fuchsia-500',
]

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="skills" className="section-band py-20 sm:py-28" aria-label="Skills">
      <ParallaxLayer from={110} to={-110} className="absolute -left-24 bottom-0 -z-10">
        <div className="h-72 w-72 rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-500/15" />
      </ParallaxLayer>
      <ParallaxLayer from={-70} to={70} className="absolute -right-20 top-0 -z-10">
        <div className="h-64 w-64 rounded-full bg-indigo-400/15 blur-3xl dark:bg-indigo-500/15" />
      </ParallaxLayer>
      <Container>
        <RevealWrapper>
          <SectionHeader
            index="02"
            label="Skills"
            title="What I work with."
            description="Tools I use across web, coursework, and ML projects."
          />
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const Icon = categoryIcons[group.category] ?? Code2
            return (
              <RevealWrapper key={group.category} delay={i * 0.08} className="h-full">
                <SpotlightCard className="h-full p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br text-white shadow-md ${chipGradients[i % chipGradients.length]}`}
                      aria-hidden="true"
                    >
                      <Icon size={17} />
                    </span>
                    <h3 className="font-display text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                        transition={{ delay: 0.15 + j * 0.035, duration: 0.3 }}
                      >
                        <Badge>{skill}</Badge>
                      </motion.span>
                    ))}
                  </div>
                </SpotlightCard>
              </RevealWrapper>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
