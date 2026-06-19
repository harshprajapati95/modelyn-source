import Badge from '../components/ui/Badge';
import Reveal from '../components/ui/Reveal';
import { MeshBackdrop } from '../components/ui/Backdrop';
import { changelogEntries } from '../data/changelog';

const tagTone = { New: 'blue', Improved: 'cyan', Fixed: 'green' };

export default function Changelog() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-12 sm:pt-24">
        <MeshBackdrop />
        <div className="container-px relative mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Reveal><Badge tone="neutral">Changelog</Badge></Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              What's new in <span className="text-gradient">Modelyn</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-ink-muted">
              Every release, every fix, every improvement — in chronological order.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-py">
        <div className="container-px mx-auto max-w-3xl">
          <div className="relative flex flex-col">
            <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border" aria-hidden="true" />

            {changelogEntries.map((entry, i) => (
              <Reveal key={entry.version} delay={i * 0.07} className="relative pb-12 last:pb-0">
                <div className="flex gap-5">
                  <div className="relative z-10 flex w-3.5 shrink-0 justify-center pt-1.5">
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-brand-blue bg-surface" />
                  </div>

                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-ink-faint">{entry.date}</span>
                      <Badge tone={tagTone[entry.tag] ?? 'neutral'}>{entry.tag}</Badge>
                      <span className="font-mono text-sm font-semibold text-ink">{entry.version}</span>
                    </div>

                    <h2 className="mb-3 font-display text-xl font-semibold text-ink">{entry.title}</h2>

                    <ul className="flex flex-col gap-2.5">
                      {entry.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
