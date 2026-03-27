import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Globe, BookOpen, Award, ArrowRight, Cpu, Leaf, Heart } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';

const centers = [
  { icon: Cpu, name: 'Centre for AI & Machine Learning', dept: 'CSE / ISE', desc: 'Cutting-edge research in deep learning, NLP, computer vision, and explainable AI. Collaborating with IISc and global tech partners.', projects: 12, funding: '₹4.2 Cr', color: 'from-blue-600 to-cyan-500' },
  { icon: FlaskConical, name: 'Advanced Materials Research Lab', dept: 'Chemical / Mechanical', desc: 'Research in nanomaterials, smart composites, and sustainable manufacturing processes with industry applications.', projects: 8, funding: '₹2.8 Cr', color: 'from-purple-600 to-pink-500' },
  { icon: Leaf, name: 'Centre for Sustainable Engineering', dept: 'Civil / EEE', desc: 'Focused on renewable energy, green infrastructure, water management, and climate-resilient urban design.', projects: 10, funding: '₹3.1 Cr', color: 'from-green-600 to-teal-500' },
  { icon: Heart, name: 'Biomedical Engineering Research', dept: 'Biotechnology / ECE', desc: 'Interdisciplinary research at the intersection of biology and engineering — medical devices, diagnostics, and biosensors.', projects: 6, funding: '₹2.1 Cr', color: 'from-red-500 to-orange-500' },
  { icon: Globe, name: 'IoT & Embedded Systems Lab', dept: 'ECE / CSE', desc: 'Research on smart systems, edge computing, sensor networks, and real-time embedded applications for Industry 4.0.', projects: 9, funding: '₹1.8 Cr', color: 'from-amber-500 to-yellow-500' },
  { icon: BookOpen, name: 'VLSI Design Research Centre', dept: 'ECE', desc: 'System-on-chip design, low-power VLSI, analog mixed-signal design in collaboration with semiconductor industry.', projects: 7, funding: '₹2.5 Cr', color: 'from-indigo-600 to-violet-500' },
];

const publications = [
  { title: 'Federated Learning for Privacy-Preserving IoT Health Monitoring', authors: 'Suresh K., Priya V., et al.', journal: 'IEEE Transactions on IoT', year: 2024, citations: 48 },
  { title: 'Graphene-Enhanced Concrete for Seismic Resilience', authors: 'Nagaraj B., Ravi M., et al.', journal: 'Construction & Building Materials', year: 2024, citations: 32 },
  { title: 'Deep Reinforcement Learning for Autonomous EV Charging Scheduling', authors: 'Latha R., Suresh K., et al.', journal: 'IEEE Transactions on Smart Grid', year: 2023, citations: 71 },
  { title: 'CRISPR-Cas9 Mediated Gene Editing in Plant Stress Tolerance', authors: 'Usha M., Anitha P., et al.', journal: 'Plant Biotechnology Journal', year: 2023, citations: 55 },
  { title: 'Low-Power RISC-V Processor for Edge AI Applications', authors: 'Pushpa B., Vikram S., et al.', journal: 'ACM Transactions on Architecture', year: 2024, citations: 29 },
];

const collaborations = [
  'IISc Bangalore', 'IIT Bombay', 'NIT Surathkal', 'DRDO',
  'ISRO', 'HAL', 'Intel India', 'Texas Instruments',
  'Bosch', 'ABB India', 'Siemens', 'University of Melbourne',
];

const patents = [
  { title: 'AI-Driven Early Detection System for Diabetic Retinopathy', inventors: 'Dr. Suresh Kumar, Dr. Anitha P.', status: 'Granted', year: 2023 },
  { title: 'Smart Water Quality Monitoring using IoT & ML', inventors: 'Dr. Nagaraj B., Dr. Latha R.', status: 'Granted', year: 2023 },
  { title: 'Lightweight VLSI Architecture for Neural Network Inference', inventors: 'Dr. Pushpa B.T.', status: 'Filed', year: 2024 },
  { title: 'Biodegradable Polymer Composite for Biomedical Implants', inventors: 'Dr. Usha M., Dr. Srinivasan K.', status: 'Filed', year: 2024 },
];

export default function Research() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Research & Innovation"
        subtitle="Pioneering discoveries that address humanity's most pressing challenges."
        breadcrumb="Research"
        accent="Advancing Knowledge"
      />

      {/* Stats */}
      <section className="py-20 bg-[#0a1628] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 52, label: 'Active Research Projects', sublabel: 'Across departments' },
              { end: 16.5, suffix: ' Cr', prefix: '₹', label: 'Total Research Funding', sublabel: '2023–24' },
              { end: 380, suffix: '+', label: 'Publications (5 Years)', sublabel: 'SCI/Scopus indexed' },
              { end: 28, label: 'Patents Granted/Filed', sublabel: 'National & International' },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <AnimatedCounter {...s} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Research Centres */}
      <section className="py-24 bg-[#040c18]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#C9A84C] font-mono text-sm tracking-widest uppercase block mb-4">Centres of Excellence</span>
            <h2 className="font-serif text-5xl font-light text-white">Research Centres</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centers.map((c, i) => (
              <AnimatedSection key={c.name} delay={i * 0.1}>
                <motion.div
                  className="bg-[#0a1628] border border-white/5 rounded-2xl p-7 group hover:border-[#C9A84C]/30 transition-all duration-300"
                  whileHover={{ y: -6 }}
                >
                  <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${c.color} mb-5`} />
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                      <c.icon size={18} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold leading-snug">{c.name}</h3>
                      <div className="text-[#C9A84C] text-xs font-mono mt-1">{c.dept}</div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{c.desc}</p>
                  <div className="flex gap-4 pt-4 border-t border-white/5">
                    <div className="text-center">
                      <div className="text-white font-semibold">{c.projects}</div>
                      <div className="text-gray-500 text-xs">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#C9A84C] font-semibold font-mono">{c.funding}</div>
                      <div className="text-gray-500 text-xs">Funding</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 bg-[#020810]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#C9A84C] font-mono text-sm tracking-widest uppercase block mb-4">Knowledge Output</span>
              <h2 className="font-serif text-5xl font-light text-white">Recent Publications</h2>
            </div>
            <button className="text-[#C9A84C] flex items-center gap-2 text-sm hover:gap-3 transition-all">
              View All <ArrowRight size={14} />
            </button>
          </AnimatedSection>
          <div className="space-y-4">
            {publications.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  className="bg-[#0a1628] border border-white/5 rounded-2xl p-6 group hover:border-[#C9A84C]/20 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-2 leading-snug group-hover:text-[#C9A84C] transition-colors">{p.title}</h3>
                      <div className="text-gray-500 text-sm">{p.authors}</div>
                      <div className="flex gap-4 mt-3 text-xs">
                        <span className="text-[#C9A84C] font-mono">{p.journal}</span>
                        <span className="text-gray-600">{p.year}</span>
                      </div>
                    </div>
                    <div className="text-center shrink-0">
                      <div className="text-white font-serif text-2xl">{p.citations}</div>
                      <div className="text-gray-600 text-xs">citations</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-24 bg-[#040c18]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#C9A84C] font-mono text-sm tracking-widest uppercase block mb-4">Intellectual Property</span>
            <h2 className="font-serif text-5xl font-light text-white">Patents</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            {patents.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-[#0a1628] border border-white/5 rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-white font-medium leading-snug">{p.title}</h3>
                    <span className={`shrink-0 text-xs px-2 py-1 rounded-full font-mono border ${
                      p.status === 'Granted'
                        ? 'bg-green-500/10 text-green-400 border-green-500/30'
                        : 'bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/30'
                    }`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm">{p.inventors}</div>
                  <div className="text-gray-600 text-xs mt-2 font-mono">{p.year}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-24 bg-[#020810]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#C9A84C] font-mono text-sm tracking-widest uppercase block mb-4">Partners</span>
            <h2 className="font-serif text-5xl font-light text-white">Research Collaborations</h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {collaborations.map((name, i) => (
              <AnimatedSection key={name} delay={i * 0.05}>
                <motion.div
                  className="bg-[#0a1628] border border-white/5 rounded-xl px-6 py-3 text-gray-300 text-sm hover:border-[#C9A84C]/30 hover:text-[#C9A84C] transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {name}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
