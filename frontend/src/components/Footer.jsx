import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-blue-50/80">
      {/* Top separator line array overlaying if needed */}
      <div className="bg-gradient-to-r from-[#1e3a8a] via-blue-400/30 to-[#1e3a8a] h-px w-full" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/bms-logo.png" 
                alt="BMS College of Engineering Logo" 
                className="w-14 h-14 bg-white rounded-full p-1 shadow-md object-contain"
              />
              <div>
                <div className="text-white font-serif text-xl font-semibold">BMSCE</div>
                <div className="text-blue-300 text-xs tracking-widest font-mono">EST. 1946</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-blue-100/90">
              BMS College of Engineering — A premier institution shaping tomorrow's engineers and innovators 
              since 1946. Accredited by NAAC with A++ grade.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Instagram, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-blue-100
                             hover:bg-white/10 hover:text-white hover:border-white/50 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Departments', '/departments'],
                ['Admissions', '/admissions'],
                ['Placements', '/placements'],
                ['Research', '/research'],
                ['Campus Life', '/campus-life'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-sm text-blue-100/80 hover:text-white transition-colors duration-200 hover:pl-1 flex items-center gap-2"
                  >
                    <span className="text-blue-400/50 text-xs">→</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Academics</h4>
            <ul className="space-y-3">
              {[
                ['UG Programs', '/academics#ug'],
                ['PG Programs', '/academics#pg'],
                ['PhD Programs', '/academics#phd'],
                ['Academic Calendar', '/academics#calendar'],
                ['Examination Cell', '/academics#exam'],
                ['Library', '/academics'],
                ['IQAC', '/academics'],
                ['Scholarships', '/admissions'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-blue-100/80 hover:text-white transition-colors duration-200 hover:pl-1 flex items-center gap-2"
                  >
                    <span className="text-blue-400/50 text-xs">→</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-blue-100/90">
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="text-blue-300 mt-0.5 shrink-0" />
                <span>Bull Temple Road, Basavanagudi, Bengaluru – 560 019, Karnataka, India</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={16} className="text-blue-300 shrink-0" />
                <span>+91-80-26622130 / 26622131</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={16} className="text-blue-300 shrink-0" />
                <span>principal@bmsce.ac.in</span>
              </li>
            </ul>

            <div className="mt-8 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <p className="text-xs text-blue-300 font-mono tracking-wider mb-1">ACCREDITATION</p>
              <p className="text-sm text-white font-semibold flex items-center gap-2">
                NAAC A++ Grade
              </p>
              <p className="text-xs text-blue-100/70 mt-1">NBA Accredited • NIRF Ranked</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-100/60">
          <p className="text-xs text-center">
            © 2024 BMS College of Engineering. All rights reserved. Established 1946.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">RTI</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
