import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import BlogCard from './BlogCard';
import { setSearchTerm } from '../redux/action'; // Corrected import path

const BlogSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.blogs.searchTerm);
  const selectedCategory = useSelector(state => state.blogs.selectedCategory);
  const blogs = useSelector(state => state.blogs.blogs);

  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setLocalSearchTerm(term);
    dispatch(setSearchTerm(term));
  };

  const filteredBlogs = blogs.filter(blog =>
    (selectedCategory === null || blog.category === selectedCategory) &&
    (localSearchTerm === '' || 
     blog.title.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
     blog.content.toLowerCase().includes(localSearchTerm.toLowerCase()))
  );

  return (
    <Box sx={{ mb: 4, backgroundColor: 'background.default', p: 2, borderRadius: 1 }}>
      <TextField 
        label="Search Blogs" 
        variant="outlined" 
        fullWidth 
        value={localSearchTerm} 
        onChange={handleSearchChange} 
        sx={{ mb: 2 }}
      />
      {filteredBlogs.length > 0 ? (
        <Box sx={{ my: 4 }}>
          <Grid2 container spacing={3}>
            {filteredBlogs.map(blog => (
              <Grid2 item xs={12} sm={6} md={4} key={blog.id}>
                <BlogCard blog={blog} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No blogs match your search criteria.
        </Typography>
      )}
    </Box>
  );
};

export default BlogSearch;
