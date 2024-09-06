import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';

const BlogForm = ({ theme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const blog = useSelector(state => state.blogs.blogs.find(blog => blog.id === id)) || {};

  const [title, setTitle] = useState(blog.title || '');
  const [author, setAuthor] = useState(blog.author || '');
  const [image, setImage] = useState(blog.image || '');
  const [category, setCategory] = useState(blog.category || '');
  const [content, setContent] = useState('');

  const categories = ['Technology', 'Travel', 'Food', 'Lifestyle'];

  useEffect(() => {
    if (blog.content) {
      setContent(blog.content);
    }
  }, [blog.content]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { 
      id: id || Date.now().toString(), 
      title, 
      content, 
      author, 
      image, 
      category, 
      date: new Date().toISOString() 
    };
    if (id) {
      dispatch({ type: 'EDIT_BLOG', payload: newBlog });
    } else {
      dispatch({ type: 'ADD_BLOG', payload: newBlog });
    }
    navigate('/');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            {categories.map(cat => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Editor
          apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
          value={content}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help',
            content_css: theme === 'dark' 
              ? 'https://www.tiny.cloud/css/dark-theme.css' 
              : 'https://www.tiny.cloud/css/light-theme.css',
            skin: theme === 'dark' ? 'oxide-dark' : 'oxide',
            placeholder: 'Write your blog here...',  
          }}
          onEditorChange={(newContent) => setContent(newContent)}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          {id ? 'Update Blog' : 'Create Blog'}
        </Button>
      </form>
    </Container>
  );
};

export default BlogForm;
