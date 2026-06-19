import { Boxes } from 'lucide-react';

export default function Marquee({ items, className }) {
  const doubled = [...items, ...items];
  return (
    <div className={`group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className ?? ''}`}>
      <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
        {doubled.map((name, i) => (
          <div key={`${name}-${i}`} className="flex shrink-0 items-center gap-2.5 text-ink-faint">
            <Boxes className="h-4 w-4" />
            <span className="font-display text-lg font-medium tracking-tight whitespace-nowrap">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
