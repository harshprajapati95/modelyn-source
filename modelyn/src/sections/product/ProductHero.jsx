import Badge from '../../components/ui/Badge';
import Reveal from '../../components/ui/Reveal';
import { MeshBackdrop } from '../../components/ui/Backdrop';

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-8 sm:pt-24">
      <MeshBackdrop />
      <div className="container-px relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <Reveal>
          <Badge tone="blue">Product</Badge>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Everything an ML platform team would build, <span className="text-gradient">already built.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-base text-ink-muted md:text-lg">
            From the first deploy command to the dashboard that watches your model in production,
            Modelyn covers the full lifecycle so your team can stay focused on the model, not the
            infrastructure underneath it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
