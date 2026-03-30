import { motion } from 'motion/react';
import { Shield, Users, Scale, FileText, CheckCircle } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Integrity() {
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
            Integrity
          </motion.h1>
          <p className="text-lg text-gray-300 font-light tracking-widest uppercase">
            Upholding the Spirit of Triadia
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl font-bold text-primary uppercase tracking-wider mb-4">Our Commitment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              The Triadia Games Federation is committed to maintaining the highest standards of integrity, transparency, and fair play across all levels of the sport.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: Shield, 
                title: 'Anti-Doping', 
                desc: 'We strictly adhere to the WADA code, ensuring a clean and fair environment for all athletes through rigorous testing and education.',
                policies: ['Testing Protocols', 'Prohibited List', 'Therapeutic Use']
              },
              { 
                icon: Users, 
                title: 'Equality & Inclusion', 
                desc: 'Sport is for everyone. We enforce strict non-discrimination policies and promote gender equality in all our programs.',
                policies: ['Gender Equality', 'Para-Sport Integration', 'Youth Protection']
              },
              { 
                icon: Scale, 
                title: 'Fair Play', 
                desc: 'Integrity in competition is paramount. We monitor for match-fixing, corruption, and unsportsmanlike conduct.',
                policies: ['Match-Fixing Prevention', 'Code of Conduct', 'Whistleblower Policy']
              }
            ].map((item) => (
              <motion.div 
                key={item.title}
                {...fadeIn}
                className="p-10 bg-gray-50 rounded-3xl border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary text-secondary rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider">{item.title}</h3>
                <p className="text-gray-600 mb-8 text-sm">{item.desc}</p>
                <div className="space-y-3">
                  {item.policies.map(p => (
                    <div key={p} className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      {p}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <FileText className="w-16 h-16 text-secondary mx-auto mb-8" />
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider">Report a Concern</h2>
            <p className="text-gray-300 mb-10 text-base leading-relaxed">
              If you have witnessed or suspect any breach of our integrity policies, we encourage you to report it through our secure and confidential whistleblower portal. Your identity will be protected.
            </p>
            <button className="bg-secondary text-primary px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all">
              Access Integrity Portal
            </button>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <img 
                src="https://picsum.photos/seed/integrity-edu/1000/800" 
                alt="Integrity Education"
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-primary mb-6 uppercase tracking-wider">Education & Prevention</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                We believe that prevention is better than punishment. Our Integrity Education Program provides mandatory training for all registered athletes, coaches, and officials to ensure they understand their rights and responsibilities.
              </p>
              <ul className="space-y-4">
                <li className="p-4 bg-gray-50 rounded-xl border border-gray-100 font-bold text-primary uppercase tracking-widest text-sm">E-Learning Modules</li>
                <li className="p-4 bg-gray-50 rounded-xl border border-gray-100 font-bold text-primary uppercase tracking-widest text-sm">Regional Workshops</li>
                <li className="p-4 bg-gray-50 rounded-xl border border-gray-100 font-bold text-primary uppercase tracking-widest text-sm">Athlete Outreach Programs</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
