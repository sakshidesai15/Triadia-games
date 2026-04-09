import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assests/triadia-logo.jpeg';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1.5 rounded-xl shadow-md ring-2 ring-white/30">
                <img
                  src={logo}
                  alt="Triadia logo"
                  className="w-9 h-9 rounded-lg object-cover"
                />
              </div>
              <div className="leading-tight">
                <div className="text-xl font-black tracking-[0.1em] uppercase">Triadia</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">
                  Game Federation
                </div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The global governing body for Triadia Games, dedicated to the excellence of Mind, Body, and Skill.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-secondary font-bold uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Federation</Link></li>
              <li><Link to="/governance" className="text-gray-400 hover:text-white transition-colors">Governance Structure</Link></li>
              <li><Link to="/competitions" className="text-gray-400 hover:text-white transition-colors">Games & Competitions</Link></li>
              <li><Link to="/media" className="text-gray-400 hover:text-white transition-colors">Media Center</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-secondary font-bold uppercase tracking-widest mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><Link to="/membership-athletes" className="text-gray-400 hover:text-white transition-colors">Athlete Portal</Link></li>
              <li><Link to="/integrity" className="text-gray-400 hover:text-white transition-colors">Integrity Policies</Link></li>
              <li><Link to="/dispute" className="text-gray-400 hover:text-white transition-colors">Dispute Resolution</Link></li>
              <li><Link to="/membership-athletes" className="text-gray-400 hover:text-white transition-colors">Membership Portal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-secondary font-bold uppercase tracking-widest mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>Registered Office: Amaravati, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>Jaheeruddin: +91 96660 44498</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>Ravikanth: +91 97044 44108</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>info@triadia.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 Triadia Games Federation. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
