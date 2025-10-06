'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import VoiceAIToolsCarousel from '@/components/VoiceAIToolsCarousel';
import DesktronicSuccessStory from '@/components/DesktronicSuccessStory';

export default function VoiceAgentsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 
            className="text-6xl font-medium text-black mb-8 leading-tight tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Voice Agent<br />
            <span className="font-mono text-4xl text-gray-800">Development & Implementation</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl leading-relaxed mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Build sophisticated voice agents using industry-leading platforms like Retell AI, Vapi, Rime AI, 
            AssemblyAI, and LiveKit. Create human-like phone agents that handle customer calls, bookings, 
            and support with zero wait times and natural conversation flow.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg"
              className="bg-black hover:bg-gray-800"
              asChild
            >
              <a href="https://cal.com/andrius-bacianskas-az8zcg/phone-agent-consultation" target="_blank" rel="noopener noreferrer">
                📞 Book Voice Agent Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Voice AI Tools Carousel */}
      <motion.section 
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <VoiceAIToolsCarousel />
      </motion.section>

      {/* Featured Success Story - Desktronic with Demo */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-medium text-black mb-6">
              Featured Success Story
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience how Desktronic transformed their customer service with our Voice Agent solution
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <DesktronicSuccessStory showDemo={true} featured={true} />
          </div>
        </div>
      </motion.section>



      {/* Business Impact */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                metric: "70%",
                description: "Cost Reduction",
                details: "Significant operational cost savings through automated voice handling"
              },
              {
                metric: "3x",
                description: "Faster Response",
                details: "Instant response times compared to traditional phone systems"
              },
              {
                metric: "85%",
                description: "Fewer Missed Calls",
                details: "Comprehensive call handling with intelligent routing and follow-up"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-4xl font-medium text-black mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.description}</div>
                <div className="text-gray-600">{stat.details}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl font-medium text-white mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Build Your Voice Agent?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&apos;s discuss your specific needs and find the perfect Voice AI platform for your business. 
            Book a consultation to explore implementation strategies and see live demos.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
              asChild
            >
              <a href="https://cal.com/andrius-bacianskas-az8zcg/phone-agent-consultation" target="_blank" rel="noopener noreferrer">
                📞 Book Voice Agent Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
