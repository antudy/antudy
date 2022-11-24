/*
Screen 설명 : https://reactnavigation.org/docs/screen/#name
options 설명 : https://reactnavigation.org/docs/bottom-tab-navigator
Ionicons : https://ionic.io/ionicons
*/

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  HomeScreen,
  JoinScreen,
  ManagementScreen,
  AccountScreen,
} from "../Screens";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Join"
        component={JoinScreen}
        options={{
          title: "참여중",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="layers" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Management"
        component={ManagementScreen}
        options={{
          title: "관리중",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={AccountScreen}
        options={{
          title: "내정보",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
