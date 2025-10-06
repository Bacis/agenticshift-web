'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface MetricData {
  label: string;
  value: string;
  improvement: string;
  color?: string;
  icon?: string;
}

interface MetricsVisualizationProps {
  metrics: MetricData[];
  title?: string;
  layout?: 'grid' | 'carousel' | 'comparison';
}

export default function MetricsVisualization({ 
  metrics, 
  title, 
  layout = 'grid' 
}: MetricsVisualizationProps) {
  const colors = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600', 
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600',
    'from-pink-500 to-pink-600',
    'from-indigo-500 to-indigo-600'
  ];

  if (layout === 'carousel') {
    return (
      <div className="w-full overflow-hidden">
        <motion.div 
          className="flex gap-6"
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...metrics, ...metrics].map((metric, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-64"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-32">
                <CardContent className="p-6 h-full flex flex-col justify-center">
                  <div className="text-3xl font-bold text-black mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-green-600 font-medium">
                    {metric.improvement}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  if (layout === 'comparison') {
    return (
      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-2xl font-bold text-black mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-green-600 font-medium">
                    {metric.improvement}
                  </div>
                </div>
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  {metric.icon || '📈'}
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  }

  // Default grid layout
  return (
    <div className="space-y-6">
      {title && (
        <motion.h3 
          className="text-2xl font-bold text-black text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h3>
      )}
      
      <div className={`grid gap-6 ${
        metrics.length === 1 ? 'grid-cols-1' : 
        metrics.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
        metrics.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="cursor-pointer"
          >
            <Card className="h-full overflow-hidden">
              <CardContent className="p-6 h-full">
                <div className="relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-10 rounded-lg`}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className="text-4xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {metric.icon || '📊'}
                      </motion.div>
                      <motion.div
                        className="w-3 h-3 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </div>
                    
                    <motion.div 
                      className="text-3xl font-bold text-black mb-2"
                      animate={{ color: ['#000000', '#3b82f6', '#000000'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {metric.value}
                    </motion.div>
                    
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      {metric.label}
                    </div>
                    
                    <motion.div 
                      className="text-xs text-green-600 font-medium"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {metric.improvement}
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
