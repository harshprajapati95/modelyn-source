import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { navLinks } from '../../data/navigation';

const overlayVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function MobileMenu({ open, onClose, currentPath }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-void/98 backdrop-blur-2xl"
          variants={overlayVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="container-px flex h-16 items-center justify-between">
            <Logo />
            <button onClick={onClose} aria-label="Close menu" className="rounded-full p-2 text-ink">
              <X className="h-6 w-6" />
            </button>
          </div>

          <motion.div
            className="container-px flex flex-1 flex-col justify-center gap-2"
            variants={listVariants}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((link) => (
              <motion.div key={link.to} variants={itemVariants}>
                <NavLink
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block py-3 font-display text-3xl font-semibold tracking-tight transition-colors ${
                      isActive || currentPath === link.to ? 'text-gradient' : 'text-ink hover:text-ink-muted'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="container-px mb-12 flex flex-col gap-3" variants={itemVariants} initial="hidden" animate="show">
            <Button to="/waitlist" onClick={onClose} variant="primary" size="lg" className="w-full">
              Request Early Access
            </Button>
            <Button to="/docs" onClick={onClose} variant="secondary" size="lg" className="w-full">
              View Docs
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
