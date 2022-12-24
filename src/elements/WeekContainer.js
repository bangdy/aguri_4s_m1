import { HStack } from "native-base";
import React from "react";
import dayjs from "dayjs";

export default function WeekContainer(props) {
  const { date, selectedDay, DayItem, task } = props;
  return (
    <HStack w="100%" justifyContent="space-between" px={2}>
      {Array(7)
        .fill(0)
        .map((item, i) => (
          <DayItem {...props} date={dayjs(date).add(i, "day")} key={i} selectedDay={selectedDay} task={task} />
        ))}
    </HStack>
  );
}
