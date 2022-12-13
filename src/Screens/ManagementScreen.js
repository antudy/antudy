import { query, collection, getDocs, where, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { db, auth, loadData } from "../../firebaseConfig";
import React, { useCallback, useState, useEffect } from "react";
import {
  FlatList,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import ManagementCard from "../components/ManagementCard";

const ManagementScreen = ({ navigation }) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const pressModify = () => {
    navigation.navigate("ModifyStudy");
  };

  const [adminList, setAdminList] = useState([]);

  //   useEffect( () => {
  //     async function getAdminList(){
  //       const adminStudy = await getDocs(collection(db, "ANTUDY"));
  //       adminStudy.forEach((doc) => {
  //         // console.log(`${doc.id} => ${doc.data()}`);
  //         setAdminList((prevState) => [...prevState, doc.data()]);
  //         console.log(doc.data());
  //       });
  //       getAdminList();
  //   }
  // }, []);

  //현재 userid 가져오기
  const user = auth.currentUser;
  const uid = user.uid;
  // console.log(uid);

  //관리 중인 스터디 목록 가져오기
  useEffect(() => {
    const ANTUDY = query(
      collection(db, "ANTUDY"),
      where("adminUid", "==", uid)
    );
    const unsubscript = onSnapshot(ANTUDY, (querySnapshot) => {
      const adminListData = [];
      querySnapshot.forEach((doc) => {
        adminListData.push(doc.data());
      });
      setAdminList(adminListData);
      console.log(adminListData);
    });

    return () => unsubscript();
    // loadData(ANTUDY, setAdminList);
  }, []);

  const renderItem = useCallback(
    ({ item }) => {
      const pressModify= () => {
        console.log("abc");
        navigation.navigate("ModifyStudy", {
          adminTitle : item.adminTitle,
          adminLocation: item.adminLocation,
          adminPeople: item.adminPeople,
          adminCategory: item.adminCategory,
          adminImage: item.adminImage,
          adminUid: item.adminUid,
        })
      }
      return(
      <ManagementCard
        adminTitle={item.adminTitle}
        adminLocation={item.adminLocation}
        adminPeople={item.adminPeople}
        adminCategory={item.adminCategory}
        onPress={pressModify}
      />
      )
      },
    []
  );

  const adminStudyCreate = useCallback((item) => item.id, []);
  console.log(adminStudyCreate);

  return (
    <SafeAreaView style={styles.container}>
      {/* <ManagementCard 
              // data={adminList}
              // renderItem={renderItem}
              // adminStudyCreate={adminStudyCreate}
            /> */}
      <FlatList
        data={adminList}
        renderItem={renderItem}
        keyExtractor={adminStudyCreate}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ManagementScreen;
