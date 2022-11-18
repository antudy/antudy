import * as React from "react";
import { Appbar } from "react-native-paper";
import TopBar from "../components/TopBar";

const StudyScreen = ({ navigation }) => {
  return (
    <>
      <TopBar>
        <Appbar.BackAction onPress={() => navigation.pop()} />
      </TopBar>
    </>
  );
};
export default StudyScreen;
