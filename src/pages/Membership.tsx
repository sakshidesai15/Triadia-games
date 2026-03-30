import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, Users, Trophy, CheckCircle, UserCheck, Award, BookOpen, ShieldCheck } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Membership() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-primary py-32 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6"
          >
            Membership & <span className="text-secondary">Athletes</span>
          </motion.h1>
          <p className="text-xl text-gray-300 font-light tracking-widest uppercase">
            The Global Triadia Community
          </p>
        </div>
      </section>

      {/* Membership Intro Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Membership</h2>
              <h3 className="text-4xl font-bold text-primary mb-6 uppercase tracking-wider">The Triadia Community</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Membership in the Triadia Games Federation offers unparalleled access to a global network of sports excellence. Whether you are a national governing body, a local club, or an educational institution, joining Triadia means becoming part of the future of competitive sport.
              </p>
              <div className="space-y-4">
                {[
                  'Official recognition in the global sports community',
                  'Access to international competition circuits',
                  'Developmental grants and infrastructure support',
                  'Participation in the General Assembly',
                  'Advanced training and certification programs'
                ].map(benefit => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-primary font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/mem1/600/800" alt="Membership" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/mem2/600/400" alt="Membership" className="rounded-2xl w-full h-40 object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/seed/mem3/600/400" alt="Membership" className="rounded-2xl w-full h-40 object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/mem4/600/800" alt="Membership" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary uppercase tracking-wider mb-4">Membership Categories</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Shield, 
                title: 'National Federations', 
                desc: 'The highest level of membership, reserved for official governing bodies representing sovereign nations. Full voting rights in the General Assembly.',
                eligibility: 'One per nation'
              },
              { 
                icon: Users, 
                title: 'Associate Members', 
                desc: 'Regional organizations, multi-national bodies, and developmental partners. Non-voting participants in the General Assembly.',
                eligibility: 'Regional/Thematic'
              },
              { 
                icon: Trophy, 
                title: 'Affiliated Clubs', 
                desc: 'Local sports clubs, schools, and private academies. Access to local and regional competition circuits and training resources.',
                eligibility: 'Open to all'
              }
            ].map((cat) => (
              <motion.div 
                key={cat.title}
                {...fadeIn}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8">
                  <cat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">{cat.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow">{cat.desc}</p>
                <div className="pt-6 border-t border-gray-100">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">Eligibility</span>
                  <span className="text-primary font-bold">{cat.eligibility}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Athlete Registration Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-[3rem] -rotate-3"></div>
              <img 
                src="https://picsum.photos/seed/athlete-reg/1000/1200" 
                alt="Athlete Registration"
                className="relative rounded-[3rem] w-full aspect-[4/5] object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Athletes</h2>
              <h3 className="text-4xl font-bold text-primary mb-6 uppercase tracking-wider">Athlete Registration</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                To compete in any official Triadia Games event, athletes must be registered with the federation. Your Triadia ID is your global passport to competition, rankings, and development resources.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: UserCheck, title: 'Official ID', desc: 'A unique identifier for all global events.' },
                  { icon: Award, title: 'Rankings', desc: 'Track your progress on the global stage.' },
                  { icon: BookOpen, title: 'Resources', desc: 'Access to training and nutrition guides.' },
                  { icon: ShieldCheck, title: 'Insurance', desc: 'Global coverage for official competitions.' }
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <item.icon className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary uppercase text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all inline-block">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Athlete Journey Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary uppercase tracking-wider mb-4">The Athlete Journey</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { step: '01', title: 'Discovery', desc: 'Starting at the local club level in Sub-Junior categories.' },
                { step: '02', title: 'Development', desc: 'Competing in regional qualifiers and Junior championships.' },
                { step: '03', title: 'Elite', desc: 'Joining the professional circuit and World Cup events.' },
                { step: '04', title: 'Legacy', desc: 'Transitioning to Masters or coaching the next generation.' }
              ].map((item, i) => (
                <motion.div 
                  key={item.step}
                  {...fadeIn}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-6 font-black text-xl">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-primary mb-8 uppercase tracking-wider">Athlete Support Programs</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              The TGF provides comprehensive support for athletes, including mental health resources, career transition programs, and educational scholarships. We are committed to the athlete as a whole person, not just a competitor.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 border border-gray-100 rounded-2xl hover:border-secondary transition-all cursor-pointer">
                <h4 className="font-bold text-primary uppercase tracking-widest mb-2">Scholarship Program</h4>
                <p className="text-gray-500 text-sm">Financial aid for dual-career athletes pursuing education.</p>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl hover:border-secondary transition-all cursor-pointer">
                <h4 className="font-bold text-primary uppercase tracking-widest mb-2">Mental Health Hub</h4>
                <p className="text-gray-500 text-sm">24/7 confidential support for all registered athletes.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-wider">Get Involved</h2>
            <p className="text-gray-300 mb-10 text-lg">
              Whether you are an institution or an individual athlete, your journey with Triadia starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-secondary text-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all uppercase tracking-widest">
                Contact for Inquiries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
