'use client'

import { motion } from 'framer-motion'
import {
  Monitor,
  Server,
  Database,
  BrainCircuit,
  Code2,
  Wrench,
  CloudUpload,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

interface SkillGroup {
  icon: typeof Monitor
  title: string
  skills: string[]
  className: string
  accent: string
}

const groups: SkillGroup[] = [
  {
    icon: Monitor,
    title: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Redux Toolkit', 'Framer Motion'],
    className: 'md:col-span-2 md:row-span-2',
    accent: 'text-highlight',
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC', 'WebRTC', 'Socket.io'],
    className: 'md:col-span-2',
    accent: 'text-primary',
  },
  {
    icon: BrainCircuit,
    title: 'CS Fundamentals',
    skills: ['DSA', 'OOP', 'DBMS', 'OS', 'CN'],
    className: 'md:col-span-2',
    accent: 'text-accent',
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
    className: '',
    accent: 'text-success',
  },
  {
    icon: Code2,
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'C++'],
    className: '',
    accent: 'text-secondary',
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA'],
    className: '',
    accent: 'text-highlight',
  },
  {
    icon: CloudUpload,
    title: 'Deployment',
    skills: ['Vercel', 'Render', 'Netlify'],
    className: '',
    accent: 'text-primary',
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 — Skills"
          title="A toolkit built for shipping"
          description="Full-stack fluency from pixel to production — with AI woven into the workflow."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:bg-white/6 hover:-translate-y-1 ${group.className}`}
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex items-center gap-3">
                <span className="glass flex h-10 w-10 items-center justify-center rounded-2xl">
                  <group.icon className={`h-4 w-4 ${group.accent}`} />
                </span>
                <h3 className="font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-white/15"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* marquee strip */}
        <div className="relative mt-12 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-10">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex shrink-0 gap-10" aria-hidden={dup === 1}>
                {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Python', 'Java', 'C++', 'Tailwind', 'OpenAI', 'Socket.io', 'Git'].map(
                  (tech) => (
                    <span key={tech} className="font-mono text-sm uppercase tracking-widest text-muted-foreground/50">
                      {tech}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
