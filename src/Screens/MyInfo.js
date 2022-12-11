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
                <View style={styles.MyInfoTitle}>
                    <Text style={styles.Text}>
                        내정보
                    </Text>                  
                    <TouchableOpacity style={styles.Signout}
                    onPress={_handleLogoutButtonPress}>
                    <Text style={{color: 'white', fontSize: 18}}>Sign out</Text>
                    </TouchableOpacity>
                </View>
                    <TextInput style={styles.InfoBox}
                        multiline
                        onChangeText={onChangeText}
                        value={text}
                        underlineColor="transparent"
                        theme={{ roundness: 0 }} 
                    />
                <View style={styles.IngBox}>
                    <TouchableOpacity style={{backgroundColor:'#FFFFFF',padding:20,margin:12,borderRadius:8,}}
                    onPress={() => navigation.navigate("JoinStudy")}
                    >
                        <Text style={styles.buttonText}>참여중인 스터디 </Text>
                    </TouchableOpacity>
                        <View style={{borderBottomColor:'#000000',borderBottomWidth:1}}></View>
                    <TouchableOpacity style={{backgroundColor:'#FFFFFF',padding:20,margin:12,borderRadius:8}}
                    onPress={() => navigation.navigate("ManageStudy")}
                    >   
                        <Text style={styles.buttonText}>관리중인 스터디 </Text>
                    </TouchableOpacity>
                        <View style={{borderBottomColor:'#000000',borderBottomWidth:1}}></View>
                    <TouchableOpacity style={{backgroundColor:'#FFFFFF',padding:20,margin:12,borderRadius:8,}}
                    onPress={() => navigation.navigate("StudyList")}
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
        
        backgroundColor: '#FFFFFF',
        flex:1,
        padding: 20,
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
        width:'100%',
        flex:1,
    },
    IngBox:{
        backgroundColor:"#B2B2B2",
        width:'100%',
        marginTop:10,
        marginBottom:30,
        flex:2,
    },
    Text:{
        fontSize:36,
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