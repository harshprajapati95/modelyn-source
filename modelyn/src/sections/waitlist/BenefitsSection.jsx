import * as Icons from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import { StaggerGroup, StaggerItem } from '../../components/ui/Stagger';
import { earlyAccessBenefits } from '../../data/roadmap';

export default function BenefitsSection() {
  return (
    <section className="section-py relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Why join early"
          title="What you get as an early access team."
          className="mb-12"
        />
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {earlyAccessBenefits.map((b) => {
            const Icon = Icons[b.icon] ?? Icons.Star;
            return (
              <StaggerItem key={b.title}>
                <div className="glass-card flex gap-5 p-6 h-full">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-violet/15 text-brand-violet">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold text-ink">{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{b.description}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
