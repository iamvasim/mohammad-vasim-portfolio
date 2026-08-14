'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, FileDown, CheckCircle2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { SectionHeading } from './section-heading'
import { MagneticButton } from './magnetic-button'

const channels = [
  { icon: Mail, label: 'Email', value: 'joinvasim2.0@gmail.com', href: 'mailto:joinvasim2.0@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91-9336356903', href: 'tel:+919336356903' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/iamvasim', href: 'https://github.com/iamvasim' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'in/mohdvasim09', href: 'https://www.linkedin.com/in/mohdvasim09/' },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:py-36">
      <div className="aurora" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let's build something great"
          description="Open to internships, opportunities, and interesting problems. The inbox is always open."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong mt-14 grid grid-cols-1 gap-10 rounded-[2.5rem] p-8 md:grid-cols-5 md:p-12"
        >
          {/* left — channels */}
          <div className="flex flex-col gap-3 md:col-span-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass group flex items-center gap-4 rounded-2xl p-4 transition-all hover:bg-white/8 hover:-translate-y-0.5"
              >
                <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all group-hover:glow-primary">
                  <c.icon className="h-4 w-4 text-highlight" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{c.label}</span>
                  <span className="block truncate text-sm">{c.value}</span>
                </span>
              </a>
            ))}
            <div className="mt-2">
              <MagneticButton href="/Mohammad_Vasim_Resume.pdf" variant="ghost">
                <FileDown className="h-4 w-4" /> Download Resume
              </MagneticButton>
            </div>
          </div>

          {/* right — form */}
          <div className="md:col-span-3">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-64 flex-col items-center justify-center gap-4 rounded-3xl border border-success/20 bg-success/5 p-8 text-center"
              >
                <CheckCircle2 className="h-10 w-10 text-success" />
                <p className="text-lg font-medium">Message sent</p>
                <p className="text-sm text-muted-foreground">{"Thanks for reaching out — I'll reply soon."}</p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 text-xs font-medium text-highlight underline underline-offset-4 hover:text-foreground"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs text-muted-foreground">Name</span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary/60 focus:ring-2 focus:ring-primary/25"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs text-muted-foreground">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary/60 focus:ring-2 focus:ring-primary/25"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-xs text-muted-foreground">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="resize-none rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary/60 focus:ring-2 focus:ring-primary/25"
                    placeholder="Tell me about the opportunity or project..."
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:glow-primary"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
