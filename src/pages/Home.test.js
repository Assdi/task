import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Home from './Home';
import recipesReducer from '../store/recipesSlice';
import { MOCK_RECIPES } from '../constants/mockData';
import App from '../App';

// Create a mock store with initial state
const createMockStore = () => {
  return configureStore({
    reducer: {
      recipes: recipesReducer
    },
    preloadedState: {
      recipes: {
        allRecipes: MOCK_RECIPES,
        filteredRecipes: MOCK_RECIPES,
        searchTerm: '',
        filters: {
          cuisine: '',
          dietType: '',
          mealType: ''
        }
      }
    }
  });
};

// Wrapper component for tests
const renderWithProviders = (component) => {
  const store = createMockStore();
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
  test('renders search input', () => {
    renderWithProviders(<Home />);
    expect(screen.getByPlaceholderText('Search by recipe name or ingredient...')).toBeInTheDocument();
  });

  test('search input updates value', async () => {
    renderWithProviders(<Home />);
    const searchInput = screen.getByRole('textbox', { name: /search recipes/i });
    fireEvent.change(searchInput, { target: { value: 'pizza' } });
    expect(searchInput.value).toBe('pizza');
  });

  test('filter selection updates value', async () => {
    const { store } = renderWithProviders(<Home />);
    const cuisineSelect = screen.getByRole('button', { name: /cuisine/i });
    
    fireEvent.mouseDown(cuisineSelect);
    const italianOption = screen.getByRole('option', { name: /italian/i });
    fireEvent.click(italianOption);
    
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