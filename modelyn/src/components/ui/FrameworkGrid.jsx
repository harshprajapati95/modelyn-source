import { StaggerGroup, StaggerItem } from './Stagger';

export default function FrameworkGrid({ frameworks, className }) {
  return (
    <StaggerGroup className={className ?? 'grid grid-cols-2 gap-4 sm:grid-cols-3'}>
      {frameworks.map((fw) => (
        <StaggerItem key={fw.id}>
          <div className="glass-card flex h-full flex-col gap-3 px-5 py-5 transition-colors hover:border-border-strong">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 font-mono text-sm font-semibold text-ink">
              {fw.mono}
            </span>
            <div>
              <p className="font-display text-[15px] font-semibold text-ink">{fw.name}</p>
              <p className="mt-0.5 text-sm text-ink-muted">{fw.note}</p>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
