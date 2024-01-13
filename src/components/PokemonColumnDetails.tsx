import React from 'react';
import {SimplePokemonGQL} from '../interfaces/graphQLInterface';
import {Image, StyleSheet, Text, View} from 'react-native';
import TextFormattingUtil from '../utilities/TextFormattingUtil';
import {PokemonChipType} from './PokemonChipType';

interface Props {
  pokemon: SimplePokemonGQL;
}

export const PokemonColumnDetails = ({pokemon}: Props) => {
  return (
    <View style={{justifyContent: 'space-between'}}>
      <Text style={styles.idPokemonText}>
        {TextFormattingUtil.formatNumber(pokemon.id)}
      </Text>
      <Text style={styles.pokemonNameText}>
        {TextFormattingUtil.capitalizeText(pokemon.name)}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <PokemonChipType pokemonType={pokemon.pokemon_v2_pokemontypes[0]} />
        {pokemon.pokemon_v2_pokemontypes[1] != null && (
          <PokemonChipType pokemonType={pokemon.pokemon_v2_pokemontypes[1]} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
