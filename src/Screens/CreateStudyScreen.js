import { query, collection, getDocs, where, doc, setDoc, addDoc } from 'firebase/firestore';
import { db } from "../../firebaseConfig";
// import * as SecureStore from 'expo-secure-store';
// import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from "react";
//drop down
import DropDownPicker from 'react-native-dropdown-picker';
//image upload
import {images} from '../utils/images';
import Image_create from '../components/Image_create';
import {
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";
// import { collection } from 'firebase/firestore';

const CreateStudyScreen = ({ navigation }) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  //const {width, height} = useWindowDimensions();

  const [openLocation, setOpenLocation] = useState(false);
  const [openPeople, setOpenPeople] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const [valueLocation, setValueLocation] = useState(null);
  const [valuePeople, setValuePeople] = useState(null);
  const [valueCategory, setValueCategory] = useState(null);
  
  const [itemsLocation, setItemsLocation] = useState([
    {label: '서울', value: '서울'},
    {label: '인천', value: '인천'},
    {label: '부산', value: '부산'},
    {label: '대전', value: '대전'},
    {label: '광주', value: '광주'},
    {label: '대구', value: '대구'},
    {label: '울산', value: '울산'},
    {label: '경기도', value: '경기도'},
    {label: '강원도', value: '강원도'},
    {label: "충청북도", value: "충청북도"},
    {label: "충청남도", value: "충청남도"},
    {label: "전라북도", value: "전라북도"},
    {label: "전라남도", value: "전라남도"},
    {label: "경상북도", value: "경상북도"},
    {label: "경상남도", value: "경상남도"},
    {label: "제주", value: "제주"},
    {label: "세종", value: "세종"},
  ]);
  const [itemsPeople, setItemsPeople] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
  ]);
  const [itemsCategory, setItemsCategory] = React.useState([
    { label: "IT/코딩", value: "IT/코딩" },
    { label: "토익", value: "토익" },
  ]);


  const [text, onChangeText] = React.useState("제목을 입력해주세요");
  const [text2, onChangeText2] = React.useState("설명을 입력해주세요");

  //image 추가
  const [photoUrl, setPhotoUrl] = useState(images.photo);

  //새로운 스터디 등록하기 버튼 클릭 시
  const pressCreateStudyButton = () => {
    console.log("Press Button");
    //스터디 생성 정보 DB 저장
    const ANTUDYRef = query(collection(db,"ANTUDY"));
    addDoc(ANTUDYRef, { 
      adminTitle: `${text}`,
      adminLocation: `${valueLocation}`,
      adminPeople: `${valuePeople}`,
      adminCategory: `${itemsCategory}`,
      adminDescription: `${text2}`
      // adminTitle: "test3",
      // adminLocation: "test3",
      // adminPeople: "test3",
      // adminCategory: "test3" 
      })
    .then(()=>{
      console.log("Document successfully written!", ANTUDYRef.id);
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    })

    //화면 전환
    navigation.navigate("ManagementScreen");
  };

  
  // useEffect(() => {
   

  return (
    <SafeAreaView style={styles.container}>
      <View width={width / 1.1}>
        <View style={styles.createBox} height={height / 1.5}>
          <View style={styles.createStudyTitle}>
            <Text style={styles.createStudyTitle_text}>스터디명:</Text>
            <TextInput
              style={styles.createStudyTitle_text_input}
              onChangeText={onChangeText}
              placeholder="입력해주세요"
              value={text}
            />
          </View>
          <View style={styles.viewAll} height={height/5.5}>
            <View style={styles.view}>
              <Text style={styles.text}>위치</Text>
              <Text style={styles.text}>참여가능 인원</Text>
              <Text style={styles.text}>카테고리</Text>
            </View>
            <View style={styles.viewRight}>
              <DropDownPicker
                open = {openLocation}
                value = {valueLocation}
                items = {itemsLocation}
                setOpen = {setOpenLocation}
                setValue = {setValueLocation}
                setItems = {setItemsLocation}
                zIndex={9999}
                style={{width: 180}}
                // onChangeValue = {onChangeValue}
              />
              <DropDownPicker
                open = {openPeople}
                value = {valuePeople}
                items = {itemsPeople}
                setOpen = {setOpenPeople}
                setValue = {setValuePeople}
                setItems = {setItemsPeople}
                zIndex={9998}
                style={{width: 180}}
              />
              <DropDownPicker
                open = {openCategory}
                value = {valueCategory}
                items = {itemsCategory}
                setOpen = {setOpenCategory}
                setValue = {setValueCategory}
                setItems = {setItemsCategory}
                zIndex={9997}
                style={{width: 180}}
              />
            </View>
          </View>
          <View style={{zIndex:0,}}>
            <Text style={styles.textDescription}>스터디 상세설명</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText2}
              placeholder="입력해주세요"
              value={text2}
            />
          </View>
          <View>
            <Text style={styles.viewImage}>이미지</Text>
            <View style={styles.ImageBlock}>
            <Image_create style={styles.Image} url={ images.photo } />
              <Pressable
                style={styles.createButton}
                onPress={() => {
                  console.log("image upload");
                }}
              >
                <Text style={styles.createText}>업로드</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.joinStudy} height={height / 18}>
          <Pressable
            style={styles.joinStudy_button}
            onPress={pressCreateStudyButton}
          >
            <Text style={styles.joinStudy_text}>새로운 스터디 등록하기</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  locationList: {
    display: "relative",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  createBox: {
    //backgroundColor: '#FF9100',
    backgroundColor: "#CCCCCC",
    border: 2,
    borderRadius: 20,
  },
  createStudyTitle: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  createStudyTitle_text: {
    fontSize: "18px",
    margin: 30,
    marginRight: 5,
    marginBottom: 0,
  },
  createStudyTitle_text_input: {
    fontSize: "30px",
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
    justifyContent: 'space-evenly',
  },
  viewRight: {
    flexDirection: "column",
    justifyContent: 'space-evenly',
    marginLeft: 50,
  },

  text: {
    fontSize: "18px",
  },
  textRight: {
    fontSize: "18px",
    marginTop: 20,
  },
  textDescription: {
    fontSize: "18px",
    marginTop: 0,
    marginLeft: 30,
  },
  input: {
    backgroundColor: "#F3F3F3",
    fontSize: "18px",
    marginTop: 10,
    paddingBottom: 110,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  viewImage: {
    fontSize: "18px",
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
    borderRadius: 10,
  },
  createText: {
    color: "black",
    fontSize: "16px",
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
    fontSize: "20px",
  },
});

export default CreateStudyScreen;
