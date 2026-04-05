'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const contactInfo = [
  { icon: MapPin, text: 'Levent Mah. Büyükdere Cad. No:128, İstanbul' },
  { icon: Phone, text: '+90 555 123 4567' },
  { icon: Mail, text: 'info@novaconstruction.com' },
  { icon: Clock, text: 'Mon - Sat: 09:00 - 18:00' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-blueprint animate-blueprint-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/3 blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-body text-gold tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide text-text-primary mb-4">
            Start Your <span className="text-gradient-gold">Dream Project</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-steel-blue to-gold mx-auto mt-4" />
          <p className="font-body text-text-secondary mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            Ready to build your dream villa? Contact us for a free consultation and personalized quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8 glow-border">
              <h3 className="font-display font-semibold text-xl text-text-primary mb-6">
                Request a Free Quote
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-gold" />
                  </div>
                  <h4 className="font-display font-semibold text-lg text-text-primary mb-2">Message Sent!</h4>
                  <p className="font-body text-sm text-text-secondary">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-text-secondary text-sm font-body">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-white/5 border-white/10 focus:border-gold/50 text-text-primary placeholder:text-text-secondary/40 font-body"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-text-secondary text-sm font-body">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-white/5 border-white/10 focus:border-gold/50 text-text-primary placeholder:text-text-secondary/40 font-body"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-text-secondary text-sm font-body">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+90 555 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/5 border-white/10 focus:border-gold/50 text-text-primary placeholder:text-text-secondary/40 font-body"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-text-secondary text-sm font-body">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your dream villa..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-white/5 border-white/10 focus:border-gold/50 text-text-primary placeholder:text-text-secondary/40 font-body resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-steel-blue to-gold text-white font-display font-semibold tracking-wide py-6 btn-construction group"
                  >
                    SEND MESSAGE
                    <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.text}
                  className="glass rounded-xl p-4 flex items-start gap-3 group hover:bg-white/[0.03] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-steel-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-steel-blue/20 transition-colors">
                    <info.icon className="w-5 h-5 text-steel-blue" />
                  </div>
                  <span className="font-body text-sm text-text-secondary leading-relaxed">{info.text}</span>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-2xl overflow-hidden glow-border">
              <div className="relative h-48 sm:h-64 bg-dark-lighter">
                {/* Blueprint map placeholder */}
                <div className="absolute inset-0 bg-blueprint opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-steel-blue/20 flex items-center justify-center mb-3 animate-pulse-glow-blue">
                    <MapPin className="w-6 h-6 text-steel-blue" />
                  </div>
                  <p className="font-display font-semibold text-text-primary text-sm">Istanbul, Turkey</p>
                  <p className="font-body text-xs text-text-secondary mt-1">Levent, Büyükdere Cad.</p>
                </div>

                {/* Decorative map lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 250" fill="none">
                  <path d="M0 125 C100 80 200 170 400 100" stroke="#4A90D9" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M0 160 C80 200 200 80 400 150" stroke="#C5A55A" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="200" cy="125" r="5" fill="#C5A55A" opacity="0.5" />
                  <circle cx="200" cy="125" r="20" stroke="#4A90D9" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-xl p-5">
              <h4 className="font-display font-semibold text-sm text-text-primary mb-3">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary hover:text-gold hover:bg-gold/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
