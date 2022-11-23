import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateStudyScreen from "../Screens/CreateStudyScreen";
import ManagementScreen from "../Screens/ManagementScreen";
import JoinStudyScreen from "../Screens/JoinStudyScreen";
import StudyListScreen from "../Screens/StudyListScreen";
import { Login, Signup } from "../Screens";

const Stack = createStackNavigator();

const StackNavigation = () => {
  const theme = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
              screenOptions={{
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: 'white' },
                headerTintColor: 'black',
            }}
        >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
                headerTransparent: true,
                headerTitle: "",
                headerBackTitleVisible: false,
                headerTintColor: "white",
                headerBackImage: ({ tintColor}) => {
                    const style = {
                        marginRight: 5,
                        marginLeft: Platform.OS === "ios" ? 11: 0,
                    };
                },
            }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={BottomTabNavigation}
        />
        <Stack.Screen name="JoinStudy" component={JoinStudyScreen} />
        <Stack.Screen name="StudyList" component={StudyListScreen} />
        <Stack.Screen name="CreateStudy" component={CreateStudyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
