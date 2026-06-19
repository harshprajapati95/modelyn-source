import SectionHeading from '../../components/ui/SectionHeading';
import CodeBlock from '../../components/ui/CodeBlock';
import { cliExamples } from '../../data/docs';

export default function CliSection() {
  const allCommands = cliExamples.map((c) => `# ${c.description}\n${c.command}`).join('\n\n');

  return (
    <section className="section-py relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="CLI reference"
          align="left"
          title="Everything you can do from the terminal."
          className="mb-10"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {cliExamples.map((ex) => (
            <div key={ex.command} className="glass-card flex flex-col gap-3 p-5">
              <p className="text-sm text-ink-muted">{ex.description}</p>
              <CodeBlock code={ex.command} prompt showDots={false} showCopy />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
