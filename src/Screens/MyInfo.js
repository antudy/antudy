import { CurrentRenderContext } from "@react-navigation/native";
import * as React from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Alert,} from "react-native"
import { Button, TextInput } from "react-native-paper";
import { logout } from "../../firebaseConfig";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const { width, height } = Dimensions.get("window");


const MyInfo = ({ navigation }) => {
    const [text, onChangeText] = React.useState("내 정보를 입력해주세요!");

    const _handleLogoutButtonPress = async() => {
        try {
            await logout();
            navigation.navigate("Login");
            Alert.alert("로그아웃 되었습니다!");
        } catch(e) {
            Alert.alert("LogOut Error", e.message);
        }
    };

    return(
        <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1 }}
        extraScrollHeight={20}
      >
            <View style={styles.container}>
                <Text style={styles.Text}>
                    내정보                  <TouchableOpacity style={{backgroundColor: 'red',
                    padding:7,
                    margin:20,
                    borderRaduis: 8,}}
                        onPress={() => alert('click')}>
                            <Text style={{color: 'white', fotSize: 12}}>Sign out</Text>
                    </TouchableOpacity>
                </Text>
                    <TextInput style={styles.InfoBox}
                        multiline
                        onChangeText={onChangeText}
                        value={text}
                    />
                <View style={styles.IngBox}>
                    <TouchableOpacity style={{backgroundColor:'#FFFFFF',padding:20,margin:12,borderRadius:8,}}
                    onPress={() => alert('연결!')}
                    >
                        <Text style={styles.buttonText}>참여중인 스터디 </Text>
                        </TouchableOpacity>
                            <View style={{borderBottomColor:'#000000',borderBottomWidth:1}}></View>
                        <TouchableOpacity style={{backgroundColor:'#FFFFFF',padding:20,margin:12,borderRadius:8}}
                        onPress={() => alert('연결!')}
                        >   
                            <Text style={styles.buttonText}>일정 캘린더 </Text>
                        </TouchableOpacity>
                            <View style={{borderBottomColor:'#000000',borderBottomWidth:1}}></View>
                        <TouchableOpacity style={{backgroundColor:'#FFFFFF',padding:20,margin:12,borderRadius:8,}}
                        onPress={() => alert('연결!')}
                        >
                            <Text style={styles.buttonText}>승인대기중인 스터디 </Text>
                        </TouchableOpacity>
                            <View style={{borderBottomColor:'#000000',borderBottomWidth:1}}></View>
                    </View>
                </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFFFFF',
        flex:1,
        padding: 15,
    },
    MyinfoTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin: 10,
    },
    MyInfoTitle:{
        marginTop: 15,
        flexDirection:'row',
        marginBottom: 15,
        justifyContent:'space-between',
    },
    Signout:{
        backgroundColor: 'red',
        justifyContent:'center',
        padding: 10,
    },
    InfoBox:{
        backgroundColor:"#FF8730",
        width:'90%',
        flex:1,
        
        
    },
    IngBox:{
        backgroundColor:"#B2B2B2",
        width:'90%',
        marginTop:10,
        marginBottom:30,
        flex:2,
    },
    Text:{
        fontSize:36,
        alignSelf:'flex-start',
        marginTop:40,
        marginLeft:30,
        marginBottom:10,
    },
    buttonText:{
        Color:"black",
        fontSize:30,
    },
    title:{
        fontSize:20,
        color:"white",
        textAlign:'center',
    }
})

export default MyInfo;