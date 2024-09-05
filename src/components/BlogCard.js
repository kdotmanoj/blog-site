import React from 'react';
import { Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 345, backgroundColor: 'background.paper' }}>
      <CardActionArea component={Link} to={`/blog/${blog.id}`}>
        {blog.image && (
          <CardMedia
            component="img"
            height="140"
            image={blog.image}
            alt={blog.title}
            sx={{ objectFit: 'cover' }}
          />
        )}
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom color="text.primary">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.excerpt} - {new Date(blog.date).toLocaleDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
