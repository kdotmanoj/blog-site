// HomePage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import BlogCard from '../components/BlogCard';
import BlogSearch from '../components/BlogSearch';

const HomePage = () => {
  const blogs = useSelector(state => state.blogs.blogs);
  const selectedCategory = useSelector(state => state.blogs.selectedCategory);
  const searchTerm = useSelector(state => state.blogs.searchTerm);

  // Filter blogs based on selected category and search term
  const filteredBlogs = blogs.filter(blog =>
    (selectedCategory === null || blog.category === selectedCategory) &&
    (!searchTerm || 
     blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     blog.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Featured Blogs
      </Typography>
      <BlogSearch />

      {/* {filteredBlogs.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <Typography variant="h6" color="text.secondary">
            No blogs found for the selected category or search term.
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
      )} */}
    </Container>
  );
};

export default HomePage;
