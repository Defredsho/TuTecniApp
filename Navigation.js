import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/Login";
import ActaEntrega from "./screens/ActaEntrega";
import ActaMantenimiento from "./screens/ActaMantenimiento";


const Stack = createNativeStackNavigator();
export default function Navigation() {
	return (
		<NavigationContainer >
			<Stack.Navigator initialRouteName="LoginScreen">
				<Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
				<Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, backgroundColor: '#FF0000'}} />
				<Stack.Screen name="Entrega" component={ActaEntrega} options={{headerStyle:{backgroundColor: '#2898EE'}}}/>
				<Stack.Screen name="Mantenimiento" component={ActaMantenimiento} options={{headerStyle:{backgroundColor: '#2898EE'}}}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
