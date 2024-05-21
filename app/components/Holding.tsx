import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
interface HoldingProps {
  coinName: string;
  coinSymbol: string;
  price: string;
  icon: React.ReactNode;
  graph?: boolean;
}

const Holding = ({
  coinName,
  coinSymbol,
  price,
  icon,
  graph,
}: HoldingProps) => {
  return (
    <View className="flex flex-row my-4 p-2 gap-4 justify-between">
      <View className="h-12 w-14 bg-[#212125] rounded-xl items-center justify-center flex flex-row">
        {icon}
      </View>
      <View>
        <Text className="text-white text-xl font-extrabold">{coinName}</Text>
        <Text className="text-white text-sm font-extralight">{coinSymbol}</Text>
      </View>
      {graph && (
        <View>
          <Text className="text-white text-xl font-extrabold">aaaaaaaaa</Text>
        </View>
      )}
      <View className="self-end">
        <Text className="text-white text-xl font-extrabold text-right">
          {price}
        </Text>
        <Text className="text-white flex flex-initial text-sm font-extralight text-right">
          50 ETH
        </Text>
      </View>
    </View>
  );
};

export default Holding;
