import { useEffect, useState } from 'react';
import { darkTheme } from '../theme/darkTheme';
import { Appearance } from 'react-native-appearance';
import { lightTheme } from '../theme/lightTheme';
import { StatusBar } from 'react-native';

export const useThemeHook = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      StatusBar.setBarStyle('dark-content', true);
      StatusBar.setBarStyle('light-content', false);
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  }, []);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    const newTheme = isSwitchOn ? darkTheme : lightTheme;
    setCurrentTheme(newTheme);
  };

  return {
    currentTheme,
    isSwitchOn,
    toggleSwitch,
  };
};
