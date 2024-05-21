import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
interface CustomButtonProps {
  name: string;
  isActive: boolean;
  onPress: () => void;
}
const TabButton = ({ name, isActive, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{name}</Text>
      {isActive && <View style={styles.underline} />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  underline: {
    height: 3,
    backgroundColor: "#6552FE",
    width: "100%",
    marginTop: 5,
  },
});

export default TabButton;
