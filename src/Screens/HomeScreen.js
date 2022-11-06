import { Text, View } from "react-native";
import * as React from "react";
import TopBar from "../components/TopBar";
import FloatingActionButton from "../components/FloatingActionButton";

function HomeScreen() {
  return (
    <>
      <TopBar title={"딜리언즈"} />
      <FloatingActionButton />
    </>
  );
}

export default HomeScreen;
