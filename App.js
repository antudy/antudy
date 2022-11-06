import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import BottomTabNavigation from "./src/components/BottomTabNavigation";
import HomeScreen from "./src/Screens/HomeScreen";
import ManagementScreen from "./src/Screens/ManagementScreen";
import CalendarScreen from "./src/Screens/CalendarScreen";
import ListScreen from "./src/Screens/ListScreen";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BottomTabNavigation
        screen1={HomeScreen}
        screen2={ManagementScreen}
        screen3={CalendarScreen}
        screen4={ListScreen}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
