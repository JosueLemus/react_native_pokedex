import React from 'react';
import {
  Image,
  View,
} from 'react-native';
import { styles } from '../theme/appTheme';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { PokemonList } from '../components/PokemonList';
import { HomeAppBar } from '../components/HomeAppBar';

export const HomeScreen = () => {
  const context = useContext(ThemeContext);

  if (context == null) {
    return <></>;
  }

  const { theme } = context;
  return (
    <View style={{ backgroundColor: theme.containerBackgroundColor }}>
      <Image
        source={require('../assets/Pokeball.png')}
        style={styles.pokeballBG}
      />
      <HomeAppBar />
      <PokemonList />
    </View>
  );
};
