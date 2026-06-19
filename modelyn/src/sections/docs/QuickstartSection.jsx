import { useState } from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import CodeBlock from '../../components/ui/CodeBlock';
import Reveal from '../../components/ui/Reveal';
import { quickstartSteps, installCommands } from '../../data/docs';
import clsx from 'clsx';

const TABS = ['pip', 'npm', 'curl'];

export default function QuickstartSection() {
  const [installTab, setInstallTab] = useState('pip');

  return (
    <section id="quickstart" className="section-py relative">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Quickstart"
          title="Up and running in four steps."
          className="mb-14"
        />

        <div className="mb-10">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-wide text-ink-faint">Install</p>
          <div className="mb-4 inline-flex gap-1 rounded-xl border border-border bg-white/[0.03] p-1.5">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setInstallTab(tab)}
                className={clsx(
                  'rounded-lg px-4 py-2 font-mono text-xs transition-colors',
                  installTab === tab ? 'bg-white/[0.06] text-ink' : 'text-ink-muted hover:text-ink'
                )}
              >
                {tab}
              </button>
            ))}
          </div>
          <CodeBlock code={installCommands[installTab]} prompt showDots={false} showCopy />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {quickstartSteps.map((step) => (
            <Reveal key={step.id} delay={step.id * 0.06}>
              <div className="glass-card flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 font-mono text-sm font-semibold text-brand-blue">
                    {step.id}
                  </span>
                  <h3 className="font-display text-[15px] font-semibold text-ink">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
                <CodeBlock code={step.command} prompt showDots={false} showCopy />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
