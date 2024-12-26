import React from 'react';
import { type MenuItem as MenuItemType } from '../i18n/menuData';
import { useLanguage } from '../hooks/useLanguage';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const { lang, t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name[lang]}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{item.name[lang]}</h3>
          <span className="text-lg font-bold text-amber-700">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 mb-2">{item.description[lang]}</p>
        {item.dietary && item.dietary.length > 0 && (
          <div className="flex gap-2">
            {item.dietary.map((diet) => (
              <span
                key={diet}
                className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800"
              >
                {t.dietary[diet as keyof typeof t.dietary]}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}