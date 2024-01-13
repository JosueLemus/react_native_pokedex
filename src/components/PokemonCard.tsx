import React from 'react';
import {SimplePokemonGQL} from '../interfaces/graphQLInterface';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextFormattingUtil from '../utilities/TextFormattingUtil';
import { PokemonColumnDetails } from './PokemonColumnDetails';

interface Props {
  pokemon: SimplePokemonGQL;
}

export const PokemonCard = ({pokemon}: Props) => {
  return (
    <TouchableOpacity style={styles.backgroundCard}>
      <Image
        style={styles.backgroundImageCard}
        source={require('../assets/background-card.png')}
      />
      <PokemonColumnDetails pokemon={pokemon} />
      <Image
        source={{uri: pokemon.picture}}
        style={styles.pokemonImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundCard: {
    backgroundColor: 'black',
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 20,
    height: 115,
    padding: 16,
  },
  idPokemonText: {
    fontSize: 12,
    fontWeight: '700',
    color: 'red',
  },
  pokemonNameText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
  },
  backgroundImageCard: {
    position: 'absolute',
    right: 0,
  },
  pokemonImage: {
    width: 140,
    height: 140,
    position: 'absolute',
    top: -24,
    right: 12,
  },
});
