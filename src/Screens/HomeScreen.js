import { FlatList, StyleSheet, View } from "react-native";
import * as React from "react";
import TopBar from "../components/TopBar";
import FloatingActionButton from "../components/FloatingActionButton";
import HomeSwiper from "../components/HomeSwiper";
import StudyCard from "../components/StudyCard";
import { useCallback } from "react";

const studyList = [
  { name: "이름", location: "위치, 장소", person: "인원", id: 1 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 2 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 3 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 4 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 5 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 6 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 7 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 8 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 9 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 10 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 11 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 12 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 13 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 14 },
  { name: "이름", location: "위치, 장소", person: "인원", id: 15 },
];

function HomeScreen() {
  const renderItem = useCallback(
    ({ item }) => (
      <StudyCard
        name={item.name}
        location={item.location}
        person={item.person}
      />
    ),
    []
  );

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <>
      <TopBar title={"딜리언즈"} />
      <View style={styles.container}>
        <View style={styles.swiper}>
          <HomeSwiper />
        </View>
        <View style={styles.list}>
          <FlatList
            data={studyList}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
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
  list: { flex: 1 },
});

export default HomeScreen;
