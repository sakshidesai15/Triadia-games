import { motion } from 'motion/react';
import { Newspaper, Image as ImageIcon, Video, Download, BookOpen, Target, Brain, Activity, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import galleryImage1 from '../assests/image1 (2).jpeg';
import galleryImage2 from '../assests/image 2.jpeg';
import galleryImage3 from '../assests/image3.jpeg';
import galleryImage6 from '../assests/WhatsApp Image 2026-04-06 at 11.49.13 AM.jpeg';
import galleryImage7 from '../assests/WhatsApp Image 2026-04-06 at 11.50.27 AM.jpeg';
import galleryImage8 from '../assests/WhatsApp Image 2026-04-06 at 11.50.47 AM.jpeg';
import galleryImage9 from '../assests/WhatsApp Image 2026-04-06 at 11.51.14 AM.jpeg';
import galleryImage10 from '../assests/WhatsApp Image 2026-04-06 at 11.55.15 AM.jpeg';
import dynamicImage from '../assests/image4.jpeg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Media() {
  const galleryImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage6,
    galleryImage7,
    galleryImage8,
    galleryImage9,
    galleryImage10,
  ];

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
            Media Center
          </motion.h1>
          <p className="text-lg text-gray-300 font-light tracking-widest uppercase">
            News, Stories, and Visual Highlights
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="mb-12">
            <h2 className="text-2xl font-bold text-primary uppercase tracking-wider">Latest News</h2>
            <div className="w-24 h-1 bg-secondary mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="lg:col-span-2 group cursor-pointer">
              <div className="aspect-video bg-gray-200 rounded-3xl overflow-hidden mb-8">
                <img 
                  src="https://picsum.photos/seed/news-main/1200/800" 
                  alt="Main News"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-3 block">Featured Story</span>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">Triadia Games 2026: A New Era of Competition Begins</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                The federation has officially unveiled the roadmap for the 2026 World Championships, featuring groundbreaking AI integration and expanded youth categories.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                { title: 'New Partnership with Global Tech Giants', date: 'March 22, 2026' },
                { title: 'Athlete Welfare Program Expands to 50 More Nations', date: 'March 15, 2026' },
                { title: 'Record Participation in Regional Qualifiers', date: 'March 08, 2026' }
              ].map((news) => (
                <motion.div key={news.title} {...fadeIn} className="group cursor-pointer border-b border-gray-100 pb-6">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2 block">{news.date}</span>
                  <h4 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{news.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary uppercase tracking-wider mb-4">Visual Gallery</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic View */}
      <section className="relative py-24 md:py-28 bg-[linear-gradient(180deg,_#ffffff_0%,_#eef3ff_45%,_#ffffff_100%)] overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/35 blur-3xl"></div>
        <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-rose-300/25 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeIn} className="mb-12">
            <div className="inline-flex items-center gap-3 rounded-full border border-secondary/30 bg-white/80 px-4 py-2 text-[10px] font-bold text-secondary uppercase tracking-[0.5em] shadow-sm">
              Dynamic View
              <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
              Triadia
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight mt-5">
              Triadia In Action
            </h3>
            <p className="text-gray-600 mt-4 max-w-3xl">
              Empowering students through education, sport, and inclusive development across rural and urban communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-[2.25rem] border border-white/60 bg-white/80 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.45)] p-8 lg:p-12 backdrop-blur"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-secondary/25 via-sky-200/60 to-emerald-200/60 blur-lg"></div>
              <div className="relative overflow-hidden rounded-[20px] shadow-2xl">
                <img
                  src={dynamicImage}
                  alt="Triadia in action"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent"></div>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.4em] text-secondary mb-3">Mission Pillars</div>
              <h4 className="text-2xl font-bold text-primary mb-4">Building Stronger Futures Through Sport</h4>
              <p className="text-gray-600 mb-6">
                Our programs focus on holistic growth — blending education, skill, mental resilience, physical fitness,
                and social responsibility for every participant.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, title: 'Education Excellence' },
                  { icon: Target, title: 'Skill Development' },
                  { icon: Brain, title: 'Mental Strength' },
                  { icon: Activity, title: 'Physical Fitness' },
                  { icon: Users, title: 'Social Responsibility' }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white/90 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-secondary/30"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-[#0b3a72] to-[#164d7a] text-secondary flex items-center justify-center group-hover:from-secondary group-hover:to-amber-300 group-hover:text-primary transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-semibold text-primary">{item.title}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/membership-athletes" className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all shadow-lg shadow-secondary/20">
                  Explore Programs
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Resources */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeIn} className="bg-primary p-16 rounded-[3rem] text-white">
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider">Press Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: ImageIcon, title: 'Brand Assets', desc: 'Logos, colors, and brand guidelines.' },
                { icon: Video, title: 'B-Roll Footage', desc: 'High-quality video for broadcast.' },
                { icon: Newspaper, title: 'Press Kits', desc: 'Fact sheets and executive bios.' },
                { icon: Download, title: 'Media Guide', desc: 'Accreditation and venue info.' }
              ].map(item => (
                <div key={item.title} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-left group cursor-pointer">
                  <item.icon className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-sm">{item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
