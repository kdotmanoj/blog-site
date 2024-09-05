import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/system';
import { IconButton, useTheme } from '@mui/material';
import { WbSunny as SunIcon, Brightness2 as MoonIcon } from '@mui/icons-material';

const ToggleButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '80px', // Position it below the navbar
  right: '20px',
  backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
  borderRadius: '50%',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#444' : '#f0f0f0',
  },
}));

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const theme = useTheme();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <ToggleButton onClick={handleToggle} aria-label="toggle theme">
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </ToggleButton>
  );
};

export default ThemeSwitcher;
