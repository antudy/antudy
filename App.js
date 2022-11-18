import "react-native-gesture-handler";
import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import StackNavigation from "./src/Navigations/StackNavigation";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle="dark-content" />
      <StackNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
