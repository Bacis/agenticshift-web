'use client';

import { useState, useEffect } from 'react';

export default function YouTube() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSubscribeClick = () => {
    alert('Thank you for subscribing! You\'ll be notified of new videos.');
  };

  const videos = [
    {
      title: "Building Your First Retell AI Phone Agent",
      description: "Learn how to create intelligent phone agents that can handle customer calls, schedule appointments, and provide 24/7 support using Retell AI's powerful platform.",
      views: "2.1K views",
      time: "3 days ago",
      duration: "12:34",
      icon: "🤖"
    },
    {
      title: "AI Workflow Automation Deep Dive",
      description: "Discover how to streamline your business processes by implementing AI agents that can handle repetitive tasks and decision-making.",
      views: "1.8K views",
      time: "1 week ago",
      duration: "18:45",
      icon: "⚡"
    },
    {
      title: "Advanced AI Agent Integration Patterns",
      description: "Explore complex integration scenarios and learn how to connect AI agents with CRM systems, databases, and third-party APIs.",
      views: "3.2K views",
      time: "2 weeks ago",
      duration: "25:12",
      icon: "🔧"
    },
    {
      title: "Measuring AI Agent Performance",
      description: "Understand the key metrics to track when implementing AI agents in your business, including response times and customer satisfaction.",
      views: "1.5K views",
      time: "3 weeks ago",
      duration: "15:30",
      icon: "📊"
    },
    {
      title: "Live Demo: Multi-Agent System",
      description: "Watch a live demonstration of a multi-agent system handling complex customer service scenarios with multiple AI agents working together.",
      views: "4.1K views",
      time: "1 month ago",
      duration: "22:18",
      icon: "🚀"
    },
    {
      title: "AI Agent Security Best Practices",
      description: "Learn essential security practices for deploying AI agents in production environments, including data protection and access control.",
      views: "2.8K views",
      time: "1 month ago",
      duration: "19:45",
      icon: "🔒"
    }
  ];

  const playlists = [
    { icon: "🚀", title: "Getting Started", count: "8 videos" },
    { icon: "📞", title: "Retell AI Tutorials", count: "12 videos" },
    { icon: "⚡", title: "Advanced Techniques", count: "15 videos" },
    { icon: "🔧", title: "Troubleshooting", count: "6 videos" }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-medium text-black mb-4 tracking-tight">
            YouTube Channel
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Watch tutorials, demos, and deep-dives into AI agent development and implementation strategies.
          </p>
        </div>

        {/* Channel Info */}
        <section className="bg-white border border-gray-200 rounded-xl p-10 mb-16 text-center">
          <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
            📺
          </div>
          <h2 className="text-2xl font-semibold text-black mb-2">Agenticshift.io</h2>
          <div className="flex justify-center gap-8 mb-6 text-sm text-gray-600">
            <div className="text-center">
              <div className="text-lg font-semibold text-black">2.5K</div>
              <div>Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-black">45</div>
              <div>Videos</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-black">125K</div>
              <div>Total Views</div>
            </div>
          </div>
          <button 
            onClick={handleSubscribeClick}
            className="bg-red-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-red-700 transition-all duration-200"
          >
            Subscribe
          </button>
        </section>

        {/* Featured Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {videos.map((video, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer">
              <div className="h-48 bg-gray-50 border-b border-gray-200 flex items-center justify-center relative text-5xl text-purple-600">
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="w-15 h-15 bg-black bg-opacity-80 rounded-full flex items-center justify-center text-white text-xl">
                    ▶
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs font-medium">
                  {video.duration}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-black mb-2 leading-tight">{video.title}</h3>
                <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                  <span>{video.views}</span>
                  <span>•</span>
                  <span>{video.time}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Playlists Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-10">
          <h3 className="text-2xl font-semibold text-black mb-6">Featured Playlists</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {playlists.map((playlist, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 cursor-pointer">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white text-lg mb-3">
                  {playlist.icon}
                </div>
                <h4 className="text-base font-semibold text-black mb-1">{playlist.title}</h4>
                <p className="text-xs text-gray-500">{playlist.count}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
