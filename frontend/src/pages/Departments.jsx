import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  Users, BookOpen, ChevronRight, X, Calendar, 
  Trophy, GraduationCap, Microscope, Building2,
  CheckCircle2, Target, Lightbulb
} from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { departmentDetails } from '../data/departmentData';

const departments = [
  {
    id: 'cse', code: 'CSE', name: 'Computer Science & Engineering', emoji: '💻',
    color: 'from-blue-600 to-cyan-500', bg: 'bg-blue-500/10', border: 'border-blue-500/30',
    students: 960, faculty: 52,
    shortDesc: 'Established in 1983, CSE is a model center for frontier education in AI, Machine Learning, and Software Systems.'
  },
  {
    id: 'ece', code: 'ECE', name: 'Electronics & Communication Engineering', emoji: '📡',
    color: 'from-purple-600 to-pink-500', bg: 'bg-purple-500/10', border: 'border-purple-500/30',
    students: 720, faculty: 44,
    shortDesc: 'A premier department since 1971, bridging electronics and communication with global standards.'
  },
  {
    id: 'mech', code: 'MECH', name: 'Mechanical Engineering', emoji: '⚙️',
    color: 'from-orange-500 to-red-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30',
    students: 480, faculty: 38,
    shortDesc: 'The founding department of BMSCE (1946), offering comprehensive programs in design and robotics.'
  },
  {
    id: 'civil', code: 'CIVIL', name: 'Civil Engineering', emoji: '🏗️',
    color: 'from-green-600 to-teal-500', bg: 'bg-green-500/10', border: 'border-green-500/30',
    students: 360, faculty: 30,
    shortDesc: 'A center of excellence established in 1946, specializing in infrastructure and environmental ethics.'
  },
  {
    id: 'eee', code: 'EEE', name: 'Electrical & Electronics Engineering', emoji: '⚡',
    color: 'from-yellow-500 to-amber-600', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30',
    students: 360, faculty: 32,
    shortDesc: 'FACILITATING competent professionals in Electrical Sciences since 1946.'
  },
  {
    id: 'ise', code: 'ISE', name: 'Information Science & Engineering', emoji: '🔬',
    color: 'from-indigo-600 to-violet-500', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30',
    students: 480, faculty: 35,
    shortDesc: 'Focused on the art of Creativity and Productivity in Information Technology since 1987.'
  },
  {
    id: 'bio', code: 'BT', name: 'Biotechnology', emoji: '🧬',
    color: 'from-emerald-500 to-lime-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30',
    students: 240, faculty: 25,
    shortDesc: 'Combining biology and engineering to develop solutions for mankind since 2002.'
  },
  {
    id: 'chem', code: 'CHE', name: 'Chemical Engineering', emoji: '⚗️',
    color: 'from-pink-500 to-rose-500', bg: 'bg-pink-500/10', border: 'border-pink-500/30',
    students: 240, faculty: 22,
    shortDesc: 'A globally recognized department since 1995, imparting quality exposure to budding engineers.'
  },
];

const StatItem = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center justify-center px-4 py-2 border-r border-slate-100 last:border-0 min-w-[120px]">
    <Icon size={16} className="text-blue-600 mb-1" />
    <span className="text-[10px] text-slate-400 uppercase font-mono tracking-tighter">{label}</span>
    <span className="text-xs font-bold text-slate-700">{value}</span>
  </div>
);

const DepartmentModal = ({ deptId, onClose }) => {
  const dept = departments.find(d => d.id === deptId);
  const info = departmentDetails[deptId];
  if (!info) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
        >
          <X size={20} className="text-slate-400" />
        </button>

        {/* Modal Header */}
        <div className="p-8 pb-4">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-4xl">{dept.emoji}</span>
            <div>
              <div className="text-blue-800 font-mono text-xs font-bold tracking-widest uppercase">{dept.code}</div>
              <h2 className="text-2xl font-serif text-slate-900 leading-tight">{dept.name}</h2>
            </div>
          </div>
        </div>

        {/* Horizontal Info Bar */}
        <div className="px-8 pb-6">
          <div className="bg-slate-50/80 border border-slate-100 rounded-2xl flex py-3 overflow-x-auto no-scrollbar">
            <StatItem icon={Calendar} label="Since" value={info.stats.established} />
            <StatItem icon={GraduationCap} label="UG Intake" value={dept.students} />
            <StatItem icon={CheckCircle2} label="Accreditation" value="Tier-I" />
            <StatItem icon={Users} label="Faculty" value={dept.faculty} />
            <StatItem icon={Microscope} label="Research" value="Active" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 pt-0 space-y-8 scroll-smooth">
          {/* About Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={18} className="text-blue-800" />
              <h3 className="text-xs font-mono font-bold text-blue-800 uppercase tracking-widest">About Department</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <p className="flex-1 text-slate-600 leading-relaxed text-sm">{info.about}</p>
              
              {/* HOD Section */}
              {info.hod && (
                <div className="shrink-0 w-full md:w-52 bg-slate-50 border border-slate-100 p-5 rounded-2xl flex md:flex-col items-center gap-4 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-200">
                    <img 
                      src={info.hod.img} 
                      alt={info.hod.name} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + info.hod.name + '&background=f1f5f9&color=1e3a8a'; }}
                    />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm leading-tight mb-1">{info.hod.name}</h4>
                    <p className="text-[10px] text-blue-800 font-bold uppercase tracking-widest leading-none">Head of Department</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Vision Section */}
          <section className="bg-blue-50/30 p-6 rounded-2xl border border-blue-50">
            <div className="flex items-center gap-2 mb-4">
              <Target size={18} className="text-blue-800" />
              <h3 className="text-xs font-mono font-bold text-blue-800 uppercase tracking-widest">Vision</h3>
            </div>
            <p className="text-slate-700 font-medium italic text-sm">{info.vision}</p>
          </section>

          {/* Mission Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb size={18} className="text-blue-800" />
              <h3 className="text-xs font-mono font-bold text-blue-800 uppercase tracking-widest">Mission</h3>
            </div>
            <div className="space-y-3">
              {info.mission.map((m, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-[10px] font-bold text-blue-800">
                    {i + 1}
                  </div>
                  <p className="text-slate-600">{m}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Highlights */}
          <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Trophy size={16} className="text-amber-500" />
              <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{info.stats.nba}</span>
            </div>
            <div className="flex items-center gap-3 text-right justify-end">
              <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{info.stats.research}</span>
              <BookOpen size={16} className="text-blue-500" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Departments() {
  const [selectedDept, setSelectedDept] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Check for hash in URL (e.g., #cse)
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const validDept = departments.find(d => d.id === id);
      if (validDept) {
        setSelectedDept(id);
      }
    }
  }, [location.hash]);

  const handleClose = () => {
    setSelectedDept(null);
    // Remove hash from URL without reloading
    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Page Hero */}
      <PageHero
        title="Engineering Departments"
        subtitle="14 excellence centers shaping the engineers of tomorrow with legacy and innovation."
        breadcrumb="Departments"
        accent="Academics"
      />

      {/* Departments Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {departments.map((dept, i) => (
              <AnimatedSection key={dept.id} delay={i * 0.05}>
                <motion.div
                  onClick={() => setSelectedDept(dept.id)}
                  className="bg-white group cursor-pointer h-full flex flex-col"
                  whileHover={{ y: -8 }}
                >
                  {/* Card Front */}
                  <div className="relative p-7 border border-slate-100 rounded-[2rem] bg-white shadow-sm group-hover:shadow-xl transition-all duration-300 flex-1 flex flex-col">
                    {/* Top strip */}
                    <div className={`h-1.5 w-16 mb-6 rounded-full bg-gradient-to-r ${dept.color}`} />
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-500 block transform group-hover:scale-110">
                          {dept.emoji}
                        </span>
                        <div className="text-slate-300 font-mono text-[10px] tracking-widest">{dept.code}</div>
                      </div>
                      
                      <h3 className="text-slate-800 font-bold text-base mb-3 leading-snug group-hover:text-blue-900 transition-colors">
                        {dept.name}
                      </h3>
                      
                      <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-3 mb-6">
                        {dept.shortDesc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
                      <div className="flex gap-3 text-[10px] text-slate-400 font-medium font-mono">
                        <span className="flex items-center gap-1"><Users size={12} /> {dept.students}</span>
                        <span className="flex items-center gap-1"><BookOpen size={12} /> {dept.faculty}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <ChevronRight size={14} className="text-slate-400 group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedDept && (
          <DepartmentModal 
            deptId={selectedDept} 
            onClose={handleClose} 
          />
        )}
      </AnimatePresence>

    </motion.div>
  );
}
