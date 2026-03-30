import { motion } from 'motion/react';
import { Scale, Gavel, FileText, HelpCircle } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Dispute() {
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
            Dispute Resolution
          </motion.h1>
          <p className="text-lg text-gray-300 font-light tracking-widest uppercase">
            Fair, Independent, and Efficient Justice
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-bold text-primary mb-6 uppercase tracking-wider">The Resolution Process</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                The Triadia Games Federation provides a robust and independent framework for resolving disputes that may arise within the sport. Our goal is to ensure that every member, athlete, and official has access to a fair and transparent legal process.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                All disputes are handled by the Independent Tribunal of Triadia (ITT), which operates outside the influence of the Central Governing Board.
              </p>
              <div className="flex gap-4">
                <div className="p-4 bg-gray-50 rounded-xl text-center flex-1">
                  <div className="text-2xl font-black text-secondary mb-1">95%</div>
                  <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Resolution Rate</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl text-center flex-1">
                  <div className="text-2xl font-black text-secondary mb-1">30 Days</div>
                  <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Avg. Timeframe</div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="bg-primary p-10 rounded-[3rem] text-white">
              <Gavel className="w-12 h-12 text-secondary mb-8" />
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider">Tribunal Jurisdiction</h3>
              <ul className="space-y-4">
                {[
                  'Disciplinary actions and appeals',
                  'Membership eligibility disputes',
                  'Competition result challenges',
                  'Contractual disagreements',
                  'Integrity policy violations'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl font-bold text-primary uppercase tracking-wider mb-4">Dispute Resolution System</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Disputes are resolved through an independent process designed to protect fairness, transparency, and the rights of all parties.
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Internal Resolution', desc: 'Initial resolution attempts are handled within the federation framework to address concerns promptly.' },
              { step: '02', title: 'Judicial Panel Hearing', desc: 'If unresolved, the matter proceeds to an independent judicial panel for a formal hearing.' },
              { step: '03', title: 'Appeal to CAS', desc: 'An appeal to the Court of Arbitration for Sport (CAS) may be pursued when applicable.' }
            ].map((item) => (
              <motion.div 
                key={item.step}
                {...fadeIn}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="text-4xl font-black text-secondary/20 mb-6">{item.step}</div>
                <h4 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <HelpCircle className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-primary uppercase tracking-wider">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { q: 'Who can file a dispute?', a: 'Any registered athlete, member federation, or official affiliated with the TGF.' },
              { q: 'Is there a fee for filing?', a: 'A nominal administrative fee applies, which may be waived in cases of financial hardship.' },
              { q: 'Are the decisions final?', a: 'Decisions of the ITT are final and binding, subject only to appeal to the Court of Arbitration for Sport (CAS).' }
            ].map((faq) => (
              <div key={faq.q} className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-primary mb-3 uppercase tracking-widest text-sm">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
