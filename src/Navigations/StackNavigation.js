import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import StudyScreen from "../Screens/StudyScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
        <Stack.Screen name="Study" component={StudyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
