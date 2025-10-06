'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Pricing() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const pricingPlans = [
    {
      title: "Consultation Call",
      price: "€25",
      duration: "15 minutes",
      description: "Initial discussion about your voice agent needs and requirements",
      features: [
        "Needs assessment",
        "Technical feasibility review",
        "Implementation timeline",
        "Cost estimation",
        "Next steps planning"
      ],
      highlighted: false,
      cta: "Book Consultation",
      ctaLink: "https://cal.com/andrius-bacianskas-az8zcg/voice-agent-consultation"
    },
    {
      title: "Development Rate",
      price: "€90",
      duration: "per hour",
      description: "Professional voice agent development and implementation",
      features: [
        "Custom voice agent development",
        "Integration with your systems",
        "Testing and optimization",
        "Documentation and training",
        "Ongoing support"
      ],
      highlighted: true,
      cta: "Start Project",
      ctaLink: "https://cal.com/andrius-bacianskas-az8zcg/voice-agent-consultation"
    }
  ];

  const typicalProject = {
    title: "Typical Voice Agent Implementation",
    duration: "3 days",
    totalCost: "€2,160",
    breakdown: [
      { item: "Initial setup and configuration", hours: 8, cost: "€720" },
      { item: "Voice agent development", hours: 12, cost: "€1,080" },
      { item: "Integration and testing", hours: 4, cost: "€360" }
    ]
  };

  const twilioCosts = [
    {
      service: "Phone Numbers",
      cost: "€1.00/month",
      description: "Per phone number for inbound calls"
    },
    {
      service: "Inbound Calls",
      cost: "€0.012/minute",
      description: "Cost per minute for incoming calls"
    },
    {
      service: "Outbound Calls",
      cost: "€0.015/minute",
      description: "Cost per minute for outgoing calls"
    },
    {
      service: "SMS Messages",
      cost: "€0.05/message",
      description: "Cost per SMS sent or received"
    }
  ];

  const retellCosts = [
    {
      service: "Voice Agent Calls",
      cost: "€0.05/minute",
      description: "Cost per minute of voice agent conversation"
    },
    {
      service: "API Calls",
      cost: "€0.001/call",
      description: "Cost per API request to Retell AI"
    },
    {
      service: "Voice Synthesis",
      cost: "€0.02/minute",
      description: "Cost for voice generation and processing"
    },
    {
      service: "Custom Voice Training",
      cost: "€500/setup",
      description: "One-time cost for custom voice model training"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <motion.h1 
            className="text-5xl font-medium text-black mb-4 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Pricing
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transparent pricing for voice agent development and implementation. 
            Start with a consultation to understand your needs and get a detailed quote.
          </motion.p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`h-full relative ${plan.highlighted ? 'border border-gray-200 shadow-lg' : 'border border-gray-200 hover:shadow-lg'}`}>
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-black text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-black mb-2">{plan.title}</CardTitle>
                  <div className="text-4xl font-bold text-black mb-1">{plan.price}</div>
                  <div className="text-gray-600">{plan.duration}</div>
                  <p className="text-sm text-gray-600 mt-4">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.highlighted ? 'bg-black hover:bg-gray-800' : 'bg-gray-900 hover:bg-black'}`}
                    asChild
                  >
                    <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Typical Project Breakdown */}
        <motion.section 
          className="mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-2">{typicalProject.title}</h2>
              <div className="text-2xl font-semibold text-gray-800 mb-1">{typicalProject.duration}</div>
              <div className="text-4xl font-bold text-black">{typicalProject.totalCost}</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black mb-4">Project Breakdown:</h3>
              {typicalProject.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-black">{item.item}</div>
                    <div className="text-sm text-gray-600">{item.hours} hours</div>
                  </div>
                  <div className="font-bold text-black">{item.cost}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Third-Party Service Costs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Twilio Costs */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                    T
                  </div>
                  Twilio Service Costs
                </CardTitle>
                <p className="text-gray-600 text-sm">
                  Monthly costs for phone numbers and calling services (billed separately)
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {twilioCosts.map((cost, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-black">{cost.service}</div>
                        <div className="text-sm text-gray-600">{cost.description}</div>
                      </div>
                      <div className="font-bold text-black">{cost.cost}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> These are Twilio&apos;s direct costs and are separate from development fees.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Retell AI Costs */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  Retell AI Service Costs
                </CardTitle>
                <p className="text-gray-600 text-sm">
                  Usage-based costs for voice AI processing (billed separately)
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {retellCosts.map((cost, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-black">{cost.service}</div>
                        <div className="text-sm text-gray-600">{cost.description}</div>
                      </div>
                      <div className="font-bold text-black">{cost.cost}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Note:</strong> These are Retell AI&apos;s usage costs and scale with your call volume.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>

        {/* FAQ Section */}
        <motion.section
          className="mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-black mb-2">What&apos;s included in the consultation?</h4>
                  <p className="text-gray-600">
                    The 15-minute consultation covers your specific needs, technical requirements, 
                    timeline estimation, and a detailed cost breakdown for your project.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">How long does implementation take?</h4>
                  <p className="text-gray-600">
                    Most voice agent implementations take 3 days of development work, 
                    but this can vary based on complexity and integration requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Are third-party service costs included?</h4>
                  <p className="text-gray-600">
                    No, Twilio and Retell AI costs are separate and billed directly by those services. 
                    Development fees only cover the implementation and integration work.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Do you provide ongoing support?</h4>
                  <p className="text-gray-600">
                    Yes, ongoing support and maintenance are available at the standard hourly rate of €90/hour.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Book a consultation call to discuss your voice agent requirements and get a detailed project quote.
            </p>
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800"
              asChild
            >
              <a href="https://cal.com/andrius-bacianskas-az8zcg/voice-agent-consultation" target="_blank" rel="noopener noreferrer">
                📞 Book Consultation Call - €25
              </a>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
