'use client';

import { useState, useEffect } from 'react';

export default function Meetups() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleRegisterClick = () => {
    alert('Registration will open soon! Stay tuned for updates.');
  };

  const handleCommunityClick = (platform: string) => {
    alert(`Join our ${platform} to connect with the community!`);
  };

  const upcomingEvents = [
    {
      date: "January 15, 2025",
      time: "6:00 PM - 9:00 PM PST",
      title: "Retell AI Deep Dive Workshop",
      description: "Hands-on workshop covering advanced Retell AI integration patterns, voice optimization, and real-world deployment strategies.",
      location: "San Francisco, CA",
      attendees: "45 attendees"
    },
    {
      date: "January 22, 2025",
      time: "7:00 PM - 10:00 PM EST",
      title: "AI Workflow Automation Summit",
      description: "Explore cutting-edge workflow automation techniques, multi-agent systems, and enterprise integration patterns.",
      location: "New York, NY",
      attendees: "78 attendees"
    },
    {
      date: "February 5, 2025",
      time: "6:30 PM - 9:30 PM GMT",
      title: "European AI Agent Conference",
      description: "International conference featuring speakers from leading AI companies, case studies, and networking opportunities.",
      location: "London, UK",
      attendees: "120 attendees"
    }
  ];

  const pastEvents = [
    {
      title: "Building Multi-Agent Systems",
      date: "December 10, 2024",
      description: "Learn how to orchestrate multiple AI agents working together to solve complex business problems."
    },
    {
      title: "Retell AI Integration Patterns",
      date: "November 28, 2024",
      description: "Deep dive into Retell AI integration strategies and best practices for phone agent deployment."
    },
    {
      title: "AI Agent Security & Compliance",
      date: "November 15, 2024",
      description: "Essential security practices and compliance considerations for enterprise AI agent deployments."
    },
    {
      title: "Workflow Automation Workshop",
      date: "November 2, 2024",
      description: "Hands-on workshop covering intelligent workflow design and implementation strategies."
    }
  ];

  const communityStats = [
    { number: "2.5K+", label: "Members" },
    { number: "45", label: "Events Hosted" },
    { number: "12", label: "Cities" },
    { number: "95%", label: "Satisfaction" }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-medium text-black mb-4 tracking-tight">
            AI Agent Meetups
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Join our global community of AI practitioners, developers, and innovators building the future of intelligent automation.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="bg-white border border-gray-200 rounded-xl p-10 mb-16">
          <h3 className="text-2xl font-semibold text-black mb-6">Upcoming Events</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 hover:border-gray-400 hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white text-lg">
                    📅
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-black">{event.date}</h4>
                    <p className="text-sm text-gray-600">{event.time}</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{event.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <span>📍</span>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👥</span>
                    <span>{event.attendees}</span>
                  </div>
                </div>
                <button 
                  onClick={handleRegisterClick}
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200"
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="bg-white border border-gray-200 rounded-xl p-10 mb-16">
          <h3 className="text-2xl font-semibold text-black mb-6">Recent Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 cursor-pointer">
                <h4 className="text-base font-semibold text-black mb-2">{event.title}</h4>
                <p className="text-xs text-gray-500 mb-2">{event.date}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Stats */}
        <section className="bg-white border border-gray-200 rounded-xl p-10 mb-16 text-center">
          <h3 className="text-2xl font-semibold text-black mb-6">Our Community</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-semibold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Community */}
        <section className="bg-white border border-gray-200 rounded-xl p-10 text-center">
          <h3 className="text-2xl font-semibold text-black mb-4">Join Our Community</h3>
          <p className="text-gray-600 mb-6">
            Connect with like-minded professionals, share knowledge, and stay updated with the latest AI agent developments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {['Slack Community', 'Discord Server', 'LinkedIn Group', 'Newsletter'].map((platform, index) => (
              <button
                key={index}
                onClick={() => handleCommunityClick(platform)}
                className="bg-gray-100 text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition-all duration-200"
              >
                {platform}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
