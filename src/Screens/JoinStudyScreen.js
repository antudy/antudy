import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import * as React from "react";

function JoinStudyScreen({ navigation, route }) {
  const { studyName, location, members, category } = route.params;

  const pressJoinButton = () => {
    navigation.navigate("StudyList");
  };

  const Study_Image = ({ source }) => {
    return (
      <View>
        <Image style={styles.image} source={source} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.study}>
        <View>
          <Text style={styles.study_title}>{studyName}</Text>
          <Study_Image source={require("../../assets/study.jpg")} />
        </View>
        <View style={styles.text}>
          <Text style={styles.text_position}>위치 : {location}</Text>
          <Text style={styles.text_person}>인원 : {members}</Text>
          <Text style={styles.text_category}>카테고리 : {category}</Text>
        </View>
        <View style={styles.study_explain}>
          <Text style={styles.text_explain}>스터디 상세설명</Text>
          <View style={styles.explain_container}>
            <Text>스터디 상세 설명 내용</Text>
          </View>
        </View>
      </View>
      <View style={styles.join}>
        <Pressable onPress={pressJoinButton} style={styles.join_button}>
          <Text style={styles.button_text}>참여하기</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  study: {
    height: "80%",
    backgroundColor: "#ced4da",
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  image: {
    width: "100%",
    marginTop: 10,
    height: 150,
    borderRadius: 10,
  },
  study_title: {
    fontSize: 25,
  },
  text_position: {
    paddingTop: 15,
  },
  text_person: {
    paddingTop: 15,
  },
  text_category: {
    paddingTop: 15,
  },
  study_explain: {
    paddingTop: 30,
  },
  text_explain: {
    fontWeight: "bold",
  },
  explain_container: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#f1f3f5",
    borderRadius: 10,
    height: 130,
  },
  join_button: {
    backgroundColor: "#f1f3f5",
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginHorizontal: 20,
  },
  button_text: {
    textAlign: "center",
  },
});

export default JoinStudyScreen;
