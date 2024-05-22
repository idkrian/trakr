import { View, Text, Button, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import Holding from "../components/Holding";
import { LinearGradient } from "expo-linear-gradient";

const Dashboard = () => {
  return (
    <View className="flex-1 p-2 bg-[#070707] justify-between">
      <Text className="text-white font-semibold flex flex-initial text-2xl mt-10 ">
        Hello Rian
      </Text>
      <LinearGradient
        colors={["#ED1E79", "#662D8C"]}
        className=" rounded-2xl px-4 py-8"
      >
        <Text className="text-xl text-white">Current Balance</Text>
        <Text className="text-2xl text-white font-bold">$87,430.12</Text>
      </LinearGradient>

      <View className="flex flex-row justify-between my-5">
        <TouchableOpacity className="flex bg-[#6552FE] rounded-2xl py-2 px-3 items-center w-[48%]">
          <Text className="text-lg text-white">Deposit</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex bg-transparent border border-white rounded-2xl py-2 px-3 items-center w-[48%]">
          <Text className="text-lg text-white ">Withdraw</Text>
        </TouchableOpacity>
      </View>

      <View className="">
        <Text className="text-white font-poppins flex flex-initial text-2xl mb-5 font-extrabold">
          Holdings
        </Text>
        <Holding
          coinName={"Ethereum"}
          coinSymbol={"ETH"}
          price={"$3403.12"}
          icon={<FontAwesome5 name="ethereum" size={24} color="white" />}
          priceSymbol={"50 ETH"}
          graph={true}
        />
        <Holding
          coinName={"Bitcoin"}
          coinSymbol={"BTC"}
          price={"$54303.12"}
          icon={<FontAwesome name="bitcoin" size={24} color="white" />}
          priceSymbol={"2.05 BTC"}
          graph={true}
        />
        <Holding
          coinName={"Litecoin"}
          coinSymbol={"LTC"}
          price={"$87,17"}
          icon={<FontAwesome6 name="litecoin-sign" size={24} color="white" />}
          priceSymbol={"2.05 LTC"}
          graph={true}
        />
        <Holding
          coinName={"Ripple"}
          coinSymbol={"XRP"}
          price={"$00,53"}
          icon={<FontAwesome5 name="ethereum" size={24} color="white" />}
          priceSymbol={"2.05 XRP"}
          graph={true}
        />
      </View>
    </View>
  );
};

export default Dashboard;
