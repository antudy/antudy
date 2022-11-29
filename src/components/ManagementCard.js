import { query, collection, doc, getDocs, where, updateDoc, deleteField, FieldValue, updateData, deleteDoc } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import {Alert, confirm} from "react-native";
// import pressDeleteStudyButton from "./pressDeleteStudyButton";

import {
  useWindowDimensions,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { useEffect } from "react";

const ManagementCard = ({
  adminTitle,
  adminLocation,
  adminPeople,
  adminCategory,
  onPress,
}) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  //현재 userid 가져오기
  const user = auth.currentUser;
  const uid = user.uid;
  // console.log(uid);

  //관리중인 스터디 삭제
  const pressDeleteStudyButton = () => {
    console.log("관리중인 스터디 삭제하기");
    const ANTUDYDelete = doc(db, "ANTUDY", uid+adminTitle);
    deleteDoc(ANTUDYDelete)
    // Alert.alert("정말로 삭제하시겠습니까?",[{onPress: () => deleteDoc(ANTUDYDelete)}])
    .then(()=>{
      console.log("Document successfully written!", ANTUDYDelete.id);
      // deleteDoc(ANTUDYDelete)
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    })
  }
  // //관리중인 스터디 수정
  // const pressDeleteStudyButton = () => {
  //   console.log("관리중인 스터디 삭제하기");
  //   const ANTUDYDelete = doc(db, "ANTUDY", uid+adminTitle);
  //   updateDoc(ANTUDYDelete, {
  //     aaa: "abc",
  //     adminTitle: "abc"
  //   })
  //   .then(()=>{
  //     console.log("Document successfully written!", ANTUDYDelete.id);
  //   })
  //   .catch((error) => {
  //     console.error("Error writing document: ", error);
  //   })
  // }
    // console.log("관리중인 스터디 삭제하기");
    
  


  return (
    <View style={styles.adminList} width={width / 1.1}>
      <View style={styles.adminBox} width={width / 1.1} height={height / 4}>
        <View style={styles.adminTitle_view}>
          {/* <Text style={styles.adminTitle_text}>제주코딩</Text> */}
          <Text style={styles.adminTitle_text}>{adminTitle}</Text>
        </View>
        <View style={styles.adminLocation_view}>
          <Text style={styles.adminItem_text}>위치 : </Text>
          <Text style={styles.adminItem_text}>{adminLocation}</Text>
        </View>
        <View style={styles.adminNumberOfPeople_view}>
          <Text style={styles.adminItem_text}>인원 : </Text>
          <Text style={styles.adminItem_text}>{adminPeople}</Text>
        </View>
        <View style={styles.adminCategory_view}>
          <Text style={styles.adminItem_text}>카테고리 : </Text>
          <Text style={styles.adminItem_text}>{adminCategory}</Text>
        </View>
        <View style={styles.adminModify_view}>
          <Pressable
            style={styles.adminModify_button}
            onPress={onPress}
          >
            <Text style={styles.adminModify_text}>관리</Text>
          </Pressable>
          <Pressable
            style={styles.adminModify_button}
            onPress={ pressDeleteStudyButton}
          >
            <Text style={styles.adminModify_text}>삭제</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  adminList: {
    margin: 10,
    marginTop: 30,
  },
  adminBox: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#CCCCCC",
    borderRadius: 20,
    padding: 20,
    justifyContent: "space-around",
  },
  adminTitle_view: {
    flex: 1.5,
    // backgroundColor: 'red',
  },
  adminTitle_text: {
    fontSize: "30px",
  },
  adminItem_text: {
    fontSize: "18px",
    // marginRight: 20,
  },
  adminLocation_view: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: ""
    // backgroundColor:'orange',
  },
  adminNumberOfPeople_view: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor:'yellow',
  },
  adminCategory_view: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor:'green',
  },
  adminModify_view: {
    flexDirection: "row",
    justifyContent: "flex-end",
    // backgroundColor:'blue',
  },
  adminModify_button: {},
  adminModify_text: {
    fontSize: "18px",
    marginLeft: 15,
  },
});

export default ManagementCard;
