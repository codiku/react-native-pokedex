import { Card } from "@/components/Card";
import { Pokemon, PokemonDetail, PokemonResponse } from "@/types/pokemon";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function PokemonsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<PokemonDetail[]>([]);
  useEffect(() => {
    const getPokemonList = async () => {
      return (await (
        await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      ).json()) as PokemonResponse;
    };

    (async () => {
      setIsLoading(true);
      const pokemonList = await getPokemonList();
      const promises = pokemonList.results.map(async (res) => {
        return (await fetch(res.url)).json() as Promise<PokemonDetail>;
      });
      const pokemons = await Promise.all(promises);
      setPokemonList(pokemons);
      setIsLoading(false);
    })();
  }, []);

  return (
    <View className={`flex-1 mt-10 p-4 `}>
      <Text className={`h2 mb-4`}>Pokédex </Text>
      <ScrollView className={` `}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          pokemonList.map((pkmn, i) => (
            <View key={i} className={`mb-4`}>
              <Card pokemon={pkmn} />
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
