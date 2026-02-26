// ─── Shared TypeScript Interfaces ────────────────────────────────────────────

export interface PersonalInfo {
  name: string
  title: string
  location: string
  timezone: string
  availability: string
  email: string
  github: string
  linkedin: string
  cvLink: string
  headlines: [string, string, string]
  subheadline: string
  focus: string
}

export interface QuickFact {
  label: string
  value: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface CaseStudySection {
  overview: string
  role: string
  responsibilities: string[]
  challenges: string[]
  keyDecisions: { title: string; description: string }[]
  implementationHighlights: string[]
  outcome: string
  learned: string[]
  nextSteps: string[]
}

export interface Project {
  slug: string
  title: string
  tagline: string
  category: 'web' | 'systems' | 'ml' | 'tool'
  tech: string[]
  bullets: { label: string; text: string }[]
  website?: string
  github?: string
  demo?: string
  caseStudy: CaseStudySection
}

export interface ExperienceItem {
  role: string
  org: string
  orgUrl?: string
  startDate: string
  endDate: string
  location: string
  bullets: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  field: string
  location: string
  startDate: string
  endDate: string
  coursework?: string[]
  courseworkLabel?: string
  gpa?: string
}

export interface Achievement {
  title: string
  org: string
  date: string
  description: string
}
