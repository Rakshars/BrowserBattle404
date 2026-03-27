import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Users, Briefcase, BarChart2, Target, Eye, Phone, Mail, Building } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';

const topRecruiters = [
  { name: 'Google', sector: 'Tech', package: '₹45 LPA', domain: 'google.com' },
  { name: 'Microsoft', sector: 'Tech', package: '₹38 LPA', domain: 'microsoft.com' },
  { name: 'Amazon', sector: 'Tech', package: '₹35 LPA', domain: 'amazon.com' },
  { name: 'VISA', sector: 'Finance', package: '₹34 LPA', domain: 'visa.com' },
  { name: 'Goldman Sachs', sector: 'Finance', package: '₹32 LPA', domain: 'goldmansachs.com' },
  { name: 'Qualcomm', sector: 'Semiconductor', package: '₹28 LPA', domain: 'qualcomm.com' },
  { name: 'Salesforce', sector: 'Tech', package: '₹26 LPA', domain: 'salesforce.com' },
  { name: 'Atlassian', sector: 'Tech', package: '₹25 LPA', domain: 'atlassian.com' },
  { name: 'Texas Instruments', sector: 'Semiconductor', package: '₹25 LPA', domain: 'ti.com' },
  { name: 'Flipkart', sector: 'E-Commerce', package: '₹24 LPA', domain: 'flipkart.com' },
  { name: 'JP Morgan', sector: 'Finance', package: '₹22 LPA', domain: 'jpmorgan.com' },
  { name: 'Intel', sector: 'Semiconductor', package: '₹20 LPA', domain: 'intel.com' },
  { name: 'Adobe', sector: 'Tech', package: '₹18 LPA', domain: 'adobe.com' },
  { name: 'Oracle', sector: 'Enterprise Software', package: '₹18 LPA', domain: 'oracle.com' },
  { name: 'Cisco', sector: 'Networking', package: '₹16 LPA', domain: 'cisco.com' },
  { name: 'Deloitte', sector: 'Consulting', package: '₹14 LPA', domain: 'deloitte.com' },
  { name: 'TCS', sector: 'IT Services', package: '₹12 LPA', domain: 'tcs.com' },
];

const yoyData = [
  { year: '2021', highest: 47.0, average: 10.5, median: 8.5, placed: 68 },
  { year: '2022', highest: 41.1, average: 9.6, median: 8.25, placed: 72 },
  { year: '2023', highest: 33.1, average: 10.3, median: 9.0, placed: 61 },
  { year: '2024', highest: 44.0, average: 10.0, median: 8.4, placed: 71 },
];

const sectorData = [
  { name: 'IT Services & Product', percentage: 45, color: 'bg-[#1e3a8a]', stop: '#1e3a8a' },
  { name: 'Core Engineering', percentage: 25, color: 'bg-[#3b82f6]', stop: '#3b82f6' },
  { name: 'Consulting & Analytics', percentage: 15, color: 'bg-[#60a5fa]', stop: '#60a5fa' },
  { name: 'Banking & Finance', percentage: 10, color: 'bg-[#93c5fd]', stop: '#93c5fd' },
  { name: 'Others (EdTech, FMCG)', percentage: 5, color: 'bg-[#dbeafe]', stop: '#dbeafe' },
];

export default function Placements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Placements & Training"
        subtitle="Bridging the gap between academia and industry. 18,500+ cumulative offers since 1995."
        breadcrumb="Placements"
        accent="Industry Connect"
      />

      {/* Key Stats */}
      <section className="py-20 bg-white shadow-sm border-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 18500, suffix: '+', label: 'Cumulative Offers', sublabel: 'Since 1995' },
              { end: 350, suffix: '+', label: 'Recruiters Annually', sublabel: 'National & MNCs' },
              { end: 45, prefix: '₹', suffix: ' LPA', label: 'Highest Package', sublabel: '2024 Batch' },
              { end: 8.5, prefix: '₹', suffix: ' LPA', label: 'Average Package', sublabel: 'Across all UG branches' },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <AnimatedCounter {...stat} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Year-over-Year Growth Stats with Recharts */}
      <section className="py-24 bg-gradient-to-br from-white to-blue-50/50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Performance Metrics</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900">Year-over-Year Packages</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Consistent placement numbers reflecting the strength of our engineering programs, averaging ~10 LPA over recent years.
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 h-[400px]">
                <h3 className="font-semibold text-lg text-slate-800 mb-6 text-center">Package Trends (LPA)</h3>
                <ResponsiveContainer width="100%" height="85%">
                  <BarChart data={yoyData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dx={-10} />
                    <RechartsTooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                      cursor={{fill: 'rgba(30, 58, 138, 0.05)'}}
                    />
                    <Legend iconType="circle" wrapperStyle={{paddingTop: '20px'}} />
                    <Bar dataKey="highest" name="Highest" fill="#1e3a8a" radius={[4, 4, 0, 0]} barSize={24} />
                    <Bar dataKey="average" name="Average" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={24} />
                    <Bar dataKey="median" name="Median" fill="#93c5fd" radius={[4, 4, 0, 0]} barSize={24} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 h-[400px]">
                <h3 className="font-semibold text-lg text-slate-800 mb-6 text-center">Placement Rate (%)</h3>
                <ResponsiveContainer width="100%" height="85%">
                  <LineChart data={yoyData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dx={-10} domain={[40, 100]} />
                    <RechartsTooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend iconType="circle" wrapperStyle={{paddingTop: '20px'}} />
                    <Line type="monotone" dataKey="placed" name="Placement %" stroke="#10b981" strokeWidth={4} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="bg-white rounded-3xl p-10 border border-blue-100 shadow-sm h-full flex flex-col justify-center relative overflow-hidden group hover:border-[#1e3a8a]/30 transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Eye size={120} />
                </div>
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                  <Eye size={28} className="text-blue-800" />
                </div>
                <h3 className="font-serif text-3xl font-semibold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To emerge as a most preferred destination for all corporates to hire globally competent and ethically strong engineering talent.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-[#1e3a8a] text-white rounded-3xl p-10 shadow-lg h-full flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Target size={120} />
                </div>
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="font-serif text-3xl font-semibold mb-6">Our Mission</h3>
                <ul className="space-y-4">
                  {[
                    'To nurture fresh talent to be industry ready by conducting purposeful and value added teaching and training.',
                    'To identify the right career option for the students in tandem with their skills, personal values and interest.',
                    'To strive hard to enhance the employability of students and meet the aspirations of the corporate community.',
                    'To facilitate students to acquire contemporary and futuristic skills.'
                  ].map((pt, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0 mt-2.5" />
                       <p className="text-blue-50 leading-relaxed">{pt}</p>
                     </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pie Chart / Sector-wise Data */}
      <section className="py-28 bg-white border-b border-blue-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Chart Graphic */}
            <AnimatedSection direction="left" className="relative flex justify-center py-10">
              {/* Decorative background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 blur-[100px] rounded-full" />
              
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                {mounted && (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
                    whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 60, damping: 20, duration: 1.5 }}
                    className="w-full h-full rounded-full shadow-2xl shadow-blue-900/15"
                    style={{
                      background: `conic-gradient(
                        ${sectorData[0].stop} 0% 45%,
                        ${sectorData[1].stop} 45% 70%,
                        ${sectorData[2].stop} 70% 85%,
                        ${sectorData[3].stop} 85% 95%,
                        ${sectorData[4].stop} 95% 100%
                      )`
                    }}
                  >
                    {/* Inner cutout for Donut Shape */}
                    <div className="absolute inset-0 m-auto w-3/5 h-3/5 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                      <Briefcase size={32} className="text-blue-800 mb-2 opacity-80" />
                      <span className="text-3xl font-serif font-semibold text-slate-900">350+</span>
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Recruiters</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </AnimatedSection>

            {/* Chart Legend & Info */}
            <AnimatedSection direction="right">
              <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Recruitment Demographics</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-6">Placements by Sector</h2>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                Our active linkages and collaborations with the industry ensure a diverse range of companies visit the campus. We cater to global tech giants, core engineering firms, and top-tier consultancies.
              </p>
              
              <div className="space-y-5">
                {sectorData.map((sector, i) => (
                  <motion.div 
                    key={sector.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                    className="flex justify-between items-center group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full ${sector.color} shadow-sm group-hover:scale-125 transition-transform`} />
                      <span className="text-slate-700 font-medium text-lg">{sector.name}</span>
                    </div>
                    <span className="text-slate-400 font-mono font-bold text-xl">{sector.percentage}%</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Top Recruiters Marquee / Grid */}
      <section className="py-24 bg-slate-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Corporate Partners</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Top Recruiters</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              More than 350 reputed National and Multinational companies visit our institution for campus recruitment annually to hire globally competent engineering talent.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topRecruiters.map((co, i) => (
              <AnimatedSection key={co.name} delay={i * 0.05}>
                <motion.div
                  className="bg-white shadow-sm border border-blue-100 rounded-xl p-6 text-center group hover:border-[#1e3a8a]/30 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-center"
                  whileHover={{ y: -4 }}
                >
                  <div className="h-12 flex items-center justify-center mb-4">
                    {co.domain ? (
                      <img 
                        src={`https://logo.clearbit.com/${co.domain}`} 
                        alt={`${co.name} logo`} 
                        className="h-10 w-auto max-w-[80%] object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        onError={(e) => {
                          if (!e.target.dataset.retried) {
                            e.target.dataset.retried = true;
                            e.target.src = `https://www.google.com/s2/favicons?domain=${co.domain}&sz=128`;
                          } else {
                            e.target.style.display = 'none';
                          }
                        }}
                      />
                    ) : (
                      <Building size={24} className="mx-auto text-blue-200 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>
                  <div className="font-bold text-slate-900 text-[15px] group-hover:text-blue-800 transition-colors leading-tight mb-2">{co.name}</div>
                  <div className="text-slate-500 text-[11px] uppercase tracking-wider font-mono mb-2">{co.sector}</div>
                  <div className="mt-auto pt-3 border-t border-slate-50 text-blue-800 text-xs font-bold font-mono bg-blue-50/50 rounded-md py-1 mx-2">{co.package}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Contact */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Leadership</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Training & Placement Cell</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Dedicated to maximizing career prospects by providing comprehensive career solutions, soft-skills training, and technical preparation.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. J. Sharana Basavaraja', title: 'Dean, Training & Placement', exp: '28 Years Experience', phone: '+91-80-22423789', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80' },
              { name: 'Dr. K.R. Sudhindra', title: 'Associate Placement Officer', exp: '18 Years Experience', phone: '+91-80-26603936', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80' },
              { name: 'Dr. Nandhini Vineeth', title: 'Associate Placement Officer', exp: '17 Years Experience', phone: '+91-80-26603936', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80' },
            ].map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 0.15}>
                <div className="bg-white border border-blue-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 h-full flex flex-col">
                  {person.image ? (
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-24 h-24 rounded-2xl object-cover object-top mb-6 shadow-sm border border-slate-100" 
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-blue-500 flex items-center justify-center text-white font-serif text-2xl font-bold mb-6">
                      {person.name.split(' ')[1][0]}
                    </div>
                  )}
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h4>
                  <p className="text-[#1e3a8a] font-medium text-sm mb-3">{person.title}</p>
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-mono rounded-full mb-6">
                    {person.exp}
                  </div>
                  
                  <div className="pt-6 border-t border-slate-100 space-y-3">
                    <a href={`tel:${person.phone}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-800 transition-colors text-sm">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                        <Phone size={14} className="text-blue-700" />
                      </div>
                      {person.phone}
                    </a>
                    <a href="mailto:placement@bmsce.ac.in" className="flex items-center gap-3 text-slate-600 hover:text-blue-800 transition-colors text-sm">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                        <Mail size={14} className="text-blue-700" />
                      </div>
                      placement@bmsce.ac.in
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-16 text-center">
              <a href="mailto:placement@bmsce.ac.in" className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Briefcase size={18} /> Invite Us for Campus Placement
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
