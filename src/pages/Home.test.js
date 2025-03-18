import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Home from './Home';
import recipesReducer from '../store/recipesSlice';
import { MOCK_RECIPES } from '../constants/mockData';

// Create a mock store with initial state
const createMockStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      recipes: recipesReducer
    },
    preloadedState: {
      recipes: {
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
        error: null,
        ...preloadedState
      }
    }
  });
};

// Wrapper component for tests
const renderWithProviders = (component, preloadedState = {}) => {
  const store = createMockStore(preloadedState);
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>
          {component}
        </BrowserRouter>
      </Provider>
    ),
    store
  };
};

describe('Home Component', () => {
  beforeEach(() => {
    // Clear any previous mocks
    jest.clearAllMocks();
  });

  test('renders search input', () => {
    renderWithProviders(<Home />);
    expect(screen.getByPlaceholderText('Search by recipe name or ingredient...')).toBeInTheDocument();
  });

  test('search input updates value', async () => {
    const { store } = renderWithProviders(<Home />);
    const searchInput = screen.getByRole('textbox', { name: /search recipes/i });
    
    // Update the search input
    fireEvent.change(searchInput, { target: { value: 'pizza' } });
    
    // Check if the input value was updated
    expect(searchInput.value).toBe('pizza');
    
    // Wait for the next tick to allow Redux to update
    await new Promise(resolve => setTimeout(resolve, 0));
    
    // Check if the store was updated
    const state = store.getState();
    expect(state.recipes.searchTerm).toBe('pizza');
  });

  test('filter selection updates value', async () => {
    const { store } = renderWithProviders(<Home />);
    
    // Find the select by its label text
    const cuisineSelect = screen.getByLabelText('Cuisine');
    
    // Open the select dropdown
    fireEvent.mouseDown(cuisineSelect);
    
    // Find and click the option in the dropdown menu
    const italianOption = screen.getByText('Italian');
    fireEvent.click(italianOption);
    
    // Check if the store was updated
    const state = store.getState();
    expect(state.recipes.filters.cuisine).toBe('Italian');
  });

  test('displays recipe cards', () => {
    renderWithProviders(<Home />);
    MOCK_RECIPES.forEach(recipe => {
      expect(screen.getByText(recipe.title)).toBeInTheDocument();
    });
  });
});