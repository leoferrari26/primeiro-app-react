import React from 'react';
import { View, Text, styleSheet } from 'react-native';

export default function Welcome() {
	return (
		<View style={styles.container}>
			<Text> Bem vindo </Text>
		</View>
	);
}

const style = styleSheet.create({
	container:{

	}
})