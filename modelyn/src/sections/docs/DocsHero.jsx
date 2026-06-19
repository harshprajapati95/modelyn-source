import { BookOpen } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Reveal from '../../components/ui/Reveal';
import { MeshBackdrop } from '../../components/ui/Backdrop';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function DocsHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-24">
      <MeshBackdrop />
      <div className="container-px relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <Reveal><Badge tone="cyan"><BookOpen className="h-3 w-3" /> Documentation</Badge></Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Get from model file to <span className="text-gradient">live endpoint</span> in minutes.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-base text-ink-muted">
            Install the CLI, authenticate, and deploy. That's the full quickstart.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-wrap justify-center gap-3">
          <Button variant="primary" size="md" onClick={() => scrollTo('quickstart')}>
            Quickstart Guide
          </Button>
          <Button variant="secondary" size="md" onClick={() => scrollTo('api-reference')}>
            API Reference
          </Button>
        </Reveal>
      </div>
    </section>
  );
}