import SectionHeading from '../../components/ui/SectionHeading';
import MonitoringDashboard from '../../components/ui/MonitoringDashboard';
import Reveal from '../../components/ui/Reveal';

export default function MonitoringSection() {
  return (
    <section className="section-py relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal y={24}>
            <MonitoringDashboard />
          </Reveal>
          <SectionHeading
            align="left"
            eyebrow="Monitoring"
            title="Four dashboards, zero configuration."
            description="Latency percentiles, request throughput, drift score, and per-endpoint cost are instrumented out of the box the moment you deploy. No Prometheus setup, no Grafana templates, no data pipeline to maintain."
          />
        </div>
      </div>
    </section>
  );
}
