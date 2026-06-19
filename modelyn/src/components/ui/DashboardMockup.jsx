import { motion } from 'framer-motion';
import { Activity, Cpu, Gauge, Wifi } from 'lucide-react';

const CHART_PATH =
  'M0,68 C18,62 28,40 46,42 C64,44 70,72 90,70 C110,68 118,30 140,26 C162,22 172,52 196,48 C220,44 232,14 256,12 C280,10 296,38 320,34';

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card relative z-10 overflow-hidden shadow-glow"
      >
        <div className="flex items-center justify-between border-b border-border-soft px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-brand-green" />
            <span className="font-mono text-xs text-ink-muted">fraud-detector-prod</span>
          </div>
          <span className="rounded-full bg-brand-green/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-brand-green">
            Live
          </span>
        </div>

        <div className="px-5 pt-5">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">Requests / sec</p>
              <p className="font-display text-3xl font-semibold text-ink">1,284</p>
            </div>
            <div className="flex items-center gap-1 font-mono text-xs text-brand-green">
              <Activity className="h-3.5 w-3.5" /> +12.4%
            </div>
          </div>

          <svg viewBox="0 0 320 84" className="mt-4 h-24 w-full" fill="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#4C7CFF" stopOpacity="0.35" />
                <stop offset="1" stopColor="#4C7CFF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="chartStroke" x1="0" y1="0" x2="320" y2="0">
                <stop offset="0" stopColor="#4C7CFF" />
                <stop offset="1" stopColor="#9B5CFF" />
              </linearGradient>
            </defs>
            <motion.path
              d={`${CHART_PATH} L320,84 L0,84 Z`}
              fill="url(#chartFill)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            <motion.path
              d={CHART_PATH}
              stroke="url(#chartStroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-px border-t border-border-soft bg-border-soft">
          {[
            { label: 'Latency', value: '84ms', icon: Gauge },
            { label: 'GPU Util', value: '62%', icon: Cpu },
            { label: 'Drift', value: '0.02', icon: Wifi },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex flex-col gap-1 bg-surface-raised px-4 py-4">
              <div className="flex items-center gap-1.5 text-ink-faint">
                <Icon className="h-3 w-3" />
                <span className="font-mono text-[10px] uppercase tracking-wide">{label}</span>
              </div>
              <span className="font-display text-lg font-semibold text-ink">{value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="glass-card absolute -left-10 -top-8 z-20 hidden flex-col gap-1 px-4 py-3 shadow-card sm:flex animate-float"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">Uptime</span>
        <span className="font-display text-xl font-semibold text-brand-green">99.99%</span>
      </motion.div>

      <motion.div
        className="glass-card absolute -bottom-8 -right-6 z-20 hidden flex-col gap-1 px-4 py-3 shadow-card sm:flex animate-float [animation-delay:-2.5s]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">GPU Usage</span>
        <span className="font-display text-xl font-semibold text-brand-cyan">62%</span>
      </motion.div>

      <motion.div
        className="glass-card absolute -right-8 top-1/3 z-20 hidden flex-col gap-1 px-4 py-3 shadow-card md:flex animate-float-sm [animation-delay:-1s]"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">Latency</span>
        <span className="font-display text-xl font-semibold text-brand-blue">84ms</span>
      </motion.div>
    </div>
  );
}
