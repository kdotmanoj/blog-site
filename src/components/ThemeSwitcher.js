import React from 'react';
import { Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <Switch checked={darkMode} onChange={handleToggle} />
  );
};

export default ThemeSwitcher;
