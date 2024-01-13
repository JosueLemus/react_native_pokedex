import React, {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {GraphQLPokemon, SimplePokemonGQL} from '../interfaces/graphQLInterface';

export const useGraphQLPokemonList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [simplePokemonList, setSimplePokemonList] = useState<
    SimplePokemonGQL[]
  >([]);
  const baseUrl: string = 'https://beta.pokeapi.co/graphql/v1beta';
  const offset = useRef(0);
  const loadPokemons = async () => {
    setIsLoading(true);
    const resp = await pokemonApi.post<GraphQLPokemon>(baseUrl, {
      query: `query samplePokeAPIquery {pokemon_v2_pokemon(limit: 20, offset: ${offset.current}) {id name pokemon_v2_pokemontypes(limit: 3) {pokemon_v2_type {name}}}}`,
    });
    offset.current = offset.current + 20;
    mapPokemonList(resp.data);
  };

  const mapPokemonList = (pokemonList: GraphQLPokemon) => {
    const newPokemonList: SimplePokemonGQL[] =
      pokemonList.data.pokemon_v2_pokemon.map(
        ({name, pokemon_v2_pokemontypes, id}) => {
          const picture =
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
            id +
            '.png';
          return {id, picture, name, pokemon_v2_pokemontypes};
        },
      );
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isLoading,
    simplePokemonList,
    loadPokemons,
  };
};