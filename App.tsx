import React from "react";
import { NativeBaseProvider, Box, StatusBar } from "native-base";

// screens
import Home from "./src/screens/Home";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar />
        <Home />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}