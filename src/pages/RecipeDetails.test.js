import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import { MOCK_RECIPES } from '../constants/mockData';
import { useParams } from 'react-router-dom';

// Mock useParams and useNavigate
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
    useNavigate: jest.fn(),
  }));

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('RecipeDetails Component', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear all previous mocks
      });
  test('renders recipe details', () => {
    useParams.mockReturnValue({ id: '1' });
    renderWithRouter(<RecipeDetails />);
    const recipe = MOCK_RECIPES[0];
    
    expect(screen.getByText(recipe.title)).toBeInTheDocument();
    expect(screen.getByText(recipe.description)).toBeInTheDocument();
  });

  test('renders ingredients list', () => {
    useParams.mockReturnValue({ id: '1' });
    renderWithRouter(<RecipeDetails />);
    const recipe = MOCK_RECIPES[0];
    
    expect(screen.getByText('Ingredients')).toBeInTheDocument();
    recipe.ingredients.forEach(ingredient => {
      expect(screen.getByText(
        `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`
      )).toBeInTheDocument();
    });
  });

  test('renders cooking instructions', () => {
    useParams.mockReturnValue({ id: '1' });
    renderWithRouter(<RecipeDetails />);
    const recipe = MOCK_RECIPES[0];
    
    expect(screen.getByText('Instructions')).toBeInTheDocument();
    recipe.instructions.forEach((instruction, index) => {
      expect(screen.getByText(`${index + 1}. ${instruction}`)).toBeInTheDocument();
    });
  });

  test('renders additional information', () => {
    useParams.mockReturnValue({ id: '1' });
    renderWithRouter(<RecipeDetails />);
    const recipe = MOCK_RECIPES[0];
    
    expect(screen.getByText(`Cuisine: ${recipe.cuisine}`)).toBeInTheDocument();
    expect(screen.getByText(`Meal Type: ${recipe.mealType}`)).toBeInTheDocument();
    expect(screen.getByText(`Prep Time: ${recipe.prepTime} mins`)).toBeInTheDocument();
    expect(screen.getByText(`Cook Time: ${recipe.cookTime} mins`)).toBeInTheDocument();
  });

  test('renders back button', () => {
    useParams.mockReturnValue({ id: '1' });
    renderWithRouter(<RecipeDetails />);
    expect(screen.getByText('Back to Recipes')).toBeInTheDocument();
  });

test('handles recipe not found', () => {
    // Mock useParams to return a non-existent ID
    useParams.mockReturnValue({ id: '9999' });

    renderWithRouter(<RecipeDetails />);
    expect(screen.getByText('Recipe not found')).toBeInTheDocument();
  });
});