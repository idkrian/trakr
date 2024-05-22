import { Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import { AntDesign } from "@expo/vector-icons";

interface SettingsOptionProps {
  label: string;
  icon: ReactNode;
}

const SettingsOption = ({ label, icon }: SettingsOptionProps) => {
  return (
    <TouchableOpacity className="flex flex-row items-center justify-between w-full border-b border-white py-4 ">
      <View className="flex flex-row items-center gap-4">
        {icon}
        <Text className="text-white text-xl">{label}</Text>
      </View>
      <AntDesign name="right" size={20} color="white" />
    </TouchableOpacity>
  );
};

export default SettingsOption;
