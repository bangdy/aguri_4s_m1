import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNav from "./TabNav";

export default function NavCon(): React.ReactElement {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}
