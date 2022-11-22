import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/Login";

const Drawer = createDrawerNavigator();

function MyDrawer() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={HomeScreen} />
		</Drawer.Navigator>
	);
}

const Stack = createNativeStackNavigator();
export default function Navigation() {
	return (
		<NavigationContainer >
			<Stack.Navigator initialRouteName="LoginScreen">
				<Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
				<Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
