import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Card({ children, className, hover = true, glow = false, as = 'div', ...props }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={clsx('glass-card relative', glow && 'shadow-glow', className)}
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </Tag>
  );
}
