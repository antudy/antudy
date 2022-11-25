import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import React, { useCallback, useState, useEffect } from "react";
import {
  FlatList,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import ManagementCard from "../components/ManagementCard";

const ManagementScreen = () => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

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

  useEffect(() => {
    const ANTUDY = query(
      collection(db, "ANTUDY"),
      where("adminUserId", "==", "userId1")
    );
    getDocs(ANTUDY)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setAdminList((prevState) => [...prevState, doc.data()]);
          console.log(doc.data());
        });
      })
      .catch((e) => {
        console.log(`Error : ${e}`);
      });
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <ManagementCard
        adminTitle={item.adminTitle}
        adminLocation={item.adminLocation}
        adminPeople={item.adminPeople}
        adminCategory={item.adminCategory}
      />
    ),
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
