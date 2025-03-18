import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Home from './Home';
import recipesReducer from '../store/recipesSlice';
import { MOCK_RECIPES } from '../constants/mockData';

// Create a mock store
const createMockStore = (initialState = {}) => {
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
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
};

describe('Home Component', () => {
  test('renders recipe finder title', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText('Recipe Finder')).toBeInTheDocument();
  });

  test('renders search input', () => {
    renderWithProviders(<Home />);
    expect(screen.getByPlaceholderText('Search by recipe name or ingredient...')).toBeInTheDocument();
  });

  test('renders filter dropdowns', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText('All Cuisines')).toBeInTheDocument();
    expect(screen.getByText('All Diets')).toBeInTheDocument();
    expect(screen.getByText('All Meals')).toBeInTheDocument();
  });

  test('displays recipe cards', () => {
    renderWithProviders(<Home />);
    MOCK_RECIPES.forEach(recipe => {
      expect(screen.getByText(recipe.title)).toBeInTheDocument();
    });
  });

  test('search input updates value', () => {
    renderWithProviders(<Home />);
    const searchInput = screen.getByPlaceholderText('Search by recipe name or ingredient...');
    fireEvent.change(searchInput, { target: { value: 'pizza' } });
    expect(searchInput.value).toBe('pizza');
  });

  test('filter selection updates value', () => {
    renderWithProviders(<Home />);
    const cuisineSelect = screen.getByLabelText('Cuisine');
    fireEvent.mouseDown(cuisineSelect);
    const italianOption = screen.getByText('Italian');
    fireEvent.click(italianOption);
    expect(screen.getByText('Italian')).toBeInTheDocument();
  });
});