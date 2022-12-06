import { Box, Divider, HStack, Heading } from "native-base";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export default function DayBox() {
  return (
    <>
      <HStack justifyContent="space-between" alignItems="center" h="12%" mt={8}>
        <Box ml={2}>
          <Ionicons name="menu" size={32} color="black" />
        </Box>
        <Heading size="md">My Routine</Heading>
        <Box ml={2}>
          <Ionicons name="add" size={32} color="black" />
        </Box>
      </HStack>
      <Divider />
    </>
  );
}
