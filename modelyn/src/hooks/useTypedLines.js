import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Types out an array of { text, delayAfter } lines character by character,
 * only once it first scrolls into view, then loops after a pause.
 */
export function useTypedLines(lines, { speed = 18, loop = true, loopDelay = 3200 } = {}) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.4 });
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (inView) started.current = true;
  }, [inView]);

  useEffect(() => {
    if (!started.current) return undefined;

    if (lineIndex >= lines.length) {
      if (!loop) {
        setDone(true);
        return undefined;
      }
      const t = window.setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, loopDelay);
      return () => window.clearTimeout(t);
    }

    const current = lines[lineIndex];
    if (charIndex < current.text.length) {
      const t = window.setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, current.delayAfter ?? 350);
    return () => window.clearTimeout(t);
  }, [charIndex, lineIndex, lines, loop, loopDelay, speed, started.current]);

  const renderedLines = lines.slice(0, lineIndex).map((l) => l.text);
  if (lineIndex < lines.length) {
    renderedLines.push(lines[lineIndex].text.slice(0, charIndex));
  }

  const isTypingCurrent = lineIndex < lines.length;

  return { containerRef: ref, renderedLines, isTypingCurrent, done, inView };
}
