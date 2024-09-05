import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Add useNavigate
import { AppBar, Toolbar, Button, Typography, useTheme } from '@mui/material';
import { setCategory } from '../redux/action';

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.blogs.categories);
  const theme = useTheme();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    navigate(`/category/${category}`); // Navigate to category page
  };

  const handleHomeClick = () => {
    dispatch(setCategory(null)); // Clear the selected category
    navigate('/'); // Navigate back to the home page
  };

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          onClick={handleHomeClick}
          sx={{ color: 'inherit', textDecoration: 'none' }}
        >
          MyBlog
        </Typography>
        <div style={{ flexGrow: 1 }} />
        {categories.map(category => (
          <Button
            key={category}
            onClick={() => handleCategoryClick(category)} // Handle category click
            sx={{
              color: 'inherit',
              '&:hover': {
                bgcolor: theme.palette.action.hover,
                borderRadius: '4px',
              },
            }}
          >
            {category}
          </Button>
        ))}
        <Button
          component={Link}
          to="/create"
          sx={{
            color: 'inherit',
            '&:hover': {
              bgcolor: theme.palette.action.hover,
              borderRadius: '4px',
            },
          }}
        >
          New Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
