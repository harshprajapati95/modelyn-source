import Button from '../components/ui/Button';
import { MeshBackdrop } from '../components/ui/Backdrop';
import Reveal from '../components/ui/Reveal';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <MeshBackdrop />
      <div className="container-px relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <Reveal>
          <p className="font-mono text-7xl font-semibold text-brand-blue/30">404</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink">
            This page doesn't exist.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base text-ink-muted">
            The endpoint you're looking for may have been moved, renamed, or rolled back.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <Button to="/" variant="primary">Go home</Button>
        </Reveal>
      </div>
    </section>
  );
}
