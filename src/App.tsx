import React, { useEffect } from 'react';
import { menuData } from './i18n/menuData';
import Navigation from './components/Navigation';
import MenuSection from './components/MenuSection';
import { Utensils } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import { Navigate, Route, Routes } from 'react-router-dom';

function RestaurantApp() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation sections={menuData} />
      
      <header className="bg-amber-900 text-amber-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Utensils className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{t.header.title}</h1>
          <p className="text-xl text-amber-200">{t.header.subtitle}</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {menuData.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}
      </main>

      <footer className="bg-amber-900 text-amber-50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif mb-4">{t.header.title}</h2>
          <p className="mb-2">{t.footer.address}</p>
          <p className="mb-4">{t.footer.phone}</p>
          <p className="text-amber-200">{t.footer.hours}</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const preferredLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
  const initialPath = window.location.pathname === '/' ? `/${preferredLanguage}` : window.location.pathname;

  return (
    <Routes>
      <Route path="/:lang" element={<RestaurantApp />} />
      <Route path="/" element={<Navigate to={initialPath} replace />} />
    </Routes>
  );
}

export default App;