import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Dashboard = () => {
  return (
    <LinearGradient
      colors={["#13355a", "#15213b"]}
      className="flex-1 h-screen items-center p-2"
    >
      <Text className="text-white text-xl">Dashboard</Text>
      <TouchableOpacity className="bg-[#17426d] w-11/12 h-56 rounded-xl my-4">
        <Text>aaaaaaaaaaaa</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-[#17426d] w-11/12 h-56 rounded-xl my-4">
        <Text>aaaaaaaaaaaa</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Dashboard;
