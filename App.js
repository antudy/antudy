import 'react-native-gesture-handler';
import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import BottomTabNavigation from "./src/components/BottomTabNavigation";
import HomeScreen from "./src/Screens/HomeScreen";
import ManagementScreen from "./src/Screens/ManagementScreen";
import CreateStudy from "./src/Screens/CreateStudy";
import ListScreen from "./src/Screens/ListScreen";
import { NavigationContainer } from "@react-navigation/native";
import FABStackNavigator from "./src/navigations/FABStackNavigator";
import FloatingActionButton from "./src/components/FloatingActionButton";

const App=()=> {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
      />
      <FABStackNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
