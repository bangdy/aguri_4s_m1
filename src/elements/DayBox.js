import { Box, Divider, Heading, VStack } from "native-base";

import { DAY_WIDTH_IN_WEEK } from "../constants/layout";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import dayjs from "dayjs";

export default function Header(props) {
  const { date, selectedDay } = props;
  const yoil = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <VStack
      justifyContent="space-between"
      alignItems="center"
      w={DAY_WIDTH_IN_WEEK}
      mt={2}
      py={2}
      backgroundColor={dayjs(selectedDay).format("DD/MM/YYYY") === dayjs(date).format("DD/MM/YYYY") ? "amber.100" : ""}
      borderRadius={10}
      borderWidth={1}
      borderColor="gray.400">
      <Heading size="sm" color={[0, 6].includes(dayjs(date).day()) ? "red.400" : null}>
        {yoil[dayjs(date).day()]}
      </Heading>
      <Heading size="xs" fontWeight={200}>
        {dayjs(date).month() + 1}
      </Heading>
      <Heading size="xs">{dayjs(date).date()}</Heading>
    </VStack>
  );
}
