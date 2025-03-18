import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
  favorites: [],
  loading: false,
  error: null
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(id => id !== action.payload);
    }
  }
});

export const { setRecipes, addToFavorites, removeFromFavorites } = recipesSlice.actions;
export default recipesSlice.reducer;