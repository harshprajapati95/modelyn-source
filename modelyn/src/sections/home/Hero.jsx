import { FileCode2 } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import WaitlistForm from '../../components/ui/WaitlistForm';
import DashboardMockup from '../../components/ui/DashboardMockup';
import Reveal from '../../components/ui/Reveal';
import { MeshBackdrop, Particles } from '../../components/ui/Backdrop';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-28">
      <MeshBackdrop />
      <Particles count={14} />

      <div className="container-px relative mx-auto grid max-w-7xl gap-16 pb-24 md:pb-32 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <Badge tone="cyan" dot>
              Launching Soon
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[3.4rem]">
              Model deployment <span className="text-gradient">without the ops overhead.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
              Modelyn turns a single command into a production endpoint — autoscaling, GPU
              scheduling, monitoring, and drift detection included by default. No Kubernetes
              cluster required.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="w-full max-w-lg">
            <WaitlistForm variant="compact" />
          </Reveal>

          <Reveal delay={0.2}>
            <Button to="/docs" variant="ghost" icon={FileCode2} iconPosition="left" className="px-0">
              View Docs
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.15} as="div" y={32}>
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}
