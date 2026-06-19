import clsx from 'clsx';
import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  titleClassName,
}) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-1 w-1 rounded-full bg-brand-cyan" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={clsx(
            'font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.75rem]',
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className={clsx('max-w-2xl text-base text-ink-muted md:text-lg', align === 'center' && 'mx-auto')}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
