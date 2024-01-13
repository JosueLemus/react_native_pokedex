import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useGraphQLPokemonList} from '../hooks/useGraphQLPokemonList';
import {PokemonCard} from '../components/PokemonCard';
// import {usePokemonPaginated} from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = useGraphQLPokemonList();
  // console.log(simplePokemonList);
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokeballBG}
      />
      <Text style={{...styles.title, ...styles.globalMargin, top: top + 20}}>
        Pokédex
      </Text>
      <FlatList
        style={{marginTop: 64}}
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
