import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import StudyScreen from "../Screens/StudyScreen";
import CreateStudyScreen from "../Screens/CreateStudyScreen";
import ManagementScreen from "../Screens/ManagementScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomTab"
          component={BottomTabNavigation}
        />
        <Stack.Screen name="Study" component={StudyScreen} />
        <Stack.Screen name="CreateStudy" component={CreateStudyScreen} />
        <Stack.Screen name="ManagementScreen" component={ManagementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
