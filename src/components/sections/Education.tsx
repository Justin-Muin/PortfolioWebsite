import { GraduationCap, MapPin, BookOpen } from 'lucide-react'
import { education } from '@/data'
import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Container from '@/components/ui/Container'
import Surface from '@/components/ui/Surface'

export default function Education() {
  return (
    <section id="education" className="section-band py-16 sm:py-24" aria-label="Education">
      <Container>
        <RevealWrapper>
          <SectionHeader label="Education" title="Where I study." />
        </RevealWrapper>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <RevealWrapper key={i} delay={i * 0.1}>
              <Surface interactive className="h-full p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950">
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

                <div className="flex flex-wrap gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-5">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} aria-hidden="true" />
                    {edu.location}
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 dark:bg-zinc-900">
                    {edu.startDate} — {edu.endDate}
                  </span>
                  {edu.gpa && (
                    <span className="rounded-md bg-teal-500/10 px-2 py-0.5 font-medium text-teal-700 dark:text-teal-300">
                      GPA {edu.gpa}
                    </span>
                  )}
                </div>

                {edu.coursework && (
                  <div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <BookOpen size={13} className="text-zinc-400" aria-hidden="true" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                        {edu.courseworkLabel ?? "Relevant Coursework"}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <Badge key={course}>{course}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </Surface>
            </RevealWrapper>
          ))}
        </div>
      </Container>
    </section>
  )
}
