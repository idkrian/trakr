import { useState } from "react";

export const connectToBinanceWebSocket = (
  stream: string,
  onMessage: (arg0: any) => void
) => {
  const ws = new WebSocket(stream);

  ws.onopen = () => {
    console.log("WebSocket connected");
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data && data.e === "kline") {
      onMessage(data.k);
    } else {
      onMessage(data);
    }
  };

  ws.onerror = (error) => {
    console.error("WebSocket error", error);
  };

  ws.onclose = () => {
    console.log("WebSocket closed");
  };

  return ws;
};
