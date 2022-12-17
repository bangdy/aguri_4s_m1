import { Box, HStack, Heading, Menu, Pressable, VStack } from "native-base";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import WeekCarousel from "./WeekCarousel";
import { setItemToAsync } from "../help/util";

export default function TaskWithCarousel(props) {
  const { task, taskCollector, index, setTaskCollector, navigation } = props;
  return (
    <VStack w="100%">
      <HStack w="100%" justifyContent="space-between">
        <VStack>
          <Heading size="md" mt={2} ml={4} fontWeight={400}>
            {task.title}
          </Heading>
          <Heading fontSize={10} mt={1} ml={4} fontWeight={200}>
            {task.detail}
          </Heading>
        </VStack>
        <Box w="10%" justifyContent="center" alignItems="center" flexDirection="column">
          <Menu
            w="150"
            trigger={(triggerProps) => {
              return (
                <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                  <Ionicons name="ellipsis-vertical-outline" size={16} color="gray" />
                </Pressable>
              );
            }}>
            <Menu.Item
              onPress={() => {
                navigation.navigate("TaskCreator", { task, index, taskCollector });
              }}>
              Edit
            </Menu.Item>
            <Menu.Item
              onPress={() => {
                const temp = [...taskCollector];
                const updated = temp.filter((_, i) => i !== index);
                setItemToAsync("myRoutine", updated);
                setTaskCollector(updated);
              }}>
              Delete
            </Menu.Item>
          </Menu>
        </Box>
      </HStack>

      <WeekCarousel {...props} />
    </VStack>
  );
}
