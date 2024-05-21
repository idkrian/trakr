import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { LineChart, CandlestickChart } from "react-native-wagmi-charts";
import { connectToBinanceWebSocket } from "../services/connection";
import Holding from "../components/Holding";
import { FontAwesome } from "@expo/vector-icons";
import TabButton from "../components/TabButton";
interface CandleStickProps {
  t: number;
  o: string;
  c: string;
  h: string;
  l: string;
}
interface CandleStickProps2 {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
}
interface LineChartProps {
  E: number;
  e: string;
  p: string;
  s: string;
}
interface LineChartProps2 {
  timestamp: number;
  value: number;
}
const Details = () => {
  const [candlesticks, setCandlesticks] = useState<CandleStickProps2[]>([]);
  const [line, setLine] = useState<LineChartProps2[]>([]);
  const [linePrice, setLinePrice] = useState<number>();
  const [activeButton, setActiveButton] = useState<string>("BTC");
  const tabButtonNames = ["BTC", "ETH", "LTC", "XRP"];
  const clearCharts = () => {
    setLine([]);
    setCandlesticks([]);
  };
  useEffect(() => {
    clearCharts();
    const lineChart = connectToBinanceWebSocket(
      `wss://nbstream.binance.com/eoptions/ws/${activeButton}USDT@index`,
      (line: LineChartProps) => {
        setLine((prevLine) => [
          ...prevLine,
          {
            timestamp: Number(line.E),
            value: Number(line.p),
          },
        ]);
        setLinePrice(Number(line.p));
      }
    );
    const klineChart = connectToBinanceWebSocket(
      `wss://stream.binance.com:9443/ws/${activeButton.toLocaleLowerCase()}usdt@kline_1m`,
      (kline: CandleStickProps) => {
        setCandlesticks((prevCandlesticks) => [
          ...prevCandlesticks,
          {
            timestamp: kline.t,
            open: Number(kline.o),
            high: Number(kline.h),
            low: Number(kline.l),
            close: Number(kline.c),
          },
        ]);
      }
    );

    return () => {
      klineChart.close();
      lineChart.close();
    };
  }, [activeButton]);

  if (line.length <= 1) {
    return (
      <View className="flex-1 p-2 bg-[#070707] items-center justify-center">
        <Text className="text-white text-xl">Ta carregano pae</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 bg-[#070707]">
      <Text className="text-white font-semibold flex flex-initial text-2xl my-5">
        Hello Rian
      </Text>
      <View className="flex flex-row justify-between align-middle">
        {tabButtonNames.map((name) => (
          <TabButton
            key={name}
            name={name}
            isActive={activeButton === name}
            onPress={() => setActiveButton(name)}
          />
        ))}
      </View>

      <TouchableOpacity className="flex self-center w-full h-56 rounded-xl my-4 p-2 ">
        <Holding
          coinName={"Bitcoin"}
          coinSymbol={activeButton}
          price={`$${linePrice!.toFixed(2)}`}
          icon={<FontAwesome name="bitcoin" size={24} color="white" />}
          graph={false}
        />
        <LineChart.Provider data={line}>
          <LineChart width={340} height={140}>
            <LineChart.Path color="#6552FE">
              <LineChart.Gradient color="#6552FE" />
            </LineChart.Path>
          </LineChart>
        </LineChart.Provider>
      </TouchableOpacity>

      <View className="flex self-center w-full h-56 rounded-xl my-4 ">
        <Holding
          coinName={"Bitcoin"}
          coinSymbol={"BTC"}
          price={`$${linePrice!.toFixed(2)}`}
          icon={<FontAwesome name="bitcoin" size={24} color="white" />}
          graph={false}
        />
        <CandlestickChart.Provider data={candlesticks}>
          <CandlestickChart width={340} height={140}>
            <CandlestickChart.Candles
              positiveColor="#6552FE"
              negativeColor="red"
            />
          </CandlestickChart>
        </CandlestickChart.Provider>
      </View>

      <View className="flex flex-row justify-between my-5">
        <TouchableOpacity className="flex bg-[#6552FE] rounded-2xl py-2 px-3 items-center w-[48%]">
          <Text className="text-lg text-white">Buy</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex bg-transparent border border-white rounded-2xl py-1 px-3 items-center w-[48%]">
          <Text className="text-lg text-white ">Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
