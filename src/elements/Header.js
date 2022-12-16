import { Box, Divider, HStack, Heading, Pressable } from "native-base";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export default function DayBox(props) {
  const { onToggle } = props;
  return (
    <>
      <HStack justifyContent="space-between" alignItems="center" h="12%" mt={8}>
        <Box ml={4}>
          <Ionicons name="menu" size={32} color="black" />
        </Box>
        <Pressable onPress={onToggle}>
          <Heading size="md">My Routine</Heading>
        </Pressable>
        {/* <Pressable onPress={onToggle}>
          <Ionicons name="add" size={32} color="black" />
        </Pressable> */}
        <Box w={8} />
      </HStack>
      <Divider />
    </>
  );
}
