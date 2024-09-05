import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import { deleteBlog } from '../redux/action';

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blog = useSelector(state => state.blogs.blogs.find(blog => blog.id === id));

  const handleDelete = () => {
    dispatch(deleteBlog(id));
    navigate('/');
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

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
      <Box mt={2}>
        <Button onClick={handleEdit} variant="contained" color="primary" sx={{ mr: 2 }}>
          Edit Blog
        </Button>
        <Button onClick={handleDelete} variant="contained" color="secondary">
          Delete Blog
        </Button>
      </Box>
    </Container>
  );
};

export default BlogDetails;
