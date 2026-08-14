'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 7, suffix: '+', label: 'Projects Shipped' },
  { value: 25, suffix: '+', label: 'GitHub Repositories' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 200, suffix: '+', label: 'DSA Problems' },
  { value: 1, suffix: '', label: 'Research Paper' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    let raf: number
    function tick(now: number) {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="gradient-text text-4xl font-semibold tabular-nums md:text-5xl">
      {display}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative px-6 py-12" aria-label="Career statistics">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="glass mx-auto grid max-w-6xl grid-cols-2 gap-y-10 rounded-[2rem] px-6 py-12 sm:grid-cols-3 lg:grid-cols-5"
      >
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2 text-center">
            <Counter value={s.value} suffix={s.suffix} />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
