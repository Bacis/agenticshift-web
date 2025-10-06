'use client';

import { useState, useEffect } from 'react';

export default function Blog() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const blogPosts = [
    {
      id: 1,
      title: "Building Your First Retell AI Phone Agent",
      excerpt: "Learn how to create intelligent phone agents that can handle customer calls, schedule appointments, and provide 24/7 support using Retell AI's powerful platform.",
      date: "December 15, 2024",
      readTime: "5 min read",
      tags: ["RETELL AI", "TUTORIAL"],
      icon: "🤖"
    },
    {
      id: 2,
      title: "Automating Business Workflows with AI Agents",
      excerpt: "Discover how to streamline your business processes by implementing AI agents that can handle repetitive tasks, data processing, and customer interactions.",
      date: "December 10, 2024",
      readTime: "7 min read",
      tags: ["AUTOMATION", "WORKFLOWS"],
      icon: "⚡"
    },
    {
      id: 3,
      title: "Measuring AI Agent Performance and ROI",
      excerpt: "Understand the key metrics to track when implementing AI agents in your business, including response times, customer satisfaction, and cost savings.",
      date: "December 5, 2024",
      readTime: "6 min read",
      tags: ["ANALYTICS", "ROI"],
      icon: "📊"
    },
    {
      id: 4,
      title: "Integrating AI Agents with Existing Systems",
      excerpt: "A comprehensive guide to connecting your AI agents with CRM systems, databases, and third-party APIs for seamless business operations.",
      date: "November 28, 2024",
      readTime: "8 min read",
      tags: ["INTEGRATION", "API"],
      icon: "🔧"
    },
    {
      id: 5,
      title: "Global AI Agent Meetup Recap",
      excerpt: "Highlights from our recent meetups across major cities, featuring presentations on advanced AI agent implementations and networking opportunities.",
      date: "November 20, 2024",
      readTime: "4 min read",
      tags: ["MEETUPS", "COMMUNITY"],
      icon: "🌍"
    },
    {
      id: 6,
      title: "The Future of AI Agent Technology",
      excerpt: "Exploring upcoming trends in AI agent development, including multi-modal capabilities, emotional intelligence, and autonomous decision-making.",
      date: "November 15, 2024",
      readTime: "9 min read",
      tags: ["FUTURE", "TRENDS"],
      icon: "🚀"
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing! You\'ll receive our latest updates soon.');
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-medium text-black mb-4 tracking-tight">
            AI Agent Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Stay updated with the latest developments in AI agent technology, implementation strategies, and industry best practices.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer">
              <div className="h-48 bg-gray-50 border-b border-gray-200 flex items-center justify-center text-5xl">
                {post.icon}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-gray-500 uppercase tracking-wide">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs font-medium uppercase tracking-wide border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-10 text-center mb-16">
          <h3 className="text-2xl font-semibold text-black mb-3">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6">
            Get the latest AI agent insights, tutorials, and industry news delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-purple-600"
            />
            <button 
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
