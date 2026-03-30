import { motion } from 'motion/react';
import { Newspaper, Image as ImageIcon, Video, Download } from 'lucide-react';
import galleryImage1 from '../assests/image1 (2).jpeg';
import galleryImage2 from '../assests/image 2.jpeg';

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
    galleryImage1,
    galleryImage2,
    galleryImage1,
    galleryImage2,
    galleryImage1,
    galleryImage2,
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
