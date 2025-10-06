'use client';

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Badge } from "@/components/ui/badge";

interface Tool {
  name: string;
  category: string;
  highlight: string;
  description: string;
  logo: string;
  screenshot: string;
  features: string[];
}

const VoiceAIToolsContent = ({ tool }: { tool: Tool }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="w-12 h-12 rounded-lg object-contain"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{tool.name}</h3>
              <Badge variant="secondary" className="text-xs">{tool.category}</Badge>
            </div>
          </div>
          <p className="text-gray-600 text-base md:text-lg font-sans max-w-3xl mb-6">
            <span className="font-bold text-gray-900">
              {tool.highlight}
            </span>{" "}
            {tool.description}
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tool.screenshot}
            alt={`${tool.name} interface`}
            className="w-full max-w-md h-auto rounded-lg shadow-lg object-contain"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">Key Features</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tool.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Benefits</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center text-sm text-gray-700">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            Enhanced customer experience
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            Reduced operational costs
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            24/7 availability
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            Scalable infrastructure
          </div>
        </div>
      </div>
    </>
  );
};

const toolsData = [
  {
    src: "bg-gradient-to-br from-purple-500 to-blue-600",
    title: "Retell AI",
    category: "Voice AI Platform",
    content: <VoiceAIToolsContent tool={{
      name: "Retell AI",
      category: "Voice AI Platform",
      highlight: "Ultra-realistic voice AI with natural conversation flow.",
      description: "Retell AI enables businesses to create human-like phone agents that handle customer calls, bookings, and support with zero wait times and natural conversation flow.",
      logo: "https://retellai.com/favicon.ico",
      screenshot: "https://retellai.com/og-image.png",
      features: [
        "Human-like voice synthesis",
        "Real-time conversation processing",
        "Custom voice training",
        "CRM integration capabilities"
      ]
    }} />
  },
  {
    src: "bg-gradient-to-br from-green-500 to-teal-600",
    title: "Vapi",
    category: "Enterprise Voice AI",
    content: <VoiceAIToolsContent tool={{
      name: "Vapi",
      category: "Enterprise Voice AI",
      highlight: "Enterprise-grade voice AI platform with advanced NLP.",
      description: "Vapi provides powerful voice AI capabilities with advanced natural language understanding, multi-language support, and enterprise-grade infrastructure.",
      logo: "https://vapi.ai/favicon.ico",
      screenshot: "https://vapi.ai/og-image.png",
      features: [
        "Advanced natural language processing",
        "Multi-language support",
        "Custom integrations",
        "Analytics dashboard"
      ]
    }} />
  },
  {
    src: "bg-gradient-to-br from-orange-500 to-red-600",
    title: "Rime AI",
    category: "High-Performance AI",
    content: <VoiceAIToolsContent tool={{
      name: "Rime AI",
      category: "High-Performance AI",
      highlight: "High-performance voice AI with low latency processing.",
      description: "Rime AI delivers scalable voice AI solutions with ultra-low latency, custom model training, and API-first architecture for seamless integration.",
      logo: "https://rime.ai/favicon.ico",
      screenshot: "https://rime.ai/og-image.png",
      features: [
        "Low latency processing",
        "Scalable architecture",
        "Custom model training",
        "API-first design"
      ]
    }} />
  },
  {
    src: "bg-gradient-to-br from-indigo-500 to-purple-600",
    title: "AssemblyAI",
    category: "Speech Intelligence",
    content: <VoiceAIToolsContent tool={{
      name: "AssemblyAI",
      category: "Speech Intelligence",
      highlight: "Speech-to-text and conversation intelligence platform.",
      description: "AssemblyAI provides real-time transcription, speaker diarization, sentiment analysis, and conversation insights for comprehensive voice data processing.",
      logo: "https://www.assemblyai.com/favicon.ico",
      screenshot: "https://www.assemblyai.com/og-image.png",
      features: [
        "Real-time transcription",
        "Speaker diarization",
        "Sentiment analysis",
        "Conversation insights"
      ]
    }} />
  },
  {
    src: "bg-gradient-to-br from-cyan-500 to-blue-600",
    title: "LiveKit",
    category: "Real-time Communication",
    content: <VoiceAIToolsContent tool={{
      name: "LiveKit",
      category: "Real-time Communication",
      highlight: "Real-time communication platform with voice AI capabilities.",
      description: "LiveKit enables real-time voice and video communication with integrated AI capabilities, WebRTC support, and multi-platform compatibility.",
      logo: "https://livekit.io/favicon.ico",
      screenshot: "https://livekit.io/og-image.png",
      features: [
        "Real-time communication",
        "WebRTC integration",
        "Custom voice agents",
        "Multi-platform support"
      ]
    }} />
  }
];

export default function VoiceAIToolsCarousel() {
  const cards = toolsData.map((tool, index) => (
    <Card key={tool.src} card={tool} index={index} />
  ));
  
  return (
    <div className="w-full h-full py-8">
      <h2 className="max-w-7xl pl-4 mx-auto text-4xl font-medium text-black">
        Voice AI Tools & Platforms We Work With
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
