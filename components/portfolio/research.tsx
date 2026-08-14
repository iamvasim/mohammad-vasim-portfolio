'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { SectionHeading } from './section-heading'

function useNetwork() {
  return useMemo(() => {
    const layers = [4, 6, 6, 3]
    const nodes: { x: number; y: number }[] = []
    const edges: { x1: number; y1: number; x2: number; y2: number }[] = []
    const layerNodes: { x: number; y: number }[][] = []

    layers.forEach((count, li) => {
      const col: { x: number; y: number }[] = []
      for (let i = 0; i < count; i++) {
        const x = 60 + li * 160
        const y = 40 + ((i + 0.5) / count) * 240
        col.push({ x, y })
        nodes.push({ x, y })
      }
      layerNodes.push(col)
    })

    for (let li = 0; li < layerNodes.length - 1; li++) {
      for (const a of layerNodes[li]) {
        for (const b of layerNodes[li + 1]) {
          edges.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y })
        }
      }
    }
    return { nodes, edges }
  }, [])
}

const topics = ['Super Contributor', 'Hacktoberfest 2025', 'Open Source', 'Git & GitHub', 'MERN Stack', 'Pull Requests']

export function Research() {
  const { nodes, edges } = useNetwork()

  return (
    <section id="research" className="relative overflow-hidden px-6 py-24 md:py-36">
      {/* background network */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25" aria-hidden="true">
        <svg viewBox="0 0 600 320" className="h-full max-h-[480px] w-full max-w-4xl">
          {edges.map((e, i) => (
            <motion.line
              key={i}
              x1={e.x1}
              y1={e.y1}
              x2={e.x2}
              y2={e.y2}
              stroke="#6366f1"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: (i % 12) * 0.08 }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.circle
              key={i}
              cx={n.x}
              cy={n.y}
              r="4"
              fill="#22d3ee"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: (i % 6) * 0.35 }}
            />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="04 — Open Source"
          title="Super Contributor — Hacktoberfest 2025"
          description="Actively contributing to global open-source software — building modular tools, resolving issues, and earning top contributor recognition."
        />

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong group mt-14 rounded-[2rem] p-8 transition-all duration-300 hover:glow-primary md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <span className="glass flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                <Award className="h-5 w-5 text-highlight" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">Open Source Badge</span>
                  <span className="rounded-full bg-success/15 px-2.5 py-0.5 font-mono text-[10px] text-success border border-success/30">
                    ★ Super Contributor
                  </span>
                </div>
                <h3 className="mt-2 text-balance text-xl font-semibold md:text-2xl">
                  Super Contributor — Hacktoberfest 2025
                </h3>
                <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                  Earned the prestigious <strong className="text-foreground font-medium">Super Contributor Badge</strong> during Hacktoberfest 2025 for submitting impactful pull requests, refactored components, fixing open bugs, and collaborating across public repositories.
                </p>
              </div>
            </div>
            <a
              href="https://github.com/iamvasim"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex shrink-0 items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
            >
              GitHub Activity <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2 border-t border-white/6 pt-6">
            {topics.map((t) => (
              <li key={t} className="rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  )
}
