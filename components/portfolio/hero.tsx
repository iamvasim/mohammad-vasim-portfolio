'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { MagneticButton } from './magnetic-button'

const HeroScene = dynamic(() => import('./hero-scene'), {
  ssr: false,
  loading: () => <div className="h-full w-full" aria-hidden="true" />,
})

const roles = [
  'Full Stack Developer',
  'Backend Engineer',
  'MERN Developer',
  'AI Enthusiast',
  'Problem Solver',
]

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/iamvasim' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohdvasim09/' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden grid-pattern">
      <div className="aurora" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 pt-28 pb-16 lg:grid-cols-2 lg:pt-20">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-start">
          <motion.div variants={item} className="glass flex items-center gap-2 rounded-full px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-xs text-muted-foreground">Open to opportunities</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {"Hi, I'm "}
            <span className="gradient-text text-glow">Mohammad Vasim.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
            Build the Future.{' '}
            <span className="text-foreground">One Product at a Time.</span>
          </motion.p>

          <motion.div variants={item} className="mt-5 flex h-8 items-center gap-3 font-mono text-sm text-highlight">
            <span className="text-muted-foreground">{'>'}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="animate-blink text-highlight">_</span>
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            I build modern, scalable, AI-powered web applications that combine beautiful user
            experiences with intelligent backend systems.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="/Mohammad_Vasim_Resume.pdf" variant="ghost">
              <Download className="h-4 w-4" /> Resume
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:text-foreground hover:glow-primary hover:-translate-y-0.5"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — 3D scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="relative hidden h-[520px] lg:block"
        >
          <HeroScene />
          {/* Floating glass chips */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-strong absolute left-2 top-16 rounded-2xl px-4 py-3 font-mono text-xs"
          >
            <span className="text-highlight">const</span>{' '}
            <span className="text-foreground">stack</span> ={' '}
            <span className="text-success">{"'MERN + AI'"}</span>
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="glass-strong absolute bottom-20 right-0 rounded-2xl px-4 py-3 font-mono text-xs"
          >
            <span className="text-accent">deploy</span>
            <span className="text-muted-foreground">(</span>
            <span className="text-foreground">production</span>
            <span className="text-muted-foreground">)</span>{' '}
            <span className="text-success">✓</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
          <motion.div
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-highlight"
          />
        </div>
      </motion.div>
    </section>
  )
}
