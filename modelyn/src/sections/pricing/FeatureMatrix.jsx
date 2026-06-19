import clsx from 'clsx';
import { Check, Minus } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import { featureMatrix } from '../../data/pricing';

function Cell({ value }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-brand-green" />;
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-ink-faint/40" />;
  return <span className="text-sm text-ink">{value}</span>;
}

export default function FeatureMatrix() {
  return (
    <section className="section-py relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Compare plans"
          title="Everything side by side."
          className="mb-12"
        />
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-soft">
                <th className="w-[40%] px-6 py-4 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                  Feature
                </th>
                {['Free', 'Pro', 'Scale'].map((h) => (
                  <th key={h} className="px-4 py-4 text-center font-display text-sm font-semibold text-ink">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureMatrix.map((row, i) => (
                <tr
                  key={row.feature}
                  className={clsx(i !== featureMatrix.length - 1 && 'border-b border-border-soft')}
                >
                  <td className="px-6 py-4 text-sm text-ink-muted">{row.feature}</td>
                  <td className="px-4 py-4 text-center"><Cell value={row.free} /></td>
                  <td className="px-4 py-4 text-center"><Cell value={row.pro} /></td>
                  <td className="px-4 py-4 text-center"><Cell value={row.scale} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
