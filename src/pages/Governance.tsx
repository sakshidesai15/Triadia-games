import { motion } from 'motion/react';
import { Shield, Users, Globe, Scale } from 'lucide-react';
import governanceImage from '../assests/Governance.jpeg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Governance() {
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
            Governance
          </motion.h1>
          <div className="mt-10 flex justify-center">
            <img
              src={governanceImage}
              alt="Triadia governance"
              className="w-full max-w-3xl rounded-3xl border border-white/10 shadow-2xl object-cover"
            />
          </div>
          <p className="mt-8 text-lg text-gray-300 font-light tracking-widest uppercase">
            Leadership, Transparency, and Accountability
          </p>
        </div>
      </section>

      {/* Structure Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl font-bold text-primary uppercase tracking-wider mb-4">Organizational Structure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              The Triadia Games Federation operates under a democratic framework designed to ensure fair representation and ethical management of global sports.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: Shield, 
                title: 'Central Governing Board (CGB)', 
                desc: 'The CGB is the primary executive body responsible for the strategic direction of the federation. It oversees all major policy decisions and financial management.',
                roles: ['Strategic Planning', 'Financial Oversight', 'Policy Approval']
              },
              { 
                icon: Globe, 
                title: 'Global Development Council (GDC)', 
                desc: 'The GDC focuses on the expansion of Triadia Games in emerging regions, providing resources and infrastructure support to new member nations.',
                roles: ['Regional Growth', 'Infrastructure Grants', 'Education Programs']
              },
              { 
                icon: Users, 
                title: 'General Assembly', 
                desc: 'The supreme legislative body of the federation, consisting of representatives from all member nations. It meets annually to vote on major constitutional changes.',
                roles: ['Legislative Voting', 'Member Admission', 'Presidential Elections']
              },
              { 
                icon: Scale, 
                title: 'Ethics & Integrity Commission', 
                desc: 'An independent body that ensures all participants and officials adhere to the highest standards of conduct and fair play.',
                roles: ['Conduct Monitoring', 'Integrity Audits', 'Ethical Guidelines']
              }
            ].map((item) => (
              <motion.div 
                key={item.title}
                {...fadeIn}
                className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:border-secondary transition-all"
              >
                <div className="w-16 h-16 bg-primary text-secondary rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider">{item.title}</h3>
                <p className="text-gray-600 mb-8 text-sm">{item.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {item.roles.map(role => (
                    <span key={role} className="px-4 py-2 bg-white text-primary text-xs font-bold uppercase tracking-widest rounded-full border border-gray-200">
                      {role}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">Executive Leadership</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Elena Vance', role: 'President', country: 'Switzerland' },
              { name: 'Marcus Thorne', role: 'Vice President', country: 'United Kingdom' },
              { name: 'Sarah Jenkins', role: 'Secretary General', country: 'USA' },
              { name: 'Hiroshi Tanaka', role: 'Treasurer', country: 'Japan' }
            ].map((leader, i) => (
              <motion.div 
                key={leader.name}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-6 border-4 border-white/10 group-hover:border-secondary transition-all duration-500">
                  <img 
                    src={`https://picsum.photos/seed/${leader.name}/400/400`} 
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold mb-1">{leader.name}</h4>
                <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-2">{leader.role}</p>
                <p className="text-gray-400 text-xs uppercase tracking-widest">{leader.country}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeIn} className="bg-gray-50 p-12 rounded-[2rem] border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wider text-center">Governance Documents</h2>
            <div className="space-y-4">
              {[
                'TGF Constitution (Revised 2025)',
                'Code of Ethics & Conduct',
                'Financial Report 2025',
                'Strategic Plan 2026-2030',
                'Anti-Corruption Policy'
              ].map(doc => (
                <div key={doc} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all cursor-pointer group">
                  <span className="font-medium text-primary">{doc}</span>
                  <span className="text-secondary font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors">Download PDF</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
