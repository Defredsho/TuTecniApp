import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';





const Drawer = createDrawerNavigator();

function Inicio() {
	return (
		<View>
			<Text
				style={{
					fontSize: 30,
					textAlign: "center",
					marginTop: "20%"
				}}
			>HomeScreen</Text>
		</View>
	);
}

export default function HomeScreen() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={Inicio} />
		</Drawer.Navigator>
	);
}
