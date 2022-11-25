import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import ActaEntrega from "./ActaEntrega";
import ActaMantenimiento from "./ActaMantenimiento";


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
			<Drawer.Screen name="Inicio" component={Inicio} options={{headerStyle:{backgroundColor: '#42A6FE'}}}/>
			<Drawer.Screen name="Acta de Entrega" component={ActaEntrega} options={{headerStyle:{backgroundColor: '#42A6FE'}}}/>
			<Drawer.Screen name="Acta de Mantenimiento" component={ActaMantenimiento} options={{headerStyle:{backgroundColor: '#42A6FE'}}}/>
		</Drawer.Navigator>
	);
}
