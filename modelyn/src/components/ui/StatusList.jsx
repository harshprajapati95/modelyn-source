import clsx from 'clsx';

const statusStyles = {
  operational: { label: 'Operational', dot: 'bg-brand-green', text: 'text-brand-green' },
  degraded: { label: 'Degraded performance', dot: 'bg-brand-amber', text: 'text-brand-amber' },
  outage: { label: 'Outage', dot: 'bg-brand-rose', text: 'text-brand-rose' },
};

export default function StatusList({ services, className }) {
  return (
    <div className={clsx('glass-card divide-y divide-border-soft overflow-hidden', className)}>
      {services.map((s) => {
        const style = statusStyles[s.status] ?? statusStyles.operational;
        return (
          <div key={s.name} className="flex items-center justify-between px-6 py-4">
            <span className="text-sm font-medium text-ink">{s.name}</span>
            <span className={clsx('flex items-center gap-2 font-mono text-xs', style.text)}>
              <span className={clsx('relative flex h-2 w-2 rounded-full', style.dot)}>
                {s.status === 'operational' && (
                  <span className={clsx('absolute inline-flex h-full w-full animate-ping rounded-full opacity-60', style.dot)} />
                )}
              </span>
              {style.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
