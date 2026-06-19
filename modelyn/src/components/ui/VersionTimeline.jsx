import clsx from 'clsx';
import { RotateCcw } from 'lucide-react';
import Reveal from './Reveal';
import Badge from './Badge';

const tagTone = {
  New: 'blue',
  Improved: 'cyan',
  Fixed: 'green',
};

export default function VersionTimeline({ items, className, onAction }) {
  return (
    <div className={clsx('relative flex flex-col', className)}>
      <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border" aria-hidden="true" />

      {items.map((item, i) => (
        <Reveal key={item.id ?? i} delay={i * 0.06} className="relative">
          <div className="flex gap-5 pb-10 last:pb-0">
            <div className="relative z-10 flex w-3.5 shrink-0 justify-center pt-1.5">
              <span
                className={clsx(
                  'h-3.5 w-3.5 rounded-full border-2',
                  item.active
                    ? 'border-brand-cyan bg-brand-cyan shadow-glow-cyan'
                    : 'border-border-strong bg-surface'
                )}
              />
            </div>

            <div className="flex-1 pb-1">
              <div className="mb-2 flex flex-wrap items-center gap-2.5">
                {item.marker && (
                  <span className="font-mono text-xs font-medium text-ink-faint">{item.marker}</span>
                )}
                {item.tag && <Badge tone={tagTone[item.tag] ?? 'neutral'}>{item.tag}</Badge>}
                {item.active && <Badge tone="cyan" dot>Live</Badge>}
              </div>

              <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>

              {item.description && (
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-muted">{item.description}</p>
              )}

              {item.items && (
                <ul className="mt-3 flex flex-col gap-1.5">
                  {item.items.map((line) => (
                    <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                      {line}
                    </li>
                  ))}
                </ul>
              )}

              {!item.active && item.rollback && (
                <button
                  onClick={() => onAction?.(item)}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-mono text-[11px] text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
                >
                  <RotateCcw className="h-3 w-3" /> Roll back to this version
                </button>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
