import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogDetails from './components/BlogDetails';
import BlogForm from './components/BlogForm';
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher';
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import CategoryPage from './pages/CategoryPage'; // Import CategoryPage

const App = () => {
  const darkMode = useSelector(state => state.theme.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/create" element={<BlogForm />} />
          <Route path="/edit/:id" element={<BlogForm />} />
          <Route path="/category/:category" element={<CategoryPage />} /> {/* Add this route */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
