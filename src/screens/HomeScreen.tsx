import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useGraphQLPokemonList } from '../hooks/useGraphQLPokemonList';
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
        Pokedex
      </Text>
      <FlatList
        style={{marginTop: 64}}
        showsVerticalScrollIndicator={false}
        data={simplePokemonList}
        //id para cada elemento
        keyExtractor={pokemon => pokemon.name}
        //renderizar cada elemento
        renderItem={
          ({item}) => (
            <View
              style={{
                backgroundColor: 'red',
                marginVertical: 16,
                marginHorizontal: 16,
                borderRadius: 20,
                height: 115,
                padding: 16
              }}>
                <Text style={{fontSize:12}}>{item.id}</Text>
              <Text style={{color:"white", fontWeight: "bold", fontSize: 26}}>{item.name}</Text>
              <Image
                source={{uri: item.picture}}
                style={{width: 130, height: 130, position: 'absolute', top: -10, right: 0}}
              />
            </View>
          )
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
