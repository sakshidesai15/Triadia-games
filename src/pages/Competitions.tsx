import { motion } from 'motion/react';
import { Trophy, Calendar, MapPin, ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Competitions() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-primary py-32 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6"
          >
            Competitions
          </motion.h1>
          <p className="text-lg text-gray-300 font-light tracking-widest uppercase">
            The Global Stage for Excellence
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl font-bold text-primary uppercase tracking-wider mb-4">Competition Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Triadia Games offers structured competition tiers to ensure fair play and progressive development for athletes of all ages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Sub-Junior', age: 'Under 14', desc: 'Focusing on foundational skills and the joy of competition.' },
              { title: 'Junior', age: '14 - 18', desc: 'Intense development and regional talent identification.' },
              { title: 'Senior', age: '18 - 35', desc: 'The elite global circuit and professional championships.' },
              { title: 'Masters', age: '35+', desc: 'Celebrating lifelong excellence and veteran mastery.' }
            ].map((cat, i) => (
              <motion.div 
                key={cat.title}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-secondary transition-all"
              >
                <div className="text-3xl font-black text-primary/10 mb-4">0{i + 1}</div>
                <h3 className="text-xl font-bold text-primary mb-2 uppercase tracking-wider">{cat.title}</h3>
                <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-4">{cat.age}</span>
                <p className="text-gray-600 text-sm">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">Upcoming Events</h2>
              <div className="w-24 h-1 bg-secondary"></div>
            </motion.div>
          </div>

          <div className="space-y-6">
            {[
              { title: 'Triadia World Championships 2026', date: 'August 15-25, 2026', location: 'Paris, France', type: 'Elite' },
              { title: 'Asian Regional Qualifiers', date: 'May 10-14, 2026', location: 'Singapore', type: 'Regional' },
              { title: 'Pan-American Masters Games', date: 'June 05-12, 2026', location: 'Toronto, Canada', type: 'Masters' },
              { title: 'European Junior Open', date: 'July 20-24, 2026', location: 'Berlin, Germany', type: 'Junior' }
            ].map((event, i) => (
              <motion.div 
                key={event.title}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex flex-col md:flex-row items-center gap-8"
              >
                <div className="w-20 h-20 bg-secondary rounded-xl flex flex-col items-center justify-center text-primary shrink-0">
                  <Calendar className="w-8 h-8" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">{event.type}</span>
                  <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                  <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {event.date}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {event.location}</div>
                  </div>
                </div>
                <button className="bg-white text-primary px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-all shrink-0">
                  Event Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-bold text-primary mb-6 uppercase tracking-wider">Global Rankings</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                The Triadia Global Ranking System (TGRS) provides a real-time assessment of athlete performance across all disciplines. Our algorithm considers competition difficulty, consistency, and peak performance.
              </p>
              <button className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:text-secondary transition-colors group">
                View Full Rankings <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
            <motion.div {...fadeIn} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h4 className="text-xl font-bold text-primary mb-6 uppercase tracking-widest">Top Performers (Senior)</h4>
              <div className="space-y-4">
                {[
                  { name: 'Alex Rivera', points: '14,250', country: 'ESP' },
                  { name: 'Chen Wei', points: '13,980', country: 'CHN' },
                  { name: 'Sarah Miller', points: '13,420', country: 'USA' },
                  { name: 'Lars Nielsen', points: '12,890', country: 'DEN' }
                ].map((athlete, i) => (
                  <div key={athlete.name} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex items-center gap-4">
                      <span className="font-black text-secondary">0{i + 1}</span>
                      <div>
                        <div className="font-bold text-primary">{athlete.name}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest">{athlete.country}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-primary">{athlete.points}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest">Points</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
