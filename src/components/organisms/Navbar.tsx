import { Phone } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { useBooking } from '../../context/BookingContext';

export const Navbar = () => {
  const { openBookingModal } = useBooking();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
          <span className="text-2xl font-bold tracking-tight">Logo</span>
        </Link>

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
        </div>

        <Button 
          variant="primary" 
          icon={<Phone size={18} />} 
          className="hidden sm:flex"
          onClick={openBookingModal}
        >
          Book a Call
        </Button>
      </div>
    </nav>
  );
};
