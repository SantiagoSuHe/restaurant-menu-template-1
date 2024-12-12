import React from 'react';
import { menuData } from './data/menuData';
import Navigation from './components/Navigation';
import MenuSection from './components/MenuSection';
import { Utensils } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation sections={menuData} />
      
      <header className="bg-amber-900 text-amber-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Utensils className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">La Maison Dorée</h1>
          <p className="text-xl text-amber-200">Experience culinary excellence</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {menuData.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}
      </main>

      <footer className="bg-amber-900 text-amber-50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif mb-4">La Maison Dorée</h2>
          <p className="mb-2">123 Gourmet Street, Culinary City</p>
          <p className="mb-4">Tel: (555) 123-4567</p>
          <p className="text-amber-200">
            Open daily: 11:30 AM - 10:00 PM
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;