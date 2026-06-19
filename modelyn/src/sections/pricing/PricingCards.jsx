import { useState } from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import PricingToggle from '../../components/ui/PricingToggle';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Reveal from '../../components/ui/Reveal';
import { pricingPlans } from '../../data/pricing';

export default function PricingCards() {
  const [billing, setBilling] = useState('monthly');

  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mb-10 flex justify-center">
          <PricingToggle value={billing} onChange={setBilling} />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.07}>
              <motion.div
                className={clsx(
                  'glass-card relative flex h-full flex-col p-8',
                  plan.popular && 'shadow-glow ring-1 ring-brand-violet/40'
                )}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge tone="violet">Most popular</Badge>
                  </span>
                )}

                <div className="mb-6 flex flex-col gap-2">
                  <h2 className="font-display text-xl font-semibold text-ink">{plan.name}</h2>
                  <p className="text-sm text-ink-muted">{plan.tagline}</p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  {plan.monthly === null ? (
                    <span className="font-display text-3xl font-semibold text-ink">Custom</span>
                  ) : (
                    <>
                      <span className="font-display text-[2.5rem] font-semibold leading-none text-ink">
                        ${billing === 'annual' ? plan.annual : plan.monthly}
                      </span>
                      <span className="text-sm text-ink-faint">/month</span>
                    </>
                  )}
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  to="/waitlist"
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
