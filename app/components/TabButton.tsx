import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
interface CustomButtonProps {
  name: string;
  isActive: boolean;
  onPress: () => void;
}
const TabButton = ({ name, isActive, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="align-middle justify-center">
      <Text className="text-lg font-semibold text-white">{name}</Text>
      {isActive && <View className="h-1 bg-[#6552FE] w-full" />}
    </TouchableOpacity>
  );
};

export default TabButton;
