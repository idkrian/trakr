import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "..";
import { LinearGradient } from "expo-linear-gradient";

type Props = NativeStackScreenProps<RootStackParamList, "Initial">;

const Initial = ({ navigation }: Props) => {
  return (
    <LinearGradient
      colors={["#13355a", "#15213b"]}
      className="flex-1 h-screen items-center justify-center p-20"
    >
      <View className="flex-1 w-32 items-center justify-center">
        <View className="flex flex-row justify-between w-24 my-6 h-24 ">
          <LinearGradient
            colors={["#cd46ef", "#3b82f6"]}
            className="h-1/2 w-6 rounded-xl"
          />
          <LinearGradient
            colors={["#cd46ef", "#3b82f6"]}
            className="h-full w-6 rounded-xl"
          />
          <LinearGradient
            colors={["#cd46ef", "#3b82f6"]}
            className="h-1/2 self-end w-6 rounded-xl"
          />
        </View>
        <Text className="text-center text-[#a346ef] text-2xl font-bold italic">
          Trakr
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="justify-end"
      >
        <LinearGradient
          colors={["#cd46ef", "#3b82f6"]}
          className="px-6 py-1 rounded-3xl"
        >
          <Text className="text-white font-medium">Enter</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Initial;
