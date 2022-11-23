import React, { useState } from 'react';
import { useWindowDimensions, StyleSheet, View, Text, Pressable } from 'react-native';

const ManagementCard = ({ adminTitle, adminLocation, adminPeople, adminCategory}) => {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    
    return (
            <View style={styles.adminList} width={width/1.1}>
              <View style= {styles.adminBox} width={width/1.1} height={height/4}>
                <View style={styles.adminTitle_view}>
                  <Text style={styles.adminTitle_text}>제주코딩</Text>
                  <Text>{adminTitle}</Text>
                </View>
                <View style={styles.adminLocation_view}>
                  <Text style={styles.adminItem_text}>위치</Text>
                  <Text>{adminLocation}</Text>
                </View>
                <View style={styles.adminNumberOfPeople_view}>
                  <Text style={styles.adminItem_text}>인원수</Text>
                  <Text>{adminPeople}</Text>
                </View>
                <View style={styles.adminCategory_view}>
                  <Text style={styles.adminItem_text}>카테고리</Text>
                  <Text>{adminCategory}</Text>
                </View>
                <View style={styles.adminModify_view}>
                  <Pressable style = {styles.adminModify_button} onPress={()=>{
                      console.log('관리중인 스터디 수정하기');
                      }}>
                      <Text style = {styles.adminModify_text}>수정</Text>
                  </Pressable>
                </View>
              </View>
            </View>      
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
  adminTitle_view:{
    flex: 1.5,
    // backgroundColor: 'red',
  },
  adminTitle_text:{
    fontSize: '30px',
  },
  adminItem_text:{
    fontSize: '18px',
  },
  adminLocation_view:{
    flex: 1,
    // backgroundColor:'orange',
  },
  adminNumberOfPeople_view:{
    flex: 1,
    // backgroundColor:'yellow',
  },
  adminCategory_view:{
    flex: 1,
    // backgroundColor:'green',
  },
  adminModify_view:{
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

export default ManagementCard;
