import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

type Nav = {
  navigate: (value: string) => void;
};
const Home = () => {
  const navigation = useNavigation<Nav>();
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
        onPress={() => navigation.navigate("Dashboard")}
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

export default Home;
