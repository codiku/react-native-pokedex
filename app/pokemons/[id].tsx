import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function PokemonDetailPage(p: {}) {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text className={`h1`}>Pokemon {id}</Text>
    </View>
  );
}
