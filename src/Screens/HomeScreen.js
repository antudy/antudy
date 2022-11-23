import { FlatList, StyleSheet, View } from "react-native";
import * as React from "react";
import TopBar from "../components/TopBar";
import FloatingActionButton from "../components/FloatingActionButton";
import HomeSwiper from "../components/HomeSwiper";
import StudyCard from "../components/StudyCard";
import { useCallback, useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { query, collection, getDocs } from "firebase/firestore";

function HomeScreen({ navigation }) {
  const [studyList, setStudyList] = useState([]);

  useEffect(() => {
    const study = query(collection(db, "study"));
    getDocs(study)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setStudyList((prevState) => [...prevState, doc.data()]);
          console.log(doc.data());
        });
      })
      .catch((e) => {
        console.log(`Error : ${e}`);
      });
  }, []);

  const renderItem = useCallback(({ item }) => {
    const pressStudyCard = () => {
      navigation.navigate("JoinStudy", {
        studyName: item.name,
        location: item.location,
        members: item.members,
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
        <FloatingActionButton onPress={pressFAB} />
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
