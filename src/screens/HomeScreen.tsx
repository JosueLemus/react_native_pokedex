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
// import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = useGraphQLPokemonList();
  return (
    <>
      <Image
        source={require('../assets/Pokeball.png')}
        style={styles.pokeballBG}
      />
      <View style={{...styles.globalMargin, top: top}}>
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
        <Text style={{fontSize: 16, color: '#747476', marginTop: 8}}>
          Search for Pokémon by name or using the National Pokédex number.
        </Text>

        <View
          style={{
            backgroundColor: '#F2F2F2',
            padding: 16,
            borderRadius: 10,
            marginTop: 16,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="search"
              size={20}
              color="#747476"
              style={{marginRight: 8}}
            />
            <TextInput
              placeholder="What Pokémon are you looking for?"
              placeholderTextColor="#747476"
              style={{flex: 1, color: 'black', fontSize: 16}}
            />
          </View>
        </View>
      </View>

      <FlatList
        style={{marginTop: 80}}
        showsVerticalScrollIndicator={false}
        data={simplePokemonList}
        //id para cada elemento
        keyExtractor={pokemon => pokemon.name}
        //renderizar cada elemento
        renderItem={
          ({item}) => <PokemonCard pokemon={item} />
          // <Text>{item.name}</Text>
        }
        // infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        // activityIndicator
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color={'grey'} />
        }
      />
    </>
  );
};
