import clsx from 'clsx';

/**
 * Ambient gradient-mesh + grid background used behind hero / CTA sections.
 * Pure CSS, no canvas — kept lightweight for performance.
 */
export function MeshBackdrop({ className, variant = 'default' }) {
  return (
    <div className={clsx('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <div className="absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        className={clsx(
          'absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl animate-mesh-shift',
          variant === 'cta' ? 'bg-brand-violet/20' : 'bg-brand-blue/20'
        )}
      />
      <div className="absolute top-10 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand-violet/15 blur-3xl animate-mesh-shift [animation-delay:-6s]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[24rem] w-[24rem] rounded-full bg-brand-cyan/10 blur-3xl animate-mesh-shift [animation-delay:-11s]" />
      <div className="absolute inset-0 noise-layer mix-blend-overlay" />
    </div>
  );
}

export function Particles({ count = 18 }) {
  const items = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((_, i) => {
        const left = (i * 53.7) % 100;
        const top = (i * 31.3) % 100;
        const size = 2 + (i % 3);
        const delay = -(i % 7);
        const duration = 6 + (i % 5);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/40 animate-float"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity: 0.25 + (i % 4) * 0.1,
            }}
          />
        );
      })}
    </div>
  );
}
