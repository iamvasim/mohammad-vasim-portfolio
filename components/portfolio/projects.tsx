'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'
import { GithubIcon } from './brand-icons'
import { SectionHeading } from './section-heading'
import {
  ELearningMockup,
  CodeEditorMockup,
  NovaUIMockup,
  WanderlustMockup,
  SyncMeetMockup,
  ZerodhaMockup,
  PeeroMockup,
} from './project-mockups'

interface Project {
  name: string
  tagline: string
  problem: string
  solution: string
  stack: string[]
  features: string[]
  mockup: ReactNode
  accent: string
  githubUrl?: string
  demoUrl?: string
}

const featured: Project = {
  name: 'Next-Gen AI-Powered Adaptive E-Learning System',
  tagline: 'An intelligent learning platform that adapts to every student.',
  problem:
    'Traditional e-learning treats every student the same — same content, same pace, same path. Engagement drops and outcomes suffer.',
  solution:
    'A recommendation engine that analyzes learning patterns and adapts course paths in real time, with dedicated dashboards for students and teachers, live analytics, certificates, and role-based access.',
  stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
  features: [
    'AI recommendation engine',
    'Adaptive learning paths',
    'Student & teacher dashboards',
    'Progress analytics',
    'Certificates',
    'Role management',
  ],
  mockup: <ELearningMockup />,
  accent: 'text-highlight',
  githubUrl: 'https://github.com/iamvasim/NextGen-AI-Powered-E-Learning-Platform',
  demoUrl: '#',
}

const projects: Project[] = [
  {
    name: 'CodeForge',
    tagline: 'AI-powered online code editor with real-time execution.',
    problem: 'Setting up local environments is friction. Beginners give up before writing their first program.',
    solution:
      'A VS Code-style editor in the browser: multi-language execution, syntax highlighting, themes, an integrated terminal, and an AI assistant that explains errors as they happen.',
    stack: ['React', 'Node.js', 'Socket.io', 'OpenAI API', 'Express'],
    features: ['Real-time execution', 'Multiple languages', 'Integrated terminal', 'AI assistant', 'Custom themes'],
    mockup: <CodeEditorMockup />,
    accent: 'text-secondary',
    githubUrl: 'https://github.com/iamvasim',
    demoUrl: '#',
  },
  {
    name: 'NovaUI',
    tagline: 'A modern, glassmorphic React component library.',
    problem: 'Teams rebuild the same buttons, cards, and forms in every project — inconsistently.',
    solution:
      'A reusable component system with live previews, dark mode by default, motion built in, and documentation that shows real usage, not just prop tables.',
    stack: ['React', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion'],
    features: ['40+ components', 'Live component preview', 'Dark mode', 'Animation presets', 'Full documentation'],
    mockup: <NovaUIMockup />,
    accent: 'text-accent',
    githubUrl: 'https://github.com/iamvasim/NovaUI-Scalable-React-UI-Component-Library',
    demoUrl: '#',
  },
  {
    name: 'Wanderlust',
    tagline: 'Travel planning, from daydream to itinerary.',
    problem: 'Trip planning is scattered across ten tabs — maps, weather, bookings, and notes never talk to each other.',
    solution:
      'One platform: interactive destination discovery, live weather, an automatic trip planner, and map-based exploration with a booking flow.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Map APIs'],
    features: ['Interactive globe', 'Destination cards', 'Live weather', 'Trip planner', 'Booking flow'],
    mockup: <WanderlustMockup />,
    accent: 'text-secondary',
    githubUrl: 'https://github.com/iamvasim/wanderlust',
    demoUrl: '#',
  },
  {
    name: 'SyncMeet',
    tagline: 'Meetings that schedule themselves.',
    problem: 'Coordinating meetings across teams means endless back-and-forth and double-booked calendars.',
    solution:
      'Real-time calendar sync, video rooms, live collaboration, smart notifications, and room management — all in one glass interface.',
    stack: ['WebRTC', 'Socket.io', 'Node.js', 'Express.js', 'React.js'],
    features: ['Calendar sync', 'Video calls', 'Real-time collaboration', 'Notifications', 'Room management'],
    mockup: <SyncMeetMockup />,
    accent: 'text-primary',
    githubUrl: 'https://github.com/iamvasim/SyncMeet',
    demoUrl: '#',
  },
  {
    name: 'Zerodha Clone',
    tagline: 'A full trading dashboard, rebuilt from scratch.',
    problem: 'Financial dashboards demand real-time data, dense information design, and zero tolerance for lag.',
    solution:
      'A trading platform clone with live charts, portfolio tracking, order management, and analytics — engineered for performance.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    features: ['Live stock charts', 'Portfolio tracking', 'Order management', 'Watchlists', 'Analytics'],
    mockup: <ZerodhaMockup />,
    accent: 'text-success',
    githubUrl: 'https://github.com/iamvasim/zerodha-clone',
    demoUrl: '#',
  },
  {
    name: 'Peero',
    tagline: 'A social platform built for communities.',
    problem: 'Generic social networks bury communities under algorithms. Builders need a home for focused conversation.',
    solution:
      'Community-first networking: real-time messaging, media sharing, activity feeds, and profiles — powered by websockets.',
    stack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    features: ['Real-time messaging', 'Communities', 'Media sharing', 'Activity feed', 'Profiles'],
    mockup: <PeeroMockup />,
    accent: 'text-accent',
    githubUrl: 'https://github.com/iamvasim/Peero',
    demoUrl: '#',
  },
]

function ProjectLinks({ project }: { project: Project }) {
  const ghUrl = project.githubUrl || 'https://github.com/iamvasim'
  const isDemoActive = project.demoUrl && project.demoUrl !== '#'

  return (
    <div className="flex items-center gap-3">
      <a
        href={ghUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
      >
        <GithubIcon className="h-3.5 w-3.5" /> Code
      </a>
      <a
        href={isDemoActive ? project.demoUrl : '#projects'}
        target={isDemoActive ? '_blank' : undefined}
        rel={isDemoActive ? 'noopener noreferrer' : undefined}
        onClick={(e) => {
          if (!isDemoActive) {
            e.preventDefault()
            alert(`Live Demo for ${project.name} is available upon request during recruiter / interview demo.`)
          }
        }}
        className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
      >
        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
      </a>
    </div>
  )
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/6 bg-white/3 p-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-destructive/80">Problem</span>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
        </div>
        <div className="rounded-2xl border border-white/6 bg-white/3 p-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-success">Solution</span>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-full border border-white/8 bg-white/4 px-3 py-1 font-mono text-[11px] text-muted-foreground">
            {tech}
          </li>
        ))}
      </ul>
    </>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Products, not just projects"
          description="Each build solves a real problem — with architecture, polish, and lessons learned along the way."
        />

        {/* Featured project */}
        <motion.article
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative mt-16 overflow-hidden rounded-[2.5rem] p-8 md:p-12"
        >
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-highlight/30 bg-highlight/10 px-4 py-1.5 font-mono text-xs text-highlight">
              <Sparkles className="h-3.5 w-3.5" /> Flagship Project
            </span>
            <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-balance text-2xl font-semibold tracking-tight md:text-4xl">{featured.name}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{featured.tagline}</p>
                <ProjectMeta project={featured} />
                <div className="mt-6">
                  <ProjectLinks project={featured} />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {featured.mockup}
              </motion.div>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-3 border-t border-white/6 pt-8 sm:grid-cols-3 lg:grid-cols-6">
              {featured.features.map((f) => (
                <li key={f} className="text-center font-mono text-[11px] text-muted-foreground">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        {/* Other projects — alternating */}
        <div className="mt-20 flex flex-col gap-20">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div>
                <span className={`font-mono text-xs uppercase tracking-[0.3em] ${project.accent}`}>
                  {String(i + 2).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{project.name}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{project.tagline}</p>
                <ProjectMeta project={project} />
                <div className="mt-6">
                  <ProjectLinks project={project} />
                </div>
              </div>
              <motion.div
                whileHover={{ y: -6, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                {project.mockup}
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
