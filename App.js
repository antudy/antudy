import "react-native-gesture-handler";
import * as React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme";
import StackNavigation from "./src/Navigations/StackNavigation";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider theme={theme}>
        <StatusBar animated={true} barStyle="dark-content" />
      
      <StackNavigation />
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
