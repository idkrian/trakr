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
            colors={["#cd46ef", "#6552FE"]}
            className="h-1/2 w-6 rounded-xl"
          />
          <LinearGradient
            colors={["#cd46ef", "#6552FE"]}
            className="h-full w-6 rounded-xl"
          />
          <LinearGradient
            colors={["#cd46ef", "#6552FE"]}
            className="h-1/2 self-end w-6 rounded-xl"
          />
        </View>
        <Text className="text-center text-[#6552FE] text-4xl font-bold italic shadow-md">
          Trakr
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Dashboard")}
        className="justify-end px-7 py-2 rounded-3xl bg-[#6552FE]"
      >
        <Text className="text-white font-medium">Enter</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Home;
