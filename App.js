import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from "react-native-svg"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import firebase from "firebase/compat/app";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function PaginaInicio() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Bienvenido</Text>
		</View>
  );
}
function Login() {

	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const navigation = useNavigation();

	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);


	const handleSignIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log('sign in!')
				const user = userCredential.user;
				console.log(user)
				navigation.navigate('Home');
			})
			.catch(error => {
				console.log(error)
				Alert.alert('Usuario o contraseña incorrectos!')
			})
	}

  return (
			<View style={styles.mainContainer}>
			<View style={styles.parteSuperior}>

			<Svg
    width={390}
    height={187}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M175.392 177.195c-81.361 22.993-148.817-3.291-172.375-19.307L0 154.378V31.298h390v130.978c-132.729-14.919-112.906-13.822-214.608 14.919Z"
      fill="#4353E6"
    />
    <Path
      d="M175.392 146.052c-81.361 23.017-148.817-3.295-172.375-19.327L0 123.211V0h390v131.117c-132.729-14.934-112.906-13.836-214.608 14.935Z"
      fill="#2538E9"
    />
  </Svg>
			</View>
			<View style={styles.container}>
			<Text style={styles.titulo}>Bienvenido</Text>
      <Text style={styles.subTitulo}>Inicia sesion con tu cuenta</Text>
			<TextInput
				onChangeText={(text) => setEmail(text)}
				style={styles.textInputs}
				placeholder="Nombre"
			/>
			<TextInput 
				onChangeText={(text) => setPassword(text)}
				style={styles.textInputs}
				placeholder="Contraseña"
				secureTextEntry={true}
			/>
		<TouchableOpacity onPress={handleSignIn}> 
				<LinearGradient
					colors={['#2538E9', '#2538E9', '#2538E9']}
					style={styles.button}>
					<Text style={styles.text}>Acceder</Text>
				</LinearGradient>				
		</TouchableOpacity>
      <StatusBar style="auto" />
			</View>
			</View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer style={styles.navigator}>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
				<Stack.Screen name="Home" component={PaginaInicio} />
			</Stack.Navigator>
		</NavigationContainer>
	);

}

const styles = StyleSheet.create({
	navigator: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	mainContainer:{
		flex: 1,
		backgroundColor: '#f1f1f1',
		justifyContent: 'center'
	},
	parteSuperior: {
		width: '100%',
	},
	container: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
	titulo: {
		fontSize: 60,
		color: '#000',
		fontWeight: 'bold',
	},
	subTitulo: {
		fontSize: 20,
		color: 'gray',
	},
	textInputs: {
		padding: 10,
		paddingStart: 15,
		width: '80%',
		height: 50,
		marginTop: 20,
		borderRadius: 20,
		backgroundColor: '#fff',
		marginBottomWidth: 1,
		marginBottom: 1,
	},
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
