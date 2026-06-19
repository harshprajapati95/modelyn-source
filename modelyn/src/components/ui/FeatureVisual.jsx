import { motion } from 'framer-motion';

const accentHex = {
  blue: '#4C7CFF',
  violet: '#9B5CFF',
  cyan: '#27D9D2',
  rose: '#FB7299',
  green: '#3DDC97',
  amber: '#F2B84B',
};

function TerminalVisual({ color }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-soft bg-void/60 px-4 py-3 font-mono text-[12px] leading-6">
      <p className="text-ink-muted">
        <span style={{ color }}>$</span> modelyn deploy model.pkl
      </p>
      <p className="text-brand-green">✓ Allocating GPU…</p>
      <p className="text-brand-green">✓ Deployment successful.</p>
      <p className="text-ink-faint">https://api.modelyn.ai/v1/predict</p>
    </div>
  );
}

function ScaleVisual({ color }) {
  const bars = [22, 34, 18, 46, 30, 58, 40];
  return (
    <div className="flex h-20 items-end gap-2 px-2">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="flex-1 rounded-t-md"
          style={{ background: `linear-gradient(to top, ${color}55, ${color})` }}
          initial={{ height: 6 }}
          whileInView={{ height: h }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}

function GpuVisual({ color }) {
  const cells = Array.from({ length: 12 });
  return (
    <div className="grid grid-cols-4 gap-2 px-1">
      {cells.map((_, i) => (
        <motion.div
          key={i}
          className="aspect-square rounded-md border"
          style={{ borderColor: `${color}40`, background: i % 3 === 0 ? `${color}33` : 'rgba(255,255,255,0.03)' }}
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: i % 3 === 0 ? 1 : 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.04 }}
        />
      ))}
    </div>
  );
}

function DriftVisual({ color }) {
  return (
    <svg viewBox="0 0 220 110" className="h-28 w-full" fill="none">
      <path d="M0,70 Q40,68 60,66 T120,64" stroke="#5C6680" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      <motion.path
        d="M0,70 Q40,68 60,66 Q90,64 120,64 Q150,64 170,40 Q190,20 220,14"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <circle cx="120" cy="64" r="4" fill={color} />
      <text x="128" y="58" fill="#FB7299" fontSize="10" fontFamily="monospace">
        drift detected
      </text>
    </svg>
  );
}

function VersionsVisual({ color }) {
  const rows = [
    { tag: 'v14', active: true },
    { tag: 'v13', active: false },
    { tag: 'v12', active: false },
  ];
  return (
    <div className="flex flex-col gap-2 px-1">
      {rows.map((r) => (
        <div
          key={r.tag}
          className="flex items-center justify-between rounded-lg border border-border-soft px-3 py-2"
          style={r.active ? { borderColor: `${color}50`, background: `${color}14` } : undefined}
        >
          <span className="font-mono text-xs text-ink-muted">{r.tag}</span>
          {r.active ? (
            <span className="font-mono text-[10px] uppercase tracking-wide" style={{ color }}>
              live
            </span>
          ) : (
            <span className="font-mono text-[10px] text-ink-faint">rollback</span>
          )}
        </div>
      ))}
    </div>
  );
}

function CostVisual({ color }) {
  const segments = [
    { label: 'Compute', value: 62 },
    { label: 'Storage', value: 23 },
    { label: 'Egress', value: 15 },
  ];
  return (
    <div className="flex flex-col gap-2.5 px-1">
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-white/[0.04]">
        <motion.span
          className="h-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: '62%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
        <motion.span
          className="h-full"
          style={{ background: `${color}99` }}
          initial={{ width: 0 }}
          whileInView={{ width: '23%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        />
        <motion.span
          className="h-full"
          style={{ background: `${color}55` }}
          initial={{ width: 0 }}
          whileInView={{ width: '15%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-ink-faint">
        {segments.map((s) => (
          <span key={s.label}>
            {s.label} {s.value}%
          </span>
        ))}
      </div>
    </div>
  );
}

const VISUALS = {
  terminal: TerminalVisual,
  scale: ScaleVisual,
  gpu: GpuVisual,
  drift: DriftVisual,
  versions: VersionsVisual,
  cost: CostVisual,
};

export default function FeatureVisual({ visual, accent = 'blue', className }) {
  const Visual = VISUALS[visual];
  if (!Visual) return null;
  return <div className={className}>{Visual({ color: accentHex[accent] ?? accentHex.blue })}</div>;
}
