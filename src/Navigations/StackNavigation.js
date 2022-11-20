import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import CreateStudyScreen from "../Screens/CreateStudyScreen";
import ManagementScreen from "../Screens/ManagementScreen";
import JoinStudyScreen from "../Screens/JoinStudyScreen";
import StudyListScreen from "../Screens/StudyListScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
