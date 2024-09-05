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

    </Container>
  );
};

export default HomePage;
