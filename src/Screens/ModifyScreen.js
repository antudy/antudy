import { query, collection, getDocs, where, onSnapshot, connectFirestoreEmulator } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";

import React, { useState, useEffect, useCallback } from "react";
//drop down
import DropDownPicker from "react-native-dropdown-picker";
//image upload
import { images } from "../utils/images";
import Image_create from "../components/Image_create";
import {
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Pressable,
  TextInput,
  FlatList
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AdminWaitListCard from "../components/AdminWaitLIstCard";

const ModifyScreen = ({ navigation , route}) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  //const {width, height} = useWindowDimensions();

  const { adminTitle, adminLocation, adminPeople, adminCategory, adminImage, adminUid} = route.params;

  const pressModifyButton = () => {
    console.log("Press Button");
    navigation.navigate("ModifyStudy");
  };
  // console.log(adminLocation)

  const [adminWaitStudyList, setAdminWaitStudyList] = useState([]);

  //현재 userid 가져오기
  const user = auth.currentUser;
  const uid = user.uid;
  // console.log(adminWaitStudyList);

  //대기자목록 가져오기
  useEffect(() => {
    const ANTUDYAdminWait = query(
      collection(db, "ANTUDY"),
      where("adminTitle", "==", adminTitle),
      where("adminUid", "==", adminUid),
    );

    const AdminWaitunsubscript = onSnapshot(ANTUDYAdminWait, (querySnapshot) => {
      const adminWaitListData = [];
      querySnapshot.forEach((doc) => {
        const waitUidArray = doc.data().waitUid;
          // waitUidArray.forEach(e => console.log(e))
          waitUidArray.forEach((e) => {
            // console.log(e);
            adminWaitListData.push(e);
          })
          // console.log(doc.data().waitUid);
      });
      setAdminWaitStudyList(adminWaitListData);
      console.log(adminWaitListData);
    });

    return () => AdminWaitunsubscript();
  }, []);
  // console.log(AdminWaitunsubscript);

  const renderItem = useCallback(
    ({ item }) => {
      return(
      <AdminWaitListCard
        item={item}
      />
      )
      },
    []
  );

  const AdminWaitList = useCallback((item) => item.id, []);
  // console.log(AdminWaitList);

  return (
    <SafeAreaView style={styles.container}>
      <View width={width / 1.1}>
        <View style={styles.createBox} height={height / 1.3}>
          <ScrollView>
            <View style={styles.createStudyTitle}>
              <Text style={styles.createStudyTitle_text}>{adminTitle}</Text>
              <Pressable
                style={styles.createButton}
                onPress={pressModifyButton}
              >
                <Text style={styles.createText}>완료</Text>
              </Pressable>
            </View>
            <View style={styles.viewAll} height={height / 5.5}>
              <View style={styles.view}>
                <Text style={styles.text}>위치</Text>
                <Text style={styles.text}>참여가능 인원</Text>
                <Text style={styles.text}>카테고리</Text>
              </View>
              <View style={styles.viewRight}>
                <Text style={styles.text}>{adminLocation}</Text>
                <Text style={styles.text}>{adminPeople}</Text>
                <Text style={styles.text}>{adminCategory}</Text>
              </View>
            </View>

            <View>
              <Text style={styles.viewImage}>이미지</Text>
              <View style={styles.ImageBlock}>
                 <Image_create style={styles.Image} url={adminImage} />
              </View>
            </View>

            <Text style={styles.createStudyTitle_text}>참여자 목록</Text>
            {/* <View style={styles.userlist}>
              <View style={styles.user}>
                <Text>user1</Text>
              </View>
              <Pressable
                style={styles.getout}
                onPress={() => {
                  console.log("image upload");
                }}
              >
                <Text style={styles.createText}>강퇴</Text>
              </Pressable>

              <View style={styles.user}>
                <Text>user2</Text>
              </View>
              <Pressable
                style={styles.getout}
                onPress={() => {
                  console.log("image upload");
                }}
              >
                <Text style={styles.createText}>강퇴</Text>
              </Pressable>

              <View style={styles.user}>
                <Text>user3</Text>
              </View>
              <Pressable
                style={styles.getout}
                onPress={() => {
                  console.log("image upload");
                }}
              >
                <Text style={styles.createText}>강퇴</Text>
              </Pressable>
            </View> */}
            <Text style={styles.createStudyTitle_text}>대기자 목록</Text>
            <FlatList
              data={adminWaitStudyList}
              renderItem={renderItem}
              keyExtractor={AdminWaitList}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  locationList: {
    display: "relative",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  createBox: {
    display: "flex",
    width: "100%",
    //backgroundColor: '#FF9100',
    backgroundColor: "#CCCCCC",
    border: 2,
    borderRadius: 20,
    overflow: "auto",
  },
  createStudyTitle: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  createStudyTitle_text: {
    fontSize: 18,
    margin: 30,
    marginRight: 5,
    marginBottom: 0,
  },
  createStudyTitle_text_input: {
    fontSize: 30,
  },
  viewAll: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 30,
    zIndex: 9999,
  },
  view: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  viewRight: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: 50,
  },

  text: {
    fontSize: 18,
  },
  textRight: {
    fontSize: 18,
    marginTop: 20,
  },
  textDescription: {
    fontSize: 18,
    marginTop: 0,
    marginLeft: 30,
  },
  input: {
    backgroundColor: "#F3F3F3",
    fontSize: 18,
    marginTop: 10,
    paddingBottom: 110,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  viewImage: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 30,
  },
  ImageBlock: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  Image: {
    backgroundColor: "#F3F3F3",
    marginTop: 10,
    paddingBottom: 110,
    marginLeft: 30,
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
  },
  createButton: {
    backgroundColor: "#F3F3F3",
    height: 25,
    padding: 5,
    fontSize: 10,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 5,
    marginRight: 15,
    borderRadius: 10,
  },
  createText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  joinStudy: {
    flexDirection: "column",
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  joinStudy_text: {
    fontSize: 20,
  },
  userlist: {
    flexWrap: "wrap",
    marginTop: 5,
    marginLeft: 25,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  user: {
    backgroundColor: "#F3F3F3",
    padding: 10,
    borderRadius: 10,
    width: "33%",
    justifyContent: "center",
    marginBottom: 5,
  },
  getout: {
    backgroundColor: "#F3F3F3",
    height: 25,
    padding: 5,
    fontSize: 10,
    marginLeft: 5,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 10,
    marginRight: 5,
    marginBottom: 5,
  },
  wait: {
    backgroundColor: "#F3F3F3",
    height: 25,
    padding: 5,
    fontSize: 10,
    marginLeft: 5,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 10,

    marginBottom: 5,
  },
});

export default ModifyScreen;
