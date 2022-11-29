import { Box, Divider, HStack, Heading } from "native-base";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export default function Footer() {
  return (
    <>
      <Divider mb={2} />
      <HStack justifyContent="space-between" alignItems="center" h="10%" pb={4}>
        <Box ml={4}>
          <Ionicons name="home" size={24} color="black" />
        </Box>
        <Box>
          <Ionicons name="bar-chart" size={24} color="black" />
        </Box>
        <Box mr={4}>
          <Ionicons name="people" size={24} color="black" />
        </Box>
      </HStack>
    </>
  );
}
