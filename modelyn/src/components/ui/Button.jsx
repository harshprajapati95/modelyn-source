import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const variants = {
  primary:
    'bg-gradient-to-r from-brand-blue to-brand-violet text-white shadow-glow hover:shadow-glow-violet',
  secondary: 'glass text-ink hover:bg-white/[0.06] hover:border-border-strong',
  ghost: 'text-ink-muted hover:text-ink bg-transparent',
};

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-[15px]',
};

const MotionLink = motion(Link);

const Button = forwardRef(function Button(
  { as = 'button', to, href, variant = 'primary', size = 'md', icon: Icon, iconPosition = 'right', className, children, ...props },
  ref
) {
  const classes = clsx(
    'btn-base relative overflow-hidden',
    variants[variant],
    sizes[size],
    className
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { y: 0, scale: 0.98 },
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="h-4 w-4" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="h-4 w-4" />}
    </>
  );

  if (to) {
    return (
      <MotionLink ref={ref} to={to} className={classes} {...motionProps} {...props}>
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button ref={ref} className={classes} {...motionProps} {...props}>
      {content}
    </motion.button>
  );
});

export default Button;
