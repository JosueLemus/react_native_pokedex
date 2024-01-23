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
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons, isLoading } =
    useGraphQLPokemonList();

  const context = useContext(ThemeContext);

  if (context == null) {
    return <View></View>;
  }

  const { theme, isDarkMode, setIsDarkMode } = context;
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  return (
    <View style={{ backgroundColor: theme.containerBackgroundColor }}>
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
          <TouchableOpacity>
            <Image
              source={require('../assets/homefilters/Generation.png')}
              style={{
                ...styles.filterSize,
                tintColor: theme.titleTextColor,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 16 }}>
            <Image
              source={require('../assets/homefilters/Sort.png')}
              style={{
                ...styles.filterSize,
                tintColor: theme.titleTextColor,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsDarkMode(true)}>
            <Image
              source={require('../assets/homefilters/Filter.png')}
              style={{
                ...styles.filterSize,
                tintColor: theme.titleTextColor,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ height: 30, left: 0, position: 'absolute' }}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setIsDarkMode}
            value={isDarkMode}
          />
        </View>
        <Text style={{ ...styles.title, color: theme.titleTextColor }}>
          Pokédex
          {/* {isDarkMode ? "dark mode" : "light mode"} */}
        </Text>
        <Text style={styles.subtitle}>
          Search for Pokémon by name or using the National Pokédex number.
        </Text>

        <View
          style={{
            ...styles.textInputContainer,
            backgroundColor: theme.backgroundInput,
          }}>
          <Icon name="search" size={20} color="#747476" />
          <TextInput
            placeholder="What Pokémon are you looking for?"
            placeholderTextColor="#747476"
            style={{ ...styles.textInput, color: theme.titleTextColor }}
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
      {/* <BottomSheet/> */}
    </View>
  );
};
