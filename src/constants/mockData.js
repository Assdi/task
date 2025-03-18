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
  {
    id: 2,
    title: 'Butter Chicken',
    description: 'Creamy and rich Indian curry',
    cuisine: 'Indian',
    mealType: 'Dinner',
    difficulty: 'Medium',
    prepTime: 45,
    cookTime: 30,
    servings: 6,
    dietType: 'non-vegetarian',
    ingredients: [
      { name: 'Chicken', amount: 1, unit: 'kg' },
      { name: 'Butter', amount: 100, unit: 'g' },
      { name: 'Heavy Cream', amount: 200, unit: 'ml' },
      { name: 'Tomato Puree', amount: 2, unit: 'cups' },
      { name: 'Garam Masala', amount: 2, unit: 'tbsp' }
    ],
    instructions: [
      'Marinate chicken with yogurt and spices',
      'Cook chicken in tandoor or oven',
      'Prepare curry base with tomatoes',
      'Add butter and cream',
      'Simmer until thick'
    ],
    image: 'butter-chicken.jpg',
    tags: ['curry', 'indian', 'chicken'],
    nutritionInfo: {
      calories: 450,
      protein: 28,
      carbs: 12,
      fat: 35
    }
  },
  {
    id: 3,
    title: 'Vegan Buddha Bowl',
    description: 'Nutritious and colorful bowl of goodness',
    cuisine: 'Mediterranean',
    mealType: 'Lunch',
    difficulty: 'Easy',
    prepTime: 20,
    cookTime: 25,
    servings: 2,
    dietType: 'Vegan',
    ingredients: [
      { name: 'Quinoa', amount: 1, unit: 'cup' },
      { name: 'Chickpeas', amount: 400, unit: 'g' },
      { name: 'Sweet Potato', amount: 1, unit: 'large' },
      { name: 'Kale', amount: 2, unit: 'cups' },
      { name: 'Avocado', amount: 1, unit: 'whole' }
    ],
    instructions: [
      'Cook quinoa according to package instructions',
      'Roast chickpeas with spices',
      'Cube and roast sweet potato',
      'Massage kale with olive oil',
      'Assemble bowl with all ingredients',
      'Top with tahini dressing'
    ],
    image: 'buddha-bowl.jpg',
    tags: ['vegan', 'healthy', 'bowl'],
    nutritionInfo: {
      calories: 380,
      protein: 15,
      carbs: 45,
      fat: 18
    }
  }
];