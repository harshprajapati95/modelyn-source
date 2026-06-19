import Badge from '../../components/ui/Badge';
import Reveal from '../../components/ui/Reveal';
import { MeshBackdrop } from '../../components/ui/Backdrop';

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-8 sm:pt-24">
      <MeshBackdrop variant="cta" />
      <div className="container-px relative mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <Reveal><Badge tone="violet">Pricing</Badge></Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Pay for what you run. <span className="text-gradient">Nothing more.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-lg text-base text-ink-muted">
            Start free. Move to Pro when your models need autoscaling and drift detection.
            Contact us for dedicated capacity at scale.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
