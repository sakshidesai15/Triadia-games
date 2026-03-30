import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assests/triadia-logo.jpeg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Triadia', path: '/about' },
  { name: 'Governance', path: '/governance' },
  { name: 'Membership & Athletes', path: '/membership-athletes' },
  { name: 'Games & Competitions', path: '/competitions' },
  { name: 'Integrity & Transparency', path: '/integrity' },
  { name: 'Dispute Resolution', path: '/dispute' },
  { name: 'Media', path: '/media' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-primary/95 backdrop-blur-lg py-2 shadow-[0_10px_28px_-16px_rgba(0,0,0,0.6)]'
        : 'bg-primary py-4'
    } text-white border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-white p-1.5 rounded-full shadow-md ring-1 ring-white/50 transition-transform duration-300 group-hover:rotate-2">
              <img
                src={logo}
                alt="Triadia logo"
                className="w-11 h-11 rounded-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <div className="text-xl sm:text-2xl font-black tracking-[0.06em] uppercase text-white">
                Triadia
              </div>
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                Federation Games
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                  location.pathname === link.path ? 'text-secondary' : 'text-white/80 hover:text-secondary'
                } after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-secondary after:origin-left after:scale-x-0 after:transition-transform after:duration-300 ${
                  location.pathname === link.path ? 'after:scale-x-100' : 'hover:after:scale-x-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-secondary/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium hover:bg-white/5 hover:text-secondary transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
