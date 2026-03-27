import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Award, ChevronDown } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const departments = [
  {
    id: 'cse', code: 'CSE', name: 'Computer Science & Engineering', emoji: '💻',
    color: 'from-blue-600 to-cyan-500', bg: 'bg-blue-500/10', border: 'border-blue-500/30',
    students: 960, faculty: 52, established: 1970,
    programs: ['B.E. – 240 seats', 'M.Tech – 24 seats', 'Ph.D. Program'],
    specializations: ['AI & Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Data Science'],
    desc: 'One of the most sought-after departments, offering cutting-edge programs in software engineering, AI, and systems design. Our graduates lead technology at Google, Microsoft, and 300+ companies globally.',
    hod: 'Dr. Suresh Kumar B.N.',
    facilities: ['HPC Lab', 'AI Research Centre', 'Cybersecurity Lab', 'Innovation Hub'],
  },
  {
    id: 'ece', code: 'ECE', name: 'Electronics & Communication Engineering', emoji: '📡',
    color: 'from-purple-600 to-pink-500', bg: 'bg-purple-500/10', border: 'border-purple-500/30',
    students: 720, faculty: 44, established: 1966,
    programs: ['B.E. – 180 seats', 'M.Tech – 18 seats', 'Ph.D. Program'],
    specializations: ['VLSI Design', 'Embedded Systems', 'Signal Processing', 'IoT'],
    desc: 'A premier department bridging electronics and communication, equipping students with expertise in VLSI, embedded systems, and wireless technologies.',
    hod: 'Dr. Anitha P.',
    facilities: ['VLSI Lab', 'Communication Lab', 'Embedded Systems Lab', 'RF Lab'],
  },
  {
    id: 'mech', code: 'MECH', name: 'Mechanical Engineering', emoji: '⚙️',
    color: 'from-orange-500 to-red-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30',
    students: 480, faculty: 38, established: 1946,
    programs: ['B.E. – 120 seats', 'M.Tech – 18 seats', 'Ph.D. Program'],
    specializations: ['CAD/CAM', 'Thermal Engineering', 'Robotics', 'Manufacturing'],
    desc: 'The founding department of BMSCE, offering comprehensive programs in design, thermal, manufacturing, and robotics engineering.',
    hod: 'Dr. Ravindra M.S.',
    facilities: ['CNC Lab', 'Thermal Lab', 'CAD/CAM Lab', 'Robotics Lab'],
  },
  {
    id: 'civil', code: 'CIVIL', name: 'Civil Engineering', emoji: '🏗️',
    color: 'from-green-600 to-teal-500', bg: 'bg-green-500/10', border: 'border-green-500/30',
    students: 360, faculty: 30, established: 1960,
    programs: ['B.E. – 90 seats', 'M.Tech – 18 seats', 'Ph.D. Program'],
    specializations: ['Structural Engineering', 'Environmental Engg.', 'Transportation', 'Geotechnical'],
    desc: 'Training civil engineers who design and build the infrastructure of tomorrow — from bridges and buildings to water systems and urban transport.',
    hod: 'Dr. Nagaraj B.',
    facilities: ['Structures Lab', 'Geotechnical Lab', 'Environmental Lab', 'Surveying Lab'],
  },
  {
    id: 'eee', code: 'EEE', name: 'Electrical & Electronics Engineering', emoji: '⚡',
    color: 'from-yellow-500 to-amber-600', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30',
    students: 360, faculty: 32, established: 1968,
    programs: ['B.E. – 90 seats', 'M.Tech – 18 seats', 'Ph.D. Program'],
    specializations: ['Power Systems', 'Control Systems', 'Electric Vehicles', 'Renewable Energy'],
    desc: 'Preparing electrical engineers for an era of smart grids, renewable energy, and electric mobility.',
    hod: 'Dr. Latha Ravi',
    facilities: ['Power Systems Lab', 'Control Lab', 'EV Lab', 'Smart Grid Lab'],
  },
  {
    id: 'ise', code: 'ISE', name: 'Information Science & Engineering', emoji: '🔬',
    color: 'from-indigo-600 to-violet-500', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30',
    students: 480, faculty: 35, established: 1995,
    programs: ['B.E. – 120 seats', 'M.Tech – 18 seats', 'Ph.D. Program'],
    specializations: ['Software Engineering', 'Database Systems', 'Networks', 'Web Technologies'],
    desc: 'Focused on the theory and practice of information systems, software development, and networking.',
    hod: 'Dr. Pushpa B.T.',
    facilities: ['Software Lab', 'Networking Lab', 'Database Lab', 'Research Lab'],
  },
  {
    id: 'bio', code: 'BT', name: 'Biotechnology', emoji: '🧬',
    color: 'from-emerald-500 to-lime-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30',
    students: 240, faculty: 25, established: 2002,
    programs: ['B.E. – 60 seats', 'M.Tech – 18 seats', 'Ph.D. Program'],
    specializations: ['Bioinformatics', 'Genetic Engineering', 'Pharmaceutical Biotech', 'Environmental Biotech'],
    desc: 'Combining biological sciences with engineering principles to develop solutions in healthcare, agriculture, and environment.',
    hod: 'Dr. Usha M.',
    facilities: ['Bioprocess Lab', 'Genetic Lab', 'Fermentation Lab', 'Analytical Lab'],
  },
  {
    id: 'chem', code: 'CHE', name: 'Chemical Engineering', emoji: '⚗️',
    color: 'from-pink-500 to-rose-500', bg: 'bg-pink-500/10', border: 'border-pink-500/30',
    students: 240, faculty: 22, established: 1985,
    programs: ['B.E. – 60 seats', 'M.Tech – 18 seats', 'Ph.D. Program'],
    specializations: ['Process Engineering', 'Petrochemicals', 'Nanotechnology', 'Polymer Science'],
    desc: 'Developing chemical engineers proficient in process design, scale-up, and sustainable manufacturing.',
    hod: 'Dr. Srinivasan K.',
    facilities: ['Process Lab', 'Fluid Mechanics Lab', 'Heat Transfer Lab', 'Polymer Lab'],
  },
];

export default function Departments() {
  const [selected, setSelected] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Our Departments"
        subtitle="14 departments offering world-class programs across all engineering disciplines."
        breadcrumb="Departments"
        accent="Academic Units"
      />

      <section className="py-16 bg-[#001A33]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {departments.map((dept, i) => (
              <AnimatedSection key={dept.id} delay={i * 0.07}>
                <motion.div
                  className={`bg-[#003366] border ${selected === dept.id ? dept.border : 'border-white/5'} 
                              rounded-2xl overflow-hidden cursor-pointer transition-all duration-300`}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(201,168,76,0.3)' }}
                  onClick={() => setSelected(selected === dept.id ? null : dept.id)}
                >
                  {/* Card header */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${dept.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{dept.emoji}</span>
                        <div>
                          <div className="text-[#D32F2F] font-mono text-xs">{dept.code}</div>
                          <h3 className="text-white font-semibold text-sm leading-snug">{dept.name}</h3>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: selected === dept.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} className="text-gray-500" />
                      </motion.div>
                    </div>

                    <div className="flex gap-4 mb-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Users size={12} /> {dept.students} students</span>
                      <span className="flex items-center gap-1"><BookOpen size={12} /> {dept.faculty} faculty</span>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{dept.desc}</p>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {selected === dept.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-white/5 space-y-4">
                            <div>
                              <div className="text-[#D32F2F] text-xs font-mono mb-2">PROGRAMS OFFERED</div>
                              {dept.programs.map(p => (
                                <div key={p} className="text-gray-400 text-sm flex items-center gap-2 mb-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F]" />
                                  {p}
                                </div>
                              ))}
                            </div>

                            <div>
                              <div className="text-[#D32F2F] text-xs font-mono mb-2">SPECIALIZATIONS</div>
                              <div className="flex flex-wrap gap-2">
                                {dept.specializations.map(s => (
                                  <span key={s} className="bg-white/5 text-gray-400 text-xs px-2 py-1 rounded-full border border-white/10">
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <div className="text-[#D32F2F] text-xs font-mono mb-2">FACILITIES</div>
                              <div className="grid grid-cols-2 gap-1">
                                {dept.facilities.map(f => (
                                  <div key={f} className="text-gray-500 text-xs flex items-center gap-1">
                                    <span className="text-[#D32F2F]">→</span> {f}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="text-xs text-gray-600">
                              HoD: <span className="text-gray-400">{dept.hod}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
