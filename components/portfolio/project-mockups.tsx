'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp,
  TrendingDown,
  Video,
  Calendar,
  MessageCircle,
  Heart,
  Globe,
  Sun,
  Award,
  BarChart3,
  Sparkles,
} from 'lucide-react'

/* ---------- E-Learning dashboard mockup ---------- */
export function ELearningMockup() {
  return (
    <div className="glass-strong overflow-hidden rounded-3xl p-1 shadow-2xl shadow-primary/10">
      <div className="rounded-[1.35rem] bg-surface/90 p-5">
        {/* top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-semibold">LearnAI Dashboard</span>
          </div>
          <span className="rounded-full bg-success/15 px-2.5 py-1 font-mono text-[10px] text-success">
            Student · Active
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {/* progress */}
          <div className="col-span-2 rounded-2xl border border-white/6 bg-white/3 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Learning Progress</span>
              <BarChart3 className="h-3.5 w-3.5 text-highlight" />
            </div>
            <div className="mt-3 flex items-end gap-1.5" aria-hidden="true">
              {[35, 55, 42, 70, 62, 85, 78, 92].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: h * 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full rounded-t bg-gradient-to-t from-primary/40 to-highlight/70"
                />
              ))}
            </div>
          </div>
          {/* certificate */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/6 bg-white/3 p-4">
            <Award className="h-4 w-4 text-accent" />
            <div>
              <p className="text-lg font-semibold">12</p>
              <p className="text-[10px] text-muted-foreground">Certificates</p>
            </div>
          </div>
        </div>

        {/* AI recommendations */}
        <div className="mt-3 rounded-2xl border border-primary/20 bg-primary/8 p-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-highlight" />
            <span className="text-xs font-medium text-highlight">AI Recommendation Engine</span>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {[
              { name: 'Advanced Node.js Patterns', match: '96%' },
              { name: 'Transformer Architectures', match: '91%' },
            ].map((c) => (
              <div key={c.name} className="flex items-center justify-between rounded-xl bg-white/4 px-3 py-2">
                <span className="text-xs">{c.name}</span>
                <span className="font-mono text-[10px] text-success">{c.match} match</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Code editor mockup ---------- */
const codeLines = [
  [
    { t: 'import', c: 'text-accent' },
    { t: ' { execute } ', c: 'text-foreground' },
    { t: 'from', c: 'text-accent' },
    { t: " '@editor/runtime'", c: 'text-success' },
  ],
  [{ t: '', c: '' }],
  [
    { t: 'const', c: 'text-highlight' },
    { t: ' result = ', c: 'text-foreground' },
    { t: 'await', c: 'text-accent' },
    { t: ' execute(code, {', c: 'text-foreground' },
  ],
  [
    { t: '  language: ', c: 'text-foreground' },
    { t: "'python'", c: 'text-success' },
    { t: ',', c: 'text-foreground' },
  ],
  [
    { t: '  ai: ', c: 'text-foreground' },
    { t: 'true', c: 'text-primary' },
    { t: ', ', c: 'text-foreground' },
    { t: '// AI assistant enabled', c: 'text-muted-foreground' },
  ],
  [{ t: '})', c: 'text-foreground' }],
]

export function CodeEditorMockup() {
  return (
    <div className="glass-strong overflow-hidden rounded-3xl p-1 shadow-2xl shadow-secondary/10">
      <div className="rounded-[1.35rem] bg-[#0a0e1a] font-mono text-xs">
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-white/6 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          <span className="ml-3 text-[10px] text-muted-foreground">main.py — CodeForge</span>
        </div>
        {/* tabs */}
        <div className="flex gap-1 border-b border-white/6 px-3 pt-2">
          <span className="rounded-t-lg bg-white/6 px-3 py-1.5 text-[10px] text-foreground">main.py</span>
          <span className="px-3 py-1.5 text-[10px] text-muted-foreground">utils.js</span>
        </div>
        {/* code */}
        <div className="flex flex-col gap-1 p-4">
          {codeLines.map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="w-4 text-right text-muted-foreground/40">{i + 1}</span>
              <span>
                {line.map((seg, j) => (
                  <span key={j} className={seg.c}>
                    {seg.t}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
        {/* terminal */}
        <div className="border-t border-white/6 bg-black/40 p-4">
          <p className="text-muted-foreground">
            <span className="text-success">➜</span> run main.py
          </p>
          <p className="mt-1 text-foreground">
            Executed in 0.42s <span className="text-success">✓</span>
          </p>
          <span className="mt-1 inline-block h-3 w-1.5 animate-blink bg-highlight" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

/* ---------- NovaUI mockup ---------- */
export function NovaUIMockup() {
  return (
    <div className="glass-strong rounded-3xl p-6 shadow-2xl shadow-accent/10">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">{'<NovaUI />'}</span>
        <span className="rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[10px] text-accent">v2.4.0</span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {/* button preview */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/6 bg-white/3 p-5">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground glow-primary"
          >
            Get Started
          </motion.span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-xs">Ghost</span>
        </div>
        {/* card preview */}
        <div className="rounded-2xl border border-white/6 bg-white/3 p-4">
          <div className="h-2 w-1/2 rounded-full bg-white/15" />
          <div className="mt-2 h-2 w-3/4 rounded-full bg-white/8" />
          <div className="mt-2 h-2 w-2/3 rounded-full bg-white/8" />
          <div className="mt-4 h-7 w-full rounded-lg bg-gradient-to-r from-primary/40 to-accent/40" />
        </div>
        {/* toggle + input */}
        <div className="flex items-center justify-center gap-4 rounded-2xl border border-white/6 bg-white/3 p-5">
          <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary/60">
            <span className="absolute right-0.5 h-4 w-4 rounded-full bg-white" />
          </span>
          <span className="h-3 w-3 rounded-full border-2 border-highlight" />
          <span className="h-3 w-3 rounded bg-accent/70" />
        </div>
        {/* progress */}
        <div className="flex flex-col justify-center gap-3 rounded-2xl border border-white/6 bg-white/3 p-5">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '72%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-primary to-highlight"
            />
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '45%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-accent to-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Wanderlust mockup ---------- */
export function WanderlustMockup() {
  return (
    <div className="glass-strong rounded-3xl p-6 shadow-2xl shadow-secondary/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-secondary" />
          <span className="text-sm font-semibold">Wanderlust</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[10px] text-muted-foreground">
          <Sun className="h-3 w-3 text-[#f59e0b]" /> 24°C · Kyoto
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { name: 'Kyoto', tone: 'from-secondary/50 to-primary/30' },
          { name: 'Santorini', tone: 'from-primary/50 to-accent/30' },
          { name: 'Iceland', tone: 'from-highlight/40 to-secondary/30' },
        ].map((d) => (
          <div key={d.name} className={`flex h-24 items-end rounded-2xl bg-gradient-to-br ${d.tone} p-3`}>
            <span className="text-xs font-medium">{d.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/6 bg-white/3 p-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-secondary/15">
          <Calendar className="h-3.5 w-3.5 text-secondary" />
        </span>
        <div className="flex-1">
          <p className="text-xs font-medium">7-Day Japan Itinerary</p>
          <p className="text-[10px] text-muted-foreground">Auto-planned · 12 destinations</p>
        </div>
        <span className="font-mono text-[10px] text-success">Ready</span>
      </div>
    </div>
  )
}

/* ---------- SyncMeet mockup ---------- */
export function SyncMeetMockup() {
  const days = ['M', 'T', 'W', 'T', 'F']
  return (
    <div className="glass-strong rounded-3xl p-6 shadow-2xl shadow-primary/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Video className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold">SyncMeet</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-destructive/15 px-2.5 py-1 text-[10px] text-destructive">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-destructive" /> LIVE
        </span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-1.5">
        {days.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] text-muted-foreground">{d}</span>
            <div
              className={`h-14 w-full rounded-xl border ${
                i === 2 ? 'border-primary/40 bg-primary/20' : 'border-white/6 bg-white/3'
              }`}
            >
              {i === 2 && <div className="m-1.5 rounded-md bg-primary/50 px-1 py-0.5 text-[8px]">Standup</div>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/6 bg-white/3 p-3">
        <div className="flex -space-x-2">
          {['bg-primary/60', 'bg-secondary/60', 'bg-accent/60', 'bg-success/60'].map((c, i) => (
            <span key={i} className={`h-7 w-7 rounded-full border-2 border-surface ${c}`} />
          ))}
        </div>
        <span className="text-[10px] text-muted-foreground">4 participants · Room #std-daily</span>
      </div>
    </div>
  )
}

/* ---------- Zerodha mockup ---------- */
export function ZerodhaMockup() {
  return (
    <div className="glass-strong rounded-3xl p-6 shadow-2xl shadow-success/10">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Portfolio</span>
        <span className="flex items-center gap-1 font-mono text-xs text-success">
          <TrendingUp className="h-3.5 w-3.5" /> +12.4%
        </span>
      </div>
      {/* chart */}
      <svg viewBox="0 0 300 80" className="mt-4 w-full" aria-hidden="true">
        <defs>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,60 C30,55 45,40 70,45 C95,50 110,25 140,30 C170,35 185,15 215,20 C245,25 270,10 300,12"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />
        <path
          d="M0,60 C30,55 45,40 70,45 C95,50 110,25 140,30 C170,35 185,15 215,20 C245,25 270,10 300,12 L300,80 L0,80 Z"
          fill="url(#chart-fill)"
        />
      </svg>
      <div className="mt-3 flex flex-col gap-2">
        {[
          { sym: 'RELIANCE', price: '2,847.20', change: '+2.1%', up: true },
          { sym: 'TCS', price: '4,102.55', change: '+0.8%', up: true },
          { sym: 'INFY', price: '1,690.10', change: '-0.4%', up: false },
        ].map((s) => (
          <div key={s.sym} className="flex items-center justify-between rounded-xl border border-white/6 bg-white/3 px-3 py-2 font-mono text-xs">
            <span>{s.sym}</span>
            <span className="text-muted-foreground">₹{s.price}</span>
            <span className={`flex items-center gap-1 ${s.up ? 'text-success' : 'text-destructive'}`}>
              {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {s.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- Peero mockup ---------- */
export function PeeroMockup() {
  return (
    <div className="glass-strong rounded-3xl p-6 shadow-2xl shadow-accent/10">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Peero</span>
        <span className="flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-[10px] text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success" /> 1,248 online
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-2.5">
        <div className="flex items-start gap-3 rounded-2xl border border-white/6 bg-white/3 p-3">
          <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-primary/70 to-accent/70" />
          <div className="flex-1">
            <p className="text-xs font-medium">
              Aisha <span className="font-normal text-muted-foreground">· #buildinpublic</span>
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
              Just shipped realtime presence with Socket.io — latency under 40ms
            </p>
            <div className="mt-2 flex items-center gap-4 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Heart className="h-3 w-3 text-destructive" /> 84
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="h-3 w-3" /> 12
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/8 p-3">
          <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-secondary/70 to-highlight/70" />
          <div className="flex-1">
            <p className="text-[11px] text-muted-foreground">
              <span className="font-medium text-foreground">Dev</span> is typing
            </p>
            <div className="mt-1.5 flex gap-1" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  className="h-1.5 w-1.5 rounded-full bg-highlight"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
