import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {setSimplePokemonList} = usePokemonPaginated();
  console.log(setSimplePokemonList);
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokeballBG}
      />
      <Text style={{...styles.title, ...styles.globalMargin, top: top + 20}}>
        Pokedex
      </Text>
    </>
  );
};
