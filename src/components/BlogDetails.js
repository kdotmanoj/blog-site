import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = useSelector(state => state.blogs.blogs.find(blog => blog.id === id));

  if (!blog) return (
    <Container>
      <Typography variant="h6">Blog not found</Typography>
      <Button onClick={() => navigate('/')} variant="contained" color="primary" sx={{ mt: 2 }}>
        Back to Home
      </Button>
    </Container>
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Button onClick={() => navigate('/')} variant="contained" color="primary" sx={{ mb: 2 }}>
        Back to Home
      </Button>
      <Typography variant="h4">{blog.title}</Typography>
      <Typography variant="body1" color="textSecondary">
        {`Author: ${blog.author} | Published on: ${new Date(blog.date).toLocaleDateString()}`}
      </Typography>
      <Box mt={2} dangerouslySetInnerHTML={{ __html: blog.content }} />
      {blog.image && <img src={blog.image} alt={blog.title} style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />}
    </Container>
  );
};

export default BlogDetails;
