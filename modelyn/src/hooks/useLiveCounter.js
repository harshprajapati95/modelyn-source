import { useEffect, useRef, useState } from 'react';

/**
 * Fakes a slowly, irregularly incrementing live counter for the waitlist page.
 */
export function useLiveCounter(seed = 4827, { minMs = 4000, maxMs = 11000, step = [1, 3] } = {}) {
  const [count, setCount] = useState(seed);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const delta = Math.floor(Math.random() * (step[1] - step[0] + 1)) + step[0];
      setCount((c) => c + delta);
      const next = Math.floor(Math.random() * (maxMs - minMs)) + minMs;
      timeoutRef.current = window.setTimeout(tick, next);
    };
    timeoutRef.current = window.setTimeout(tick, Math.floor(Math.random() * (maxMs - minMs)) + minMs);
    return () => window.clearTimeout(timeoutRef.current);
  }, [maxMs, minMs, step]);

  return count;
}
