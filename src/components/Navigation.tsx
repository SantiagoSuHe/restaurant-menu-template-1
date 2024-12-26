import React from 'react';
import { Menu } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

interface NavigationProps {
  sections: { id: string; title: string }[];
}

export default function Navigation({ sections }: NavigationProps) {
  const { t } = useLanguage();
  const { lang } = useParams();
  const otherLang = lang === 'es' ? 'en' : 'es';

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Menu className="h-6 w-6 text-amber-700" />
            <span className="text-xl font-serif text-amber-900">{t.navigation.menu}</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-gray-600 hover:text-amber-700 transition-colors"
                >
                  {t.sections[section.title as keyof typeof t.sections]}
                </a>
              ))}
            </div>
            <Link
              to={`/${otherLang}`}
              className="px-3 py-1 rounded-md bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors uppercase"
            >
              {lang}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}