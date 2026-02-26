import { GraduationCap, MapPin, BookOpen } from 'lucide-react'
import { education } from '@/data'
import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-100/50 dark:bg-zinc-900/30" aria-label="Education">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeader label="Education" title="Where I study." />
        </RevealWrapper>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <RevealWrapper key={i} delay={i * 0.1}>
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 dark:bg-accent-dark/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={20} className="text-accent dark:text-accent-dark" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-zinc-900 dark:text-zinc-50 leading-snug">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {edu.degree} · {edu.field}
                    </p>
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-5">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} aria-hidden="true" />
                    {edu.location}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800">
                    {edu.startDate} — {edu.endDate}
                  </span>
                  {edu.gpa && (
                    <span className="px-2 py-0.5 rounded-full bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark font-medium">
                      GPA {edu.gpa}
                    </span>
                  )}
                </div>

                {/* Coursework */}
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
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
