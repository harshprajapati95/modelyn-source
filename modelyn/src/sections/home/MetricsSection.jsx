import * as Icons from 'lucide-react';
import AnimatedCounter from '../../components/ui/AnimatedCounter';
import { StaggerGroup, StaggerItem } from '../../components/ui/Stagger';
import { metrics } from '../../data/metrics';

export default function MetricsSection() {
  return (
    <section className="relative border-y border-border-soft bg-white/[0.015] py-16 md:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <StaggerGroup className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {metrics.map((m) => {
            const Icon = Icons[m.icon] ?? Icons.Activity;
            return (
              <StaggerItem key={m.id} className="flex flex-col items-center gap-3 text-center">
                <Icon className="h-5 w-5 text-brand-cyan" />
                <AnimatedCounter
                  value={m.value}
                  decimals={m.decimals}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
                />
                <span className="max-w-[11rem] text-sm text-ink-muted">{m.label}</span>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
