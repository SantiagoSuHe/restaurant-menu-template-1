import React from 'react';
import { Menu } from 'lucide-react';

interface NavigationProps {
  sections: { id: string; title: string }[];
}

export default function Navigation({ sections }: NavigationProps) {
  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Menu className="h-6 w-6 text-amber-700" />
            <span className="text-xl font-serif text-amber-900">Our Menu</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-gray-600 hover:text-amber-700 transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}