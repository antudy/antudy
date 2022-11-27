import React from "react";
import { Text,View,StyleSheet,TouchableOpacity,} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Achievement = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>제주코딩<TouchableOpacity>
                    <Ionicons style={styles.icon} name="settings" size={35} color="black" />
                </TouchableOpacity>
            </Text>
            <View style={styles.Box}></View>
            <View style={styles.Box}></View>
            <View style={styles.Box}></View>
            <View style={styles.Box}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    Box:{
        backgroundColor:'#B2B2B2',
        width:'85%',
        padding:40,
        marginBottom:10,
    },
    Text:{
        color:'black',
        fontSize:30,
        alignSelf:'flex-start',
        marginLeft:50,
        marginTop:50,
    },
    icon:{
        marginTop:50,
    }
})

export default Achievement;