import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, Loader2 } from 'lucide-react';
import clsx from 'clsx';
import { useCases } from '../../data/roadmap';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm({ variant = 'compact', className, onSuccess }) {
  const [email, setEmail] = useState('');
  const [useCase, setUseCase] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | error | success
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setShake(true);
      window.setTimeout(() => setShake(false), 420);
      return;
    }
    setStatus('submitting');
    window.setTimeout(() => {
      setStatus('success');
      onSuccess?.();
    }, 900);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={clsx('glass-card flex items-center gap-4 px-6 py-5', className)}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <div>
          <p className="font-medium text-ink">You're on the list.</p>
          <p className="text-sm text-ink-muted">We'll reach out at {email} as we open up early access.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={clsx('flex flex-col gap-3', className)}>
      <motion.div
        animate={shake ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
        transition={{ duration: 0.4 }}
        className={clsx(
          'flex flex-col gap-2 sm:flex-row',
          variant === 'full' && 'sm:flex-col'
        )}
      >
        <div className="flex flex-1 flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            placeholder="you@company.com"
            className={clsx(
              'h-12 flex-1 rounded-full border bg-white/[0.03] px-5 text-sm text-ink placeholder:text-ink-faint focus:bg-white/[0.05]',
              status === 'error' ? 'border-brand-rose/60' : 'border-border focus:border-brand-blue/50'
            )}
          />

          {variant === 'full' && (
            <div className="relative">
              <select
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                className="h-12 w-full appearance-none rounded-full border border-border bg-white/[0.03] px-5 pr-10 text-sm text-ink focus:border-brand-blue/50 sm:w-48"
              >
                <option value="">Use case</option>
                {useCases.map((u) => (
                  <option key={u} value={u} className="bg-surface-raised">
                    {u}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-base h-12 shrink-0 bg-gradient-to-r from-brand-blue to-brand-violet px-6 text-sm font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-70"
          >
            {status === 'submitting' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                Join Waitlist <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-2 text-sm text-brand-rose"
          >
            Enter a valid work or personal email to join the waitlist.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
