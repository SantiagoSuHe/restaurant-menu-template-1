export interface MenuItem {
  id: string;
  name: string;
  description: string;
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
    title: 'Appetizers',
    items: [
      {
        id: 'bruschetta',
        name: 'Classic Bruschetta',
        description: 'Grilled bread rubbed with garlic, topped with diced tomatoes, fresh basil, and extra virgin olive oil',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=800',
        dietary: ['vegetarian']
      },
      {
        id: 'calamari',
        name: 'Crispy Calamari',
        description: 'Lightly fried squid served with lemon aioli and marinara sauce',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
      }
    ]
  },
  {
    id: 'mains',
    title: 'Main Courses',
    items: [
      {
        id: 'salmon',
        name: 'Pan-Seared Salmon',
        description: 'Fresh Atlantic salmon with lemon butter sauce, served with roasted vegetables',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=800',
        dietary: ['gluten-free']
      },
      {
        id: 'steak',
        name: 'Ribeye Steak',
        description: '12oz prime ribeye with garlic herb butter and truffle mashed potatoes',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800',
        dietary: ['gluten-free']
      }
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      {
        id: 'tiramisu',
        name: 'Classic Tiramisu',
        description: 'Coffee-soaked ladyfingers layered with mascarpone cream',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
        dietary: ['vegetarian']
      }
    ]
  },
  {
    id: 'beverages',
    title: 'Beverages',
    items: [
      {
        id: 'wine',
        name: 'House Red Wine',
        description: 'Selected premium red wine by our sommelier',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
      }
    ]
  }
];