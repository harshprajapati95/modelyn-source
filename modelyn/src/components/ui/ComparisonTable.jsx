import { Check, X } from 'lucide-react';
import Reveal from './Reveal';

export default function ComparisonTable({ rows, className }) {
  return (
    <div className={className}>
      <div className="hidden grid-cols-[1.1fr_1.4fr_1.4fr] gap-4 px-6 pb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint md:grid">
        <span>Capability</span>
        <span>Do it yourself</span>
        <span className="text-brand-cyan">Modelyn</span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border">
        {rows.map((row, i) => (
          <Reveal key={row.label} delay={i * 0.05}>
            <div
              className={`grid grid-cols-1 gap-4 border-border-soft bg-white/[0.015] px-6 py-5 md:grid-cols-[1.1fr_1.4fr_1.4fr] md:items-center ${
                i !== 0 ? 'border-t' : ''
              }`}
            >
              <span className="font-display text-sm font-semibold text-ink md:text-[15px]">{row.label}</span>

              <span className="flex items-start gap-2 text-sm text-ink-muted">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-brand-rose/70" />
                {row.diy}
              </span>

              <span className="flex items-start gap-2 rounded-xl bg-brand-cyan/[0.06] px-3 py-2 text-sm text-ink md:bg-transparent md:px-0 md:py-0">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                {row.modelyn}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
