import ProductHero from '../sections/product/ProductHero';
import OneCommandDeploy from '../sections/home/OneCommandDeploy';
import AutoscalingSection from '../sections/product/AutoscalingSection';
import VersioningSection from '../sections/product/VersioningSection';
import MonitoringSection from '../sections/product/MonitoringSection';
import FrameworkSection from '../sections/product/FrameworkSection';

export default function Product() {
  return (
    <>
      <ProductHero />
      <OneCommandDeploy />
      <AutoscalingSection />
      <VersioningSection />
      <MonitoringSection />
      <FrameworkSection />
    </>
  );
}
