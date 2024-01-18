import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useGraphQLPokemonList} from '../hooks/useGraphQLPokemonList';
import {PokemonCard} from '../components/PokemonCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {darkTheme} from '../theme/darkTheme';
import {Appearance} from 'react-native-appearance';
import {lightTheme} from '../theme/lightTheme';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = useGraphQLPokemonList();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
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
  return (
    <View style={{backgroundColor: currentTheme.containerBackgroundColor}}>
      <Image
        source={require('../assets/Pokeball.png')}
        style={{...styles.pokeballBG, tintColor: '#B5B9C4', opacity: 0.1}}
      />
      <View style={{...styles.globalMargin, top: top + 14}}>
        <View
          style={{
            flexDirection: 'row',
            right: 0,
            position: 'absolute',
          }}>
          <TouchableOpacity onPress={toggleSwitch}>
            <Image
              source={require('../assets/homefilters/Generation.png')}
              style={{...styles.filterSize, tintColor: currentTheme.textColor}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 16}}>
            <Image
              source={require('../assets/homefilters/Sort.png')}
              style={{...styles.filterSize, tintColor: currentTheme.textColor}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('3')}>
            <Image
              source={require('../assets/homefilters/Filter.png')}
              style={{...styles.filterSize, tintColor: currentTheme.textColor}}
            />
          </TouchableOpacity>
        </View>
        <Text style={{...styles.title, color: currentTheme.titleTextColor}}>
          Pokédex
        </Text>
        <Text style={styles.subtitle}>
          Search for Pokémon by name or using the National Pokédex number.
        </Text>

        <View
          style={{
            ...styles.textInputContainer,
            backgroundColor: currentTheme.backgroundInput,
          }}>
          <Icon name="search" size={20} color="#747476" />
          <TextInput
            placeholder="What Pokémon are you looking for?"
            placeholderTextColor="#747476"
            style={{...styles.textInput, color: currentTheme.titleTextColor}}
          />
        </View>
      </View>

      <FlatList
        style={{marginTop: top}}
        showsVerticalScrollIndicator={false}
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.name}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color={'grey'} />
        }
      />
    </View>
  );
};
