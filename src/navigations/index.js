import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNav from "./TabNav";

export default function NavCon(props) {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}
