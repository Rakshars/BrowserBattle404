import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const deptLinks = [
  { label: 'Computer Science & Engg', href: '/departments#cse' },
  { label: 'Electronics & Communication', href: '/departments#ece' },
  { label: 'Mechanical Engineering', href: '/departments#mech' },
  { label: 'Civil Engineering', href: '/departments#civil' },
  { label: 'Electrical Engineering', href: '/departments#eee' },
  { label: 'Information Science', href: '/departments#ise' },
  { label: 'Biotechnology', href: '/departments#bio' },
  { label: 'Chemical Engineering', href: '/departments#chem' },
];

const academicLinks = [
  { label: 'Undergraduate Programs', href: '/academics#ug' },
  { label: 'Postgraduate Programs', href: '/academics#pg' },
  { label: 'PhD Programs', href: '/academics#phd' },
  { label: 'Online Courses', href: '/academics#online' },
  { label: 'Academic Calendar', href: '/academics#calendar' },
  { label: 'Examination Cell', href: '/academics#exam' },
];

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Departments', href: '/departments', dropdown: deptLinks },
  { label: 'Academics', href: '/academics', dropdown: academicLinks },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Placements', href: '/placements' },
  { label: 'Research', href: '/research' },
  { label: 'Campus Life', href: '/campus-life' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#003366]/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/5'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/bms-logo.png" alt="BMSCE Logo" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 bg-white rounded-full p-1" />
              <div className="hidden sm:block">
                <div className="text-white font-serif text-lg font-semibold leading-none">BMSCE</div>
                <div className="text-[#D32F2F] text-[10px] tracking-[0.2em] font-mono">ENGINEERING</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${isActive(item.href)
                        ? 'text-[#D32F2F]'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-[#004080]/95 backdrop-blur-xl 
                                   border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/40"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block px-4 py-2.5 text-sm text-white/70 hover:text-[#D32F2F] 
                                       hover:bg-white/5 transition-all duration-150 border-b border-white/5 last:border-0"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                to="/admissions"
                className="ml-3 bg-[#D32F2F] text-[#003366] font-semibold text-sm px-5 py-2.5 rounded-full
                           hover:bg-[#EF5350] transition-all duration-300 hover:scale-105 hover:shadow-lg
                           hover:shadow-[#D32F2F]/30"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#003366]/98 backdrop-blur-xl pt-20"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="p-6 flex flex-col gap-2 overflow-y-auto max-h-full">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all
                      ${isActive(item.href)
                        ? 'text-[#D32F2F] bg-[#D32F2F]/10'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link
                  to="/admissions"
                  className="mt-4 block text-center bg-[#D32F2F] text-[#003366] font-bold py-4 rounded-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
