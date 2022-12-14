import { Box, HStack, Heading, Pressable } from "native-base";

import { DAY_WIDTH_IN_WEEK } from "../constants/layout";
import React from "react";

export default function TickleTypeSelectButton(props) {
  const { moduleName, taskCollector } = props;
  return (
    <Pressable onPress={() => props.navigation.navigate("TaskCreator", { taskCollector })}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        mr={4}
        mt={2}
        shadow={3}
        backgroundColor="gray.100"
        borderRadius={16}
        p={2}>
        <Heading size="xs" fontWeight={400} mr={4}>
          {moduleName}
        </Heading>
        <Box
          w={DAY_WIDTH_IN_WEEK * 0.8}
          h={DAY_WIDTH_IN_WEEK * 0.8}
          py={2}
          borderRadius={DAY_WIDTH_IN_WEEK}
          backgroundColor="green.400"
          borderColor="gray.300"
          borderWidth={0.5}
          justifyContent="center"
          alignItems="center"
        />
      </HStack>
    </Pressable>
  );
}
