import SectionHeading from '../../components/ui/SectionHeading';
import StatusList from '../../components/ui/StatusList';
import { statusServices } from '../../data/docs';
import Reveal from '../../components/ui/Reveal';

export default function StatusSection() {
  return (
    <section className="section-py relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Service status"
          title="Current system status"
          description="Real-time operational status for every Modelyn service."
          className="mb-10"
        />
        <Reveal>
          <StatusList services={statusServices} />
        </Reveal>
        <p className="mt-4 text-center text-sm text-ink-faint">Last updated just now. Subscribe to status updates at status.modelyn.ai.</p>
      </div>
    </section>
  );
}
