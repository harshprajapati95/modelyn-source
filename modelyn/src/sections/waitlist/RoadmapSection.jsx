import SectionHeading from '../../components/ui/SectionHeading';
import VersionTimeline from '../../components/ui/VersionTimeline';
import { roadmap } from '../../data/roadmap';

export default function RoadmapSection() {
  const timelineItems = roadmap.map((r) => ({
    id: r.id,
    marker: r.quarter,
    title: r.title,
    description: r.description,
    items: r.items,
    tag: 'New',
  }));

  return (
    <section className="section-py relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Roadmap"
          align="left"
          title="What's coming."
          description="Early access teams help shape the roadmap. Here's what we're building next."
          className="mb-12"
        />
        <VersionTimeline items={timelineItems} />
      </div>
    </section>
  );
}
