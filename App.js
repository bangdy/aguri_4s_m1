import { Box, NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";

import Main from "./src/components/Main";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NativeBaseProvider>
      <Main />
    </NativeBaseProvider>
  );
}
