'use client'

import { motion } from 'framer-motion'
import { Award, Braces, Boxes, GraduationCap } from 'lucide-react'
import { SectionHeading } from './section-heading'

const achievements = [
  {
    icon: Award,
    title: 'Super Contributor Badge',
    text: 'Earned the Super Contributor badge during Hacktoberfest 2025 for high-quality open-source pull requests.',
    metric: 'Super Contributor',
  },
  {
    icon: Braces,
    title: '200+ LeetCode Solved',
    text: 'Solved 200+ LeetCode problems demonstrating strong problem-solving and algorithmic thinking.',
    metric: '200+ Solved',
  },
  {
    icon: Boxes,
    title: 'Full-Stack MERN Apps',
    text: 'Built multiple MERN applications featuring JWT, RBAC, REST APIs, WebRTC, and real-time communication.',
    metric: 'Full Stack',
  },
  {
    icon: GraduationCap,
    title: 'B.Tech CSE @ Amity',
    text: 'Strong academic foundation in software engineering, OOP, DBMS, OS, and CN with 8.26 CGPA.',
    metric: '8.26 CGPA',
  },
]

export function Achievements() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 — Achievements"
          title="Milestones along the way"
          align="left"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass group flex flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/6"
            >
              <span className="glass flex h-11 w-11 items-center justify-center rounded-2xl transition-all group-hover:glow-cyan">
                <a.icon className="h-4.5 w-4.5 text-highlight" />
              </span>
              <span className="mt-6 font-mono text-xs text-primary">{a.metric}</span>
              <h3 className="mt-2 font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
