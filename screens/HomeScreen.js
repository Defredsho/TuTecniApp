import * as React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


import ActaEntrega from "./ActaEntrega";
import ActaMantenimiento from "./ActaMantenimiento";


const Drawer = createDrawerNavigator();

function Inicio() {
	
	const navigation = useNavigation();
	
	const btnEntrega = () => {
				navigation.navigate('Acta de Entrega');
			}
	const btnMantenimiento = () => {
				navigation.navigate('Acta de Mantenimiento');
			}
	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize: 30,
					textAlign: "center",
					marginTop: 20,
					marginBottom: 20,
				}}
			>Formatos</Text>
		<TouchableOpacity onPress={btnMantenimiento}> 
				<LinearGradient
					colors={['#6EB8F5', '#6EB8F5', '#6EB8F5']}
					style={styles.button}>
					<Text style={styles.text}>Acta de Mantenimiento</Text>
				</LinearGradient>				
		</TouchableOpacity>
		<TouchableOpacity onPress={btnEntrega}> 
				<LinearGradient
					colors={['#6EB8F5', '#6EB8F5', '#6EB8F5']}
					style={styles.button}>
					<Text style={styles.text} component={ActaEntrega}>Acta de Entrega</Text>
				</LinearGradient>				
		</TouchableOpacity>
		</View>
	);
}

export default function HomeScreen() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Inicio" component={Inicio} options={{headerStyle:{backgroundColor: '#2898EE'}}}/>
			<Drawer.Screen name="Acta de Entrega" component={ActaEntrega} options={{headerStyle:{backgroundColor: '#2898EE'}}}/>
			<Drawer.Screen name="Acta de Mantenimiento" component={ActaMantenimiento} options={{headerStyle:{backgroundColor: '#2898EE'}}}/>
		</Drawer.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center',
  },
	text: {
		fontSize: 16,
		color: '#fff',
		marginTop: 15,
	},

	button: {
		marginTop: 20,
		width: 300,
		height: 50,
		alignItems: 'center',
		borderRadius: 20,
		marginBottom: 10,
	},
});
