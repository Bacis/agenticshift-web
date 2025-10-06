'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/voice-agents', label: '[V] VOICE AGENTS', key: 'voice-agents' },
    { href: '/workflow-automation', label: '[W] WORKFLOW', key: 'workflow' },
    { href: '/youtube', label: '[Y] YOUTUBE', key: 'youtube' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-300' 
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex justify-between items-center py-3 text-sm">
          <div className="flex items-center gap-0">
            <Link href="/" className="flex items-center mr-4">
              <Image 
                src="/ashift.png" 
                alt="Agentic Shift" 
                width={32} 
                height={32}
                className="rounded-md"
              />
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 font-normal tracking-wide ${
                  pathname === item.href
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:bg-black hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link 
              href="/pricing" 
              className="bg-purple-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-purple-700 transition-all duration-200"
            >
              [P] PRICING
            </Link>
            <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center bg-white text-sm cursor-pointer hover:bg-black hover:text-white hover:border-black transition-all duration-200">
              🌐
            </div>
            <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center bg-white text-xs font-medium cursor-pointer hover:bg-black hover:text-white hover:border-black transition-all duration-200">
              DEV
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
