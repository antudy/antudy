import { createStackNavigator } from '@react-navigation/stack';
import CreateStudy from '../Screens/CreateStudy';
import ManagementScreen from '../Screens/ManagementScreen';
import HomeScreen from '../Screens/HomeScreen';
import FloatingActionButton from '../components/FloatingActionButton';
import BottomTabNavigation from '../components/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function FABStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headershown:false}} name="BottomTab" component={BottomTabNavigation} />
                <Stack.Screen name="CreateStudy" component={CreateStudy} />
                <Stack.Screen name="ManagementScreen" component={ManagementScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default FABStackNavigator;