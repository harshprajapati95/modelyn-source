import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function Logo({ className, withWordmark = true, to = '/' }) {
  return (
    <Link to={to} className={clsx('group inline-flex items-center gap-2.5', className)}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="shrink-0">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#4C7CFF" />
            <stop offset="1" stopColor="#9B5CFF" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="#0E1426" />
        <rect width="32" height="32" rx="8" stroke="url(#logoGrad)" strokeOpacity="0.4" />
        <circle cx="9" cy="22" r="2.4" fill="#27D9D2" />
        <circle cx="16" cy="9" r="2.4" fill="url(#logoGrad)" />
        <circle cx="23" cy="22" r="2.4" fill="url(#logoGrad)" />
        <path d="M9 22L16 9L23 22" stroke="url(#logoGrad)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {withWordmark && (
        <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
          Modelyn
        </span>
      )}
    </Link>
  );
}
