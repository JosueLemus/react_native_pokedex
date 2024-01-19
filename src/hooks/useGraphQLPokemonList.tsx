import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import {
  GraphQLPokemon,
  SimplePokemonGQL,
} from '../interfaces/graphQLInterface';
import Realm from 'realm';

// Definición del esquema de Realm
class Pokemon {
  static schema: Realm.ObjectSchema = {
    name: 'Pokemon',
    properties: {
      id: 'int',
      name: 'string',
      picture: 'string',
      types: 'string[]',
    },
  };
}

const realm = new Realm({ schema: [Pokemon.schema] });
console.log(realm.path);

export const useGraphQLPokemonList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [simplePokemonList, setSimplePokemonList] = useState<
    SimplePokemonGQL[]
  >([]);
  const baseUrl: string = 'https://beta.pokeapi.co/graphql/v1beta';
  const limit = 10;

  const loadPokemons = async () => {
    setIsLoading(true);
    // Si es la primera vez que se hace la peticion, obtener los datos de realm
    if (simplePokemonList.length === 0) {
      getPokemonsFromRealm();
    }
    const offset = simplePokemonList.length;
    const resp = await pokemonApi.post<GraphQLPokemon>(baseUrl, {
      query: `query samplePokeAPIquery {pokemon_v2_pokemon(limit: ${limit}, offset: ${offset}) {id name pokemon_v2_pokemontypes(limit: 3) {pokemon_v2_type {name}}}}`,
    });
    // Mapear y almacenar en Realm
    mapAndStorePokemonList(resp.data);
  };

  const getPokemonsFromRealm = () => {
    // Intentar obtener datos de Realm
    const realmPokemons: any = realm.objects('Pokemon');
    mapPokemonList(realmPokemons);
  };

  const deleteAllPokemonsFromRealm = () => {
    const realmPokemons = realm.objects('Pokemon');
    realm.write(() => {
      realm.delete(realmPokemons);
    });
  };

  const mapAndStorePokemonList = (pokemonList: GraphQLPokemon) => {
    const newPokemonList: SimplePokemonGQL[] =
      pokemonList.data.pokemon_v2_pokemon.map(
        ({ name, pokemon_v2_pokemontypes, id }) => {
          const picture =
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
            id +
            '.png';

          // Almacenar en Realm
          realm.write(() => {
            realm.create(
              'Pokemon',
              {
                id,
                name,
                picture,
                types: pokemon_v2_pokemontypes.map(
                  type => type.pokemon_v2_type.name,
                ),
              },
              Realm.UpdateMode.Modified,
            );
          });

          return { id, picture, name, pokemon_v2_pokemontypes };
        },
      );

    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  const mapPokemonList = (pokemonList: Realm.Results<any>) => {
    const newPokemonList: SimplePokemonGQL[] = pokemonList.map(
      ({ id, name, picture, types }) => ({
        id,
        picture,
        name,
        pokemon_v2_pokemontypes: types.map((type: string) => ({
          pokemon_v2_type: { name: type },
        })),
      }),
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
