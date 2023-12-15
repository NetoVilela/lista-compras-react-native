import React from "react";
import { NativeBaseProvider, Box, StatusBar } from "native-base";

// screens
import Home from "./src/screens/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Home />
    </NativeBaseProvider>
  );
}