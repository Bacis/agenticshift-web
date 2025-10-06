'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AudioPlayer from '@/components/AudioPlayer';

interface DesktronicSuccessStoryProps {
  showDemo?: boolean;
  featured?: boolean;
}

export default function DesktronicSuccessStory({ 
  showDemo = true, 
  featured = true 
}: DesktronicSuccessStoryProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'demo' | 'results'>('overview');
  const [isHovered, setIsHovered] = useState(false);

  const metrics = [
    {
      label: "Response Time",
      value: "< 2s",
      improvement: "90% faster"
    },
    {
      label: "Cost Reduction", 
      value: "70%",
      improvement: "vs. human agents"
    },
    {
      label: "Satisfaction",
      value: "95%",
      improvement: "customer rating"
    }
  ];

  const implementation = [
    "Multi-language voice agent deployment",
    "CRM integration with Salesforce", 
    "24/7 customer support automation",
    "Real-time call analytics dashboard"
  ];

  const results = [
    "Reduced wait times by 90%",
    "Improved customer satisfaction scores",
    "Streamlined support operations", 
    "24/7 availability across time zones"
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${featured ? 'lg:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={`h-full transition-all duration-300 ${
        featured ? 'border border-gray-200' : 'border border-gray-200 hover:border-gray-300'
      } ${isHovered ? 'shadow-2xl' : 'hover:shadow-xl'}`}>
        <CardContent className="p-0">
          {/* Header */}
          <div className="p-6 border-b border-gray-100 relative overflow-hidden">
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full -translate-y-16 translate-x-16 opacity-20"
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  D
                </motion.div>
                <div>
                  <motion.h3 
                    className="font-bold text-lg text-black"
                    animate={{ color: isHovered ? '#3b82f6' : '#000000' }}
                    transition={{ duration: 0.2 }}
                  >
                    Desktronic
                  </motion.h3>
                  <p className="text-sm text-gray-600">European Office Solutions</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge className="bg-green-100 text-green-800 border-green-200 border">
                    Live Implementation
                  </Badge>
                </motion.div>
                <Badge variant="secondary" className="text-xs">
                  Customer Service
                </Badge>
              </div>
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex gap-1 mb-4 bg-gray-100 rounded-lg p-1">
              {[
                { key: 'overview', label: 'Overview', icon: '📊' },
                { key: 'demo', label: 'Live Demo', icon: '🎧' },
                { key: 'results', label: 'Results', icon: '🚀' }
              ].map((tab) => (
                <motion.button
                  key={tab.key}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  onClick={() => setActiveTab(tab.key as 'overview' | 'demo' | 'results')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-1">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-3 bg-gray-50 rounded-lg"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <div className="text-2xl font-bold text-black mb-1">
                          {metric.value === "< 2s" ? "< 2s" : metric.value}
                        </div>
                        <div className="text-sm font-medium text-gray-700 mb-1">{metric.label}</div>
                        <div className="text-xs text-green-600 font-medium">{metric.improvement}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Implementation
                      </h4>
                      <div className="space-y-2">
                        {implementation.map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-2 text-sm text-gray-700"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Business Impact
                      </h4>
                      <div className="space-y-2">
                        {results.map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-2 text-sm text-gray-700"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'demo' && showDemo && (
                <motion.div
                  key="demo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-semibold text-black mb-2">
                      🎧 Listen to a Real Customer Call
                    </h4>
                    <p className="text-sm text-gray-600">
                      Experience how our Voice Agent handles customer inquiries naturally
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <AudioPlayer
                      src="/desktronic-recording.wav"
                      title="Desktronic Customer Call"
                      description="Real customer interaction with our Voice Agent solution"
                      duration="2:45"
                    />
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold text-black mb-2 flex items-center gap-2">
                      <span className="text-blue-500">💡</span>
                      What You&apos;ll Hear:
                    </h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Natural conversation flow with customer</li>
                      <li>• Multi-language support in action</li>
                      <li>• CRM integration and data capture</li>
                      <li>• Seamless handoff to human agent when needed</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === 'results' && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h5 className="font-semibold text-green-800 mb-3">Before Implementation</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 5+ minute average wait times</li>
                          <li>• Limited to business hours only</li>
                          <li>• High operational costs</li>
                          <li>• Language barriers with international customers</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h5 className="font-semibold text-blue-800 mb-3">After Implementation</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• &lt; 2 second response times</li>
                          <li>• 24/7 availability across all time zones</li>
                          <li>• 70% cost reduction</li>
                          <li>• 5+ language support</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold text-black mb-3">ROI Timeline</h5>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span>Month 1: 40% cost reduction</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span>Month 3: Full ROI achieved</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <span>Month 6: 95% customer satisfaction</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Testimonial */}
          <div className="p-6">
            <div className="relative">
              <motion.div 
                className="absolute -top-2 -left-2 text-4xl text-gray-200"
                animate={{ rotate: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                &quot;
              </motion.div>
              <motion.p 
                className="text-gray-700 italic leading-relaxed pl-6"
                animate={{ color: isHovered ? '#374151' : '#4b5563' }}
                transition={{ duration: 0.2 }}
              >
                The Voice Agent solution transformed our customer service operations. 
                Our customers receive instant, natural responses and our support team can focus on complex issues. 
                The implementation was seamless and the ROI was immediate.
              </motion.p>
              <motion.div 
                className="mt-4 pl-6"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-semibold text-black">Sarah Chen</div>
                <div className="text-sm text-gray-600">Customer Service Director, Desktronic</div>
              </motion.div>
            </div>

          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
