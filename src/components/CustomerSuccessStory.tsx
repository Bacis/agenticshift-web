'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface SuccessStoryProps {
  company: string;
  industry: string;
  logo?: string;
  testimonial: string;
  author: string;
  role: string;
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  implementation: string[];
  results: string[];
  status: 'active' | 'completed' | 'pilot';
  category: string;
  featured?: boolean;
}

export default function CustomerSuccessStory({
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
  featured = false
}: SuccessStoryProps) {
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
    >
      <Card className={`h-full hover:shadow-xl transition-all duration-300 ${featured ? 'border border-gray-200' : 'border border-gray-200 hover:border-gray-300'}`}>
        <CardContent className="p-0">
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                {logo ? (
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt={company} className="w-8 h-8 object-contain" />
                  </div>
                ) : (
                  <div className={`w-12 h-12 bg-gradient-to-br ${getGradientColor(company)} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                    {company.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-lg text-black">{company}</h3>
                  <p className="text-sm text-gray-600">{industry}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Badge className={`${statusColors[status]} border`}>
                  {statusLabels[status]}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {category}
                </Badge>
              </div>
            </div>
          </div>

          {/* Metrics */}
          {metrics.length > 0 && (
            <div className="p-6 border-b border-gray-100">
              <h4 className="font-semibold text-black mb-4">Key Results</h4>
              <div className={`grid ${metrics.length === 1 ? 'grid-cols-1' : metrics.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-4`}>
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 bg-gray-50 rounded-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-black mb-1">{metric.value}</div>
                    <div className="text-sm font-medium text-gray-700 mb-1">{metric.label}</div>
                    <div className="text-xs text-green-600 font-medium">{metric.improvement}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Implementation & Results */}
          <div className="p-6 border-b border-gray-100">
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
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
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
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="p-6">
            <div className="relative">
              <div className="absolute -top-2 -left-2 text-4xl text-gray-200">&quot;</div>
              <p className="text-gray-700 italic leading-relaxed pl-6">
                {testimonial}
              </p>
              <div className="mt-4 pl-6">
                <div className="font-semibold text-black">{author}</div>
                <div className="text-sm text-gray-600">{role}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Success Stories Grid Component
interface SuccessStoriesGridProps {
  stories: SuccessStoryProps[];
  title?: string;
  subtitle?: string;
}

export function SuccessStoriesGrid({ stories, title, subtitle }: SuccessStoriesGridProps) {
  return (
    <motion.section 
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2 
                className="text-4xl font-bold text-black mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <CustomerSuccessStory key={index} {...story} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
