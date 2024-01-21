import { Link } from "@/components/Link";
import { ImageBackground } from "expo-image";
import { View, Text } from "react-native-ui-lib";
const image = {
  uri: "https://docs.expo.dev/static/images/tutorial/splash.png",
};

export default function IndexPage() {
  return (
    <ImageBackground
      className={`flex-1 flex items-center`}
      source={require("../assets/pokedex.jpg")}
    >
      <Text className={`h1 mt-60 text-white`}>Pokédex</Text>
      <View className={`  mt-36 bg-white p-6 rounded-xl`}>
        <Link href="/pokemons" className={`text-black text-xl`}>
          OPEN
        </Link>
      </View>
    </ImageBackground>
  );
}
