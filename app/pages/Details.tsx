import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { LineChart, CandlestickChart } from "react-native-wagmi-charts";
import { connectToBinanceWebSocket } from "../services/connection";
interface CandleStickProps {
  t: number; // kline start time
  o: string; // open
  c: string; // close
  h: string; // high
  l: string; // low
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

  // useEffect(() => {
  //   const lineChart = connectToBinanceWebSocket(
  //     "wss://nbstream.binance.com/eoptions/ws/BTCUSDT@index",
  //     (line: LineChartProps) => {
  //       Object.keys(line || {});
  //       setLine((prevLine) => [
  //         ...prevLine,
  //         {
  //           timestamp: Number(line.E),
  //           value: Number(line.p),
  //         },
  //       ]);
  //     }
  //   );
  //   const klineChart = connectToBinanceWebSocket(
  //     "wss://stream.binance.com:9443/ws/btcusdt@kline_1m",
  //     (kline: CandleStickProps) => {
  //       setCandlesticks((prevCandlesticks) => [
  //         ...prevCandlesticks,
  //         {
  //           timestamp: kline.t,
  //           open: Number(kline.o),
  //           high: Number(kline.h),
  //           low: Number(kline.l),
  //           close: Number(kline.c),
  //         },
  //       ]);
  //     }
  //   );

  //   return () => {
  //     klineChart.close();
  //     lineChart.close();
  //   };
  // }, []);

  // if (line.length <= 1) {
  //   return (
  //     <LinearGradient
  //       colors={["#13355a", "#15213b"]}
  //       className="flex-1 h-screen items-center p-2"
  //     >
  //       <Text className="text-white text-xl">Ta carregano pae</Text>
  //     </LinearGradient>
  //   );
  // }
  return (
    <View className="flex-1 h-screen items-center p-2 bg-[#070707]">
      <Text className="text-white text-xl">Dashboard</Text>

      {/* <TouchableOpacity className="bg-[#17426d] w-11/12 h-56 rounded-xl my-4">
        <Text className="text-white text-xl">Preço Bitcoin</Text>

        <LineChart.Provider data={line}>
          <LineChart>
            <LineChart.Path />
          </LineChart>
        </LineChart.Provider>
      </TouchableOpacity>

      <TouchableOpacity className="bg-[#17426d] w-11/12 h-56 rounded-xl my-4">
        <Text className="text-white text-xl">Candle Chart</Text>
        <CandlestickChart.Provider data={candlesticks}>
          <CandlestickChart width={300} height={200}>
            <CandlestickChart.Candles />
          </CandlestickChart>
        </CandlestickChart.Provider>
      </TouchableOpacity> */}
    </View>
  );
};

export default Details;
