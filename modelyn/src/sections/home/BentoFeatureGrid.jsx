import * as Icons from 'lucide-react';
import clsx from 'clsx';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import FeatureVisual from '../../components/ui/FeatureVisual';
import { bentoFeatures } from '../../data/features';

const accentText = {
  blue: 'text-brand-blue bg-brand-blue/10',
  violet: 'text-brand-violet bg-brand-violet/10',
  cyan: 'text-brand-cyan bg-brand-cyan/10',
  rose: 'text-brand-rose bg-brand-rose/10',
  green: 'text-brand-green bg-brand-green/10',
  amber: 'text-brand-amber bg-brand-amber/10',
};

export default function BentoFeatureGrid() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Platform"
          title="Everything an MLOps team would build you, already built."
          description="Modelyn bundles the infrastructure work most teams spend months building in-house into a single managed platform."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:auto-rows-[200px] lg:grid-flow-dense lg:grid-cols-4">
          {bentoFeatures.map((feature, i) => {
            const Icon = Icons[feature.icon] ?? Icons.Sparkles;
            return (
              <div key={feature.id} className={clsx(feature.span)}>
                <Card
                  hover
                  className="group flex h-full flex-col justify-between gap-5 p-6 transition-colors hover:border-border-strong"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="flex flex-col gap-4">
                    <span
                      className={clsx(
                        'inline-flex h-10 w-10 items-center justify-center rounded-xl',
                        accentText[feature.accent]
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.description}</p>
                    </div>
                  </div>
                  <FeatureVisual visual={feature.visual} accent={feature.accent} className="mt-auto" />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
