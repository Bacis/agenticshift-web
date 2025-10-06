'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SuccessStoriesGrid } from './CustomerSuccessStory';
import InteractiveSuccessStory from './InteractiveSuccessStory';
import MetricsVisualization from './MetricsVisualization';
import { voiceAgentStories, workflowAutomationStories, allSuccessStories } from '@/data/successStories';

export default function SuccessStoryShowcase() {
  const [activeView, setActiveView] = useState<'grid' | 'interactive' | 'metrics'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'voice' | 'workflow'>('all');

  const getStories = () => {
    switch (selectedCategory) {
      case 'voice': return voiceAgentStories;
      case 'workflow': return workflowAutomationStories;
      default: return allSuccessStories;
    }
  };

  const getMetrics = () => {
    const stories = getStories();
    return stories.flatMap(story => story.metrics);
  };


  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-black mb-6">
            Customer Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how businesses are transforming their operations with our AI agent solutions
          </p>

          {/* View Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {[
                { key: 'grid', label: 'Grid View', icon: '⊞' },
                { key: 'interactive', label: 'Interactive', icon: '🎯' },
                { key: 'metrics', label: 'Metrics', icon: '📊' }
              ].map((view) => (
                <Button
                  key={view.key}
                  variant={activeView === view.key ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveView(view.key as 'grid' | 'interactive' | 'metrics')}
                  className="flex items-center gap-2"
                >
                  <span>{view.icon}</span>
                  {view.label}
                </Button>
              ))}
            </div>

            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {[
                { key: 'all', label: 'All Stories' },
                { key: 'voice', label: 'Voice Agents' },
                { key: 'workflow', label: 'Workflow' }
              ].map((category) => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.key as 'all' | 'voice' | 'workflow')}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeView === 'grid' && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <SuccessStoriesGrid 
                stories={getStories()}
                title=""
                subtitle=""
              />
            </motion.div>
          )}

          {activeView === 'interactive' && (
            <motion.div
              key="interactive"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {getStories().map((story, index) => (
                  <InteractiveSuccessStory
                    key={index}
                    {...story}
                    onViewDetails={() => console.log('View details for', story.company)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {activeView === 'metrics' && (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-12">
                <MetricsVisualization 
                  metrics={getMetrics()}
                  title="Key Performance Metrics"
                  layout="grid"
                />
                
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-black mb-6 text-center">
                    Impact Overview
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: 'Average Cost Reduction', value: '75%', icon: '💰' },
                      { label: 'Response Time Improvement', value: '90%', icon: '⚡' },
                      { label: 'Customer Satisfaction', value: '95%', icon: '😊' }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-6 bg-white rounded-xl shadow-sm"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-4xl mb-3">{stat.icon}</div>
                        <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the growing number of businesses transforming their operations with AI agents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800">
                Start Your Project →
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                View Case Studies
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
