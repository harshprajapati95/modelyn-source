import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import clsx from 'clsx';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { navLinks } from '../../data/navigation';
import { useScrolled } from '../../hooks/useScrolled';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const scrolled = useScrolled(12);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled ? 'border-b border-border bg-void/70 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
        )}
      >
        <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  clsx(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button to="/waitlist" variant="primary" size="sm">
              Request Access
            </Button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} currentPath={location.pathname} />
    </>
  );
}
