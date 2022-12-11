/*
홈화면
 */
import { FlatList, StyleSheet, View } from "react-native";
import * as React from "react";
import FloatingActionButton from "../components/FloatingActionButton";
import HomeSwiper from "../components/HomeSwiper";
import StudyCard from "../components/StudyCard";
import { useCallback, useEffect, useState } from "react";
import { db, loadData } from "../../firebaseConfig";
import { collection, query, onSnapshot } from "firebase/firestore";

function HomeScreen({ navigation }) {
  const [studyList, setStudyList] = useState([]);

  useEffect(() => {
    const study = query(collection(db, "ANTUDY"));
    const homeunsubscript = onSnapshot(study, (querySnapshot) => {
      const homeListData = [];
      querySnapshot.forEach((doc) => {
        homeListData.push(doc.data());
      });
      setStudyList(homeListData);
    });

    return () => homeunsubscript();
    // loadData(study, setStudyList);
  }, []);

  const renderItem = useCallback(({ item }) => {
    const pressStudyCard = () => {
      navigation.navigate("JoinStudy", {
        studyName: item.adminTitle,
        location: item.adminLocation,
        members: `${item.adminCurrentPeople} / ${item.adminPeople}`,
        category: item.adminCategory,
        adminUid: item.adminUid,
        adminDescription: item.adminDescription,
      });
    };
    return (
      <StudyCard
        name={item.adminTitle}
        location={item.adminLocation}
        person={`${item.adminCurrentPeople} / ${item.adminPeople}`}
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
