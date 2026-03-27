import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Globe, BookOpen, Award, ArrowRight, Cpu, Leaf, Heart, Lightbulb, User, Settings, ExternalLink } from 'lucide-react';
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
        title="Research & Development Centre"
        subtitle="Identifying new research areas, developing projects, and fostering innovation among faculty and students."
        breadcrumb="R&D"
        accent="Driving Innovation"
      />

      {/* Intro & Head of R&D */}
      <section className="py-24 bg-gradient-to-br from-white to-blue-50/50 border-b border-blue-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">About R&D</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">
                Driving Innovation at the Institutional Level
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The R&D Center involves identifying new research areas and developing projects leading to publications in National & International Journals. Established to promote Research & Innovation, the center explores advanced technologies through cooperative, multidisciplinary engineering.
              </p>
              <div className="flex flex-col gap-4 border-l-4 border-[#1e3a8a] pl-6 py-2">
                <p className="text-slate-700 italic">"The Centre acts as the liaison between the University and the research centers at BMSCE, guiding project proposals and patents."</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#1e3a8a]">
                    <User size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dr. Chandasree Das</h4>
                    <p className="text-sm text-slate-500">Head, Research & Development</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="relative">
              <div className="bg-white p-10 rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-[#1e3a8a] opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
                <div className="w-16 h-16 bg-[#1e3a8a] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-900/20">
                  <ExternalLink size={28} />
                </div>
                <h3 className="text-3xl font-serif text-slate-900 mb-4">IRINS Portal</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Indian Research Information Network System (IRINS) facilitates academic and R&D organizations to collect, curate and showcase scholarly communication activities and provide an opportunity to create a scholarly network.
                </p>
                <motion.a 
                  href="https://bmsce.irins.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-800 transition-all shadow-md group-hover:shadow-lg group-hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Visit BMSCE IRINS <ArrowRight size={18} />
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Propel Labs */}
      <section className="py-24 bg-[#1e3a8a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md mb-8 ring-1 ring-white/20">
              <Lightbulb size={36} className="text-blue-200" />
            </div>
            <h2 className="font-serif text-5xl font-light mb-6">Propel Labs</h2>
            <p className="text-blue-100/80 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
              Centralized labs and design centers established for nurturing research from the first year of engineering. Student groups work on multidisciplinary project concepts to design prototypes, guided by expert technical staff and faculty mentors.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Multidisciplinary Innovation', desc: 'Labs are broad-based and not confined to a single area. Students from all disciplines collaborate without terms or conditions.', icon: Globe },
              { title: 'Concept to Prototype', desc: 'Creative thinking skills and expert mentoring result in systematic processes and concrete, working products.', icon: Settings },
              { title: 'Global Competitions', desc: 'These research labs help students build impressive prototypes, enabling them to represent BMSCE in competitions globally.', icon: Award },
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="up">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors">
                  <feature.icon className="text-blue-300 mb-6" size={32} />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-blue-100/70 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Shifted up to overlap Propel Labs slightly */}
      <section className="py-12 bg-white shadow-xl border-blue-50 border border-blue-100 -mt-12 relative z-20 mx-6 rounded-3xl lg:mx-auto max-w-6xl">
        <div className="px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 52, label: 'Active Projects', sublabel: 'Funded Research' },
              { end: 16.5, suffix: ' Cr', prefix: '₹', label: 'Funding', sublabel: 'Rs. Crores' },
              { end: 380, suffix: '+', label: 'Publications', sublabel: 'National & Intl.' },
              { end: 28, label: 'Patents', sublabel: 'Granted/Filed' },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <AnimatedCounter {...s} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Research Centres */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Centres of Excellence</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Research Centres</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centers.map((c, i) => (
              <AnimatedSection key={c.name} delay={i * 0.1}>
                <motion.div
                  className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl p-7 group hover:border-[#1e3a8a]/30 transition-all duration-300"
                  whileHover={{ y: -6 }}
                >
                  <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${c.color} mb-5`} />
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center shrink-0">
                      <c.icon size={18} className="text-blue-800" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-semibold leading-snug">{c.name}</h3>
                      <div className="text-blue-800 text-xs font-mono mt-1">{c.dept}</div>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{c.desc}</p>
                  <div className="flex gap-4 pt-4 border-t border-blue-100">
                    <div className="text-center">
                      <div className="text-slate-900 font-semibold">{c.projects}</div>
                      <div className="text-slate-500 text-xs">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-800 font-semibold font-mono">{c.funding}</div>
                      <div className="text-slate-500 text-xs">Funding</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex justify-between items-end mb-12">
            <div>
              <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Knowledge Output</span>
              <h2 className="font-serif text-5xl font-light text-slate-900">Recent Publications</h2>
            </div>
            <button className="text-blue-800 flex items-center gap-2 text-sm hover:gap-3 transition-all">
              View All <ArrowRight size={14} />
            </button>
          </AnimatedSection>
          <div className="space-y-4">
            {publications.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl p-6 group hover:border-[#1e3a8a]/20 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-slate-900 font-medium mb-2 leading-snug group-hover:text-blue-800 transition-colors">{p.title}</h3>
                      <div className="text-slate-500 text-sm">{p.authors}</div>
                      <div className="flex gap-4 mt-3 text-xs">
                        <span className="text-blue-800 font-mono">{p.journal}</span>
                        <span className="text-gray-600">{p.year}</span>
                      </div>
                    </div>
                    <div className="text-center shrink-0">
                      <div className="text-slate-900 font-serif text-2xl">{p.citations}</div>
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
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Intellectual Property</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Patents</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            {patents.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-slate-900 font-medium leading-snug">{p.title}</h3>
                    <span className={`shrink-0 text-xs px-2 py-1 rounded-full font-mono border ${
                      p.status === 'Granted'
                        ? 'bg-green-500/10 text-green-400 border-green-500/30'
                        : 'bg-[#1e3a8a]/10 text-blue-800 border-[#1e3a8a]/30'
                    }`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="text-slate-500 text-sm">{p.inventors}</div>
                  <div className="text-gray-600 text-xs mt-2 font-mono">{p.year}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Partners</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Research Collaborations</h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {collaborations.map((name, i) => (
              <AnimatedSection key={name} delay={i * 0.05}>
                <motion.div
                  className="bg-white shadow-sm border-blue-50 border border-blue-100 rounded-xl px-6 py-3 text-slate-700 text-sm hover:border-[#1e3a8a]/30 hover:text-blue-800 transition-all duration-300 cursor-default"
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
