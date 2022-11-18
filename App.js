import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import BottomTabNavigation from "./src/Navigations/BottomTabNavigation";
import HomeScreen from "./src/Screens/HomeScreen";
import ManagementScreen from "./src/Screens/ManagementScreen";
import CalendarScreen from "./src/Screens/CalendarScreen";
import ListScreen from "./src/Screens/ListScreen";
import StackNavigation from "./src/Navigations/StackNavigation";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle="dark-content" />
      <StackNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
