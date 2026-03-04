import {  Mail, Phone, MapPin, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Heading, Text } from '../atoms/Typography';
import FooterLogo from '../../assets/Logo.png'
import { TbBrandWhatsappFilled } from 'react-icons/tb';
export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src={FooterLogo} alt="Logo" className='h-25 w-25'/>
            <Text className="text-white/70 text-sm leading-relaxed">
              Building your dreams with quality construction and innovative design solutions. Experience excellence in every project.
            </Text>
            <div className="flex gap-4 pt-2">
              <Zap size={20} className="text-primary" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <Heading level={4} className="text-white">Quick Links</Heading>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Packages', href: '/packages' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-primary transition-colors text-sm font-medium">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <Heading level={4} className="text-white">Get In Touch</Heading>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="text-primary shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide">Email</p>
                  <p className="text-white/80 text-sm font-medium">info@shaahinfra.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-primary shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide">Phone</p>
                  <p className="text-white/80 text-sm font-medium">+91 9705779991</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TbBrandWhatsappFilled className="text-primary shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide">WhatsApp</p>
                  <p className="text-white/80 text-sm font-medium">+91 9705779992</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide">Address</p>
                  <p className="text-white/80 text-sm font-medium">Kalyandurgam Road, Anantapur, AP 515001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <Heading level={4} className="text-white">Business Hours</Heading>
            <div className="space-y-3 bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Monday - Friday</span>
                <span className="text-primary font-medium text-sm">9AM - 6PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Saturday</span>
                <span className="text-primary font-medium text-sm">10AM - 4PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Sunday</span>
                <span className="text-white/40 text-sm">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-center md:text-left">
            <Text variant="small" className="text-white/50">
              © 2026 Shaah Infra. All rights reserved. | Contact: Ali Khan
            </Text>
            <Text variant="small" className="text-white/40">
              Designed & Developed by Dunga Technologies
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};
