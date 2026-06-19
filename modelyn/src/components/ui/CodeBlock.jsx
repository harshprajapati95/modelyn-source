import { Check, Copy } from 'lucide-react';
import clsx from 'clsx';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import CopyToast from './CopyToast';

const KEYWORDS = [
  'curl', 'modelyn', 'pip', 'npm', 'install', 'login', 'deploy', 'list', 'logs',
  'scale', 'rollback', 'metrics', 'sh', 'sudo', 'init', 'global', 'follow', 'min', 'max', 'to',
  'POST', 'GET', 'PUT', 'DELETE', 'Authorization', 'Bearer', 'true', 'false', 'null',
];

const TOKEN_TYPES = [
  { type: 'comment', regex: /^#.*/ },
  { type: 'string', regex: /^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/ },
  { type: 'variable', regex: /^\$[A-Za-z_][A-Za-z0-9_]*/ },
  { type: 'method', regex: /^\b(GET|POST|PUT|DELETE|PATCH)\b/ },
  { type: 'flag', regex: /^--?[a-zA-Z][\w-]*/ },
  { type: 'number', regex: /^\b\d+(\.\d+)?\b/ },
  { type: 'keyword', regex: new RegExp(`^\\b(${KEYWORDS.join('|')})\\b`) },
  { type: 'punct', regex: /^[{}[\]:,]/ },
  { type: 'path', regex: /^\/[\w./:-]+/ },
];

const COLOR_MAP = {
  comment: 'text-ink-faint italic',
  string: 'text-brand-green',
  variable: 'text-brand-amber',
  method: 'text-brand-cyan font-semibold',
  flag: 'text-brand-violet',
  number: 'text-brand-amber',
  keyword: 'text-brand-blue',
  punct: 'text-ink-muted',
  path: 'text-brand-cyan',
  plain: 'text-ink/90',
};

function tokenizeLine(line) {
  const tokens = [];
  let rest = line;
  let plainBuffer = '';

  const flushPlain = () => {
    if (plainBuffer) {
      tokens.push({ type: 'plain', text: plainBuffer });
      plainBuffer = '';
    }
  };

  while (rest.length > 0) {
    let matched = false;
    for (const { type, regex } of TOKEN_TYPES) {
      const m = regex.exec(rest);
      if (m && m[0].length > 0) {
        flushPlain();
        tokens.push({ type, text: m[0] });
        rest = rest.slice(m[0].length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      plainBuffer += rest[0];
      rest = rest.slice(1);
    }
  }
  flushPlain();
  return tokens;
}

function HighlightedLine({ line }) {
  const tokens = tokenizeLine(line);
  return (
    <>
      {tokens.map((t, i) => (
        <span key={i} className={COLOR_MAP[t.type] ?? COLOR_MAP.plain}>
          {t.text}
        </span>
      ))}
    </>
  );
}

export default function CodeBlock({
  code,
  language = 'bash',
  title,
  showCopy = true,
  showDots = true,
  showLineNumbers = false,
  prompt = false,
  className,
}) {
  const [copied, copy] = useCopyToClipboard();
  const lines = code.split('\n');

  return (
    <div className={clsx('glass-card overflow-hidden', className)}>
      {(title || showDots || showCopy) && (
        <div className="flex items-center justify-between border-b border-border-soft px-4 py-3">
          <div className="flex items-center gap-3">
            {showDots && (
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-rose/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-amber/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-green/70" />
              </div>
            )}
            {title && <span className="font-mono text-xs text-ink-faint">{title}</span>}
            {!title && language && (
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">{language}</span>
            )}
          </div>
          {showCopy && (
            <div className="relative">
              <CopyToast show={copied} />
              <button
                onClick={() => copy(code)}
                className="flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[11px] text-ink-muted transition-colors hover:bg-white/[0.06] hover:text-ink"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-brand-green" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          )}
        </div>
      )}
      <div className="overflow-x-auto px-5 py-4">
        <pre className="font-mono text-[13px] leading-relaxed">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex gap-3 whitespace-pre">
                {showLineNumbers && (
                  <span className="select-none text-ink-faint/60" style={{ width: '1.5rem', display: 'inline-block' }}>
                    {i + 1}
                  </span>
                )}
                {prompt && <span className="text-brand-cyan">$</span>}
                <HighlightedLine line={line} />
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
