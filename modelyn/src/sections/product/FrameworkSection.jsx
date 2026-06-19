import SectionHeading from '../../components/ui/SectionHeading';
import FrameworkGrid from '../../components/ui/FrameworkGrid';
import { frameworks } from '../../data/frameworks';

export default function FrameworkSection() {
  return (
    <section className="section-py relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Framework compatibility"
          title="Bring your own model, whatever it runs on."
          description="Modelyn natively supports the most widely used ML runtimes. If your framework isn't listed, a custom inference entrypoint lets you deploy any Python callable as an endpoint."
          className="mb-12"
        />
        <FrameworkGrid frameworks={frameworks} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" />
      </div>
    </section>
  );
}
