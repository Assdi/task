import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, Grid, TextField, MenuItem, Typography } from '@mui/material';
import { setSearchTerm, setFilter } from '../store/recipesSlice';
import { CUISINES, DIET_TYPES, MEAL_TYPES } from '../constants/mockData';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { filteredRecipes } = useSelector((state) => state.recipes);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    dispatch(setSearchTerm(value));
  };

  const handleFilterChange = (filterType, value) => {
    dispatch(setFilter({ [filterType]: value }));
  };

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Recipe Finder
        </Typography>

        {/* Search and Filters */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search recipes"
              value={searchInput}
              onChange={handleSearch}
              placeholder="Search by recipe name or ingredient..."
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              select
              fullWidth
              label="Cuisine"
              onChange={(e) => handleFilterChange('cuisine', e.target.value)}
            >
              <MenuItem value="">All Cuisines</MenuItem>
              {CUISINES.map((cuisine) => (
                <MenuItem key={cuisine} value={cuisine}>
                  {cuisine}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              select
              fullWidth
              label="Diet Type"
              onChange={(e) => handleFilterChange('dietType', e.target.value)}
            >
              <MenuItem value="">All Diets</MenuItem>
              {DIET_TYPES.map((diet) => (
                <MenuItem key={diet} value={diet}>
                  {diet}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              select
              fullWidth
              label="Meal Type"
              onChange={(e) => handleFilterChange('mealType', e.target.value)}
            >
              <MenuItem value="">All Meals</MenuItem>
              {MEAL_TYPES.map((meal) => (
                <MenuItem key={meal} value={meal}>
                  {meal}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        {/* Recipe Grid */}
        <Grid container spacing={3}>
          {filteredRecipes.map((recipe) => (
            <Grid item key={recipe.id} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 2,
                  border: '1px solid #ddd',
                  borderRadius: 2,
                  height: '100%',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: 3,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s'
                  }
                }}
                onClick={() => handleRecipeClick(recipe.id)}
              >
                <Typography variant="h6" gutterBottom>
                  {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.cuisine} • {recipe.mealType}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Prep Time: {recipe.prepTime} mins
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Difficulty: {recipe.difficulty}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;