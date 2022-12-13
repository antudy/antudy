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
  
  const AdminWaitListCard = ({
    item_wait,
  }) => {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;

    //현재 userid 가져오기
    const user = auth.currentUser;
    const uid = user.uid;
    console.log(item_wait);

    //대기자 목록 강퇴
    const getoutWaitUid = () => {
        console.log("대기자 강퇴하기");
        const ANTUDYDeleteWait = doc(db, "ANTUDY", uid+"호");
        updateDoc(ANTUDYDeleteWait, {//arrayRemove
        waitUid: arrayRemove(item_wait)
        })
        .then(()=>{
        console.log("Document successfully written!", ANTUDYDeleteWait.id);
        })
        .catch((error) => {
        console.error("Error writing document: ", error);
        })
        // navigation.navigate("StudyList");
    }

    return (
    <View style={styles.container}>
        <View style={styles.userlist}>
            <View style={styles.user}>
                <Text>{item_wait}</Text>
            </View>
            <Pressable
                style={styles.wait}
                onPress={() => {
                    console.log("image upload");
                }}
                >
            <Text style={styles.createText}>승인</Text>
            </Pressable>
            <Pressable
                style={styles.wait}
                onPress={getoutWaitUid}
                >
            <Text style={styles.createText}>거절</Text>
            </Pressable>
        </View>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    adminUid: {
        maxLength :"5",
    },
    locationList: {
        display: "relative",
      },
      container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
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
        width: "70%",
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
      }
  });
  
  export default AdminWaitListCard;