import {  Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Heading, Text } from '../atoms/Typography';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <Heading level={4}>Logo Here</Heading>
          <Text className="text-white/60">
            reference site about lorem ipsum, giving information on its origins, as well as a random lipsum generator.
          </Text>
        </div>

        <div className="space-y-6">
          <Heading level={4}>Quick Links</Heading>
          <ul className="space-y-4">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Construction', href: '/construction-service' },
              { name: 'Packages', href: '/packages' },
              { name: 'Contact US', href: '/contact' }
            ].map(link => (
              <li key={link.name}>
                <Link to={link.href} className="text-white/60 hover:text-primary transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <Heading level={4}>Contact Us</Heading>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white/60">
              <Mail className="text-primary" size={20} />
              <span>Shaah@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 text-white/60">
              <Phone className="text-primary" size={20} />
              <span>+91 0000000000</span>
            </li>
            <li className="flex items-center gap-3 text-white/60">
              <MapPin className="text-primary" size={20} />
              <span>Anantapur</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 border-t border-white/10 text-center">
        <Text variant="small" className="text-white/40">
          © 2026 shaah infra. all rights reserved. designed by dunga technologies
        </Text>
      </div>
    </footer>
  );
};
