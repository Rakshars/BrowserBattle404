import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  BookOpen, Clock, Award, ChevronDown, 
  ArrowRight, Download, Calendar, 
  Monitor, FileText 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const buildCourse = (name, syllabus) => ({ name, syllabus });

const programs = [
  {
    level: 'Undergraduate (B.E.)',
    tag: 'UG',
    color: 'from-blue-600 to-cyan-500',
    duration: '4 Years',
    seats: '930 seats',
    desc: 'AICTE-approved 4-year full-time programs affiliated to VTU.',
    courses: [
      buildCourse('Computer Science & Engineering', ['Programming fundamentals, data structures, and OOP', 'Database systems, operating systems, and computer networks', 'Web development, cloud fundamentals, and cybersecurity basics']),
      buildCourse('Electronics & Communication Engineering', ['Analog and digital electronics with circuit design', 'Signals, systems, communication theory, and DSP', 'Embedded systems, VLSI basics, and IoT applications']),
      buildCourse('Mechanical Engineering', ['Engineering mechanics, thermodynamics, and fluid mechanics', 'Manufacturing processes, machine design, and CAD tools', 'Heat transfer, automation basics, and industrial applications']),
      buildCourse('Civil Engineering', ['Structural analysis, concrete technology, and surveying', 'Geotechnical engineering and transportation planning', 'Environmental engineering, project planning, and estimation']),
      buildCourse('Electrical & Electronics Engineering', ['Electrical circuits, machines, and power systems', 'Control systems, power electronics, and instrumentation', 'Renewable energy systems and smart grid fundamentals']),
      buildCourse('Information Science & Engineering', ['Data structures, algorithms, and software engineering', 'Data analytics, AI foundations, and cloud computing', 'Cybersecurity principles, DevOps basics, and full-stack systems']),
      buildCourse('Biotechnology', ['Cell biology, microbiology, and genetic engineering basics', 'Bioprocess engineering and downstream processing', 'Bioinformatics applications and biomedical ethics']),
      buildCourse('Chemical Engineering', ['Material and energy balances with process calculations', 'Reaction engineering, thermodynamics, and transport phenomena', 'Process control, plant design, and industrial safety']),
      buildCourse('Industrial Engineering & Management', ['Operations research and production planning methods', 'Quality engineering, lean systems, and supply chain basics', 'Engineering economics and project management frameworks']),
      buildCourse('Aeronautical Engineering', ['Aerodynamics and aircraft structures fundamentals', 'Propulsion systems and flight mechanics', 'Avionics basics and aircraft design projects']),
    ],
  },
  {
    level: 'Postgraduate (M.Tech)',
    tag: 'PG',
    color: 'from-purple-600 to-pink-500',
    duration: '2 Years',
    seats: '180 seats',
    desc: 'Specialised postgraduate programs with research components.',
    courses: [
      buildCourse('Machine Learning & AI', ['Supervised and unsupervised learning with model evaluation', 'Deep learning architectures and optimization methods', 'MLOps pipelines, deployment workflows, and ethical AI']),
      buildCourse('VLSI Design & Embedded Systems', ['CMOS design flow, verification, and fabrication basics', 'Real-time embedded architecture and RTOS concepts', 'FPGA prototyping, SoC integration, and hardware validation']),
      buildCourse('Structural Engineering', ['Advanced structural analysis and finite element methods', 'Earthquake-resistant design and performance evaluation', 'Bridge engineering, durability, and rehabilitation studies']),
      buildCourse('Power Electronics', ['Converter topologies and switched-mode power supplies', 'Motor drives, control strategies, and industrial automation', 'EV powertrain electronics and renewable integration']),
      buildCourse('Software Engineering', ['Advanced software architecture and design patterns', 'Quality assurance, testing automation, and reliability engineering', 'Distributed systems, observability, and software project leadership']),
      buildCourse('CAD/CAM', ['Parametric CAD modeling and geometric design workflows', 'CNC programming, toolpath generation, and simulation', 'Digital manufacturing, reverse engineering, and product lifecycle tools']),
      buildCourse('Environmental Engineering', ['Water and wastewater treatment process design', 'Air pollution control and environmental impact assessment', 'Sustainability metrics, policy, and climate resilience planning']),
      buildCourse('Biomedical Signal Processing', ['Physiological signal acquisition and preprocessing methods', 'Feature extraction, denoising, and pattern recognition', 'Clinical decision support and wearable health analytics']),
    ],
  },
  {
    level: 'Doctoral (Ph.D.)',
    tag: 'PhD',
    color: 'from-amber-500 to-orange-500',
    duration: '3–5 Years',
    seats: 'Rolling Admissions',
    desc: 'Full-time and part-time research programs across all departments.',
    courses: [
      buildCourse('Engineering & Technology', ['Research methodology and publication ethics', 'Advanced domain electives and seminar presentations', 'Proposal development, dissertation writing, and thesis defense']),
      buildCourse('Applied Sciences', ['Advanced mathematical and computational techniques', 'Experimental design and statistical analysis methods', 'Domain-focused research with publication milestones']),
      buildCourse('Management Studies', ['Research methods in management and behavioral science', 'Strategic management frameworks and data-driven analysis', 'Case-based inquiry and thesis with industry relevance']),
      buildCourse('Interdisciplinary Research', ['Cross-domain problem framing and systems thinking', 'Collaborative methods spanning engineering, science, and management', 'Integrated thesis with multi-disciplinary impact evaluation']),
    ],
  },
];

const calendar = [
  { event: 'Semester I (Odd) Classes Begin', date: 'Jul 22, 2025', type: 'academic' },
  { event: 'Orientation & Club Expo', date: 'Jul 24–26, 2025', type: 'community' },
  { event: 'Internal Assessment I', date: 'Sep 8–13, 2025', type: 'exam' },
  { event: 'Engineers Day Lecture Series', date: 'Sep 15, 2025', type: 'event' },
  { event: 'PHASESHIFT 2025 (Technical Fest)', date: 'Oct 3–5, 2025', type: 'technical' },
  { event: 'Mid-Sem Break', date: 'Oct 20–24, 2025', type: 'break' },
  { event: 'Internal Assessment II', date: 'Nov 10–15, 2025', type: 'exam' },
  { event: 'UTSAV 2025 (Cultural Fest)', date: 'Nov 27–29, 2025', type: 'cultural' },
  { event: 'Semester I End Examinations', date: 'Dec 8–24, 2025', type: 'exam' },
  { event: 'Winter Vacation', date: 'Dec 25, 2025 – Jan 4, 2026', type: 'break' },
  { event: 'Semester II (Even) Classes Begin', date: 'Jan 5, 2026', type: 'academic' },
  { event: 'Inter-Department Sports Meet', date: 'Jan 21–25, 2026', type: 'sports' },
  { event: 'Annual Hackathon', date: 'Feb 13–14, 2026', type: 'technical' },
  { event: 'NSS Social Impact Week', date: 'Feb 23–28, 2026', type: 'community' },
  { event: 'Internal Assessment III', date: 'Mar 9–14, 2026', type: 'exam' },
  { event: 'Research & Innovation Showcase', date: 'Mar 27–28, 2026', type: 'event' },
  { event: 'Alumni Homecoming & Networking', date: 'Apr 11, 2026', type: 'community' },
  { event: 'Farewell & Graduation Week', date: 'Apr 20–25, 2026', type: 'cultural' },
  { event: 'Semester II End Examinations', date: 'May 4–22, 2026', type: 'exam' },
  { event: 'Summer Internship Window Begins', date: 'Jun 1, 2026', type: 'academic' },
];

const typeColors = {
  academic: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  exam: 'bg-red-500/20 text-red-400 border-red-500/30',
  break: 'bg-green-500/20 text-green-400 border-green-500/30',
  event: 'bg-[#1e3a8a]/20 text-blue-800 border-[#1e3a8a]/30',
  technical: 'bg-indigo-500/20 text-indigo-700 border-indigo-500/30',
  cultural: 'bg-pink-500/20 text-pink-700 border-pink-500/30',
  sports: 'bg-emerald-500/20 text-emerald-700 border-emerald-500/30',
  community: 'bg-amber-500/20 text-amber-700 border-amber-500/30',
};

const toSlug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const escapePdfText = value => value.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

const splitLongLine = (line, maxLen = 88) => {
  const words = line.split(' ');
  const chunks = [];
  let current = '';

  words.forEach(word => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLen) {
      if (current) chunks.push(current);
      current = word;
      return;
    }
    current = next;
  });

  if (current) chunks.push(current);
  return chunks;
};

const buildSimplePdfBlob = (title, lines) => {
  const pdfLines = [title, '', ...lines].flatMap(line => splitLongLine(line));
  let y = 790;
  const commands = ['BT', '/F1 12 Tf'];

  pdfLines.forEach(line => {
    commands.push(`72 ${y} Td (${escapePdfText(line)}) Tj`);
    commands.push('0 0 Td');
    y -= 18;
    if (y < 50) return;
  });

  commands.push('ET');
  const contentStream = commands.join('\n');

  const objects = [
    '1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n',
    '2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n',
    '3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >> endobj\n',
    `4 0 obj << /Length ${contentStream.length} >> stream\n${contentStream}\nendstream\nendobj\n`,
    '5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj\n',
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objects.forEach(obj => {
    offsets.push(pdf.length);
    pdf += obj;
  });

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  offsets.forEach(offset => {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return new Blob([pdf], { type: 'application/pdf' });
};

export default function Academics() {
  const [openProgram, setOpenProgram] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      
      // Handle Programs (UG, PG, PhD)
      const progIndex = programs.findIndex(p => p.tag.toLowerCase() === hash);
      if (progIndex !== -1) {
        setOpenProgram(progIndex);
      }

      // Scroll with offset for navbar
      const element = document.getElementById(hash);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location.hash]);

  const handleDownloadSyllabusPdf = (programLevel, course) => {
    const lines = [
      `Program: ${programLevel}`,
      'Core Syllabus Topics:',
      ...course.syllabus.map(topic => `- ${topic}`),
    ];
    const blob = buildSimplePdfBlob(`${course.name} Syllabus`, lines);
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${toSlug(course.name)}-syllabus.pdf`;
    link.click();
    URL.revokeObjectURL(blobUrl);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Academics"
        subtitle="Rigorous programs designed to shape engineers who can solve the world's toughest problems."
        breadcrumb="Academics"
        accent="Programs & Curriculum"
      />

      {/* Programs */}
      <section className="py-24 bg-white shadow-sm border-blue-50" id="ug">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Programs</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Academic Programs</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {programs.map((prog, i) => (
              <AnimatedSection key={prog.tag} delay={i * 0.1}>
                <div id={prog.tag.toLowerCase()} className="scroll-mt-24 bg-white shadow-sm border border-blue-100 rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left group"
                    onClick={() => setOpenProgram(openProgram === i ? null : i)}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-slate-900 font-bold font-mono text-sm`}>
                        {prog.tag}
                      </div>
                      <div>
                        <h3 className="text-slate-900 font-semibold text-lg">{prog.level}</h3>
                        <div className="flex gap-4 text-sm text-slate-500 mt-1">
                          <span className="flex items-center gap-1"><Clock size={12} /> {prog.duration}</span>
                          <span className="flex items-center gap-1"><Award size={12} /> {prog.seats}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: openProgram === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown size={20} className="text-slate-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openProgram === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-blue-100">
                          <p className="text-slate-600 mt-4 mb-6">{prog.desc}</p>
                          <div className="grid lg:grid-cols-2 gap-4">
                            {prog.courses.map(course => (
                              <div key={course.name} className="text-slate-700 text-sm bg-white rounded-xl p-4 border border-blue-100">
                                <div className="flex items-start gap-2 mb-3">
                                  <BookOpen size={14} className="text-blue-800 shrink-0 mt-0.5" />
                                  <h4 className="text-slate-900 font-semibold text-sm leading-snug">{course.name}</h4>
                                </div>
                                <ul className="space-y-1.5 text-slate-600 text-xs leading-relaxed mb-4 pl-5 list-disc">
                                  {course.syllabus.map(topic => (
                                    <li key={`${course.name}-${topic}`}>{topic}</li>
                                  ))}
                                </ul>
                                <button
                                  type="button"
                                  className="inline-flex items-center gap-2 text-blue-800 border border-blue-200 px-3 py-2 rounded-full text-xs hover:bg-blue-50 transition-colors"
                                  onClick={() => handleDownloadSyllabusPdf(prog.level, course)}
                                >
                                  <Download size={13} /> Download Syllabus PDF
                                </button>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 flex gap-3">
                            <button className="btn-primary text-sm px-5 py-2">
                              View Curriculum <ArrowRight size={14} />
                            </button>
                            <button className="flex items-center gap-2 text-slate-600 border border-blue-100 px-5 py-2 rounded-full text-sm hover:border-blue-100 transition-colors">
                              <Download size={14} /> Download Brochure
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-24 bg-white shadow-sm border-blue-50" id="calendar">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Schedule</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Calender Of Events 2025-2026</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {calendar.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 bg-white shadow-sm border border-blue-100 rounded-xl px-5 py-4">
                  <Calendar size={16} className="text-blue-800 shrink-0" />
                  <div className="flex-1">
                    <div className="text-slate-900 font-medium text-sm">{item.event}</div>
                  </div>
                  <div className="text-slate-600 text-sm font-mono">{item.date}</div>
                  <span className={`text-xs px-3 py-1 rounded-full border ${typeColors[item.type]} font-mono`}>
                    {item.type}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-8 flex justify-center">
            <button className="flex items-center gap-2 btn-primary">
              <Download size={16} /> Download Full Calendar
            </button>
          </AnimatedSection>
        </div>
      </section>
      {/* Online Courses */}
      <section className="py-24 bg-slate-50 border-t border-slate-100" id="online">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="text-blue-800" size={32} />
            </div>
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">E-Learning</span>
            <h2 className="font-serif text-4xl font-light text-slate-900 mb-6">Online Courses</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-8">
              We are currently integrating modern e-learning platforms. Specialized online certifications, NPTEL mappings, and VTU-approved digital modules are coming soon.
            </p>
            <button className="px-8 py-3 bg-white border border-blue-200 rounded-full text-blue-800 font-semibold hover:bg-blue-50 transition-all">
              Join Waitlist
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Examination Cell */}
      <section className="py-24 bg-white" id="exam">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#1e3a8a] rounded-[3rem] p-12 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-blue-300" size={24} />
                  <span className="font-mono text-sm tracking-[0.3em] uppercase text-blue-200">Administration</span>
                </div>
                <h2 className="font-serif text-4xl mb-6">Examination Cell</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Access semester results, download hall tickets, and view official notification circulars. The digital portal is synchronized with VTU standards for real-time updates.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:shadow-xl transition-all">
                    Student Portal
                  </button>
                  <button className="bg-blue-800/50 border border-blue-600 px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-blue-700 transition-all">
                    Notifications
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                {[
                  { label: 'GPA Calculator', desc: 'Instant results' },
                  { label: 'Fast Track App', desc: 'Summer exams' },
                  { label: 'Grievance Form', desc: 'Paper re-eval' },
                  { label: 'Fee Payment', desc: 'Exam registration' }
                ].map((stat, i) => (
                  <div key={i} className="bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 p-4 rounded-2xl">
                    <div className="text-sm font-bold mb-1">{stat.label}</div>
                    <div className="text-[10px] text-blue-200 uppercase tracking-widest">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
