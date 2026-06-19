import PricingHero from '../sections/pricing/PricingHero';
import PricingCards from '../sections/pricing/PricingCards';
import FeatureMatrix from '../sections/pricing/FeatureMatrix';
import ComputeSection from '../sections/pricing/ComputeSection';
import PricingFAQ from '../sections/pricing/PricingFAQ';
import FinalCTA from '../sections/home/FinalCTA';

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <FeatureMatrix />
      <ComputeSection />
      <PricingFAQ />
      <FinalCTA />
    </>
  );
}
