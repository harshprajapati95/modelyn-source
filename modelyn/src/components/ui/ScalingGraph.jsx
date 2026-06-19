import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TRAFFIC_PATH = 'M0,86 C30,84 45,80 60,70 C80,57 95,30 130,22 C165,14 190,18 220,16 C250,14 270,10 300,8';
const instanceBars = [1, 1, 2, 4, 7, 10, 13, 14];

export default function ScalingGraph({ className }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.35 });

  return (
    <div ref={ref} className={className}>
      <div className="flex items-center justify-between px-1 pb-4">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
          <span className="h-2 w-2 rounded-full bg-brand-blue" /> Incoming traffic
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
          <span className="h-2 w-2 rounded-full bg-brand-violet" /> Active instances
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-8 items-end gap-2.5 px-1" style={{ height: '11rem' }}>
          {instanceBars.map((n, i) => (
            <motion.div
              key={i}
              className="rounded-t-md bg-gradient-to-t from-brand-violet/20 to-brand-violet/70"
              initial={{ height: 4 }}
              animate={inView ? { height: `${(n / 14) * 100}%` } : { height: 4 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </div>

        <svg viewBox="0 0 300 96" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-[11rem] w-full px-1">
          <motion.path
            d={TRAFFIC_PATH}
            fill="none"
            stroke="#4C7CFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border-soft pt-5 sm:grid-cols-3">
        {[
          { label: 'Scale-out time', value: '~8 sec' },
          { label: 'Peak instances', value: '14' },
          { label: 'Scale-to-zero', value: 'after 5 min idle' },
        ].map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">{s.label}</span>
            <span className="font-display text-base font-semibold text-ink">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
