import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Typography,Box, Container } from '@mui/material';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <div className="App">
       <Container maxWidth="lg">
       <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
            Recipe Finder
          </Typography>
        </Box>
        </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
