'use client';

import { useState, useEffect } from 'react';

export default function GitHub() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleActionClick = (action: string) => {
    alert(`Thank you for ${action.toLowerCase()}ing the repository!`);
  };

  const repositories = [
    {
      icon: "🤖",
      title: "ai-agents-core",
      description: "Core AI agent framework with Retell AI integration, workflow automation, and multi-modal capabilities.",
      language: "TypeScript",
      updated: "Updated 2 days ago"
    },
    {
      icon: "⚡",
      title: "agenticshift-sdk",
      description: "Official SDK for integrating AI agents into your applications with simple APIs and comprehensive documentation.",
      language: "Python",
      updated: "Updated 1 week ago"
    },
    {
      icon: "📚",
      title: "ai-agent-examples",
      description: "Collection of example implementations, tutorials, and starter templates for common AI agent use cases.",
      language: "JavaScript",
      updated: "Updated 3 days ago"
    },
    {
      icon: "📞",
      title: "retell-ai-integration",
      description: "Specialized tools and utilities for integrating with Retell AI phone agents and voice automation.",
      language: "TypeScript",
      updated: "Updated 5 days ago"
    },
    {
      icon: "🔄",
      title: "workflow-engine",
      description: "Intelligent workflow automation engine that can orchestrate complex business processes with AI decision-making.",
      language: "Go",
      updated: "Updated 1 week ago"
    },
    {
      icon: "📖",
      title: "agenticshift-docs",
      description: "Comprehensive documentation, API references, and interactive tutorials for the Agenticshift.io platform.",
      language: "Markdown",
      updated: "Updated 2 days ago"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-medium text-black mb-4 tracking-tight">
            GitHub Repository
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Open source AI agent tools, SDKs, and example implementations for building intelligent automation solutions.
          </p>
        </div>

        {/* Repository Info */}
        <section className="bg-white border border-gray-200 rounded-xl p-10 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white text-2xl">
              📦
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-black mb-1">agenticshift/ai-agents</h2>
              <p className="text-gray-600">Open source AI agent framework for building intelligent automation solutions with Retell AI integration.</p>
            </div>
          </div>
          <div className="flex gap-8 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>⭐</span>
              <span>1.2K stars</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🍴</span>
              <span>245 forks</span>
            </div>
            <div className="flex items-center gap-2">
              <span>👁️</span>
              <span>3.8K watching</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🐛</span>
              <span>12 issues</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => handleActionClick('Star')}
              className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200"
            >
              Star
            </button>
            <button 
              onClick={() => handleActionClick('Fork')}
              className="bg-gray-100 text-black px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-all duration-200"
            >
              Fork
            </button>
            <button 
              onClick={() => handleActionClick('Watch')}
              className="bg-gray-100 text-black px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-all duration-200"
            >
              Watch
            </button>
          </div>
        </section>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {repositories.map((repo, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-base">
                  {repo.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">{repo.title}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{repo.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>{repo.language}</span>
                </div>
                <span>{repo.updated}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Code Snippets */}
        <section className="bg-white border border-gray-200 rounded-xl p-10 mb-16">
          <h3 className="text-2xl font-semibold text-black mb-6">Quick Start</h3>
          <p className="text-gray-600 mb-6">Get started with our AI agent framework in just a few lines of code:</p>
          
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
              capabilities: [<span className="text-green-600">&apos;phone&apos;</span>, <span className="text-green-600">&apos;email&apos;</span>, <span className="text-green-600">&apos;scheduling&apos;</span>],
            </div>
            <div className="ml-4 mb-2">
              retellConfig: {`{`}
            </div>
            <div className="ml-8 mb-2">
              voiceId: <span className="text-green-600">&apos;natural-voice-001&apos;</span>,
            </div>
            <div className="ml-8 mb-2">
              language: <span className="text-green-600">&apos;en-US&apos;</span>
            </div>
            <div className="ml-4 mb-2">{`}`}</div>
            <div className="mb-4">{`});`}</div>
            
            <div className="text-gray-500 mb-2"># Deploy your agent</div>
            <div>
              <span className="text-purple-600">await</span> agent.deploy();
            </div>
          </div>
        </section>

        {/* Contributing Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-10">
          <h3 className="text-2xl font-semibold text-black mb-4">Contributing</h3>
          <p className="text-gray-600 mb-6">We welcome contributions from the community! Here&apos;s how you can get involved:</p>
          
          <ol className="list-none space-y-2 mb-6">
            {[
              "Fork the repository and clone it to your local machine",
              "Create a new branch for your feature or bug fix",
              "Make your changes and add tests if applicable",
              "Run the test suite to ensure everything passes",
              "Submit a pull request with a clear description of your changes"
            ].map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="w-4 h-4 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-sm text-gray-600">{step}</span>
              </li>
            ))}
          </ol>
          
          <p className="text-gray-600">
            For major changes, please open an issue first to discuss what you would like to change.
          </p>
        </section>
      </div>
    </div>
  );
}
