import { Phone, Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { useBooking } from '../../context/BookingContext';
import { useState, useEffect } from 'react';
import NavLogo from '../../assets/Logo.png';

export const Navbar = () => {
  const { openBookingModal } = useBooking();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { name: 'Reviews', href: '/reviews' },
  ];

  // 🔒 Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={NavLogo} alt="logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-secondary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Button
              variant="primary"
              icon={<Phone size={18} />}
              onClick={openBookingModal}
            >
              Book a Call
            </Button>
          </div>

          {/* Hamburger (Mobile Only) */}
          <button
            className="lg:hidden text-secondary z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Mobile Slide Down Menu */}
        <div
  className={`fixed top-20 left-0 w-full bg-white shadow-xl transition-all duration-500 ease-in-out lg:hidden z-40
  ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}
>

  
          <div className="flex flex-col items-center gap-8 py-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-semibold transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-secondary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

  <Button
  variant="primary"
  icon={<Phone size={18} />}
  className="w-3/4"
  onClick={() => {
    setIsOpen(false);
    openBookingModal();
  }}
>
  Book a Call
</Button>
        </div>
      </div>
    </>
  );
};