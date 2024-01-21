import { PokemonDetail } from "@/types/pokemon";
import { View, Text } from "react-native";
import { Image } from "expo-image";
export function Card(p: { pokemon: PokemonDetail }) {
  return (
    <View className="px-8 py-6 bg-slate-100 rounded-3xl">
      <Text className={`text-lg capitalize font-bold`}>{p.pokemon.name}</Text>
      <View className={`mt-4 flex flex-row space-x-4`}>
        {p.pokemon.types.map((typeInfo, i) => (
          <View
            key={i}
            className={`flex items-center bg-slate-400 p-2 rounded-2xl min-w-[60px]`}
          >
            <Text className={`text-white`}>{typeInfo.type.name}</Text>
          </View>
        ))}
      </View>
      <Image
        className={`w-96 h-32 `}
        source={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${p.pokemon.id}.svg`}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
}
