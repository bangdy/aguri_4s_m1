import { Box, NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";

import Main from "./src/components/Main";
import Navigation from "./src/navigations";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}
