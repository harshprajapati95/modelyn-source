import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Reveal({
  children,
  delay = 0,
  y = 22,
  duration = 0.6,
  once = true,
  className,
  as = 'div',
}) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.15 });
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
