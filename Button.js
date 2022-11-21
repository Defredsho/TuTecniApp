import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient(){
	return (
		<TouchableOpacity> 
				<LinearGradient
					onPress={handleSignIn}				
					colors={['#2538E9', '#2538E9', '#2538E9']}
					style={styles.button}>
					<Text style={styles.text}>Acceder</Text>
				</LinearGradient>				
		</TouchableOpacity>
	);
	
}


const styles = StyleSheet.create({
	
	text: {
		fontSize: 14,
		color: '#fff',
		marginTop: 15,
	},

	button: {
		marginTop: 50,
		width: 100,
		height: 50,
		alignItems: 'center',
		borderRadius: 20,
	},
});
