import React, { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { CustomTheme, darkTheme, lightTheme } from '../../theme';
import { Appearance } from 'react-native-appearance';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  theme: CustomTheme;
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const contextValue: ThemeContextProps = {
    theme,
    isDarkMode,
    setIsDarkMode,
  };

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme == 'dark')
    });
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
