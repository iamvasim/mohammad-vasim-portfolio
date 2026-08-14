'use client'

import { motion } from 'framer-motion'
import { Terminal, Code2, Layers, Rocket, BrainCircuit, PackageCheck, GraduationCap, MapPin } from 'lucide-react'
import { SectionHeading } from './section-heading'

const journey = [
  {
    icon: Terminal,
    year: '2023',
    title: 'Started with C++',
    text: 'Wrote my first lines of code, fell in love with problem solving, and began the DSA journey.',
  },
  {
    icon: Code2,
    year: '2023',
    title: 'Learned Java',
    text: 'Built a strong foundation in OOP, data structures, and core computer science fundamentals.',
  },
  {
    icon: Layers,
    year: '2024',
    title: 'Built Frontend',
    text: 'HTML, CSS, JavaScript, then React — crafting interfaces that people actually enjoy using.',
  },
  {
    icon: Rocket,
    year: '2024',
    title: 'Mastered MERN Stack',
    text: 'MongoDB, Express, React, Node.js — shipping full-stack applications end to end.',
  },
  {
    icon: BrainCircuit,
    year: '2025',
    title: 'AI Integration',
    text: 'NLP, LLMs, and the OpenAI API — building intelligence into every layer of the stack.',
  },
  {
    icon: PackageCheck,
    year: 'Now',
    title: 'Production-Ready Software',
    text: 'Designing scalable architectures and shipping polished, real-world products.',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01 — About"
          title="A journey written in code"
          description="From the first line of C++ to production AI systems — every step deliberate, every project a lesson."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground">
            <GraduationCap className="h-4 w-4 text-highlight" />
            B.Tech CSE · Amity University Lucknow · 2023–2027 · CGPA: 8.26
          </div>
          <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-highlight" />
            Lucknow, Uttar Pradesh, India
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* center line */}
          <div
            className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent md:left-1/2"
            aria-hidden="true"
          />
          <ol className="flex flex-col gap-10">
            {journey.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.1 }}
                className={`relative flex items-start gap-6 md:w-1/2 ${
                  i % 2 === 0 ? 'md:self-start md:pr-14 md:flex-row-reverse md:text-right' : 'md:self-end md:pl-14'
                } pl-14 md:pl-0 ${i % 2 !== 0 ? 'md:pl-14' : ''}`}
              >
                {/* node */}
                <span
                  className={`absolute left-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full glass-strong glow-primary ${
                    i % 2 === 0 ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                  }`}
                >
                  <step.icon className="h-4 w-4 text-highlight" />
                </span>

                <div className="glass group w-full rounded-3xl p-6 transition-all duration-300 hover:bg-white/6 hover:-translate-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">{step.year}</span>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
