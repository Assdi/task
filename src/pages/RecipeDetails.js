import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Grid, List, ListItem, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { MOCK_RECIPES } from '../constants/mockData';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = MOCK_RECIPES.find(r => r.id === parseInt(id));

  if (!recipe) {
    return (
      <Container>
        <Typography>Recipe not found</Typography>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/')}
          sx={{ mb: 2 }}
        >
          Back to Recipes
        </Button>

        <Typography variant="h4" gutterBottom>
          {recipe.title}
        </Typography>
        
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {recipe.description}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Ingredients
            </Typography>
            <List>
              {recipe.ingredients.map((ingredient, index) => (
                <ListItem key={index}>
                  {`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Instructions
            </Typography>
            <List>
              {recipe.instructions.map((step, index) => (
                <ListItem key={index}>
                  {`${index + 1}. ${step}`}
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Additional Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Cuisine: {recipe.cuisine}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Meal Type: {recipe.mealType}</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Prep Time: {recipe.prepTime} mins</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Cook Time: {recipe.cookTime} mins</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RecipeDetails;