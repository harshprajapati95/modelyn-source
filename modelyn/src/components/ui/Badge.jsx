import clsx from 'clsx';

const tones = {
  neutral: 'text-ink-muted border-border bg-white/[0.03]',
  blue: 'text-brand-blue border-brand-blue/30 bg-brand-blue/10',
  violet: 'text-brand-violet border-brand-violet/30 bg-brand-violet/10',
  cyan: 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10',
  green: 'text-brand-green border-brand-green/30 bg-brand-green/10',
};

export default function Badge({ children, tone = 'neutral', dot = false, className }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em]',
        tones[tone],
        className
      )}
    >
      {dot && <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
      </span>}
      {children}
    </span>
  );
}
