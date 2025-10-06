'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SuccessStoryProps } from './CustomerSuccessStory';

interface InteractiveSuccessStoryProps extends SuccessStoryProps {
  onViewDetails?: () => void;
}

export default function InteractiveSuccessStory({
  company,
  industry,
  logo,
  testimonial,
  author,
  role,
  metrics,
  implementation,
  results,
  status,
  category,
  featured = false,
  onViewDetails
}: InteractiveSuccessStoryProps) {
  // Assign gradient colors based on company name
  const getGradientColor = (companyName: string) => {
    const gradients = [
      'from-purple-500 to-blue-600',    // Retell AI style
      'from-green-500 to-teal-600',    // Vapi style  
      'from-orange-500 to-red-600',    // Rime AI style
      'from-indigo-500 to-purple-600', // AssemblyAI style
      'from-cyan-500 to-blue-600',     // LiveKit style
    ];
    const index = companyName.length % gradients.length;
    return gradients[index];
  };
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<'metrics' | 'implementation' | 'results'>('metrics');

  const statusColors = {
    active: 'bg-green-100 text-green-800 border-green-200',
    completed: 'bg-blue-100 text-blue-800 border-blue-200',
    pilot: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };

  const statusLabels = {
    active: 'Live Implementation',
    completed: 'Project Completed',
    pilot: 'Pilot Program'
  };


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
          {/* Header with animated elements */}
          <div className="p-6 border-b border-gray-100 relative overflow-hidden">
            <motion.div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getGradientColor(company)} rounded-full -translate-y-16 translate-x-16 opacity-20`}
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-4">
                {logo ? (
                  <motion.div 
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt={company} className="w-8 h-8 object-contain" />
                  </motion.div>
                ) : (
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${getGradientColor(company)} rounded-lg flex items-center justify-center text-white font-bold text-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {company.charAt(0)}
                  </motion.div>
                )}
                <div>
                  <motion.h3 
                    className="font-bold text-lg text-black"
                    animate={{ color: isHovered ? '#3b82f6' : '#000000' }}
                    transition={{ duration: 0.2 }}
                  >
                    {company}
                  </motion.h3>
                  <p className="text-sm text-gray-600">{industry}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge className={`${statusColors[status]} border`}>
                    {statusLabels[status]}
                  </Badge>
                </motion.div>
                <Badge variant="secondary" className="text-xs">
                  {category}
                </Badge>
              </div>
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex gap-1 mb-4 bg-gray-100 rounded-lg p-1">
              {[
                { key: 'metrics', label: 'Results', icon: '📊' },
                { key: 'implementation', label: 'Setup', icon: '⚙️' },
                { key: 'results', label: 'Impact', icon: '🚀' }
              ].map((tab) => (
                <motion.button
                  key={tab.key}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  onClick={() => setActiveTab(tab.key as 'metrics' | 'implementation' | 'results')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-1">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'metrics' && metrics.length > 0 && (
                  <div className={`grid ${metrics.length === 1 ? 'grid-cols-1' : metrics.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-4`}>
                    {metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <motion.div 
                          className="text-2xl font-bold text-black mb-1"
                          animate={{ color: isHovered ? '#3b82f6' : '#000000' }}
                          transition={{ duration: 0.2 }}
                        >
                          {metric.value}
                        </motion.div>
                        <div className="text-sm font-medium text-gray-700 mb-1">{metric.label}</div>
                        <div className="text-xs text-green-600 font-medium">{metric.improvement}</div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'implementation' && (
                  <div className="space-y-3">
                    {implementation.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ x: 5, backgroundColor: '#f3f4f6' }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{ scale: isHovered ? 1.2 : 1 }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="text-sm text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'results' && (
                  <div className="space-y-3">
                    {results.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ x: 5, backgroundColor: '#dbeafe' }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-blue-500 rounded-full"
                          animate={{ scale: isHovered ? 1.2 : 1 }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="text-sm text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial with enhanced styling */}
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
                {testimonial}
              </motion.p>
              <motion.div 
                className="mt-4 pl-6"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-semibold text-black">{author}</div>
                <div className="text-sm text-gray-600">{role}</div>
              </motion.div>
            </div>

            {onViewDetails && (
              <motion.div 
                className="mt-4 pt-4 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={onViewDetails}
                    className="w-full"
                  >
                    View Full Case Study →
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
