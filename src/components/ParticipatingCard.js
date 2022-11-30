import { arrayRemove, FieldValue, updateDoc, where, update, doc, deleteField, getFirestore } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import {
    useWindowDimensions,
    StyleSheet,
    View,
    Text,
    Pressable,
  } from "react-native";
  
  const ParticipatingCard = ({
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

    // const pressDeleteJoinButton = () => {
    //   console.log("참여중인 스터디 삭제하기")
    //   const ANTUDYJoinDelete = doc(db, "ANTUDY", uid+adminTitle);
    //     ANTUDYJoinDelete.update({
    //       joinUid: FieldValue.arrayRemove(uid)
    //     })
    //   }

    //joinUid 필드 중 사용자의 uid 삭제 완료
    const pressDeleteJoinButton = () => {
      console.log("참여중인 스터디 삭제하기")
      const ANTUDYJoinDelete = doc(db, "ANTUDY", uid+adminTitle);
        updateDoc(ANTUDYJoinDelete, {
          joinUid: arrayRemove(uid) //deleteField()
        });
      }
    
  
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
              onPress={
                pressDeleteJoinButton
                // console.log("참여중인 스터디 삭제 하기");
              }
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
  
  export default ParticipatingCard;
  