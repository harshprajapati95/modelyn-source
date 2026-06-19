import Hero from '../sections/home/Hero';
import TrustedBy from '../sections/home/TrustedBy';
import OneCommandDeploy from '../sections/home/OneCommandDeploy';
import BentoFeatureGrid from '../sections/home/BentoFeatureGrid';
import MetricsSection from '../sections/home/MetricsSection';
import ComparisonSection from '../sections/home/ComparisonSection';
import FinalCTA from '../sections/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <OneCommandDeploy />
      <BentoFeatureGrid />
      <MetricsSection />
      <ComparisonSection />
      <FinalCTA />
    </>
  );
}
