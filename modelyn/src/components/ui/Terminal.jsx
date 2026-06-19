import { Check, Copy } from 'lucide-react';
import clsx from 'clsx';
import { useTypedLines } from '../../hooks/useTypedLines';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import CopyToast from './CopyToast';

const lineStyles = {
  command: 'text-ink',
  success: 'text-brand-green',
  info: 'text-ink-muted',
  link: 'text-brand-cyan',
  heading: 'text-ink-muted',
};

function renderLine(line, type) {
  if (type === 'command') {
    return (
      <>
        <span className="text-brand-cyan">$</span> {line}
      </>
    );
  }
  if (type === 'success') {
    return (
      <>
        <span className="text-brand-green">✓</span> {line}
      </>
    );
  }
  return line;
}

export default function Terminal({ title = 'bash', lines, copyText, className }) {
  const { containerRef, renderedLines, isTypingCurrent, inView } = useTypedLines(lines, { speed: 16, loopDelay: 4200 });
  const [copied, copy] = useCopyToClipboard();

  return (
    <div ref={containerRef} className={clsx('glass-card overflow-hidden shadow-glow', className)}>
      <div className="flex items-center justify-between border-b border-border-soft px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-rose/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-green/70" />
          </div>
          <span className="font-mono text-xs text-ink-faint">{title}</span>
        </div>
        {copyText && (
          <div className="relative">
            <CopyToast show={copied} label="Command copied" />
            <button
              onClick={() => copy(copyText)}
              className="flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[11px] text-ink-muted transition-colors hover:bg-white/[0.06] hover:text-ink"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-brand-green" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Copied' : 'Copy command'}
            </button>
          </div>
        )}
      </div>
      <div className="min-h-[15rem] px-5 py-5 font-mono text-[13px] leading-7 sm:text-sm">
        {renderedLines.map((text, i) => {
          const meta = lines[i] ?? lines[lines.length - 1];
          const isCurrent = i === renderedLines.length - 1 && isTypingCurrent;
          return (
            <div key={i} className={clsx(lineStyles[meta.type] ?? 'text-ink', 'min-h-[1.75rem]')}>
              {renderLine(text, meta.type)}
              {isCurrent && <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[2px] animate-blink bg-brand-cyan/80 align-middle" />}
            </div>
          );
        })}
        {!inView && <div className="text-ink-faint">{'\u00A0'}</div>}
      </div>
    </div>
  );
}
