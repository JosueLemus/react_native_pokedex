import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigator/Navigator';
import { ThemeContext } from '../context/themeContext';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ navigation, route }: Props) => {
  const context = useContext(ThemeContext);

  if (context == null) {
    return <></>;
  }

  const { theme } = context;
  const { pokemon } = route.params;

  return (
    <View
      style={{
        backgroundColor: theme.containerBackgroundColor,
        flex: 1
      }}>
      <Text style={{color:theme.titleTextColor, padding:40, fontSize:32}}>{pokemon.name}</Text>
    </View>
  );
};
