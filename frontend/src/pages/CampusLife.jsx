import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Calendar, Trophy, MapPin, 
  Music, Camera, Utensils, Heart, 
  ChevronRight, X, Play, Image as ImageIcon,
  Rocket, Cpu, Palette, Code2, Globe, Laptop, HeartHandshake, Mic2
} from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { api } from '../api';

const items = [
  { img: '/gallery/img1.jpg', label: 'ACADEMIC BLOCK', desc: 'The iconic B S Narayan Platinum Jubilee Building.', span: 'col-span-2', bg: 'bg-blue-50' },
  { img: '/gallery/img2.jpg', label: 'SPORTS GROUND', desc: 'Expansive fields for athletics and outdoor sports.', span: 'col-span-1', bg: 'bg-emerald-50' },
  { img: '/gallery/img3.webp', label: 'CAMPUS GYM', desc: 'Fully equipped modern fitness center.', span: 'col-span-1', bg: 'bg-purple-50' },
  { img: '/gallery/img4.webp', label: 'ADMINISTRATIVE HUB', desc: 'The grand reception and administrative entrance.', span: 'col-span-1', bg: 'bg-orange-50' },
  { img: '/gallery/img5.jpg', label: 'CENTRAL LIBRARY', desc: 'A vast repository of knowledge and research.', span: 'col-span-1', bg: 'bg-pink-50' },
  { img: '/gallery/img6.jpg', label: 'ENGINEERING LABS', desc: 'State-of-the-art research and practical spaces.', span: 'col-span-2', bg: 'bg-indigo-50' },
  { img: '/gallery/img7.jpg', label: 'SEMINAR HALLS', desc: 'Professional spaces for workshops and talks.', span: 'col-span-1', bg: 'bg-cyan-50' },
  { img: '/gallery/img8.jpg', label: 'INDOOR SPORTS', desc: 'Multi-purpose court for basketball and badminton.', span: 'col-span-1', bg: 'bg-amber-50' },
];

const clubs = [
  { 
    id: 'augment', 
    name: 'AUGMENT.AI', 
    logo: '/clubs/logo1.png', 
    category: 'Technical', 
    desc: 'BMSCE’s premier AI & Machine Learning club focusing on future-tech innovations, research, and hands-on projects.',
    icon: Cpu,
    color: 'from-blue-600 to-cyan-400'
  },
  { 
    id: 'bullz', 
    name: 'BULLZ RACING', 
    logo: '/clubs/logo2.png', 
    category: 'Engineering', 
    desc: 'The official Formula Student team of BMSCE. We design, build, and race open-wheel formula-style race cars.',
    icon: Rocket,
    color: 'from-red-600 to-orange-400'
  },
  { 
    id: 'fac', 
    name: 'FINE ARTS CLUB', 
    logo: '/clubs/logo3.png', 
    category: 'Cultural', 
    desc: 'A vibrant hub for visual arts, painting, and creative design, fostering artistic expression across the campus.',
    icon: Palette,
    color: 'from-pink-600 to-rose-400'
  },
  { 
    id: 'acm', 
    name: 'ACM STUDENT CHAPTER', 
    logo: '/clubs/logo4.png', 
    category: 'Technical', 
    desc: 'The BMSCE chapter of the Association for Computing Machinery, promoting computing as a science and profession.',
    icon: Code2,
    color: 'from-indigo-600 to-blue-400'
  },
  { 
    id: 'gdg', 
    name: 'GOOGLE DEVELOPER GROUPS', 
    logo: '/clubs/logo6.png', 
    category: 'Technical', 
    desc: 'A community for students interested in Google developer technologies, hosting workshops, hackathons, and talks.',
    icon: Laptop,
    color: 'from-yellow-500 to-green-500'
  },
  { 
    id: 'literary', 
    name: 'LITERARY & DEBATE', 
    logo: '/clubs/logo7.png', 
    category: 'Literary', 
    desc: 'The primary society for debating, creative writing, and literary analysis, representing BMSCE at top national fests.',
    icon: Mic2,
    color: 'from-slate-700 to-slate-500'
  },
  { 
    id: 'isrc', 
    name: 'BMSCE ISRC', 
    logo: '/clubs/logo8.png', 
    category: 'Research', 
    desc: 'Information Security and Research Cell, dedicated to cybersecurity, ethical hacking, and digital privacy research.',
    icon: Globe,
    color: 'from-cyan-600 to-blue-500'
  },
  { 
    id: 'rocktry', 
    name: 'ROCKTRY', 
    logo: '/clubs/logo9.png', 
    category: 'Aerospace', 
    desc: 'A specialized club for model rocketry and aerospace engineering, designing and launching high-power model rockets.',
    icon: Rocket,
    color: 'from-orange-500 to-amber-500'
  },
  { 
    id: 'leo', 
    name: 'BMSCE LEO CLUB', 
    logo: '/clubs/logo10.png', 
    category: 'Social', 
    desc: 'The youth wing of Lions Club International, focusing on leadership, experience, and opportunity through community service.',
    icon: HeartHandshake,
    color: 'from-emerald-600 to-teal-400'
  },
  { 
    id: 'pentagram', 
    name: 'PENTAGRAM', 
    logo: '/clubs/logo15.png', 
    category: 'Technical', 
    desc: 'The official Mathematics Club of BMSCE, exploring the beauty of numbers and logic through puzzles and competitions.',
    icon: Cpu,
    color: 'from-violet-600 to-purple-400'
  },
  { 
    id: 'utsav', 
    name: 'BMSCE UTSAV', 
    logo: '/clubs/logoUtsav.png', 
    category: 'Cultural', 
    desc: 'The core committee behind South India’s biggest inter-collegiate cultural extravaganza, BMSCE UTSAV.',
    icon: Music,
    color: 'from-amber-500 to-pink-500'
  },
  { 
    id: 'phaseshift', 
    name: 'PHASE SHIFT', 
    logo: '/clubs/logoPS.png', 
    category: 'Technical', 
    desc: 'The official group managing BMSCE’s annual international technical symposium, bridging industry and academia.',
    icon: Code2,
    color: 'from-blue-700 to-indigo-500'
  },
];

const events = [
<<<<<<< HEAD
  { name: 'Utsav', type: 'Cultural Fest', month: 'February', desc: 'Three days of music, dance, drama, and art celebrating student creativity', participants: '10,000+' },
  { name: 'Technova', type: 'Tech Fest', month: 'March', desc: 'Annual technical extravaganza with hackathons, robotics, project exhibitions', participants: '8,000+' },
  { name: 'Sports Day', type: 'Athletics', month: 'January', desc: 'Inter-departmental sports tournament across 20+ disciplines', participants: '3,000+' },
  { name: 'Innovate', type: 'Startup Fair', month: 'October', desc: 'Student startup showcase, venture pitches, and entrepreneurship talks', participants: '2,500+' },
  { name: 'Convocation', type: 'Academic', month: 'December', desc: 'Annual degree ceremony celebrating our graduating class achievements', participants: '5,000+' },
  { name: 'Alumni Meet', type: 'Alumni', month: 'November', desc: 'Grand reunion connecting current students with distinguished alumni', participants: '4,000+' },
];

const fallbackGalleryItems = [
  { title: 'Main Building', imageUrl: '', category: 'campus', description: 'The iconic heritage facade of BMSCE' },
  { title: 'Innovation Lab', imageUrl: '', category: 'labs', description: 'State-of-the-art research facilities' },
  { title: 'Sports Complex', imageUrl: '', category: 'campus', description: 'Olympic-standard facilities' },
  { title: 'Central Library', imageUrl: '', category: 'campus', description: '1.5 lakh books and digital resources' },
  { title: 'Utsav Highlights', imageUrl: '', category: 'events', description: 'Annual cultural extravaganza moments' },
  { title: 'Coding Hub', imageUrl: '', category: 'labs', description: 'High-performance systems for students' },
  { title: 'Campus Garden', imageUrl: '', category: 'campus', description: 'Serene green spaces for students' },
  { title: 'Auditorium', imageUrl: '', category: 'events', description: 'Flagship venue for major programs' },
];

const collageSpans = ['md:col-span-2', '', '', '', 'md:col-span-2', '', '', ''];
const placeholderStyles = [
  'from-blue-900 to-blue-800',
  'from-purple-900 to-purple-800',
  'from-green-900 to-green-800',
  'from-amber-900 to-amber-800',
  'from-pink-900 to-pink-800',
  'from-indigo-900 to-indigo-800',
  'from-teal-900 to-teal-800',
  'from-red-900 to-red-800',
=======
  { name: 'Utsav', month: 'MAY', type: 'Cultural', participants: '15,000+', desc: 'One of South India’s largest inter-collegiate cultural fests.' },
  { name: 'Phase Shift', month: 'SEP', type: 'Technical', participants: '10,000+', desc: 'Annual international technical symposium with 100+ events.' },
  { name: 'Kridotsav', month: 'DEC', type: 'Sports', participants: '5,000+', desc: 'Annual inter-departmental sports championship.' },
>>>>>>> 27d893f (Updated Campus Life page)
];

export default function CampusLife() {
  const [selectedImg, setSelectedImg] = useState(null);
<<<<<<< HEAD
  const [galleryItems, setGalleryItems] = useState(fallbackGalleryItems);
  const [galleryLoading, setGalleryLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadGallery = async () => {
      try {
        const res = await api.get('/gallery');
        const remoteItems = Array.isArray(res?.data)
          ? res.data.map((item) => ({
              _id: item._id,
              title: item.title,
              imageUrl: item.imageUrl,
              category: item.category,
              description: item.description || `${item.title} - ${item.category}`,
            }))
          : [];

        if (isMounted && remoteItems.length) {
          setGalleryItems(remoteItems);
        }
      } catch (error) {
        // Keep fallback collage if API is unavailable.
      } finally {
        if (isMounted) setGalleryLoading(false);
      }
    };

    loadGallery();

    return () => {
      isMounted = false;
    };
  }, []);
=======
  const [selectedClub, setSelectedClub] = useState(null);
>>>>>>> 27d893f (Updated Campus Life page)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Page Hero */}
      <PageHero
        title="Campus Life"
        subtitle="A vibrant ecosystem of culture, technology, and community beyond the classroom."
        breadcrumb="Campus Life"
        accent="The Experience"
      />

      {/* Experience Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Official Gallery</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Life at BMSCE</h2>
          </AnimatedSection>
<<<<<<< HEAD

          {galleryLoading && (
            <p className="text-center text-slate-500 text-sm mb-6">Loading gallery...</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {galleryItems.map((item, i) => (
              <AnimatedSection key={item._id || item.title} delay={i * 0.07} className={collageSpans[i % collageSpans.length]}>
                <motion.div
                  className={`rounded-2xl overflow-hidden cursor-pointer group border border-blue-100 hover:border-[#1e3a8a]/30 transition-all duration-300 h-full ${!item.imageUrl ? `bg-gradient-to-br ${placeholderStyles[i % placeholderStyles.length]}` : 'bg-slate-900'}`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImg(item)}
                >
                  <div className="w-full h-full relative">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-5xl">📸</div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-full px-4 pb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-white font-semibold text-sm">{item.title}</div>
                        <div className="text-white/80 text-xs mt-1 line-clamp-2">{item.description}</div>
                        <div className="text-white/70 text-[11px] mt-1 uppercase tracking-wide">{item.category}</div>
                      </div>
=======
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
            {items.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05} className={item.span}>
                <motion.div
                  className="w-full h-full rounded-3xl overflow-hidden cursor-pointer group relative bg-slate-100"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImg(item)}
                >
                  <img 
                    src={item.img} 
                    alt={item.label} 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-white font-mono text-[10px] tracking-widest uppercase mb-1 drop-shadow-md">OFFICIAL PHOTO</div>
                      <h4 className="text-white font-bold text-sm leading-tight drop-shadow-md">{item.label}</h4>
>>>>>>> 27d893f (Updated Campus Life page)
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Full-screen modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 z-[200] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[210]">
              <X size={32} />
            </button>

            <motion.div
<<<<<<< HEAD
              className="bg-slate-900 rounded-3xl p-6 max-w-4xl w-full text-center border border-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              {selectedImg.imageUrl ? (
                <img
                  src={selectedImg.imageUrl}
                  alt={selectedImg.title}
                  className="w-full max-h-[70vh] object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-8xl">📸</div>
              )}

              <div className="pt-5 text-left">
                <h3 className="text-white font-serif text-3xl font-light mb-2">{selectedImg.title}</h3>
                <p className="text-white/80 text-sm">{selectedImg.description}</p>
              </div>

              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                onClick={() => setSelectedImg(null)}
                aria-label="Close image preview"
              >
                <X size={18} />
              </button>
=======
              className="max-w-5xl w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 aspect-video bg-slate-100">
                  <img 
                    src={selectedImg.img} 
                    alt={selectedImg.label} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/3 p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <ImageIcon size={16} className="text-blue-800" />
                    <span className="text-blue-800 font-mono text-[10px] tracking-widest font-bold uppercase">Campus Snapshot</span>
                  </div>
                  <h3 className="text-slate-900 font-serif text-3xl font-light mb-4 leading-tight">
                    {selectedImg.label}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {selectedImg.desc}
                  </p>
                  <div className="pt-8 border-t border-slate-100 flex items-center gap-3">
                    <Calendar size={14} className="text-slate-400" />
                    <span className="text-slate-400 text-xs font-mono">BMSCE Official Archive</span>
                  </div>
                </div>
              </div>
>>>>>>> 27d893f (Updated Campus Life page)
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clubs & Societies */}
      <section className="py-24 bg-white border-t border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Community</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Clubs & Societies</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, i) => (
              <AnimatedSection key={club.name} delay={i * 0.08}>
                <motion.div
<<<<<<< HEAD
                  className="bg-white shadow-sm border border-blue-100 rounded-2xl p-6 group hover:border-[#1e3a8a]/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
=======
                  className="bg-slate-50/50 border border-slate-100 rounded-[2rem] p-8 group hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedClub(club)}
>>>>>>> 27d893f (Updated Campus Life page)
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center overflow-hidden p-2 group-hover:scale-110 transition-transform duration-500">
                      <img src={club.logo} alt={club.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] font-mono text-blue-800 bg-[#1e3a8a]/5 px-3 py-1 rounded-full font-bold uppercase tracking-wider">{club.category}</span>
                  </div>
                  <h3 className="text-slate-900 font-bold mb-3 group-hover:text-blue-800 transition-colors uppercase text-sm tracking-tight">{club.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-6">{club.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-400 text-[9px] font-mono uppercase tracking-widest font-bold">
                      <Users size={12} className="text-blue-800" /> Member Portal
                    </div>
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-800 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Club Detail Modal */}
      <AnimatePresence>
        {selectedClub && (
          <motion.div
            className="fixed inset-0 z-[300] bg-slate-900/40 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedClub(null)}
          >
            <motion.div
              className="bg-white rounded-[3rem] shadow-2xl w-full max-w-2xl overflow-hidden relative"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Top Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${selectedClub.color} relative overflow-hidden flex items-end justify-center p-6`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-20 -mt-20 blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-10 -mb-10 blur-xl" />
                </div>
                <div className="relative z-10 text-white font-mono text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Official Student Body</div>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedClub(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/20 text-white hover:bg-white hover:text-slate-900 transition-all z-20"
              >
                <X size={20} />
              </button>

              <div className="px-10 pb-12 -mt-10 relative z-10">
                <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-50">
                  <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                    <div className="w-24 h-24 rounded-3xl bg-slate-50 p-4 border border-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                      <img src={selectedClub.logo} alt={selectedClub.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest mb-1">{selectedClub.category} Society</div>
                      <h3 className="text-slate-900 font-serif text-4xl font-light mb-2">{selectedClub.name}</h3>
                      <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Active Chapter • Recruitment Open</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <selectedClub.icon size={16} className="text-blue-800" />
                        <h4 className="text-xs font-mono font-bold text-blue-800 uppercase tracking-widest">About the Club</h4>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {selectedClub.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                      <button className="flex items-center justify-center gap-2 py-3 bg-blue-50 text-blue-800 rounded-2xl text-xs font-bold hover:bg-blue-100 transition-colors">
                        Follow Updates
                      </button>
                      <button className="flex items-center justify-center gap-2 py-3 bg-[#1e3a8a] text-white rounded-2xl text-xs font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
                        Join Society
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Events */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Calendar</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Major Events</h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-8">
            {events.map((ev, i) => (
              <AnimatedSection key={ev.name} delay={i * 0.1}>
                <motion.div
<<<<<<< HEAD
                  className="bg-white shadow-sm border border-blue-100 rounded-2xl p-7 group hover:border-[#1e3a8a]/30 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ y: -5 }}
=======
                  className="bg-white border border-slate-100 rounded-[2.5rem] p-10 group hover:border-[#1e3a8a]/30 transition-all duration-500 relative overflow-hidden flex flex-col"
                  whileHover={{ y: -8 }}
>>>>>>> 27d893f (Updated Campus Life page)
                >
                  <div className="text-slate-300 font-mono text-[40px] font-bold absolute top-6 right-8 leading-none opacity-50">{ev.month}</div>
                  <div className="text-blue-800 text-[10px] font-mono font-bold mb-6 border border-[#1e3a8a]/20 px-3 py-1 rounded-full inline-block w-fit uppercase tracking-widest">{ev.type}</div>
                  <h3 className="text-slate-900 font-serif text-3xl font-light mb-4 group-hover:text-blue-800 transition-colors uppercase tracking-tight">{ev.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">{ev.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="text-slate-600 text-[11px] flex items-center gap-2 font-mono uppercase tracking-wider">
                      <Users size={14} className="text-blue-800" />
                      {ev.participants} participants
                    </div>
                    <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-800 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Infrastructure</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Campus Amenities</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🏠', name: 'Hostel', detail: '2,000+ beds' },
              { emoji: '🍽️', name: 'Cafeteria', detail: '5 outlets' },
              { emoji: '🏊', name: 'Swimming Pool', detail: 'National Standard' },
              { emoji: '🏋️', name: 'Modern Gym', detail: 'Fully equipped' },
              { emoji: '📚', name: 'Digital Library', detail: '24×7 access' },
              { emoji: '🏥', name: 'Health Centre', detail: 'On-campus clinic' },
              { emoji: '🚌', name: 'Transport', detail: 'AC/Non-AC fleet' },
              { emoji: '🌐', name: 'Giga-bit Wi-Fi', detail: 'Campus-wide' },
            ].map((a, i) => (
              <AnimatedSection key={a.name} delay={i * 0.06}>
                <motion.div
<<<<<<< HEAD
                  className="bg-white shadow-sm border border-blue-100 rounded-2xl p-5 text-center group hover:border-[#1e3a8a]/30 transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.02 }}
=======
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center group hover:bg-white hover:border-[#1e3a8a]/30 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4 }}
>>>>>>> 27d893f (Updated Campus Life page)
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">{a.emoji}</div>
                  <div className="text-slate-900 font-bold mb-1 group-hover:text-blue-800 transition-colors uppercase text-[11px] tracking-wider">{a.name}</div>
                  <div className="text-slate-500 text-[10px] font-mono">{a.detail}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
