import React, { useState } from 'react';
import { useWindowDimensions, StyleSheet, SafeAreaView, ScrollView, View, Platform, Text, Button, Alert, Pressable, onPress, TextInput, Image } from 'react-native';

const ListScreen = () => {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    
    return (
        <ScrollView>
          <SafeAreaView style={styles.container}>
            <View style={styles.adminList} width={width/1.1}>
              <View style= {styles.adminBox} width={width/1.1} height={height/4}>
                <View style={styles.adminTitle}>
                  <Text style={styles.adminTitle_text}>제주코딩</Text>
                </View>
                <View style={styles.adminLocation}>
                  <Text style={styles.adminItem_text}>위치</Text>
                </View>
                <View style={styles.adminNumberOfPeople}>
                  <Text style={styles.adminItem_text}>인원수</Text>
                </View>
                <View style={styles.adminCategory}>
                  <Text style={styles.adminItem_text}>카테고리</Text>
                </View>
                <View style={styles.adminModify}>
                  <Pressable style = {styles.adminModify_button} onPress={()=>{
                      console.log('관리중인 스터디 수정하기');
                      }}>
                      <Text style = {styles.adminModify_text}>수정</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  
  container: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  adminList: {
    margin: 30,
  },
  adminBox: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: '#CCCCCC',
    borderRadius : 20,
    padding: 20,
    justifyContent: 'space-around'
  },
  adminTitle:{
    flex: 1.5,
    // backgroundColor: 'red',
  },
  adminTitle_text:{
    fontSize: '30px',
  },
  adminItem_text:{
    fontSize: '18px',
  },
  adminLocation:{
    flex: 1,
    // backgroundColor:'orange',
  },
  adminNumberOfPeople:{
    flex: 1,
    // backgroundColor:'yellow',
  },
  adminCategory:{
    flex: 1,
    // backgroundColor:'green',
  },
  adminModify:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor:'blue',
  },
  adminModify_button:{

  },
  adminModify_text:{
    fontSize: '18px',
  },
});

export default ListScreen;
