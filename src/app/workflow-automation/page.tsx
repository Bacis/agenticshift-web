'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SuccessStoriesGrid } from '@/components/CustomerSuccessStory';
import { workflowAutomationStories } from '@/data/successStories';

export default function WorkflowAutomationPage() {
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
            <span className="font-mono text-4xl text-gray-800">Workflow Automation</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl leading-relaxed mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Automate complex business workflows with intelligent Voice Agents that handle multi-step processes, 
            integrate seamlessly with your existing systems, and provide exceptional customer experiences. 
            Transform repetitive tasks into intelligent, conversational interactions.
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
              <a href="https://cal.com/andrius-bacianskas-az8zcg/workflow-automation" target="_blank" rel="noopener noreferrer">
                ⚡ Book Workflow Automation Call
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Automation Capabilities */}
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
            / Voice Agent Automation Capabilities
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Customer Onboarding",
                description: "Automate the entire customer onboarding process with voice-guided workflows",
                features: ["Account setup", "Document collection", "Verification calls", "Welcome sequences"],
                icon: "👤"
              },
              {
                title: "Sales Pipeline",
                description: "Intelligent lead qualification and nurturing through conversational AI",
                features: ["Lead scoring", "Appointment booking", "Follow-up calls", "CRM updates"],
                icon: "💼"
              },
              {
                title: "Support Tickets",
                description: "Automated ticket resolution with voice agents handling common issues",
                features: ["Issue diagnosis", "Solution delivery", "Escalation routing", "Resolution tracking"],
                icon: "🎫"
              },
              {
                title: "Payment Processing",
                description: "Secure payment collection and invoice management via voice",
                features: ["Payment reminders", "Invoice inquiries", "Payment plans", "Dispute resolution"],
                icon: "💳"
              },
              {
                title: "Inventory Management",
                description: "Voice-controlled inventory tracking and reorder automation",
                features: ["Stock inquiries", "Reorder triggers", "Supplier calls", "Delivery scheduling"],
                icon: "📦"
              },
              {
                title: "Appointment Scheduling",
                description: "Intelligent calendar management with conflict resolution",
                features: ["Availability checking", "Rescheduling", "Reminders", "Calendar sync"],
                icon: "📅"
              }
            ].map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-gray-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-3xl">{capability.icon}</div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {capability.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Success Stories */}
      <SuccessStoriesGrid 
        stories={workflowAutomationStories}
        title="Workflow Automation Success Stories"
        subtitle="Discover how businesses are achieving remarkable efficiency gains with automated workflows"
      />

      {/* Integration Showcase */}
      <motion.section 
        className="py-20 bg-gray-50"
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
            / System Integrations
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-medium text-black mb-6">
                Seamless System Integration
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Voice Agent workflows integrate with your existing business systems, 
                creating a unified automation ecosystem that works with your current tools and processes.
              </p>
              <motion.ul 
                className="space-y-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {[
                  "CRM integration (Salesforce, HubSpot, Pipedrive)",
                  "Calendar systems (Google Calendar, Outlook, Calendly)",
                  "Payment processors (Stripe, PayPal, Square)",
                  "Help desk software (Zendesk, Freshdesk, Intercom)",
                  "Database connections (MySQL, PostgreSQL, MongoDB)",
                  "Communication tools (Slack, Microsoft Teams, WhatsApp)",
                  "Custom API integrations and webhooks"
                ].map((integration, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{integration}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="text-6xl mb-4"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚡
              </motion.div>
              <div className="text-xl font-semibold text-black mb-4">Workflow Automation</div>
              <div className="text-gray-600 leading-relaxed mb-6">
                Voice Agents can automate complex multi-step business processes, 
                reducing manual work while improving accuracy and customer experience. 
                See real examples in our success stories above.
              </div>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
                asChild
              >
                <a href="https://cal.com/andrius-bacianskas-az8zcg/workflow-automation" target="_blank" rel="noopener noreferrer">
                  Book Automation Demo
                </a>
              </Button>
            </motion.div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-black mb-6">
              Measurable Business Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Voice Agent workflow automation delivers quantifiable results that transform 
              your business operations and drive significant ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                metric: "90%",
                description: "Task Automation",
                details: "Automated handling of routine business processes"
              },
              {
                metric: "60%",
                description: "Time Savings",
                details: "Reduced manual work and processing time"
              },
              {
                metric: "95%",
                description: "Accuracy Rate",
                details: "Consistent, error-free process execution"
              },
              {
                metric: "40%",
                description: "Cost Reduction",
                details: "Lower operational costs and resource requirements"
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
                <div className="text-4xl font-bold text-black mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.description}</div>
                <div className="text-gray-600 text-sm">{stat.details}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Flow */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-16 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            / Implementation Process
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Analyze your current workflows, identify automation opportunities, and design the optimal Voice Agent solution."
              },
              {
                step: "02",
                title: "Development & Integration",
                description: "Build custom Voice Agent workflows, integrate with your systems, and implement the automation logic."
              },
              {
                step: "03",
                title: "Testing & Launch",
                description: "Comprehensive testing, staff training, and gradual rollout with continuous optimization and support."
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-6xl font-bold text-gray-200 mb-4">{phase.step}</div>
                <h3 className="text-2xl font-semibold text-black mb-4">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
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
            className="text-4xl font-medium mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Automate Your Workflows?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mb-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&apos;s discuss your specific workflow automation needs and design a Voice Agent solution 
            that transforms your business operations. Book a consultation to explore the possibilities.
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
              <a href="https://cal.com/andrius-bacianskas-az8zcg/workflow-automation" target="_blank" rel="noopener noreferrer">
                ⚡ Book Workflow Automation Call
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
