import { Text, View } from "react-native";
import * as React from "react";
import TopBar from "../components/TopBar";

function HomeScreen() {
  return (
    <>
      <TopBar title={"딜리언즈"} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    </>
  );
}

export default HomeScreen;
