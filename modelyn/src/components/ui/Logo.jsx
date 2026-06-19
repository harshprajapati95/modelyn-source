import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function Logo({ className, withWordmark = true, to = '/' }) {
  return (
    <Link
      to={to}
      className={clsx('group inline-flex items-center gap-3', className)}
    >
      <img
        src="/Modelyn Logo.png"
        alt="Modelyn Logo"
        className="h-16 w-auto object-contain"
      />

      {/* {withWordmark && (
        <span className="font-display text-3xl font-bold tracking-tight text-ink">
          Modelyn
        </span>
      )} */}
    </Link>
  );
}