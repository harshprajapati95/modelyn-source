import SectionHeading from '../../components/ui/SectionHeading';
import FAQAccordion from '../../components/ui/FAQAccordion';
import { pricingFaq } from '../../data/faq';

export default function PricingFAQ() {
  return (
    <section className="section-py relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Common questions." className="mb-10" />
        <FAQAccordion items={pricingFaq} />
      </div>
    </section>
  );
}
