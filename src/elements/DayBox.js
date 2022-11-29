import { Box, Divider, Heading, VStack } from "native-base";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export default function Header(props) {
  const { date, yoil } = props;
  return (
    <VStack
      justifyContent="space-between"
      alignItems="center"
      w={12}
      mt={2}
      py={2}
      borderRadius={10}
      borderWidth={1}
      borderColor="gray.400">
      <Heading size="sm">{yoil}</Heading>
      <Heading size="xs">{date}</Heading>
    </VStack>
  );
}
