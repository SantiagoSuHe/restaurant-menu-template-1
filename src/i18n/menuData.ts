export interface MenuItem {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  price: number;
  image: string;
  dietary?: string[];
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    id: 'appetizers',
    title: 'appetizers',
    items: [
      {
        id: 'bruschetta',
        name: {
          en: 'Classic Bruschetta',
          es: 'Bruschetta Clásica',
        },
        description: {
          en: 'Grilled bread rubbed with garlic, topped with diced tomatoes, fresh basil, and extra virgin olive oil',
          es: 'Pan tostado frotado con ajo, cubierto con tomates picados, albahaca fresca y aceite de oliva virgen extra',
        },
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=800',
        dietary: ['vegetarian'],
      },
      {
        id: 'calamari',
        name: {
          en: 'Crispy Calamari',
          es: 'Calamares Crujientes',
        },
        description: {
          en: 'Lightly fried squid served with lemon aioli and marinara sauce',
          es: 'Calamares ligeramente fritos servidos con alioli de limón y salsa marinara',
        },
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
  {
    id: 'mains',
    title: 'mains',
    items: [
      {
        id: 'salmon',
        name: {
          en: 'Pan-Seared Salmon',
          es: 'Salmón a la Plancha',
        },
        description: {
          en: 'Fresh Atlantic salmon with lemon butter sauce, served with roasted vegetables',
          es: 'Salmón fresco del Atlántico con salsa de mantequilla al limón, servido con verduras asadas',
        },
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=800',
        dietary: ['gluten-free'],
      },
      {
        id: 'steak',
        name: {
          en: 'Ribeye Steak',
          es: 'Chuletón de Ternera',
        },
        description: {
          en: '12oz prime ribeye with garlic herb butter and truffle mashed potatoes',
          es: 'Chuletón premium de 340g con mantequilla de hierbas y ajo, y puré de patatas trufado',
        },
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800',
        dietary: ['gluten-free'],
      },
    ],
  },
  {
    id: 'desserts',
    title: 'desserts',
    items: [
      {
        id: 'tiramisu',
        name: {
          en: 'Classic Tiramisu',
          es: 'Tiramisú Clásico',
        },
        description: {
          en: 'Coffee-soaked ladyfingers layered with mascarpone cream',
          es: 'Bizcochos empapados en café con capas de crema de mascarpone',
        },
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
        dietary: ['vegetarian'],
      },
    ],
  },
  {
    id: 'beverages',
    title: 'beverages',
    items: [
      {
        id: 'wine',
        name: {
          en: 'House Red Wine',
          es: 'Vino Tinto de la Casa',
        },
        description: {
          en: 'Selected premium red wine by our sommelier',
          es: 'Vino tinto premium seleccionado por nuestro sumiller',
        },
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
      },
    ],
  },
];