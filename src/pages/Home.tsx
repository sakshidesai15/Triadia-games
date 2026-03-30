import { motion } from 'motion/react';
import { ArrowRight, Brain, Target, Zap, Shield, Users, Trophy, Scale, Newspaper, Mail, MapPin, Phone, FileText, CheckCircle, Gavel, Award, UserPlus, Globe, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent"></div>
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/5"></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase"
          >
            TRIADIA GAMES <span className="text-secondary">FEDERATION</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-6 font-light tracking-widest uppercase"
          >
            Not Just a Game, But a Way of Life
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 max-w-3xl mx-auto mb-10 text-base leading-relaxed"
          >
            A global, non-profit sports federation dedicated to harmonizing Mind, Body, and Skill through the Triadia Games, with a commitment to transparency, integrity, and inclusive participation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/about" className="w-full md:w-auto text-white flex items-center justify-center gap-2 group mt-4 md:mt-0 px-8 py-4">
              Explore Triadia <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. About Triadia Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-4">What is Triadia?</h2>
            <h3 className="text-3xl font-bold text-primary mb-6 uppercase tracking-tight">Harmonizing Human Potential</h3>
            <p className="max-w-4xl mx-auto text-gray-600 text-base leading-relaxed">
              Triadia Games is a unique sporting philosophy that unites Cognitia (Mind), Corpus (Body), and Craft (Skill) into a single competitive framework. The Federation governs and promotes this system globally, ensuring equal opportunity, fair play, and holistic human development through sport.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Brain, title: 'Cognitia (Mind)', desc: 'The mastery of the mind through strategy, focus, and mental endurance.' },
              { icon: Target, title: 'Corpus (Body)', desc: 'The peak performance of the human body through strength and agility.' },
              { icon: Zap, title: 'Craft (Skill)', desc: 'The refinement of technical skill and artistic precision in execution.' }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                {...fadeIn}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-gray-50 rounded-2xl card-hover text-center"
              >
                <div className="w-16 h-16 bg-primary text-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 bg-secondary/10 px-6 py-3 rounded-xl">
              <CheckCircle className="text-secondary w-6 h-6" />
              <span className="font-bold text-primary uppercase text-sm tracking-widest">Holistic Human Development</span>
            </div>
            <div className="flex items-center gap-3 bg-secondary/10 px-6 py-3 rounded-xl">
              <CheckCircle className="text-secondary w-6 h-6" />
              <span className="font-bold text-primary uppercase text-sm tracking-widest">Equal Opportunity in Sport</span>
            </div>
          </div>

          <div className="text-center">
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:text-secondary transition-colors group">
              Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* 3. Governance Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-4">Governance</h2>
            <h3 className="text-3xl font-bold text-primary mb-6 uppercase tracking-tight">Transparency & Accountability</h3>
            <p className="max-w-3xl mx-auto text-gray-600 text-base">
              The governance of the Federation is designed to ensure transparency, accountability, and democratic functioning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'CGB', name: 'Central Governing Board', desc: 'The executive decision-making body.' },
              { title: 'GDC', name: 'Global Development Council', desc: 'Driving growth in emerging regions.' },
              { title: 'TGAI', name: 'Triadia Games Association of India', desc: 'National development and coordination.' },
              { title: 'Assembly', name: 'Triadia General Assembly', desc: 'The supreme legislative body.' }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-secondary/50 transition-all"
              >
                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">{item.title}</span>
                <h4 className="text-lg font-bold text-primary mb-2">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-12">
            <p className="text-primary font-medium italic mb-8">Transparent structure for strategic leadership and international development.</p>
            <Link to="/governance" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:text-secondary transition-colors group">
              View Governance <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Membership & Athletes Preview */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-4">Membership & Athletes</h2>
            <h3 className="text-4xl font-bold mb-6 uppercase">Global Community</h3>
            <p className="max-w-3xl mx-auto text-gray-300 text-base">
              The Federation welcomes institutions and individuals committed to building the Triadia movement.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {[
              { icon: Globe, title: 'National Federations' },
              { icon: MapPin, title: 'State Associations' },
              { icon: MapPin, title: 'District Associations' },
              { icon: Users, title: 'Local Bodies' },
              { icon: UserPlus, title: 'Individual Members' }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-center flex flex-col items-center justify-center"
              >
                <item.icon className="w-8 h-8 text-secondary mb-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider">{item.title}</h4>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: FileText, title: 'Official Registration', desc: 'Secure your official Triadia ID and athlete profile.' },
              { icon: Award, title: 'Transparent Rankings', desc: 'Global ranking system based on performance data.' },
              { icon: Shield, title: 'Eligibility-Based', desc: 'Fair participation through standardized eligibility.' }
            ].map((item, i) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/membership-athletes" className="bg-secondary text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all">
              Explore Membership
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Games & Competitions Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-4">Games & Competitions</h2>
            <h3 className="text-3xl font-bold text-primary mb-6 uppercase tracking-tight">Structured Excellence</h3>
            <p className="max-w-3xl mx-auto text-gray-600 text-base">
              The Federation organizes structured competitions at local, national, and international levels with fair rules and standardized participation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Sub-Junior', img: 'https://picsum.photos/seed/subjunior/800/1000' },
              { title: 'Junior', img: 'https://picsum.photos/seed/junior/800/1000' },
              { title: 'Senior', img: 'https://picsum.photos/seed/senior/800/1000' },
              { title: 'Masters', img: 'https://picsum.photos/seed/masters/800/1000' }
            ].map((cat, i) => (
              <motion.div 
                key={cat.title}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="relative group overflow-hidden rounded-xl aspect-[4/5] bg-primary"
              >
                <img 
                  src={cat.img} 
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white uppercase tracking-widest">{cat.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Annual Calendar', desc: 'Comprehensive schedule of all sanctioned events.' },
              { title: 'Ranking-Based', desc: 'Participation determined by official global rankings.' },
              { title: 'Official Sanctioning', desc: 'Standardized rules and certified officiating.' }
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-primary uppercase tracking-widest text-sm mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/competitions" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:text-secondary transition-colors group">
              Explore Competitions <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Integrity & Transparency Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-4">Integrity & Transparency</h2>
            <h3 className="text-3xl font-bold text-primary mb-6 uppercase tracking-tight">Ethical Standards</h3>
            <p className="max-w-3xl mx-auto text-gray-600 text-base">
              The Federation is committed to the highest standards of ethics, fairness, and openness in sport.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {[
              { icon: Shield, title: 'Anti-Doping Compliance' },
              { icon: Users, title: 'Gender Equality' },
              { icon: Scale, title: 'Non-Discrimination' },
              { icon: FileText, title: 'Whistleblower Protection' },
              { icon: Shield, title: 'Anti-Corruption' }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm text-center flex flex-col items-center"
              >
                <item.icon className="w-8 h-8 text-secondary mb-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">{item.title}</h4>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-12">
            <p className="text-gray-500 italic mb-8">Annual reports, financial statements, governance records, and policies are published proactively.</p>
            <Link to="/integrity" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:text-secondary transition-colors group">
              View Policies <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Dispute Resolution Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeIn} className="lg:w-1/2">
              <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-4">Dispute Resolution</h2>
              <h3 className="text-3xl font-bold text-primary mb-6 uppercase tracking-tight">Sporting Justice</h3>
              <p className="text-gray-600 text-base mb-8">
                Disputes are resolved through an independent judicial system that protects fairness and due process.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { step: '01', title: 'Internal Resolution', desc: 'Initial mediation and administrative review.' },
                  { step: '02', title: 'Judicial Panel Hearing', desc: 'Formal hearing by independent legal experts.' },
                  { step: '03', title: 'Appeal to CAS', desc: 'Final recourse to the Court of Arbitration for Sport.' }
                ].map(item => (
                  <div key={item.step} className="flex gap-4 items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-2xl font-black text-secondary/30">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-primary uppercase text-xs tracking-widest">{item.title}</h4>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic mb-8">Independent procedures help maintain trust, discipline, and sporting justice.</p>
              <Link to="/dispute" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:text-secondary transition-colors group">
                Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            <motion.div {...fadeIn} className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] rotate-3"></div>
                <img 
                  src="https://picsum.photos/seed/justice/1000/800" 
                  alt="Justice"
                  className="relative rounded-[3rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Media Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-4">Media</h2>
            <h3 className="text-3xl font-bold text-primary mb-6 uppercase tracking-tight">Newsroom</h3>
            <p className="max-w-3xl mx-auto text-gray-600 text-base">
              Stay updated with the latest developments, announcements, and event coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Newspaper, title: 'Latest News', desc: 'Breaking stories and updates.' },
              { icon: FileText, title: 'Press Releases', desc: 'Official federation statements.' },
              { icon: Trophy, title: 'Event Highlights', desc: 'Key moments from competitions.' },
              { icon: ImageIcon, title: 'Photo & Video Gallery', desc: 'Visual journey of Triadia.' }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center group"
              >
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-secondary transition-all">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2 uppercase tracking-wider">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/media" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:text-secondary transition-colors group">
              View Media <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Contact Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-4">Contact</h2>
              <h3 className="text-3xl font-bold text-primary mb-8 uppercase tracking-tight">Get in Touch</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary uppercase text-sm mb-1 tracking-widest">Registered Office</h4>
                    <p className="text-gray-600">Amaravati, Andhra Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary uppercase text-sm mb-1 tracking-widest">Email</h4>
                    <p className="text-gray-600">info@triadia.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary uppercase text-sm mb-1 tracking-widest">Phone</h4>
                    <p className="text-gray-600">+91-XXXXXXXXXX</p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:text-secondary transition-colors group">
                Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div {...fadeIn} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-bold text-primary mb-6 uppercase tracking-widest">Quick Inquiry</h4>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-secondary" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-secondary" />
                <textarea placeholder="Message Preview" rows={3} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-secondary"></textarea>
                <button className="w-full bg-primary text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. Final CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h2 
            {...fadeIn}
            className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight"
          >
            Shape the Future of <br /> <span className="text-secondary">Global Sport</span>
          </motion.h2>
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
          >
            Become part of a sporting movement that promotes mind, body, and skill through integrity, inclusion, and excellence.
          </motion.p>
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/about" className="bg-secondary text-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all duration-300 uppercase tracking-wider">
              Explore Triadia
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
