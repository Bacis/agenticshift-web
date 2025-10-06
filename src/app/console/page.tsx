'use client';

import { useState, useEffect } from 'react';

export default function Console() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleActionClick = (action: string) => {
    alert(`${action} feature coming soon!`);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-medium text-black mb-4 tracking-tight">
            Console
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Manage your AI agents, monitor performance, and access advanced development tools.
          </p>
        </div>

        {/* Console Interface */}
        <section className="bg-black rounded-xl overflow-hidden mb-16 shadow-lg">
          <div className="bg-gray-800 px-5 py-3 border-b border-gray-700 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm font-mono">
              Agenticshift.io Console
            </div>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed text-green-400 bg-black min-h-96">
            <div className="mb-2">
              <span className="text-green-400">agenticshift@console:~$</span>
              <span className="text-white ml-2">status --all</span>
            </div>
            <div className="text-gray-400 ml-4 mb-4">
              <div>🤖 AI Agent Status Dashboard</div>
              <div>├── Customer Support Agent: ONLINE</div>
              <div>├── Sales Qualification Bot: TRAINING</div>
              <div>├── Appointment Scheduler: ONLINE</div>
              <div>└── Lead Generation Agent: OFFLINE</div>
            </div>
            <div className="mb-2">
              <span className="text-green-400">agenticshift@console:~$</span>
              <span className="text-white ml-2">deploy --agent sales-bot --env production</span>
            </div>
            <div className="text-gray-400 ml-4 mb-4">
              <div>🚀 Deploying Sales Qualification Bot to production...</div>
              <div>✅ Agent deployed successfully</div>
              <div>✅ Retell AI integration active</div>
              <div>✅ Monitoring enabled</div>
            </div>
            <div className="mb-2">
              <span className="text-green-400">agenticshift@console:~$</span>
              <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1"></span>
            </div>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Performance Metrics */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <h3 className="text-lg font-semibold text-black mb-4">Performance Metrics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Agents</span>
                <span className="text-base font-semibold text-black">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Calls Today</span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-black">1,247</span>
                  <span className="text-xs text-green-600">+12%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Success Rate</span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-black">94.2%</span>
                  <span className="text-xs text-green-600">+2.1%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg Response Time</span>
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-black">1.2s</span>
                  <span className="text-xs text-red-600">-0.3s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Statistics */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <h3 className="text-lg font-semibold text-black mb-4">Usage Statistics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Calls (24h)</span>
                <span className="text-base font-semibold text-black">45,678</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Data Processed</span>
                <span className="text-base font-semibold text-black">2.3TB</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Workflows</span>
                <span className="text-base font-semibold text-black">156</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Integration Health</span>
                <span className="text-base font-semibold text-black">99.8%</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <h3 className="text-lg font-semibold text-black mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Deployment</span>
                <span className="text-base font-semibold text-black">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">New Agent Created</span>
                <span className="text-base font-semibold text-black">Lead Bot v2.1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">System Update</span>
                <span className="text-base font-semibold text-black">v1.4.2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Alerts</span>
                <span className="text-base font-semibold text-black">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Status */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 mb-16">
          <h3 className="text-xl font-semibold text-black mb-5">Agent Status</h3>
          <div className="space-y-4">
            {[
              { name: "Customer Support Agent", description: "Handles customer inquiries and support tickets", status: "Online", icon: "🤖" },
              { name: "Sales Qualification Bot", description: "Qualifies leads and schedules sales calls", status: "Training", icon: "📞" },
              { name: "Appointment Scheduler", description: "Manages calendar and appointment bookings", status: "Online", icon: "📅" },
              { name: "Lead Generation Agent", description: "Identifies and nurtures potential customers", status: "Offline", icon: "🎯" }
            ].map((agent, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center text-white text-base">
                    {agent.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-black">{agent.name}</h4>
                    <p className="text-xs text-gray-600">{agent.description}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium uppercase ${
                  agent.status === 'Online' ? 'bg-green-100 text-green-800' :
                  agent.status === 'Training' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {agent.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-black mb-5">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "➕", label: "Create Agent" },
              { icon: "🚀", label: "Deploy" },
              { icon: "📊", label: "Analytics" },
              { icon: "⚙️", label: "Settings" },
              { icon: "🔧", label: "Integrations" },
              { icon: "📚", label: "Documentation" }
            ].map((action, index) => (
              <button
                key={index}
                onClick={() => handleActionClick(action.label)}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-black hover:text-white hover:border-black transition-all duration-200"
              >
                <div className="text-2xl mb-2">{action.icon}</div>
                <div className="text-sm font-medium">{action.label}</div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
