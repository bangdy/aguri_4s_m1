import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import Navigation from "./src/navigations";
import React from "react";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}
