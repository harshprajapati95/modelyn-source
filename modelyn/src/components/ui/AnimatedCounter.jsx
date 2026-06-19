import CountUpModule from 'react-countup';
const CountUp = CountUpModule.default ?? CountUpModule;
import { useInView } from 'react-intersection-observer';

export default function AnimatedCounter({ value, decimals = 0, prefix = '', suffix = '', duration = 2, className }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp end={value} decimals={decimals} duration={duration} prefix={prefix} suffix={suffix} />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}