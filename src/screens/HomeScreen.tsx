import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGraphQLPokemonList } from '../hooks/useGraphQLPokemonList';
import { PokemonCard } from '../components/PokemonCard';
import Icon from 'react-native-vector-icons/Ionicons';
import { useThemeHook } from '../hooks/useThemeHook';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons, isLoading } =
    useGraphQLPokemonList();
  const { currentTheme, isSwitchOn, toggleSwitch } = useThemeHook();

  return (
    <View style={{ backgroundColor: currentTheme.containerBackgroundColor }}>
      <Image
        source={require('../assets/Pokeball.png')}
        style={{ ...styles.pokeballBG, tintColor: '#B5B9C4', opacity: 0.1 }}
      />
      <View style={{ ...styles.globalMargin, top: top + 14 }}>
        <View
          style={{
            flexDirection: 'row',
            right: 0,
            position: 'absolute',
          }}>
          <TouchableOpacity onPress={toggleSwitch}>
            <Image
              source={require('../assets/homefilters/Generation.png')}
              style={{
                ...styles.filterSize,
                tintColor: currentTheme.titleTextColor,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 16 }}>
            <Image
              source={require('../assets/homefilters/Sort.png')}
              style={{
                ...styles.filterSize,
                tintColor: currentTheme.titleTextColor,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('3')}>
            <Image
              source={require('../assets/homefilters/Filter.png')}
              style={{
                ...styles.filterSize,
                tintColor: currentTheme.titleTextColor,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ height: 30, left: 0, position: 'absolute' }}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isSwitchOn ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isSwitchOn}
          />
        </View>
        <Text style={{ ...styles.title, color: currentTheme.titleTextColor }}>
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
            style={{ ...styles.textInput, color: currentTheme.titleTextColor }}
          />
        </View>
      </View>
      <FlatList
        style={{ marginTop: top }}
        showsVerticalScrollIndicator={false}
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.name}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <View style={{ height: 300 }}>
            {isLoading && (
              <ActivityIndicator
                style={{ height: 20 }}
                size={20}
                color={'grey'}
              />
            )}
          </View>
        }
      />
    </View>
  );
};
