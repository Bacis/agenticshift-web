'use client';

import { useState, useEffect } from 'react';

export default function Docs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const docSections = [
    {
      icon: "🚀",
      title: "Getting Started",
      description: "Learn the fundamentals of AI agent development and set up your development environment.",
      level: "Beginner",
      readTime: "15 min read"
    },
    {
      icon: "📞",
      title: "Retell AI Integration",
      description: "Complete guide to integrating Retell AI phone agents into your existing systems.",
      level: "Intermediate",
      readTime: "25 min read"
    },
    {
      icon: "⚡",
      title: "API Reference",
      description: "Comprehensive API documentation for all Agenticshift.io endpoints and methods.",
      level: "Advanced",
      readTime: "Reference"
    },
    {
      icon: "🔄",
      title: "Workflow Automation",
      description: "Build intelligent workflows that automate business processes and decision-making.",
      level: "Intermediate",
      readTime: "20 min read"
    },
    {
      icon: "✨",
      title: "Best Practices",
      description: "Industry best practices for designing, deploying, and maintaining AI agents.",
      level: "Expert",
      readTime: "30 min read"
    },
    {
      icon: "🔧",
      title: "Troubleshooting",
      description: "Common issues and solutions when working with AI agents and integrations.",
      level: "All Levels",
      readTime: "FAQ"
    }
  ];

  const apiEndpoints = [
    {
      method: "POST",
      url: "/api/v1/agents",
      description: "Create a new AI agent with specified capabilities and configuration."
    },
    {
      method: "GET",
      url: "/api/v1/agents/{id}",
      description: "Retrieve details and status of a specific agent."
    },
    {
      method: "PUT",
      url: "/api/v1/agents/{id}/train",
      description: "Train an agent with new data or update its knowledge base."
    },
    {
      method: "POST",
      url: "/api/v1/agents/{id}/deploy",
      description: "Deploy an agent to production environment."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-medium text-black mb-4 tracking-tight">
            Documentation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Comprehensive guides, API references, and tutorials to help you build intelligent AI agents for your business.
          </p>
        </div>

        {/* Documentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {docSections.map((section, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                {section.icon}
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{section.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{section.description}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium uppercase">
                  {section.level}
                </span>
                <span>{section.readTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Start Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-10 mb-16">
          <h3 className="text-2xl font-semibold text-black mb-4">Quick Start Guide</h3>
          <p className="text-gray-600 mb-6">Get up and running with your first AI agent in just a few minutes.</p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 font-mono text-sm text-black overflow-x-auto">
            <div className="text-gray-500 mb-2"># Install the Agenticshift.io SDK</div>
            <div className="mb-4">npm install @agenticshift/sdk</div>
            
            <div className="text-gray-500 mb-2"># Initialize your agent</div>
            <div className="mb-2">
              <span className="text-purple-600">import</span> {`{ Agent }`} <span className="text-purple-600">from</span> <span className="text-green-600">&apos;@agenticshift/sdk&apos;</span>;
            </div>
            <div className="mb-2">
              <span className="text-purple-600">const</span> agent = <span className="text-purple-600">new</span> Agent({`{`}
            </div>
            <div className="ml-4 mb-2">
              name: <span className="text-green-600">&apos;Customer Support Agent&apos;</span>,
            </div>
            <div className="ml-4 mb-2">
              voice: <span className="text-green-600">&apos;natural&apos;</span>,
            </div>
            <div className="ml-4 mb-2">
              capabilities: [<span className="text-green-600">&apos;phone&apos;</span>, <span className="text-green-600">&apos;email&apos;</span>, <span className="text-green-600">&apos;scheduling&apos;</span>]
            </div>
            <div className="mb-4">{`});`}</div>
            
            <div className="text-gray-500 mb-2"># Deploy your agent</div>
            <div>
              <span className="text-purple-600">await</span> agent.deploy();
            </div>
          </div>
        </section>

        {/* API Reference Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-10">
          <h3 className="text-2xl font-semibold text-black mb-6">API Reference</h3>
          
          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                    endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                    endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {endpoint.method}
                  </span>
                  <span className="font-mono text-sm text-black">{endpoint.url}</span>
                </div>
                <p className="text-sm text-gray-600">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
