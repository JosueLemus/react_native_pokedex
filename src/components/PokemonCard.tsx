import React from 'react';
import {SimplePokemonGQL} from '../interfaces/graphQLInterface';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  pokemon: SimplePokemonGQL;
}
export const PokemonCard = ({pokemon}: Props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'black',
        marginVertical: 16,
        marginHorizontal: 16,
        borderRadius: 20,
        height: 115,
        padding: 16,
      }}>
        <Image style={{position:'absolute', right: 0}} source={require('../assets/background-card.png')}/>
      <Text style={{fontSize: 12}}>{pokemon.id}</Text>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 26}}>
        {pokemon.name}
      </Text>
      <Image
        source={{uri: pokemon.picture}}
        style={{
          width: 140,
          height: 140,
          position: 'absolute',
          top: -20,
          right: 12,
        }}
      />
    </TouchableOpacity>
  );
};
