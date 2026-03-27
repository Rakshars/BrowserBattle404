import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#001122] border-t border-white/5 text-gray-400">
      {/* Top wave */}
      <div className="bg-[#001A33] h-px w-full" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D32F2F] to-[#EF5350] 
                              flex items-center justify-center">
                <span className="text-[#003366] font-serif font-bold text-xl">B</span>
              </div>
              <div>
                <div className="text-white font-serif text-xl font-semibold">BMSCE</div>
                <div className="text-[#D32F2F] text-xs tracking-widest font-mono">EST. 1946</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              BMS College of Engineering — A premier institution shaping tomorrow's engineers and innovators 
              since 1946. Accredited by NAAC with A+ grade.
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
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center
                             hover:border-[#D32F2F] hover:text-[#D32F2F] transition-all duration-300 hover:scale-110"
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
                    className="text-sm hover:text-[#D32F2F] transition-colors duration-200 hover:pl-1"
                  >
                    → {label}
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
                    className="text-sm hover:text-[#D32F2F] transition-colors duration-200 hover:pl-1"
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="text-[#D32F2F] mt-0.5 shrink-0" />
                <span>Bull Temple Road, Basavanagudi, Bengaluru – 560 019, Karnataka, India</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={16} className="text-[#D32F2F] shrink-0" />
                <span>+91-80-26622130 / 26622131</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={16} className="text-[#D32F2F] shrink-0" />
                <span>principal@bmsce.ac.in</span>
              </li>
            </ul>

            <div className="mt-8 p-4 rounded-xl border border-white/10 bg-white/3">
              <p className="text-xs text-[#D32F2F] font-mono tracking-wider mb-1">ACCREDITATION</p>
              <p className="text-sm text-white">NAAC A+ Grade</p>
              <p className="text-xs mt-1">NBA Accredited • NIRF Ranked</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-center">
            © 2024 BMS College of Engineering. All rights reserved. Established 1946.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-[#D32F2F] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D32F2F] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#D32F2F] transition-colors">Sitemap</a>
            <a href="#" className="hover:text-[#D32F2F] transition-colors">RTI</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
