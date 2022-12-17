import { Heading, Pressable, VStack } from "native-base";
import React, { useState } from "react";

import { DAY_WIDTH_IN_WEEK } from "../constants/layout";
import { dateIdGenerator } from "../help/util";
import dayjs from "dayjs";
import { setItemToAsync } from "../help/util";

export default function Tickle(props) {
  const { date, selectedDay, task, taskCollector } = props;
  const [checked, setChecked] = useState(Object.keys(task.checkedCollector).includes(dateIdGenerator(date)));
  return (
    <Pressable
      onPress={async () => {
        const checkedCollector = task.updateCheck(date);
        setChecked(Object.keys(checkedCollector).includes(dateIdGenerator(date)));
        await setItemToAsync("myRoutine", taskCollector);
      }}>
      <VStack
        w={DAY_WIDTH_IN_WEEK}
        h={DAY_WIDTH_IN_WEEK}
        py={2}
        mt={2}
        borderRadius={DAY_WIDTH_IN_WEEK}
        backgroundColor={checked ? "green.400" : null}
        borderColor="gray.300"
        borderWidth={0.5}
        justifyContent="center"
        alignItems="center">
        <Heading size="xs" fontWeight={100}>
          {dayjs(date).format("DD")}
        </Heading>
      </VStack>
    </Pressable>
  );
}
