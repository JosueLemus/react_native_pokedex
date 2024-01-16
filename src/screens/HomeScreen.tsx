import React from 'react';
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

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = useGraphQLPokemonList();
  return (
    <View>
      <Image
        source={require('../assets/Pokeball.png')}
        style={styles.pokeballBG}
      />
      <View style={{...styles.globalMargin, top: top + 14}}>
        <View
          style={{
            flexDirection: 'row',
            right: 0,
            position: 'absolute',
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/homefilters/Generation.png')}
              style={styles.filterSize}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 16}}>
            <Image
              source={require('../assets/homefilters/Sort.png')}
              style={styles.filterSize}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/homefilters/Filter.png')}
              style={styles.filterSize}
            />
          </TouchableOpacity>
        </View>
        <Text style={{...styles.title}}>Pokédex</Text>
        <Text style={styles.subtitle}>
          Search for Pokémon by name or using the National Pokédex number.
        </Text>

        <View style={styles.textInputContainer}>
          <Icon name="search" size={20} color="#747476" />
          <TextInput
            placeholder="What Pokémon are you looking for?"
            placeholderTextColor="#747476"
            style={styles.textInput}
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
