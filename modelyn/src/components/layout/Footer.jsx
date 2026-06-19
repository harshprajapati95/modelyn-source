import { ExternalLink } from 'lucide-react';
import Logo from '../ui/Logo';
import { footerLinks } from '../../data/navigation';

const iconMap = {};

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">{title}</span>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => {
          const Icon = iconMap[link.label];
          return (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {link.label}
                </a>
              ) : (
                <a href={link.to} className="text-sm text-ink-muted transition-colors hover:text-ink">
                  {link.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border-soft">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <Logo />
            <p className="text-sm leading-relaxed text-ink-muted">
              Deployment and monitoring infrastructure for machine learning models — without the MLOps team.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterColumn title="Product" links={footerLinks.product} />
            <FooterColumn title="Legal" links={footerLinks.legal} />
            <FooterColumn title="Resources" links={footerLinks.resources} />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-soft pt-8 text-xs text-ink-faint sm:flex-row">
          <span>© {new Date().getFullYear()} Modelyn, Inc. All rights reserved.</span>
          <span className="font-mono">Built for teams shipping models, not infrastructure.</span>
        </div>
      </div>
    </footer>
  );
}
