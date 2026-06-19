import Marquee from '../../components/ui/Marquee';
import Reveal from '../../components/ui/Reveal';
import { trustedLogos } from '../../data/logos';

export default function TrustedBy() {
  return (
    <section className="relative border-y border-border-soft py-12">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
            Trusted by ML teams building on Modelyn
          </p>
        </Reveal>
        <Marquee items={trustedLogos} />
      </div>
    </section>
  );
}
