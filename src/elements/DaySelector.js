import DayBox from "./DayBox";
import { HStack } from "native-base";
import React from "react";
import dayjs from "dayjs";

export default function WeekSelector(props) {
  const { date } = props;
  return (
    <HStack w="100%" justifyContent="space-between" px={2}>
      {Array(7)
        .fill(0)
        .map((item, i) => (
          <DayBox date={dayjs(date).add(i, "day")} key={i} />
        ))}
    </HStack>
  );
}
