import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { Container, Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

const CategoryPage = () => {
  const { category } = useParams(); // Get category from URL
  const blogs = useSelector(state => state.blogs.blogs);

  // Filter blogs based on category from URL
  const filteredBlogs = blogs.filter(blog => blog.category === category);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        {category} Blogs
      </Typography>

      {filteredBlogs.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <Typography variant="h6" color="text.secondary">
            No blogs available for this category.
          </Typography>
        </Box>
      ) : (
        <Box sx={{ my: 4 }}>
          <Grid2 container spacing={3}>
            {filteredBlogs.map(blog => (
              <Grid2 item xs={12} sm={6} md={4} key={blog.id}>
                <BlogCard blog={blog} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      )}
    </Container>
  );
};

export default CategoryPage;
