export const CUISINES = ['Italian', 'Indian', 'Mexican', 'Chinese', 'Japanese', 'Thai', 'Mediterranean'];
export const DIET_TYPES = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Keto', 'Paleo'];
export const DIFFICULTY_LEVELS = ['Easy', 'Medium', 'Hard'];
export const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'];

export const MOCK_RECIPES = [
  {
    id: 1,
    title: 'Classic Margherita Pizza',
    description: 'Traditional Italian pizza with fresh ingredients',
    cuisine: 'Italian',
    mealType: 'Dinner',
    difficulty: 'Medium',
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    dietType: 'Vegetarian',
    ingredients: [
      { name: 'Pizza Dough', amount: 1, unit: 'ball' },
      { name: 'Fresh Mozzarella', amount: 200, unit: 'g' },
      { name: 'Fresh Basil', amount: 10, unit: 'leaves' },
      { name: 'Tomato Sauce', amount: 1, unit: 'cup' }
    ],
    instructions: [
      'Preheat oven to 450°F',
      'Roll out pizza dough',
      'Spread tomato sauce',
      'Add mozzarella',
      'Bake for 12-15 minutes',
      'Garnish with fresh basil'
    ],
    image: 'margherita.jpg',
    tags: ['pizza', 'italian', 'vegetarian'],
    nutritionInfo: {
      calories: 300,
      protein: 12,
      carbs: 35,
      fat: 10
    }
  },
  // Add more mock recipes here...
];