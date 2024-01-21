import { NativeWindStyleSheet } from "nativewind";
import { theme } from "@/tailwind.config";

export const Colors = theme.extend.colors;

NativeWindStyleSheet.create({
  styles: {
    h1: {
      fontWeight: "bold",
      fontSize: 50,
      color: "black",
    },
    h2: {
      fontWeight: "bold",
      fontSize: 40,
      color: "black",
    },
    h3: {
      fontWeight: "bold",
      fontSize: 30,
      color: Colors.silver,
    },
    h4: {
      fontWeight: "bold",
      fontSize: 20,
      color: Colors.silver,
    },
    p: {
      fontWeight: "bold",
      fontSize: 16,
      color: Colors.silver,
    },
  },
});
