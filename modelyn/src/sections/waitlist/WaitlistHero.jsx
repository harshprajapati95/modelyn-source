import { useState } from 'react';
import Badge from '../../components/ui/Badge';
import WaitlistForm from '../../components/ui/WaitlistForm';
import Reveal from '../../components/ui/Reveal';
import { MeshBackdrop, Particles } from '../../components/ui/Backdrop';
import { useLiveCounter } from '../../hooks/useLiveCounter';
import AnimatedCounter from '../../components/ui/AnimatedCounter';

export default function WaitlistHero({ onSuccess }) {
  const liveCount = useLiveCounter(4827);

  return (
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28">
      <MeshBackdrop />
      <Particles count={12} />
      <div className="container-px relative mx-auto flex max-w-2xl flex-col items-center gap-7 text-center">
        <Reveal>
          <Badge tone="cyan" dot>
            Early access open
          </Badge>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Request early access to Modelyn.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-base text-ink-muted">
            Join the teams already deploying ML models without MLOps. Early access includes
            full-feature Pro access, direct onboarding support, and locked-in pricing.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="w-full max-w-lg">
          <WaitlistForm variant="full" onSuccess={onSuccess} />
        </Reveal>

        <Reveal delay={0.18}>
          <div className="flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-5 py-2.5 font-mono text-sm text-ink-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
            </span>
            <span className="text-ink">{liveCount.toLocaleString()}</span> engineers on the waitlist
          </div>
        </Reveal>
      </div>
    </section>
  );
}
