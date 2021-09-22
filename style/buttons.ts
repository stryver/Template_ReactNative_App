import { StyleSheet } from "react-native";
import { Colors } from "./colors";

export const button = StyleSheet.create({
  classicButton: {
    backgroundColor: Colors.blue,
    fontSize: 16,
    height: 42,
    width: "100%",
    borderRadius: 4,
    padding: 12,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  textClassic: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "transparent",
  },
});
