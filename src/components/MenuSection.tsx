import React from 'react';
import { type MenuSection as MenuSectionType } from '../data/menuData';
import MenuItem from './MenuItem';

interface MenuSectionProps {
  section: MenuSectionType;
}

export default function MenuSection({ section }: MenuSectionProps) {
  return (
    <section id={section.id} className="mb-12">
      <h2 className="text-3xl font-serif mb-6 text-amber-900 border-b-2 border-amber-200 pb-2">
        {section.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {section.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}