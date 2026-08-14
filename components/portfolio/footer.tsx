'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/iamvasim' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohdvasim09/' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/6 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        <motion.a
          href="#top"
          whileHover={{ rotate: 8, scale: 1.05 }}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 border border-primary/30 font-mono text-sm font-bold text-primary"
          aria-label="Mohammad Vasim — back to top"
        >
          MV
        </motion.a>

        <p className="text-center text-xs text-muted-foreground">
          Designed &amp; engineered by Mohammad Vasim · Lucknow, India · {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:text-foreground hover:glow-primary hover:-translate-y-0.5"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
