import WaitlistHero from '../sections/waitlist/WaitlistHero';
import BenefitsSection from '../sections/waitlist/BenefitsSection';
import RoadmapSection from '../sections/waitlist/RoadmapSection';
import WaitlistFAQ from '../sections/waitlist/WaitlistFAQ';

export default function Waitlist() {
  return (
    <>
      <WaitlistHero />
      <BenefitsSection />
      <RoadmapSection />
      <WaitlistFAQ />
    </>
  );
}
