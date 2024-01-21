import "@/style/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return <Slot />;
}
