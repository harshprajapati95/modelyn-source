import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function CopyToast({ show, label = 'Copied to clipboard' }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.95 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-10 right-0 z-20 flex items-center gap-1.5 rounded-full border border-brand-green/30 bg-surface-raised px-3 py-1.5 font-mono text-[11px] text-brand-green shadow-card"
        >
          <Check className="h-3 w-3" />
          {label}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
