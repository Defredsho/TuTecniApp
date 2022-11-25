import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const ActaMantenimiento = () => {
	return (
		<ScrollView>
		<View style={styles.mainContainer}>
		<View style={styles.container}>
			<Text
				style={styles.titulo}>
				Acta de Mantenimiento
			</Text>
			<Text style={styles.subTitulo}>
				Tipo de Equipo
			</Text>
			<Text>Portatil</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Remitente"	
				/>
			<Text>Desktop</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Destinario"	
				/>
			<Text>Cliente Ligero</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Servidor</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Marca</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Remitente"	
				/>
			<Text>Modelo</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Destinario"	
				/>
			<Text>Numero de Inventario</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Area</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Nombre de Usuario</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Fecha</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Perifericos</Text>
			<Text>Monitor</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Remitente"	
				/>
			<Text>Mouse</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Destinario"	
				/>
			<Text>Teclado</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Otro</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Estado Monitor</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Remitente"	
				/>
			<Text>Estado Mouse</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Destinario"	
				/>
			<Text>Estado Teclado</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Estado Otro</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Nombre de Usuario</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Fecha</Text>
				<TextInput
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
		<TouchableOpacity> 
				<LinearGradient
					colors={['#FF0000', '#FF0000', '#FF0000']}
					style={styles.button}>
					<Text style={styles.text}>Generar PDF</Text>
				</LinearGradient>				
		</TouchableOpacity>
		</View>
			</View> 
		</ScrollView>
	);
}

export default ActaMantenimiento;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#818181',
  },
	mainContainer:{
		flex: 1,
		backgroundColor: '#42A6FE',
		paddingTop: StatusBar.currentHeight,
	},
	container: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
	row: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
	titulo: {
		fontSize: 30,
		color: '#000',
		fontWeight: 'bold',
		padding: 10,
	},
	subTitulo: {
		fontSize: 20,
		margin:10,
	},
	textInputs2: {
		width:'30%',
		backgroundColor: '#fff',
		borderRadius: 20,
		height: 40,
		justifyContent: 'center',
	},
	textInputs: {
		margin: 10,
		padding: 10,
		paddingStart: 15,
		width: '80%',
		height: 40,
		marginTop: 10,
		borderRadius: 20,
		backgroundColor: '#fff',
		marginBottomWidth: 1,
		marginBottom: 10,
	},
	text: {
		fontSize: 14,
		color: '#fff',
		marginTop: 15,
	},

	button: {
		marginTop: 20,
		width: 100,
		height: 50,
		alignItems: 'center',
		borderRadius: 20,
		marginBottom: 40,
	},
});
