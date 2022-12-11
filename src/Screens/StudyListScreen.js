import { query, collection, getDocs, where, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import React, {useEffect, useState, useCallback} from "react";
import WaitStudyListCard from "../components/WaitStudyListCard";

function StudyList() {

  const [waitStudyList, setWaitStudyList] = useState([]);

  //현재 userid 가져오기
  const user = auth.currentUser;
  const uid = user.uid;

  //승인 대기 중인 스터디 목록 가져오기
  useEffect(() => {
    const ANTUDYWait = query(
      collection(db, "ANTUDY"),
      where("waitUid", "array-contains", uid)
    );
    const Waitunsubscript = onSnapshot(ANTUDYWait, (querySnapshot) => {
      const waitListData = [];
      querySnapshot.forEach((doc) => {
        waitListData.push(doc.data());
      });
      setWaitStudyList(waitListData);
    });

    return () => Waitunsubscript();
    // loadData(ANTUDY, setAdminList);
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <WaitStudyListCard
        adminTitle={item.adminTitle}
        adminUid={item.adminUid}
        adminLocation={item.adminLocation}
        adminPeople={item.adminPeople}
        adminCategory={item.adminCategory}
        // onPress={pressModify}
      />
    ),
    []
  );

  const waitStudyCreate = useCallback((item) => item.id, []);
  console.log(waitStudyCreate);

  return (
    <SafeAreaView>
      <FlatList
        data={waitStudyList}
        renderItem={renderItem}
        keyExtractor={waitStudyCreate}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default StudyList;
