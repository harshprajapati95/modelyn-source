import SectionHeading from '../../components/ui/SectionHeading';
import Reveal from '../../components/ui/Reveal';
import { compute } from '../../data/pricing';

export default function ComputeSection() {
  return (
    <section className="section-py relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="How billing works"
          title="You pay for compute minutes, not seats."
          description={compute.description}
          className="mb-12"
        />
        <div className="overflow-hidden rounded-2xl border border-border">
          {compute.multipliers.map((m, i) => (
            <Reveal key={m.tier} delay={i * 0.06}>
              <div className={`flex items-center justify-between px-6 py-4 ${i !== 0 ? 'border-t border-border-soft' : ''}`}>
                <span className="text-sm text-ink-muted">{m.tier}</span>
                <span className="font-mono text-sm text-ink">{m.rate}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
