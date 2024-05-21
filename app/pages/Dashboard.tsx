import { View, Text, Button, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import Holding from "../components/Holding";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const Dashboard = () => {
  // let [fontsLoaded] = useFonts({
  //   "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  //   "Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  // });
  return (
    <View className="flex-1 p-2 bg-[#070707]">
      <Text className="text-white flex flex-initial text-2xl my-5">
        Hello Rian
      </Text>
      <LinearGradient
        colors={["#ED1E79", "#662D8C"]}
        className="bg-amber-200 rounded-2xl p-4"
      >
        <Text className="text-xl text-white">Current Balance</Text>
        <Text className="text-2xl text-white font-bold">$87,430.12</Text>
      </LinearGradient>

      <View className="flex flex-row justify-between my-5">
        <TouchableOpacity className="flex bg-[#6552FE] rounded-2xl py-2 px-3 items-center w-[48%]">
          <Text className="text-lg text-white">Deposit</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex bg-transparent border border-white rounded-2xl py-1 px-3 items-center w-[48%]">
          <Text className="text-lg text-white ">Deposit</Text>
        </TouchableOpacity>
      </View>

      <View className="">
        <Text className="text-white font-poppins flex flex-initial text-2xl my-5 font-extrabold">
          Holdings
        </Text>
        <Holding
          coinName={"Ethereum"}
          coinSymbol={"ETH"}
          price={"$503.12"}
          icon={<FontAwesome5 name="ethereum" size={24} color="white" />}
        />
        <Holding
          coinName={"Bitcoin"}
          coinSymbol={"BTC"}
          price={"$503.12"}
          icon={<FontAwesome name="bitcoin" size={24} color="white" />}
        />
        <Holding
          coinName={"Litecoin"}
          coinSymbol={"LTC"}
          price={"$503.12"}
          icon={<FontAwesome6 name="litecoin-sign" size={24} color="white" />}
        />
        <Holding
          coinName={"Ripple"}
          coinSymbol={"XRP"}
          price={"$503.12"}
          icon={<FontAwesome5 name="ethereum" size={24} color="white" />}
        />
      </View>
    </View>
  );
};

export default Dashboard;
