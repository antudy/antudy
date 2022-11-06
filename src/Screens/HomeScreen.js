import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import TopBar from "../components/TopBar";
import FloatingActionButton from "../components/FloatingActionButton";
import HomeSwiper from "../components/HomeSwiper";

function HomeScreen() {
  return (
    <>
      <TopBar title={"딜리언즈"} />
      <View style={styles.container}>
        <View style={styles.swiper}>
          <HomeSwiper />
        </View>
        <FloatingActionButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: { flex: 0.8 },
});

export default HomeScreen;
