import React from 'react';
import { SimplePokemonGQL } from '../interfaces/graphQLInterface';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGraphQLPokemonList } from '../hooks/useGraphQLPokemonList';
import { PokemonCard } from './PokemonCard';

export const PokemonList = () => {
    const { simplePokemonList, loadPokemons, isLoading } =
        useGraphQLPokemonList();
    const { top } = useSafeAreaInsets();
    return (
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
    );
};
