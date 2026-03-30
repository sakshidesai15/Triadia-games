import { motion } from 'motion/react';
import { Mail, MapPin, Phone, MessageSquare, Globe, Clock } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Contact() {
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
            Contact <span className="text-secondary">Us</span>
          </motion.h1>
          <p className="text-lg text-gray-300 font-light tracking-widest uppercase">
            We are Here to Help
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: MapPin, title: 'Headquarters', detail: '123 Global Sports Plaza, Lausanne, Switzerland' },
              { icon: Mail, title: 'Email Support', detail: 'contact@triadiagames.org' },
              { icon: Phone, title: 'Phone Support', detail: '+41 21 123 45 67' }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-gray-50 rounded-3xl border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-primary text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider">{item.title}</h4>
                <p className="text-gray-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-bold text-primary mb-8 uppercase tracking-wider">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-widest">Subject</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary transition-all">
                    <option>General Inquiry</option>
                    <option>Membership Application</option>
                    <option>Athlete Registration</option>
                    <option>Media Inquiry</option>
                    <option>Integrity Report</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary uppercase tracking-widest">Message</label>
                  <textarea rows={6} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all">
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-8">
              <div className="bg-primary p-10 rounded-[2rem] text-white">
                <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="font-bold">09:00 - 18:00 CET</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-400">Saturday</span>
                    <span className="font-bold">10:00 - 14:00 CET</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-secondary font-bold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <Globe className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="font-bold text-primary uppercase tracking-widest text-sm mb-2">Global Network</h4>
                  <p className="text-gray-500 text-xs">Access our regional offices worldwide for local support.</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <Clock className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="font-bold text-primary uppercase tracking-widest text-sm mb-2">Fast Response</h4>
                  <p className="text-gray-500 text-xs">Our team typically responds within 24-48 business hours.</p>
                </div>
              </div>

              <div className="p-8 bg-secondary/10 rounded-2xl border border-secondary/20 flex items-center gap-6">
                <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary uppercase tracking-widest text-sm mb-1">Live Chat</h4>
                  <p className="text-gray-600 text-sm">Available for registered members and athletes.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
