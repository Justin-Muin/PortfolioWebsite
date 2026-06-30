import { skills } from '@/data'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Container from '@/components/ui/Container'
import Surface from '@/components/ui/Surface'

export default function Skills() {
  return (
    <section id="skills" className="section-band py-16 sm:py-24" aria-label="Skills">
      <Container>
        <RevealWrapper>
          <SectionHeader
            label="Skills"
            title="What I work with."
            description="Tools I use across web, coursework, and ML projects."
          />
        </RevealWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <RevealWrapper key={group.category} delay={i * 0.08}>
              <Surface interactive className="h-full p-5">
                <h3 className="mb-4 font-display text-xs font-semibold uppercase text-zinc-500 dark:text-zinc-500">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Surface>
            </RevealWrapper>
          ))}
        </div>
      </Container>
    </section>
  )
}
