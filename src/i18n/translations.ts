interface Translation {
  navigation: {
    menu: string;
  };
  header: {
    title: string;
    subtitle: string;
  };
  sections: {
    appetizers: string;
    mains: string;
    desserts: string;
    beverages: string;
  };
  footer: {
    address: string;
    phone: string;
    hours: string;
  };
  dietary: {
    vegetarian: string;
    'gluten-free': string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    navigation: {
      menu: 'Our Menu',
    },
    header: {
      title: 'La Maison Dorée',
      subtitle: 'Experience culinary excellence',
    },
    sections: {
      appetizers: 'Appetizers',
      mains: 'Main Courses',
      desserts: 'Desserts',
      beverages: 'Beverages',
    },
    footer: {
      address: '123 Gourmet Street, Culinary City',
      phone: 'Tel: (555) 123-4567',
      hours: 'Open daily: 11:30 AM - 10:00 PM',
    },
    dietary: {
      vegetarian: 'vegetarian',
      'gluten-free': 'gluten-free',
    },
  },
  es: {
    navigation: {
      menu: 'Nuestro Menú',
    },
    header: {
      title: 'La Maison Dorée',
      subtitle: 'Experimenta la excelencia culinaria',
    },
    sections: {
      appetizers: 'Entrantes',
      mains: 'Platos Principales',
      desserts: 'Postres',
      beverages: 'Bebidas',
    },
    footer: {
      address: 'Calle Gourmet 123, Ciudad Culinaria',
      phone: 'Tel: (555) 123-4567',
      hours: 'Abierto todos los días: 11:30 - 22:00',
    },
    dietary: {
      vegetarian: 'vegetariano',
      'gluten-free': 'sin gluten',
    },
  },
};