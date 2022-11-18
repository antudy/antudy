import * as React from "react";
import { StyleSheet,Pressable } from "react-native";
import { FAB } from "react-native-paper";

const FloatingActionButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <FAB icon="plus" style={styles.fab} />
    </Pressable> //name값 입력
  )
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
  },
});

export default FloatingActionButton;
