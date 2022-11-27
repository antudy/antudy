/*
홈화면
 */
import { FlatList, StyleSheet, View } from "react-native";
import * as React from "react";
import FloatingActionButton from "../components/FloatingActionButton";
import HomeSwiper from "../components/HomeSwiper";
import StudyCard from "../components/StudyCard";
import { useCallback, useEffect, useState } from "react";
import { loadStudy } from "../../firebaseConfig";

function HomeScreen({ navigation }) {
  const [studyList, setStudyList] = useState([]);

  useEffect(() => {
    loadStudy(setStudyList);
  }, []);

  const renderItem = useCallback(({ item }) => {
    const pressStudyCard = () => {
      navigation.navigate("JoinStudy", {
        studyName: item.name,
        location: item.location,
        members: item.members,
        category: item.category,
      });
    };
    return (
      <StudyCard
        name={item.name}
        location={item.location}
        person={item.members}
        onPress={pressStudyCard}
      />
    );
  }, []);

  const keyExtractor = useCallback((item) => item.id, []);
  console.log(keyExtractor);

  const pressFAB = () => {
    navigation.navigate("CreateStudy");
  };

  return (
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
      <FloatingActionButton onPress={pressFAB} />
    </View>
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
