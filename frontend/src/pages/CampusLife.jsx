import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, Code, Trophy, Palette, Users, Dumbbell, Camera, BookOpen } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { api } from '../api';

const clubs = [
  { icon: Code, name: 'BMSIT Coding Club', members: 420, category: 'Technical', desc: 'Weekly hackathons, competitive programming, and industry workshops.' },
  { icon: Music, name: 'Crescendo Music', members: 180, category: 'Cultural', desc: 'Western and classical music — performances, jam sessions, annual concerts.' },
  { icon: Trophy, name: 'Sports Council', members: 800, category: 'Sports', desc: 'Managing all inter-college sports events, training programs, and tournaments.' },
  { icon: Palette, name: 'Artistry Fine Arts', members: 220, category: 'Cultural', desc: 'Painting, sculpture, digital art, and annual art exhibitions.' },
  { icon: Users, name: 'NSS Unit', members: 350, category: 'Social', desc: 'Community service, rural development, health camps, and awareness drives.' },
  { icon: Camera, name: 'Shutter Club', members: 160, category: 'Cultural', desc: 'Photography and videography — campus events, competitions, workshops.' },
  { icon: Dumbbell, name: 'Fitness Hub', members: 500, category: 'Sports', desc: 'Gym, yoga, wellness programs, and mental health initiatives.' },
  { icon: BookOpen, name: 'Literati', members: 280, category: 'Literary', desc: 'Debates, Model UN, creative writing, poetry slam, and quizzes.' },
];

const events = [
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
];

export default function CampusLife() {
  const [selectedImg, setSelectedImg] = useState(null);
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

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero
        title="Campus Life"
        subtitle="Vibrant, inclusive, and endlessly enriching — life at BMSCE goes far beyond the classroom."
        breadcrumb="Campus Life"
        accent="Experience BMSCE"
      />

      {/* Interactive Gallery */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Visual Tour</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Our Campus</h2>
            <p className="text-slate-600 mt-4">Click any image to explore</p>
          </AnimatedSection>

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
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clubs */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Student Life</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Clubs & Societies</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clubs.map((club, i) => (
              <AnimatedSection key={club.name} delay={i * 0.08}>
                <motion.div
                  className="bg-white shadow-sm border border-blue-100 rounded-2xl p-6 group hover:border-[#1e3a8a]/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center">
                      <club.icon size={18} className="text-blue-800" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-600 border border-blue-100 px-2 py-0.5 rounded-full">{club.category}</span>
                  </div>
                  <h3 className="text-slate-900 font-semibold mb-2 group-hover:text-blue-800 transition-colors">{club.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3">{club.desc}</p>
                  <div className="text-gray-600 text-xs font-mono">{club.members} members</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Calendar</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Major Events</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((ev, i) => (
              <AnimatedSection key={ev.name} delay={i * 0.1}>
                <motion.div
                  className="bg-white shadow-sm border border-blue-100 rounded-2xl p-7 group hover:border-[#1e3a8a]/30 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-4 right-5 text-gray-700 font-mono text-xs">{ev.month}</div>
                  <div className="text-blue-800 text-xs font-mono mb-2 border border-[#1e3a8a]/20 px-2 py-0.5 rounded-full inline-block">{ev.type}</div>
                  <h3 className="text-slate-900 font-serif text-2xl font-light mb-3 group-hover:text-blue-800 transition-colors">{ev.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{ev.desc}</p>
                  <div className="text-slate-600 text-sm flex items-center gap-2">
                    <Users size={13} className="text-blue-800" />
                    {ev.participants} participants
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Hostel & Amenities */}
      <section className="py-24 bg-white shadow-sm border-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-blue-800 font-mono text-sm tracking-widest uppercase block mb-4">Infrastructure</span>
            <h2 className="font-serif text-5xl font-light text-slate-900">Campus Amenities</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { emoji: '🏠', name: 'Hostel', detail: '2,000+ beds' },
              { emoji: '🍽️', name: 'Cafeteria', detail: '5 outlets' },
              { emoji: '🏊', name: 'Swimming Pool', detail: '25m Olympic pool' },
              { emoji: '🏋️', name: 'Gym', detail: 'Fully equipped' },
              { emoji: '📚', name: 'Library', detail: '24×7 access' },
              { emoji: '🏥', name: 'Health Centre', detail: 'On-campus clinic' },
              { emoji: '🚌', name: 'Transport', detail: '35 bus routes' },
              { emoji: '🌐', name: 'Wi-Fi Campus', detail: '1 Gbps internet' },
            ].map((a, i) => (
              <AnimatedSection key={a.name} delay={i * 0.06}>
                <motion.div
                  className="bg-white shadow-sm border border-blue-100 rounded-2xl p-5 text-center group hover:border-[#1e3a8a]/30 transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{a.emoji}</div>
                  <div className="text-slate-900 font-semibold text-sm group-hover:text-blue-800 transition-colors">{a.name}</div>
                  <div className="text-slate-500 text-xs mt-1">{a.detail}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
