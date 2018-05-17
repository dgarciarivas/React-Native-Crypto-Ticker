import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {images} from './../utils/CoinIcons'; 

const styles = StyleSheet.create({
		card_container: {
			padding: 10,
			display: "flex"	,
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between"	
		},
		image: {
			width: 40,
			height: 40
		},
		bold: {
			fontWeight: 'bold'
		},
	});

	const {card_container, image, bold} = styles;


const CoinCard = (props) => {
	console.log(props.symbol);
		console.log(images[props.symbol]);
	return(
			<View style = {styles.card_container}>
				 <Image 
					style = {styles.image}
					source= {{uri: images[props.symbol]}}
					/>
				<View><Text style={styles.bold}>{props.symbol} --- {props.coin_name}</Text> 
				<Text><Text style = {styles.bold}>$</Text>{props.price_usd} </Text></View>
				<View><Text>∆  24 h: {props.percent_change_24h}</Text>
				<Text>∆  7 d:{props.percent_change_7d}</Text></View>
			</View>

	)
}


export default CoinCard;

/*
*/


