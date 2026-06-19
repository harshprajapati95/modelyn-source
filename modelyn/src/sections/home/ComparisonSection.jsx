import SectionHeading from '../../components/ui/SectionHeading';
import ComparisonTable from '../../components/ui/ComparisonTable';
import { comparisonRows } from '../../data/comparison';

export default function ComparisonSection() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Build vs. buy"
          title="What it actually takes to run ML in production"
          description="Most teams underestimate the platform work behind a single model endpoint. Here's what changes with Modelyn."
          className="mb-14"
        />
        <ComparisonTable rows={comparisonRows} />
      </div>
    </section>
  );
}
