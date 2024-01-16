import React from 'react';
import {PokemonV2Pokemontype} from '../interfaces/graphQLInterface';
import {Image, StyleSheet, Text, View} from 'react-native';
import TextFormattingUtil from '../utilities/TextFormattingUtil';
import {BackgroundImage} from '../interfaces/pokemonTypeImage';
import {TypeColorUtil} from '../utilities/TypeColorUtil';

interface Props {
  pokemonType: PokemonV2Pokemontype;
}

export const PokemonChipType = ({pokemonType}: Props) => {
  const pokemonName = TextFormattingUtil.capitalizeText(
    pokemonType.pokemon_v2_type.name,
  );
  const backgroundImage = BackgroundImage.GetImage(
    `${pokemonType.pokemon_v2_type.name}.png`,
  );
  return (
    <View
      style={{
        backgroundColor: TypeColorUtil.getTypeColor(
          pokemonType.pokemon_v2_type.name,
        ),
        ...styles.chipBackground,
      }}>
      <Image
        tintColor={'white'}
        source={backgroundImage}
        style={styles.imageStyle}
      />
      <Text style={styles.typeText}>{pokemonName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 15,
    height: 15,
    marginRight: 4,
  },
  textStyle: {
    color: 'white',
    fontSize: 12,
  },
  chipBackground: {
    borderRadius: 10,
    padding: 6,
    flexDirection: 'row',
    marginRight: 16,
    elevation: 10,
  },
  typeText: {
    color: 'white',
    fontSize: 12,
  },
});
