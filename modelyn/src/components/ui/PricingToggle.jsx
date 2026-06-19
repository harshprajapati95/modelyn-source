import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function PricingToggle({ value, onChange, className }) {
  const isAnnual = value === 'annual';
  return (
    <div className={clsx('inline-flex items-center gap-3 rounded-full border border-border bg-white/[0.03] p-1.5', className)}>
      {['monthly', 'annual'].map((option) => {
        const active = value === option;
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={clsx(
              'relative rounded-full px-5 py-2 text-sm font-medium transition-colors',
              active ? 'text-void' : 'text-ink-muted hover:text-ink'
            )}
          >
            {active && (
              <motion.span
                layoutId="pricing-toggle-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10 capitalize">{option}</span>
          </button>
        );
      })}
      <span
        className={clsx(
          'mr-1 rounded-full bg-brand-green/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-brand-green transition-opacity',
          isAnnual ? 'opacity-100' : 'opacity-50'
        )}
      >
        Save 20%
      </span>
    </div>
  );
}
