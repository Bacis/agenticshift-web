'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DesktronicSuccessStory from '@/components/DesktronicSuccessStory';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      {/* Subtle plus decorations */}
      <motion.div 
        className="fixed top-20 left-8 text-2xl text-gray-200 pointer-events-none z-0 opacity-30"
        animate={{ 
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        +
      </motion.div>
      <motion.div 
        className="fixed top-20 left-1/2 transform -translate-x-1/2 text-2xl text-gray-200 pointer-events-none z-0 opacity-30"
        animate={{ 
          rotate: [0, -90, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        +
      </motion.div>
      <motion.div 
        className="fixed top-20 right-8 text-2xl text-gray-200 pointer-events-none z-0 opacity-30"
        animate={{ 
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        +
      </motion.div>
      <motion.div 
        className="fixed bottom-20 left-8 text-2xl text-gray-200 pointer-events-none z-0 opacity-30"
        animate={{ 
          rotate: [0, -90, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        +
      </motion.div>
      <motion.div 
        className="fixed bottom-20 left-1/2 transform -translate-x-1/2 text-2xl text-gray-200 pointer-events-none z-0 opacity-30"
        animate={{ 
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        +
      </motion.div>
      <motion.div 
        className="fixed bottom-20 right-8 text-2xl text-gray-200 pointer-events-none z-0 opacity-30"
        animate={{ 
          rotate: [0, -90, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      >
        +
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 
            className="text-7xl font-medium text-black mb-8 leading-tight tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Welcome to<br />
            <span className="font-mono text-5xl text-gray-800">Agenticshift.io</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl leading-relaxed mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Expert Voice Agent development and workflow automation services. Transform your business operations 
            with cutting-edge AI solutions using industry-leading platforms.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg"
              className="bg-black hover:bg-gray-800"
              asChild
            >
              <a href="/voice-agents">
                Voice Agents ↗
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
              asChild
            >
              <a href="/workflow-automation">
                Workflow Automation ↗
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Section */}
      <motion.section 
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            / Our Services
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Retell AI Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="h-40 bg-gray-50 rounded-lg mb-6 flex items-center justify-center">
                    <motion.svg 
                      width="100%" 
                      height="100%" 
                      viewBox="0 0 300 160" 
                      className="text-purple-600"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    >
                      <g className="fill-current">
                        <motion.path 
                          d="M50,80 Q100,40 150,80 T250,80" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                        <motion.path 
                          d="M50,100 Q100,60 150,100 T250,100" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.7 }}
                        />
                        <motion.path 
                          d="M50,60 Q100,20 150,60 T250,60" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.9 }}
                        />
                        <motion.circle 
                          cx="150" 
                          cy="80" 
                          r="3" 
                          fill="currentColor"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.5 }}
                        />
                      </g>
                    </motion.svg>
                  </div>
                  <CardTitle className="text-xl mb-3 flex items-center">
                    Voice Agent Development 
                    <span className="ml-2 text-lg">↗</span>
                  </CardTitle>
                  <CardDescription className="mb-6 leading-relaxed">
                    Build sophisticated voice agents using industry-leading platforms like Retell AI, Vapi, and Rime AI. 
                    Create human-like phone agents that handle customer calls, bookings, and support.
                  </CardDescription>
                  <Button className="w-full" asChild>
                    <a href="/voice-agents">
                      Explore Voice Agents ↗
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Automation Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="h-40 bg-gray-50 rounded-lg mb-6 flex items-center justify-center">
                    <motion.svg 
                      width="100%" 
                      height="100%" 
                      viewBox="0 0 300 160" 
                      className="text-purple-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <g className="fill-current">
                        <motion.path 
                          d="M60,40 L120,40 L90,100 Z" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 0.7 }}
                        />
                        <motion.path 
                          d="M140,40 L200,40 L170,100 Z" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 0.9 }}
                        />
                        <motion.path 
                          d="M220,40 L280,40 L250,100 Z" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 1.1 }}
                        />
                        <motion.path 
                          d="M100,120 L160,120 L130,60 Z" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 1.3 }}
                        />
                        <motion.path 
                          d="M180,120 L240,120 L210,60 Z" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 1.5 }}
                        />
                      </g>
                    </motion.svg>
                  </div>
                  <CardTitle className="text-xl mb-3 flex items-center">
                    Voice Agent Workflow Automation 
                    <span className="ml-2 text-lg">↗</span>
                  </CardTitle>
                  <CardDescription className="mb-6 leading-relaxed">
                    Automate complex business workflows with intelligent voice agents that handle multi-step processes, 
                    integrate with your existing systems, and provide seamless customer experiences.
                  </CardDescription>
                  <Button className="w-full" asChild>
                    <a href="/workflow-automation">
                      Explore Workflow Automation ↗
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Meetup Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="h-40 bg-gray-50 rounded-lg mb-6 flex items-center justify-center">
                    <motion.svg 
                      width="100%" 
                      height="100%" 
                      viewBox="0 0 300 160" 
                      className="text-purple-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    >
                      <g className="fill-current">
                        <motion.circle 
                          cx="75" 
                          cy="50" 
                          r="8" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        />
                        <motion.circle 
                          cx="225" 
                          cy="50" 
                          r="8" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                        />
                        <motion.circle 
                          cx="75" 
                          cy="110" 
                          r="8" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.4 }}
                        />
                        <motion.circle 
                          cx="225" 
                          cy="110" 
                          r="8" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.6 }}
                        />
                        <motion.circle 
                          cx="150" 
                          cy="80" 
                          r="12" 
                          fill="currentColor"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.8 }}
                        />
                        <motion.line 
                          x1="75" 
                          y1="50" 
                          x2="150" 
                          y2="80" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 2 }}
                        />
                        <motion.line 
                          x1="225" 
                          y1="50" 
                          x2="150" 
                          y2="80" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 2.2 }}
                        />
                        <motion.line 
                          x1="75" 
                          y1="110" 
                          x2="150" 
                          y2="80" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 2.4 }}
                        />
                        <motion.line 
                          x1="225" 
                          y1="110" 
                          x2="150" 
                          y2="80" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 2.6 }}
                        />
                      </g>
                    </motion.svg>
                  </div>
                  <CardTitle className="text-xl mb-3 flex items-center">
                    Join a local AI Agent Meetup 
                    <span className="ml-2 text-lg">↗</span>
                  </CardTitle>
                  <CardDescription className="mb-6 leading-relaxed">
                    Don&apos;t miss out on our bi-monthly meetings across the globe, hosted by leading AI practitioners. 
                    Learn practical implementation strategies.
                  </CardDescription>
                  <Button className="w-full" asChild>
                    <a href="/meetups">
                      Join Meetups ↗
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Success Story with Demo */}
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
            <h2 className="text-4xl font-bold text-black mb-6">
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


      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl font-medium text-black mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore our Voice Agent solutions and workflow automation services to find the perfect fit for your business needs.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              size="lg"
              className="bg-black hover:bg-gray-800"
              asChild
            >
              <a href="/voice-agents">
                📞 Explore Voice Agents
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
              asChild
            >
              <a href="/workflow-automation">
                ⚡ Explore Automation
              </a>
            </Button>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a 
              href="mailto:hello@agenticshift.io" 
              className="text-gray-600 hover:text-black transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              hello@agenticshift.io
            </motion.a>
            <motion.a 
              href="/docs" 
              className="text-gray-600 hover:text-black transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Documentation ↗
            </motion.a>
            <motion.a 
              href="/github" 
              className="text-gray-600 hover:text-black transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              GitHub Repository ↗
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}