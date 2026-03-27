import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Users, Briefcase, ArrowRight, BarChart2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';

const topRecruiters = [
  { name: 'Google', sector: 'Tech', package: '₹45 LPA', color: '#4285F4' },
  { name: 'Microsoft', sector: 'Tech', package: '₹38 LPA', color: '#00A4EF' },
  { name: 'Amazon', sector: 'Tech', package: '₹35 LPA', color: '#FF9900' },
  { name: 'Goldman Sachs', sector: 'Finance', package: '₹32 LPA', color: '#1D4477' },
  { name: 'Qualcomm', sector: 'Semiconductor', package: '₹28 LPA', color: '#3253DC' },
  { name: 'Texas Instruments', sector: 'Semiconductor', package: '₹25 LPA', color: '#E30613' },
  { name: 'Flipkart', sector: 'E-Commerce', package: '₹24 LPA', color: '#F7A800' },
  { name: 'JP Morgan', sector: 'Finance', package: '₹22 LPA', color: '#002F6C' },
  { name: 'Intel', sector: 'Semiconductor', package: '₹20 LPA', color: '#0068B5' },
  { name: 'Adobe', sector: 'Tech', package: '₹18 LPA', color: '#FF0000' },
  { name: 'Cisco', sector: 'Networking', package: '₹16 LPA', color: '#1BA0D7' },
  { name: 'Deloitte', sector: 'Consulting', package: '₹14 LPA', color: '#007B5E' },
  { name: 'Accenture', sector: 'IT Services', package: '₹8 LPA', color: '#A100FF' },
  { name: 'Infosys', sector: 'IT Services', package: '₹6.5 LPA', color: '#007CC3' },
  { name: 'TCS', sector: 'IT Services', package: '₹6 LPA', color: '#4FA2DC' },
  { name: 'Wipro', sector: 'IT Services', package: '₹6 LPA', color: '#582C84' },
  { name: 'Cognizant', sector: 'IT Services', package: '₹5.5 LPA', color: '#1F4E79' },
  { name: 'L&T Technology', sector: 'Engineering', package: '₹8 LPA', color: '#EF3E23' },
];

const yearlyData = [
  { year: '2020', placed: 78, avg: 6.2, highest: 28 },
  { year: '2021', placed: 82, avg: 6.8, highest: 32 },
  { year: '2022', placed: 88, avg: 7.4, highest: 38 },
  { year: '2023', placed: 92, avg: 7.9, highest: 42 },
  { year: '2024', placed: 95, avg: 8.2, highest: 45 },
];

const deptStats = [
  { dept: 'CSE', placed: 98, avg: '₹12.4 LPA' },
  { dept: 'ECE', placed: 95, avg: '₹10.2 LPA' },
  { dept: 'ISE', placed: 96, avg: '₹11.1 LPA' },
  { dept: 'MECH', placed: 90, avg: '₹7.8 LPA' },
  { dept: 'CIVIL', placed: 85, avg: '₹6.5 LPA' },
  { dept: 'EEE', placed: 92, avg: '₹8.4 LPA' },
  { dept: 'CHE', placed: 88, avg: '₹7.2 LPA' },
  { dept: 'BT', placed: 82, avg: '₹6.8 LPA' },
];

const testimonials = [
  {
    name: 'Priya Venkatesh', dept: 'CSE 2023', company: 'Google', package: '₹42 LPA',
    quote: 'BMSCE\'s rigorous curriculum and the placement cell\'s mentorship were instrumental in landing my dream role at Google. The mock interviews were as tough as the real ones!',
  },
  {
    name: 'Karan Mehta', dept: 'ECE 2022', company: 'Qualcomm', package: '₹28 LPA',
    quote: 'The VLSI lab at BMSCE gave me hands-on experience that directly translated to my work at Qualcomm. I was contributing from day one.',
  },
  {
    name: 'Ananya Sharma', dept: 'ISE 2023', company: 'Microsoft', package: '₹36 LPA',
    quote: 'The combination of strong fundamentals and the placement preparation workshops made all the difference. BMSCE prepared me for every round of the interview process.',
  },
];

export default function Placements() {
  const [activeYear, setActiveYear] = useState(2024);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Placements"
        subtitle="Where talent meets opportunity — 95% placement rate, 300+ recruiting companies."
        breadcrumb="Placements"
        accent="Career Excellence"
      />

      {/* Key Stats */}
      <section className="py-20 bg-[#003366] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 95, suffix: '%', label: 'Placement Rate', sublabel: 'Class of 2024' },
              { end: 45, prefix: '₹', suffix: ' LPA', label: 'Highest Package', sublabel: 'Google, 2024' },
              { end: 8.2, suffix: ' LPA', label: 'Average Package', sublabel: '2024 Batch' },
              { end: 300, suffix: '+', label: 'Recruiting Companies', sublabel: 'Across sectors' },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <AnimatedCounter {...stat} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Year-wise Trend */}
      <section className="py-24 bg-[#001A33]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#D32F2F] font-mono text-sm tracking-widest uppercase block mb-4">Performance</span>
            <h2 className="font-serif text-5xl font-light text-white">Placement Trends</h2>
          </AnimatedSection>

          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {yearlyData.map(y => (
              <button
                key={y.year}
                onClick={() => setActiveYear(parseInt(y.year))}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeYear === parseInt(y.year)
                    ? 'bg-[#D32F2F] text-[#003366]'
                    : 'border border-white/10 text-gray-400 hover:border-[#D32F2F]/40'
                }`}
              >
                {y.year}
              </button>
            ))}
          </div>

          {yearlyData.filter(y => parseInt(y.year) === activeYear).map(y => (
            <motion.div
              key={y.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {[
                { label: 'Placement Rate', value: `${y.placed}%`, icon: TrendingUp },
                { label: 'Average Package', value: `₹${y.avg} LPA`, icon: BarChart2 },
                { label: 'Highest Package', value: `₹${y.highest} LPA`, icon: Award },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="bg-[#003366] border border-white/5 rounded-2xl p-8 text-center">
                  <Icon size={24} className="text-[#D32F2F] mx-auto mb-3" />
                  <div className="font-serif text-4xl text-white font-light mb-2">{value}</div>
                  <div className="text-gray-400 text-sm">{label}</div>
                </div>
              ))}
            </motion.div>
          ))}

          {/* Bar chart visual */}
          <div className="mt-16 bg-[#003366] border border-white/5 rounded-2xl p-8">
            <h3 className="text-white font-semibold mb-8">Placement Rate Over 5 Years</h3>
            <div className="flex items-end gap-4 h-40">
              {yearlyData.map(y => (
                <div key={y.year} className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-gray-400 text-sm">{y.placed}%</div>
                  <motion.div
                    className="w-full bg-gradient-to-t from-[#D32F2F] to-[#EF5350] rounded-t-lg"
                    initial={{ height: 0 }}
                    animate={{ height: `${(y.placed / 100) * 120}px` }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                  />
                  <div className="text-gray-500 text-xs">{y.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Department-wise */}
      <section className="py-24 bg-[#001122]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#D32F2F] font-mono text-sm tracking-widest uppercase block mb-4">By Department</span>
            <h2 className="font-serif text-5xl font-light text-white">Department Statistics</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deptStats.map((d, i) => (
              <AnimatedSection key={d.dept} delay={i * 0.07}>
                <motion.div className="bg-[#003366] border border-white/5 rounded-2xl p-6 group hover:border-[#D32F2F]/30 transition-all duration-300" whileHover={{ y: -4 }}>
                  <div className="text-[#D32F2F] font-mono font-bold text-2xl mb-1">{d.dept}</div>
                  <div className="text-white text-3xl font-serif font-light mb-1">{d.placed}%</div>
                  <div className="text-gray-500 text-sm">placed</div>
                  <div className="mt-3 pt-3 border-t border-white/5 text-gray-300 text-sm font-medium">{d.avg} avg</div>
                  <div className="mt-2 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#D32F2F] to-[#EF5350] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${d.placed}%` }}
                      transition={{ duration: 1.2, delay: i * 0.1 }}
                    />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-24 bg-[#001A33]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#D32F2F] font-mono text-sm tracking-widest uppercase block mb-4">Partners</span>
            <h2 className="font-serif text-5xl font-light text-white">Our Recruiters</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {topRecruiters.map((co, i) => (
              <AnimatedSection key={co.name} delay={i * 0.04}>
                <motion.div
                  className="bg-[#003366] border border-white/5 rounded-xl p-4 text-center group cursor-default hover:border-[#D32F2F]/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="font-bold text-white text-sm group-hover:text-[#D32F2F] transition-colors">{co.name}</div>
                  <div className="text-gray-600 text-xs mt-1">{co.sector}</div>
                  <div className="text-[#D32F2F] text-xs mt-1 font-mono">{co.package}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#001122]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#D32F2F] font-mono text-sm tracking-widest uppercase block mb-4">Success Stories</span>
            <h2 className="font-serif text-5xl font-light text-white">Our Placed Students</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.12}>
                <motion.div className="bg-[#003366] border border-white/5 rounded-2xl p-7 hover:border-[#D32F2F]/20 transition-all duration-300" whileHover={{ y: -5 }}>
                  <div className="text-[#D32F2F] text-3xl mb-4 font-serif">"</div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-[#D32F2F]/20 flex items-center justify-center text-[#D32F2F] font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.dept} · {t.company}</div>
                    </div>
                    <div className="ml-auto text-[#D32F2F] text-sm font-mono font-bold">{t.package}</div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
