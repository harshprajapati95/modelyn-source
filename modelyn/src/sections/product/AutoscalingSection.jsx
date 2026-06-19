import SectionHeading from '../../components/ui/SectionHeading';
import ScalingGraph from '../../components/ui/ScalingGraph';
import Reveal from '../../components/ui/Reveal';

export default function AutoscalingSection() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="Autoscaling"
            title="Scale to zero. Burst to hundreds. Automatically."
            description="Modelyn's autoscaler watches request rates in real time and provisions or tears down GPU instances as traffic demands. Set min and max bounds, and the platform handles everything in between."
          />
          <Reveal delay={0.1} y={24}>
            <ScalingGraph className="glass-card px-6 py-6" />
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { title: 'Scale-out time', value: '~8 seconds', description: 'From idle to first request handled on new GPU instances.' },
            { title: 'Scale-to-zero', value: 'Automatic', description: 'Endpoints sleeping at zero traffic cost nothing and wake on the next request.' },
            { title: 'Burst capacity', value: 'Unlimited', description: 'No hard pod limits — Modelyn acquires capacity on demand from the underlying pool.' },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="glass-card flex flex-col gap-2 p-6">
                <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">{item.title}</span>
                <span className="font-display text-2xl font-semibold text-ink">{item.value}</span>
                <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
