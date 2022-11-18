/*
Appbar 설명 : https://callstack.github.io/react-native-paper/appbar.html
*/

import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const TopBar = ({ title, children }) => {
  // 매개변수 : 제목, 뒤로가기 버튼(default : 없음)
  return (
    <>
      <Appbar.Header style={styles.header} statusBarHeight={5}>
        {children}
        <Appbar.Content title={title} onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="account-circle" onPress={() => {}} />
      </Appbar.Header>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
  },
});

export default TopBar;
