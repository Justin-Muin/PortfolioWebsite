import { GraduationCap, MapPin, BookOpen } from 'lucide-react'
import { education } from '@/data'
import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Container from '@/components/ui/Container'
import SpotlightCard from '@/components/ui/SpotlightCard'
import ParallaxLayer from '@/components/ui/ParallaxLayer'

export default function Education() {
  return (
    <section id="education" className="section-band py-20 sm:py-28" aria-label="Education">
      <ParallaxLayer from={110} to={-110} className="absolute -right-24 top-10 -z-10">
        <div className="h-72 w-72 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/15" />
      </ParallaxLayer>
      <ParallaxLayer from={-70} to={70} className="absolute -left-20 bottom-8 -z-10">
        <div className="h-60 w-60 rounded-full bg-indigo-400/15 blur-3xl dark:bg-indigo-500/15" />
      </ParallaxLayer>
      <Container>
        <RevealWrapper>
          <SectionHeader index="04" label="Education" title="Where I study." />
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <RevealWrapper key={i} delay={i * 0.1} className="h-full">
              <SpotlightCard className="h-full p-6">
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-teal-500 text-white shadow-md">
                    <GraduationCap size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold leading-snug text-zinc-950 dark:text-zinc-50">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {edu.degree} · {edu.field}
                    </p>
                  </div>
                </div>

                <div className="mb-5 flex flex-wrap gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} aria-hidden="true" />
                    {edu.location}
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 font-mono dark:bg-zinc-900">
                    {edu.startDate} — {edu.endDate}
                  </span>
                  {edu.gpa && (
                    <span className="rounded-md bg-teal-500/10 px-2 py-0.5 font-mono font-medium text-teal-700 ring-1 ring-teal-500/20 dark:text-teal-300">
                      GPA {edu.gpa}
                    </span>
                  )}
                </div>

                {edu.coursework && (
                  <div>
                    <div className="mb-3 flex items-center gap-1.5">
                      <BookOpen size={13} className="text-zinc-400" aria-hidden="true" />
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                        {edu.courseworkLabel ?? 'Relevant Coursework'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <Badge key={course}>{course}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </SpotlightCard>
            </RevealWrapper>
          ))}
        </div>
      </Container>
    </section>
  )
}
