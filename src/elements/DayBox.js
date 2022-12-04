import { Box, Divider, Heading, VStack } from "native-base";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import dayjs from "dayjs";

export default function Header(props) {
  const { date } = props;
  const yoil2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
      <Heading size="sm">{yoil2[dayjs(date).day()]}</Heading>
      <Heading size="xs">{dayjs(date).month() + 1}</Heading>
      <Heading size="xs">{dayjs(date).date()}</Heading>
    </VStack>
  );
}
