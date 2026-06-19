import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function StaggerGroup({ children, className, once = true }) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
