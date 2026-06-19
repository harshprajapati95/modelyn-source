import SectionHeading from '../../components/ui/SectionHeading';
import VersionTimeline from '../../components/ui/VersionTimeline';

const versions = [
  { id: 'v14', marker: 'v14  ·  Today', title: 'fraud-detector-prod', description: 'New quantized model with 2× throughput. Deployed 2 minutes ago.', active: true },
  { id: 'v13', marker: 'v13  ·  2 days ago', title: 'Previous stable build', description: 'Model retrained on last quarter\'s labeled data.', rollback: true },
  { id: 'v12', marker: 'v12  ·  1 week ago', title: 'Baseline checkpoint', description: 'First production version, established baseline metrics.', rollback: true },
];

export default function VersioningSection() {
  return (
    <section className="section-py relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <SectionHeading
            align="left"
            eyebrow="Versioning"
            title="Every deploy is a rollback target."
            description="Modelyn assigns an immutable version tag to every deployment. If a new model regresses on key metrics, rolling back to the last known-good version takes one click — no CI re-run required."
          />
          <VersionTimeline items={versions} />
        </div>
      </div>
    </section>
  );
}
