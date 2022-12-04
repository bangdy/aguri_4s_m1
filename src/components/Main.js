// import { StatusBar } from "expo-status-bar";
import { Box, Divider, VStack } from "native-base";
import { StyleSheet, Text, View } from "react-native";

import DaySelectorCarousel from "../elements/DaySelectorCarousel";
import Footer from "../elements/Footer";
import Header from "../elements/Header";
import React from "react";

export default function Main() {
  return (
    <VStack flex={1} h="100%" bgColor="gray.100" justifyContent="space-between">
      <Header />
      <VStack h="80%">
        <DaySelectorCarousel />
      </VStack>
      <Footer />
    </VStack>
  );
}
