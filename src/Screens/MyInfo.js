import * as React from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity,} from "react-native"
import { Button, TextInput } from "react-native-paper";
const { width, height } = Dimensions.get("window");


const MyInfo = () => {
    const [text, onChangeText] = React.useState("내 정보를 입력해주세요!");

    return(
        <View style={styles.container}>
            
            <View style={styles.MyInfoTitle}>
            <Text style={styles.Text}>
                내정보
            </Text>                  
            <TouchableOpacity style={styles.Signout}
            onPress={() => alert('click')}>
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
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: '#FFFFFF',
        flex:1,
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