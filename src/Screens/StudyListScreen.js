import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import TopBar from "../components/TopBar";


function StudyList() {

  return (
    <>
      <TopBar/>
      <View style={styles.container}>
        <View>
        <View style={styles.list_container}>
        <TouchableOpacity
            onPress={() => alert('웹 프로그래밍 코딩 스터디을 눌렸습니다.')}
            style={styles.study_button}
        >
          <Text style={styles.study_title}>웹 프로그래밍 코딩 스터디</Text>
          <TouchableOpacity
            onPress={() => alert('삭제합니다.')}
            style={styles.delete_button}>
            <Text style={styles.delete_text}>삭제</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  list_container: {
    flexDirection: "column",
    display:'flex',

    
  },
  study_title: {
    fontSize: 25,
    paddingLeft: 20,
  },
  study_button: {
    backgroundColor: '#ced4da',
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  delete_button: {
    backgroundColor: '#f1f3f5',
    borderRadius: 10,
    flexDirection:'row',
    alignItems:'center',
    marginRight: 15,
    padding:5,

  },
  delete_text: {
    fontSize: 15,
  },
});

export default StudyList;
