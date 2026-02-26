import { skills } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-zinc-100/50 dark:bg-zinc-900/30" aria-label="Skills">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <SectionHeader
            label="Skills"
            title="What I work with."
            description="Technologies I've used in projects, coursework, and production environments."
          />
        </RevealWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <RevealWrapper key={group.category} delay={i * 0.08}>
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm h-full">
                <h3 className="font-display text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
