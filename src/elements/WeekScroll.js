import { Divider, FlatList, HStack } from "native-base";

import DayBox from "./DayBox";
import React from "react";

export default function WeekScroll() {
  const data = [
    { yoil: "Sun", date: 20 },
    { yoil: "Mon", date: 21 },
    { yoil: "Tue", date: 22 },
    { yoil: "Wed", date: 23 },
    { yoil: "Thu", date: 24 },
    { yoil: "Fri", date: 25 },
    { yoil: "Sat", date: 26 },
  ];
  return (
    <>
      <HStack w="100%" justifyContent="space-between">
        <FlatList
          horizontal
          w="100%"
          contentContainerStyle={{ flexGrow: 1, justifyContent: "space-around" }}
          data={data}
          renderItem={({ item }) => <DayBox yoil={item.yoil} date={item.date} />}
          keyExtractor={(item) => item.date}
        />
      </HStack>
      <Divider mt={2} />
    </>
  );
}
