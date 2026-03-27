import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, BookOpen, Globe, Heart, Users, Zap, 
  ChevronRight, Mail, Phone, ExternalLink, 
  MapPin, GraduationCap, Building2, ShieldCheck, 
  Scale, Landmark, Cpu, Handshake, BarChart3, 
  Stethoscope, Rocket
} from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

// --- Data Definitions ---

const visionaries = [
  { name: 'Late Sri. B.M. Sreenivasaiah', role: 'Founder', img: '/about/visionaries/late_bms.jpg' },
  { name: 'Late Sri. B. S. Narayan', role: 'Donor Trustee', img: '/about/visionaries/late_bsn.jpg' },
];

const bogMembers = [
  { name: 'Dr. B.S Ragini Narayan', role: 'Donor Trustee, Member Secretary, BMSET', img: '/about/bog/ragini.jpg', email: 'ragini.narayan@bmsce.ac.in' },
  { name: 'Dr. P. Dayananda Pai', role: 'Chairman, BMSCE, Life Trustee, BMSET', img: '/about/bog/dayananda_pai.jpg', email: 'chairman@bmsce.ac.in' },
  { name: 'Sri. Aviram Sharma', role: 'Trustee, BMSET', img: '/about/bog/aviram_sharma.jpg' },
  { name: 'Dr. Thirumalachari Ramasami', role: 'Trustee, BMSET', img: '/about/bog/thirumalachari.jpg' },
  { name: 'Smt. N. Manjushree I.A.S.', role: 'Member, Commissioner, DTE', img: '/about/bog/default.jpg' },
  { name: 'Dr. L. Ravikumar', role: 'Member, VP Academic', img: '/about/vp_academic.jpg', email: 'viceprincipal@bmsce.ac.in' },
  { name: 'Dr. Seshachalam D', role: 'Member, VP Admin', img: '/about/vp_admin.jpg', email: 'viceprincipal.adm@bmsce.ac.in' },
  { name: 'Col. (Retd.) HS Shankar', role: 'Member, CMD, Alpha Design', img: '/about/bog/hs_shankar.jpg' },
  { name: 'Sri. H. Karan Kumar', role: 'Member, Corporate Coach', img: '/about/bog/karan_kumar.jpg' },
  { name: 'Sri. H. Venkatesh', role: 'Superintendent & Incharge Registrar', img: '/about/bog/venkatesh.jpg' },
  { name: 'Dr. Bheemsha Arya', role: 'Member Secretary, Principal', img: '/about/principal.jpg', email: 'principal@bmsce.ac.in' },
];

const administration = [
  { name: 'Dr. Bheemsha Arya', role: 'Principal', email: 'principal@bmsce.ac.in', img: '/about/principal.jpg' },
  { name: 'Wg Cdr R A Raghavan (R)', role: 'Director, BMSET', email: 'director.admin@bmsce.ac.in', img: '/about/director.png' },
  { name: 'Dr. L. Ravikumar', role: 'Vice Principal - Academic', email: 'viceprincipal@bmsce.ac.in', img: '/about/vp_academic.jpg' },
  { name: 'Dr. Seshachalam D', role: 'Vice Principal - Admin', email: 'viceprincipal.adm@bmsce.ac.in', img: '/about/vp_admin.jpg' },
  { name: 'Dr. C. Lakshminarayana', role: 'COE', email: 'coe@bmsce.ac.in', img: '/about/coe.jpg' },
  { name: 'Dr. Gowrishankar', role: 'Dean - Academic', email: 'dean.academic@bmsce.ac.in', img: '/about/dean_academic.jpg' },
  { name: 'Dr. Rajeswari Hegde', role: 'Dean – Student Affairs', email: 'dean.studentaffairs@bmsce.ac.in', img: '/about/dean_students.jpg' },
  { name: 'Dr. Savithri Bhat', role: 'Dean - Innovation', email: 'dean.innovation@bmsce.ac.in', img: '/about/dean_innovation.jpg' },
  { name: 'Dr. S.B. Bhanu Prashanth', role: 'Dean (FYB)', email: 'dean.fyb@bmsce.ac.in', img: '/about/dean_fyb.jpg' },
  { name: 'Dr. J. Sharana Basavaraj', role: 'Dean - Placements', email: 'placement@bmsce.ac.in', img: '/about/dean_placement.jpg' },
];

const staffMembers = [
  { name: 'Latha N.', role: 'Superintendent (Accounts)', email: 'latha.acc@bmsce.ac.in' },
  { name: 'S. Manjula', role: 'Superintendent (Establishment)', email: 'manjula.est@bmsce.ac.in' },
  { name: 'Sujatha R.', role: 'FDA', email: 'sujatha.fda@bmsce.ac.in' },
  { name: 'Kumar S.', role: 'FDA', email: 'kumar.fda@bmsce.ac.in' },
  { name: 'Bhagya M.', role: 'SDA', email: 'bhagya.sda@bmsce.ac.in' },
  { name: 'Shivakumar G.', role: 'Staff', email: 'shiva.staff@bmsce.ac.in' },
];

const groupInstitutions = [
  { name: 'BMS College of Engineering (BMSCE)', year: '1946' },
  { name: 'BMS Institute of Technology (BMSIT)', year: '2002' },
  { name: 'BMS School of Architecture (BMSSA)', year: '2010' },
  { name: 'BMS Law College', year: '1963' },
  { name: 'BMS College for Women', year: '1964' },
  { name: 'BMS Evening College of Engineering', year: '1973' },
  { name: 'BMS College of Commerce & Management', year: '2017' },
];

const sidebarLinks = [
  { id: 'about', label: 'About BMSCE', icon: Building2 },
  { id: 'governing', label: 'Governing Body', icon: ShieldCheck },
  { id: 'admin', label: 'Administration', icon: Landmark },
  { id: 'staff', label: 'Staff Details', icon: Users },
  { id: 'statutory', label: 'Statutory Committee', icon: Scale },
  { id: 'council', label: 'Executive Council', icon: Handshake },
  { id: 'governance', label: 'e-Governance', icon: Cpu },
  { id: 'iiic', label: 'IIIC', icon: Zap },
  { id: 'iqac', label: 'IQAC', icon: BarChart3 },
  { id: 'life', label: 'Life at BMSCE', icon: Rocket },
  { id: 'group', label: 'Group Institutions', icon: Globe },
];

// --- Sub-Components ---

const PersonCardCompact = ({ name, role, email, img }) => (
  <motion.div 
    className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow group"
    whileHover={{ x: 4 }}
  >
    <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
      <img 
        src={img || '/about/bog/default.jpg'} 
        alt={name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
        onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + name + '&background=f1f5f9&color=1e3a8a'; }}
      />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-slate-900 font-bold text-base truncate">{name}</h4>
      <p className="text-blue-800 text-xs font-semibold mb-2 uppercase tracking-tight">{role}</p>
      {email && (
        <a href={`mailto:${email}`} className="flex items-center gap-2 text-slate-500 text-xs hover:text-blue-800 transition-colors">
          <Mail size={12} />
          <span className="truncate">{email}</span>
        </a>
      )}
    </div>
  </motion.div>
);

// --- Main Content Sections ---

const SectionAbout = () => (
  <div className="space-y-12">
    <div className="prose prose-slate max-w-none">
      <h2 className="text-3xl font-serif text-slate-900 mb-6">Founding & Legacy</h2>
      <p className="text-slate-600 leading-relaxed text-lg">
        B.M.S. College of Engineering (BMSCE) was founded in the year 1946 by Late Sri. B. M. Sreenivasaiah, a great visionary and philanthropist. 
        It is the first private sector initiative in engineering education in India. Over the past 78 years of its existence, BMSCE has 
        emerged as one of the finest institutions in the country, maintaining a standard of academic excellence that is recognized globally.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-blue-800">
        <h3 className="text-blue-900 font-bold text-xl mb-4 flex items-center gap-2">
          <Users className="text-blue-800" /> Vision
        </h3>
        <p className="text-slate-600 italic">"Promoting Prosperity of mankind by augmenting human resource capital through Quality Technical Education & Training."</p>
      </div>
      <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-indigo-800">
        <h3 className="text-indigo-900 font-bold text-xl mb-4 flex items-center gap-2">
          <Rocket className="text-indigo-800" /> Mission
        </h3>
        <p className="text-slate-600 italic">"Accomplish excellence in the field of Technical Education through Education, Research and Service needs of society."</p>
      </div>
    </div>
  </div>
);

const SectionGoverningBody = () => (
  <div className="space-y-16">
    <section>
      <h3 className="text-2xl font-serif text-slate-900 mb-8 pb-2 border-b">The Visionaries</h3>
      <div className="grid sm:grid-cols-2 gap-8">
        {visionaries.map(v => <PersonCardCompact key={v.name} {...v} />)}
      </div>
    </section>
    
    <section>
      <h3 className="text-2xl font-serif text-slate-900 mb-8 pb-2 border-b">Board of Governors</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {bogMembers.map(m => <PersonCardCompact key={m.name} {...m} />)}
      </div>
    </section>
  </div>
);

const SectionAdmin = () => (
  <div>
    <h3 className="text-2xl font-serif text-slate-900 mb-8 pb-2 border-b">Administrative Leadership</h3>
    <div className="grid sm:grid-cols-2 gap-4">
      {administration.map(a => <PersonCardCompact key={a.name} {...a} />)}
    </div>
  </div>
);

const SectionStaff = () => (
  <div>
    <h3 className="text-2xl font-serif text-slate-900 mb-8 pb-2 border-b">Administrative & Accounts Staff</h3>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {staffMembers.map(s => (
        <div key={s.name} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
          <h4 className="text-slate-900 font-bold text-sm">{s.name}</h4>
          <p className="text-blue-800 text-[10px] font-bold uppercase mb-2">{s.role}</p>
          <a href={`mailto:${s.email}`} className="text-slate-500 text-xs flex items-center gap-1 hover:text-blue-800">
            <Mail size={10} /> {s.email}
          </a>
        </div>
      ))}
    </div>
  </div>
);

const SectionCells = ({ title, content, icon: Icon }) => (
  <div className="max-w-3xl">
    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
      <Icon className="text-blue-800" size={32} />
    </div>
    <h3 className="text-3xl font-serif text-slate-900 mb-6">{title}</h3>
    <div className="prose prose-slate">
      <p className="text-slate-600 leading-relaxed whitespace-pre-line">{content}</p>
    </div>
  </div>
);

// --- Main Page Component ---

export default function About() {
  const [activeSection, setActiveSection] = useState('about');
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSidebarVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch(activeSection) {
      case 'about': return <SectionAbout />;
      case 'governing': return <SectionGoverningBody />;
      case 'admin': return <SectionAdmin />;
      case 'staff': return <SectionStaff />;
      case 'governance': return <SectionCells 
        title="e-Governance" 
        icon={Cpu}
        content="The e-Governance cell was established to automate and optimize the administrative and academic workflows of the institution. It leverages cutting-edge ICT tools to ensure transparency, efficiency, and real-time data access for all stakeholders." 
      />;
      case 'iiic': return <SectionCells 
        title="Industry Interaction Cell (IIIC)" 
        icon={Handshake}
        content="The IIIC bridges the gap between academia and industry. It facilitates internships, sponsored research Projects, consultancy, and industry visits, ensuring our students are industry-ready." 
      />;
      case 'iqac': return <SectionCells 
        title="Internal Quality Assurance Cell (IQAC)" 
        icon={BarChart3}
        content="IQAC is responsible for internalizing a quality culture within the institution. It monitors academic progress, implementation of best teaching practices, and prepares the institution for national and international accreditations." 
      />;
      case 'life': return (
        <div>
          <h3 className="text-2xl font-serif text-slate-900 mb-6">Campus Culture</h3>
          <p className="text-slate-600 mb-8">BMSCE offers a vibrant environment for holistic growth. From technical clubs to cultural societies, the campus is alive with student-led initiatives.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Inksignia', 'Paramva', 'Augment.AI', 'Bullz Racing', 'GDG', 'IEEE', 'Rotaract', 'Melody'].map(club => (
              <div key={club} className="p-4 text-center bg-white border rounded-xl hover:border-blue-400 cursor-default transition-colors">
                <span className="text-slate-800 font-medium text-sm">{club}</span>
              </div>
            ))}
          </div>
        </div>
      );
      case 'group': return (
        <div>
          <h3 className="text-2xl font-serif text-slate-900 mb-8 pb-2 border-b">BMS Group of Institutions</h3>
          <div className="grid gap-4">
            {groupInstitutions.map(inst => (
              <div key={inst.name} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-white border hover:border-blue-200 transition-all">
                <span className="text-slate-900 font-semibold">{inst.name}</span>
                <span className="text-slate-400 text-xs font-mono">Est. {inst.year}</span>
              </div>
            ))}
          </div>
        </div>
      );
      default: return <SectionAbout />;
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-slate-50/30">
      <PageHero
        title="About BMSCE"
        subtitle="Exploring the rich heritage and future of India's first private engineering college."
        breadcrumb="About"
        accent="Institutional Excellence"
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-blue-900 px-6 py-4">
                <h3 className="text-white font-bold text-xs uppercase tracking-widest">About Us</h3>
              </div>
              <nav className="py-2">
                {sidebarLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        setActiveSection(link.id);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all group ${
                        isActive ? 'text-blue-900 bg-blue-50 border-r-4 border-blue-900' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Icon size={16} className={isActive ? 'text-blue-900' : 'text-slate-400 group-hover:text-blue-900'} />
                      {link.label}
                      {isActive && <ChevronRight size={14} className="ml-auto" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </main>

        </div>
      </div>

    </motion.div>
  );
}
