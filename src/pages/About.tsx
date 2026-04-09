import { motion } from 'motion/react';
import { Brain, Target, Zap, BookOpen, Activity, Users as UsersIcon } from 'lucide-react';
import dynamicImage from '../assests/image4.jpeg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
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
            About <span className="text-secondary">Triadia</span>
          </motion.h1>
          <p className="text-lg text-gray-300 font-light tracking-widest uppercase">
            The Philosophy of Human Excellence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-bold text-primary mb-6 uppercase tracking-wider">Our Mission</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Triadia Games Federation was founded with a singular vision: to create a global platform that recognizes and celebrates the complete spectrum of human potential. Unlike traditional sports organizations that focus solely on physical attributes, Triadia integrates the mind, the body, and the technical craft into a unified competitive experience.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                We believe that true greatness is found at the intersection of strategy, strength, and skill. Our mission is to foster an environment where athletes from all walks of life can push the boundaries of what is possible.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/mission/1200/800" 
                alt="Our Mission"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic View */}
      <section className="relative py-24 bg-[linear-gradient(180deg,_#ffffff_0%,_#eef3ff_45%,_#ffffff_100%)] overflow-hidden">
        <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl"></div>
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-amber-300/25 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeIn} className="mb-12">
            <div className="text-[10px] font-bold text-secondary uppercase tracking-[0.5em] mb-4">Dynamic View</div>
            <h2 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight">Triadia In Action</h2>
            <p className="text-gray-600 mt-4 max-w-3xl">
              Empowering students through education, sport, and inclusive development across rural and urban communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-[2rem] border border-white/60 bg-white/85 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.45)] p-8 lg:p-12 backdrop-blur"
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
              <h3 className="text-2xl font-bold text-primary mb-4">Equal Opportunity Through Sport</h3>
              <p className="text-gray-600 mb-6">
                We create pathways for students from rural and urban backgrounds to grow through education, sport, and
                competition at state, national, and international levels.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, title: 'Education Excellence' },
                  { icon: Target, title: 'Skill Development' },
                  { icon: Brain, title: 'Mental Strength' },
                  { icon: Activity, title: 'Physical Fitness' },
                  { icon: UsersIcon, title: 'Social Responsibility' }
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl font-bold text-primary uppercase tracking-wider mb-4">The Three Pillars</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="space-y-24">
            {[
              { 
                icon: Brain, 
                title: 'Cognitia (Mind)', 
                desc: 'Cognitia represents the mental dimension of competition. It encompasses strategic thinking, rapid decision-making, memory, and psychological resilience. In Triadia, the mind is not just a support system for the body; it is a primary arena of competition.',
                features: ['Strategic Analysis', 'Mental Endurance', 'Cognitive Speed']
              },
              { 
                icon: Target, 
                title: 'Corpus (Body)', 
                desc: 'Corpus celebrates the physical peak of the human form. It focuses on functional strength, explosive power, endurance, and flexibility. Our physical disciplines are designed to test the limits of human biology in its most refined state.',
                features: ['Functional Strength', 'Agility & Reflexes', 'Physical Stamina']
              },
              { 
                icon: Zap, 
                title: 'Craft (Skill)', 
                desc: 'Craft is the bridge between mind and body. It is the technical mastery of tools, instruments, and specific movements. Whether it is the precision of an archer or the complex maneuvers of a technical pilot, Craft is about the perfection of execution.',
                features: ['Technical Precision', 'Artistic Mastery', 'Tool Proficiency']
              }
            ].map((pillar, i) => (
              <motion.div 
                key={pillar.title}
                {...fadeIn}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="w-20 h-20 bg-primary text-secondary rounded-2xl flex items-center justify-center mb-8">
                    <pillar.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-6 uppercase tracking-widest">{pillar.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">{pillar.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pillar.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-primary font-bold">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-square rounded-[3rem] overflow-hidden shadow-xl">
                    <img 
                      src={`https://picsum.photos/seed/${pillar.title}/1000/1000`} 
                      alt={pillar.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wider">Our History</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-12">
              Established in 1998, the Triadia Games Federation began as a small collective of thinkers and athletes in Lausanne. Today, we represent over 140 nations and millions of participants. Our journey has been one of constant innovation, pushing the boundaries of what "sport" means in the 21st century.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Founded', value: '1998' },
                { label: 'Nations', value: '140+' },
                { label: 'Athletes', value: '2M+' },
                { label: 'Events', value: '500+' }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-secondary mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
