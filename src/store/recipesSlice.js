import { createSlice } from '@reduxjs/toolkit';
import { MOCK_RECIPES } from '../constants/mockData';

const initialState = {
  recipes: MOCK_RECIPES,
  filteredRecipes: MOCK_RECIPES,
  favorites: [],
  searchTerm: '',
  filters: {
    cuisine: '',
    dietType: '',
    difficulty: '',
    mealType: ''
  },
  loading: false,
  error: null
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredRecipes = filterRecipes(state);
    },
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredRecipes = filterRecipes(state);
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.filteredRecipes = filterRecipes(state);
    },
    toggleFavorite: (state, action) => {
      const index = state.favorites.indexOf(action.payload);
      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }
    }
  }
});

// Helper function to filter recipes based on search term and filters
const filterRecipes = (state) => {
  return state.recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.name.toLowerCase().includes(state.searchTerm.toLowerCase()));
    
    const matchesCuisine = !state.filters.cuisine || recipe.cuisine === state.filters.cuisine;
    const matchesDietType = !state.filters.dietType || recipe.dietType === state.filters.dietType;
    const matchesDifficulty = !state.filters.difficulty || recipe.difficulty === state.filters.difficulty;
    const matchesMealType = !state.filters.mealType || recipe.mealType === state.filters.mealType;

    return matchesSearch && matchesCuisine && matchesDietType && matchesDifficulty && matchesMealType;
  });
};

export const { setSearchTerm, setFilter, clearFilters, toggleFavorite } = recipesSlice.actions;
export default recipesSlice.reducer;