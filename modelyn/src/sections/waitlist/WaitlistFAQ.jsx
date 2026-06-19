import SectionHeading from '../../components/ui/SectionHeading';
import FAQAccordion from '../../components/ui/FAQAccordion';
import { waitlistFaq } from '../../data/faq';

export default function WaitlistFAQ() {
  return (
    <section className="section-py relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions about early access." className="mb-10" />
        <FAQAccordion items={waitlistFaq} />
      </div>
    </section>
  );
}
