import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { LineChart, CandlestickChart } from "react-native-wagmi-charts";
import { connectToBinanceWebSocket } from "../services/connection";
import Holding from "../components/Holding";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import TabButton from "../components/TabButton";
import {
  CandleStickProps,
  LineChartProps,
  WAGMILineChartsProps,
  WAGMIStickProps,
} from "../helpers/interfaces";
import { LinearGradient } from "expo-linear-gradient";

const Details = () => {
  const [candlesticks, setCandlesticks] = useState<WAGMIStickProps[]>([]);
  const [line, setLine] = useState<WAGMILineChartsProps[]>([]);
  const [linePrice, setLinePrice] = useState<number>();
  const [activeButton, setActiveButton] = useState<string>("BTC");
  const tabButtonNames = ["BTC", "ETH"];
  const { width } = Dimensions.get("window");
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

  function limitArraySize<T>(array: T[], sizeLimit: number): T[] {
    if (array.length <= sizeLimit) {
      return array;
    } else {
      const startIndex = array.length - sizeLimit;
      return array.slice(startIndex);
    }
  }
  if (line.length <= 1) {
    return (
      <View className="flex-1 p-2 bg-[#070707] items-center justify-center">
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
        <Text className="text-white text-xl">Loading...</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 bg-[#070707] justify-between">
      <Text className="text-white font-semibold flex flex-initial text-2xl mt-10 px-4">
        Trading
      </Text>
      <View className="flex flex-row px-4 justify-around align-middle mt-5">
        {tabButtonNames.map((name) => (
          <TabButton
            key={name}
            name={name}
            isActive={activeButton === name}
            onPress={() => setActiveButton(name)}
          />
        ))}
      </View>

      <View className="flex self-center w-full h-56 rounded-xl my-4 ">
        <Holding
          coinName={activeButton === "BTC" ? "Bitcoin" : "Ethereum"}
          coinSymbol={activeButton}
          price={`$${linePrice!.toFixed(2)}`}
          icon={
            activeButton === "BTC" ? (
              <FontAwesome name="bitcoin" size={24} color="white" />
            ) : (
              <FontAwesome5 name="ethereum" size={24} color="white" />
            )
          }
          graph={false}
        />
        <LineChart.Provider data={limitArraySize(line, 50)}>
          <LineChart width={width} height={140}>
            <LineChart.Path color="#6552FE">
              <LineChart.Gradient color="#6552FE" />
            </LineChart.Path>
          </LineChart>
        </LineChart.Provider>
      </View>
      <View className="h-[1px] bg-white w-full px-4"></View>
      <View className="flex self-center w-full h-56 rounded-xl my-4 ">
        <CandlestickChart.Provider data={limitArraySize(candlesticks, 50)}>
          <CandlestickChart width={width} height={140}>
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

        <TouchableOpacity className="flex bg-transparent border border-white rounded-2xl py-2 px-3 items-center w-[48%]">
          <Text className="text-lg text-white ">Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
