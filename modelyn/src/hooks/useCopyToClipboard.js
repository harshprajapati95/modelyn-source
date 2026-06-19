import { useState, useCallback } from 'react';

export function useCopyToClipboard(resetDelay = 1800) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text) => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const el = document.createElement('textarea');
          el.value = text;
          el.style.position = 'fixed';
          el.style.opacity = '0';
          document.body.appendChild(el);
          el.focus();
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
        }
        setCopied(true);
        window.setTimeout(() => setCopied(false), resetDelay);
      } catch {
        setCopied(false);
      }
    },
    [resetDelay]
  );

  return [copied, copy];
}
