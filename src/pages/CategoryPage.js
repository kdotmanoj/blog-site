import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import BlogCard from '../components/BlogCard';

const CategoryPage = () => {
  const { category } = useParams();
  const blogs = useSelector(state => state.blogs.blogs.filter(blog => blog.category === category));

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 4 }}>
        {category} Blogs
      </Typography>
      <Grid2 container spacing={3}>
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <Grid2 item xs={12} sm={6} md={4} key={blog.id}>
              <BlogCard blog={blog} />
            </Grid2>
          ))
        ) : (
          <Typography variant="body1">No blogs available in this category.</Typography>
        )}
      </Grid2>
    </Container>
  );
};

export default CategoryPage;
