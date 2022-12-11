import { arrayRemove, FieldValue, updateDoc, where, update, doc, deleteField, getFirestore } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import React from "react";
import {
    useWindowDimensions,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Pressable,
  } from "react-native";
  
  const WaitStudyListCard = ({
    adminTitle,
    adminUid,
  }) => {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    //현재 userid 가져오기
    const user = auth.currentUser;
    const uid = user.uid;

    //waitUid 필드 중 사용자의 uid 삭제 완료
    const pressDeleteWaitButton = () => {
        console.log("참여대기중인 스터디 삭제하기")
        console.log(adminUid);
        const ANTUDYWaitDelete = doc(db, "ANTUDY", adminUid+adminTitle);
        updateDoc(ANTUDYWaitDelete, {
            waitUid: arrayRemove(uid) //deleteField()
        });
        }
  
    return (
      <View style={styles.container}>
      <View>
        <View style={styles.list_container}>
          <TouchableOpacity
            onPress={() => alert("'"+adminTitle+"'"+" 스터디는 승인 대기중 입니다.")}
            style={styles.study_button}
          >
            <Text style={styles.study_title}>{adminTitle}</Text>
            <Pressable
              onPress={pressDeleteWaitButton}
              style={styles.delete_button}
            >
              <Text style={styles.delete_text}>삭제</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
      },
      list_container: {
        flexDirection: "column",
        display: "flex",
      },
      study_title: {
        fontSize: 25,
        paddingLeft: 20,
      },
      study_button: {
        backgroundColor: "#ced4da",
        borderRadius: 10,
        paddingTop: 20,
        paddingBottom: 20,
        marginHorizontal: 20,
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      delete_button: {
        backgroundColor: "#f1f3f5",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
        padding: 5,
      },
      delete_text: {
        fontSize: 15,
      },
  });
  
  export default WaitStudyListCard;
  