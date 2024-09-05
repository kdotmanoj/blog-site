import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';

// Define a component for theme management
const Root = () => {
  const darkMode = useSelector(state => state.theme.darkMode);

  // Create the theme based on darkMode value
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

// Render the application
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
