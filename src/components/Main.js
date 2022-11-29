// import { StatusBar } from "expo-status-bar";
import { Box, Divider, VStack } from "native-base";
import { StyleSheet, Text, View } from "react-native";

import Footer from "../elements/Footer";
import Header from "../elements/Header";
import React from "react";
import WeekScroll from "../elements/WeekScroll";

export default function Main() {
  return (
    <VStack flex={1} h="100%" bgColor="gray.100" justifyContent="space-between">
      <Header />
      <VStack h="80%">
        <WeekScroll />
      </VStack>
      <Footer />
    </VStack>
  );
}
