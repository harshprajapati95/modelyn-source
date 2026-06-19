import Reveal from '../../components/ui/Reveal';
import WaitlistForm from '../../components/ui/WaitlistForm';
import { MeshBackdrop } from '../../components/ui/Backdrop';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <MeshBackdrop variant="cta" />
      <div className="container-px relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Ship models, not infrastructure.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="max-w-xl text-base text-ink-muted md:text-lg">
            Join the early access waitlist and get your first model into production before your
            Kubernetes cluster would have finished provisioning.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="mt-2 w-full max-w-md">
          <WaitlistForm variant="compact" />
        </Reveal>
      </div>
    </section>
  );
}
