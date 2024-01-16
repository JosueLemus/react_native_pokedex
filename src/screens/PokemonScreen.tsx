import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigator/Navigator'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{};

export const PokemonScreen = ({navigation, route}: Props) => {
  const {pokemon} = route.params;
  return (
    <View style={{margin: 60}}>
        <Text>{pokemon.name}</Text>
    </View>
  )
}
