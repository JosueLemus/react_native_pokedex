import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/themeContext';


const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
