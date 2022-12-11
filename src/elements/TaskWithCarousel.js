import { Heading, VStack } from "native-base";

import React from "react";
import WeekCarousel from "./WeekCarousel";

export default function TaskWithCarousel(props) {
  const { task } = props;
  return (
    <VStack w="100%">
      <Heading size="sm" mt={4} ml={2} fontWeight={200}>
        {task.title}
      </Heading>
      <WeekCarousel {...props} />
    </VStack>
  );
}
