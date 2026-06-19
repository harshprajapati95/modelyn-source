import SectionHeading from '../../components/ui/SectionHeading';
import CodeBlock from '../../components/ui/CodeBlock';
import Badge from '../../components/ui/Badge';
import Reveal from '../../components/ui/Reveal';
import { apiExamples } from '../../data/docs';

const methodTone = { GET: 'green', POST: 'blue', PUT: 'cyan', DELETE: 'neutral' };

export default function ApiSection() {
  return (
    <section id="api-reference" className="section-py relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="REST API"
          align="left"
          title="Programmatic control over every endpoint."
          description="The full Modelyn REST API lets you deploy, predict, roll back, and monitor from any language or CI system."
          className="mb-12"
        />
        <div className="flex flex-col gap-8">
          {apiExamples.map((ex, i) => (
            <Reveal key={ex.id} delay={i * 0.07}>
              <div className="glass-card overflow-hidden">
                <div className="flex flex-wrap items-start gap-3 border-b border-border-soft px-6 py-5">
                  <Badge tone={methodTone[ex.method] ?? 'neutral'}>{ex.method}</Badge>
                  <code className="font-mono text-sm text-ink-muted">{ex.path}</code>
                  <span className="ml-auto text-sm text-ink-muted">{ex.description}</span>
                </div>
                <div className="p-4">
                  <CodeBlock code={ex.code} showDots={false} showCopy language="bash" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
