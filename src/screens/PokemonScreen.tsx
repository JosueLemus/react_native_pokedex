import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigator/Navigator';
import { useThemeHook } from '../hooks/useThemeHook';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { pokemon } = route.params;
  // const { currentTheme, isSwitchOn, toggleSwitch } = useThemeHook();
  return (
    <View
      style={{
        margin: 60,
        // backgroundColor: currentTheme.containerBackgroundColor,
      }}>
      <Text>{pokemon.name}</Text>
    </View>
  );
};
