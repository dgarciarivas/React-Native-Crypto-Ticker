import React from 'react';
import {View, Text, StyleSheet} from 'react-native'; // we import the stylesheets

const Header = () =>{
	return(
		<View style = {headerContainer}>
			<Text style = {header}> Cryptocurrency Tracker </Text>
		</View>
	)
}

const styles = StyleSheet.create({//define our styles with the create() method
	headerContainer: {
		display: "flex",
		marginTop: 55,
		alignItems: "center",
	},
	header: {
		fontWeight: "bold",
		fontSize: 20,
	}
})

const {headerContainer, header} = styles; //deconstruct 
export default Header;