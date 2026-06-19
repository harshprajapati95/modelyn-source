import { useParams } from 'react-router-dom';
import { FileText, ShieldCheck, Lock, FileCode2, Activity } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import StatusList from '../components/ui/StatusList';
import { statusServices } from '../data/docs';

const SLUG_MAP = {
  privacy: {
    title: 'Privacy Policy',
    description: "We're finalizing our privacy policy ahead of launch.",
    icon: ShieldCheck,
    tone: 'cyan',
  },
  terms: {
    title: 'Terms of Service',
    description: "We're finalizing our terms of service ahead of launch.",
    icon: FileText,
    tone: 'blue',
  },
  security: {
    title: 'Security',
    description: "We're finalizing our security disclosure policy ahead of launch.",
    icon: Lock,
    tone: 'violet',
  },
  dpa: {
    title: 'Data Processing Agreement',
    description: "We're finalizing our DPA ahead of launch.",
    icon: FileCode2,
    tone: 'green',
  },
  status: {
    title: 'System Status',
    description: 'Current operational status for all Modelyn services.',
    icon: Activity,
    tone: 'green',
    isStatus: true,
  },
};

export default function Legal() {
  const { slug } = useParams();
  const page = SLUG_MAP[slug] ?? {
    title: 'Not Found',
    description: 'This page does not exist.',
    icon: FileText,
  };

  const Icon = page.icon;

  return (
    <section className="section-py">
      <div className="container-px mx-auto max-w-3xl">
        <Reveal className="mb-10 flex flex-col items-center gap-5 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
            <Icon className="h-8 w-8" />
          </span>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">{page.title}</h1>
          <p className="max-w-sm text-ink-muted">{page.description}</p>
        </Reveal>

        {page.isStatus ? (
          <Reveal delay={0.1}>
            <StatusList services={statusServices} />
            <p className="mt-5 text-center text-sm text-ink-faint">
              Last checked just now. Subscribe for status updates at status.modelyn.ai.
            </p>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <div className="glass-card p-8 text-center">
              <p className="text-ink-muted">
                This document will be published before Modelyn's general availability launch.
              </p>
              <p className="mt-3 text-sm text-ink-faint">
                Questions in the meantime? Reach out at{' '}
                <a href="mailto:hello@modelyn.ai" className="text-brand-blue hover:underline">
                  hello@modelyn.ai
                </a>
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
