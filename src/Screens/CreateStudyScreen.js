import React, { useState } from "react";
//drop down
import { SelectList } from "react-native-dropdown-select-list";
//image upload
// import * as ImagePicker from 'expo-image-picker';
import {
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  Text,
  Button,
  Alert,
  Pressable,
  onPress,
  TextInput,
  Image,
} from "react-native";

const CreateStudyScreen = ({ navigation }) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  //const {width, height} = useWindowDimensions();

  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "서울" },
    { key: "2", value: "인천" },
    { key: "3", value: "부산" },
    { key: "4", value: "대전" },
    { key: "5", value: "광주" },
    { key: "6", value: "대구" },
    { key: "7", value: "울산" },
    { key: "8", value: "경기도" },
    { key: "9", value: "강원도" },
    { key: "10", value: "충청북도" },
    { key: "11", value: "충청남도" },
    { key: "12", value: "전라북도" },
    { key: "13", value: "전라남도" },
    { key: "14", value: "경상북도" },
    { key: "14", value: "경상남도" },
    { key: "15", value: "제주" },
    { key: "16", value: "세종" },
    // {key:'4', value:'대전', disabled:true},
  ];

  const CategoryData = [
    { key: "1", value: "IT/코딩" },
    { key: "2", value: "토익" },
    // {key:'4', value:'대전', disabled:true},
  ];

  const NumberOfPeople = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
    { key: "7", value: "7" },
    { key: "8", value: "8" },
    { key: "9", value: "9" },
    { key: "10", value: "10" },
    // {key:'4', value:'대전', disabled:true},
  ];

  const [text, onChangeText] = React.useState("입력해주세요");
  const [text2, onChangeText2] = React.useState("입력해주세요");

  const pressCreateStudyButton = () => {
    console.log("Press Button");
    navigation.navigate("ManagementScreen");
  };

  /** 이미지 업로드 */
  /*
    // 현재 이미지 주소
    const [imageUrl, setImageUrl] = useState('');
    // 권한 요청을 위한 hooks
    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

    const uploadImage = async () => {
        // 권한 확인 코드: 권한 없으면 물어보고, 승인하지 않으면 함수 종료
        if (!status?.granted) {
            const permission = await requestPermission();
            if (!permission.granted) {
                return null;
            }
        }
        // 이미지 업로드 기능
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, // 어떤 타입의 파일을 업로드할지 설정이 가능하다.(Images -> 이미지만 받기)
            allowsEditing: false, // 이미지 업로드 전에 자르기 등의 추가 편집 가능 여부를 설정
            quality: 1, // 이미지 압축 여부, 1로 설정하면 가장 높은 품질로 파일을 업로드
            aspect: [1, 1] // 이미지 비율을 설정하는 값
        });
        if (result.cancelled){
            return null; // 이미지 업로드 취소한 경우
        }
        console.log(result);
        setImageUrl(result.uri);
    };
    */
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
            {/* <Button
                        title='Press me'
                        onPress={()=> Alert.alert('스터디가 생성되었습니다.')}
                        style={styles.createButton}
                    /> */}
          </View>
          <View style={styles.viewAll}>
            <View style={styles.view}>
              <Text style={styles.text}>위치</Text>
              <Text style={styles.text}>참여가능 인원</Text>
              <Text style={styles.text}>카테고리</Text>
            </View>
            <View style={styles.viewRight}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
                style={styles.locationList}
              />
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={NumberOfPeople}
                save="value"
                style={styles.textRight}
              />
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={CategoryData}
                save="value"
                style={styles.categoryList}
              />
            </View>
          </View>
          <View>
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
              <Image
                style={styles.Image}
                width={width / 2}
                // source={{ uri: imageUrl }}
              />
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
  },
  view: {
    flexDirection: "column",
    margin: 30,
    marginTop: 15,
    marginBottom: 20,
  },
  viewRight: {
    flexDirection: "column",
    margin: 30,
    marginTop: 15,
    marginBottom: 20,
  },

  text: {
    fontSize: "18px",
    marginTop: 20,
    // marginLeft: 30,
  },
  textRight: {
    fontSize: "18px",
    marginTop: 20,
    // marginLeft: 130,
  },
  textDescription: {
    fontSize: "18px",
    marginTop: 0,
    marginLeft: 30,
    // marginBottom: 110,
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
    // alignItems: 'flex-end',
    // marginRight: 20,
  },
  createText: {
    color: "black",
    fontSize: "16px",
    textAlign: "center",
    // justifyContent: 'center',
    // flexDirection: 'center',
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
