import DocsHero from '../sections/docs/DocsHero';
import QuickstartSection from '../sections/docs/QuickstartSection';
import ApiSection from '../sections/docs/ApiSection';
import CliSection from '../sections/docs/CliSection';
import FrameworkSection from '../sections/product/FrameworkSection';
import StatusSection from '../sections/docs/StatusSection';

export default function Docs() {
  return (
    <>
      <DocsHero />
      <QuickstartSection />
      <ApiSection />
      <CliSection />
      <FrameworkSection />
      <StatusSection />
    </>
  );
}
