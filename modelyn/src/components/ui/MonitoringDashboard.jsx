import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Gauge, Radar, Wallet } from 'lucide-react';
import clsx from 'clsx';

const TABS = [
  {
    id: 'latency',
    label: 'Latency',
    icon: Gauge,
    color: '#4C7CFF',
    path: 'M0,60 C20,58 30,50 45,46 C65,40 80,52 100,48 C125,43 140,20 165,18 C190,16 210,24 230,20 C250,16 270,22 300,14',
    stats: [
      { label: 'p50', value: '38ms' },
      { label: 'p95', value: '84ms' },
      { label: 'p99', value: '142ms' },
    ],
  },
  {
    id: 'throughput',
    label: 'Throughput',
    icon: Activity,
    color: '#27D9D2',
    path: 'M0,70 C25,66 35,30 60,28 C85,26 95,55 120,50 C145,45 155,18 180,16 C205,14 220,46 245,40 C265,36 280,20 300,18',
    stats: [
      { label: 'Requests / sec', value: '1,284' },
      { label: 'Peak today', value: '3,910' },
      { label: 'Error rate', value: '0.02%' },
    ],
  },
  {
    id: 'drift',
    label: 'Drift',
    icon: Radar,
    color: '#FB7299',
    path: 'M0,30 C30,32 45,34 60,33 C90,32 110,34 140,40 C170,46 190,60 220,64 C250,68 275,70 300,72',
    stats: [
      { label: 'Drift score', value: '0.02' },
      { label: 'Threshold', value: '0.15' },
      { label: 'Alerts (7d)', value: '0' },
    ],
  },
  {
    id: 'cost',
    label: 'Cost',
    icon: Wallet,
    color: '#F2B84B',
    path: 'M0,80 C30,76 50,70 75,62 C100,54 120,50 150,46 C180,42 200,38 230,30 C260,22 280,18 300,12',
    stats: [
      { label: 'This month', value: '$412' },
      { label: 'Per 1K predictions', value: '$0.018' },
      { label: 'vs. last month', value: '-12%' },
    ],
  },
];

export default function MonitoringDashboard({ className }) {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === active);

  return (
    <div className={clsx('glass-card overflow-hidden', className)}>
      <div className="flex flex-wrap gap-1.5 border-b border-border-soft p-2.5">
        {TABS.map((t) => {
          const Icon = t.icon;
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={clsx(
                'flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                isActive ? 'bg-white/[0.06] text-ink' : 'text-ink-muted hover:text-ink'
              )}
            >
              <Icon className="h-3.5 w-3.5" style={{ color: isActive ? t.color : undefined }} />
              {t.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="px-6 py-6"
        >
          <svg viewBox="0 0 300 84" preserveAspectRatio="none" className="h-32 w-full" fill="none">
            <defs>
              <linearGradient id={`fill-${tab.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={tab.color} stopOpacity="0.3" />
                <stop offset="1" stopColor={tab.color} stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d={`${tab.path} L300,84 L0,84 Z`}
              fill={`url(#fill-${tab.id})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.path
              d={tab.path}
              stroke={tab.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border-soft pt-5">
            {tab.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">{s.label}</span>
                <span className="font-display text-lg font-semibold text-ink">{s.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
