import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import CoinCard  from './CoinCard';
import Spinner from 'react-native-loading-spinner-overlay';
import fetchCoinData from './../actions/fetchCoinData';

class CryptoContainer extends Component{

		componentWillMount(){
			console.log('componentWillMount');
			const {crypto} = this.props;
						console.log(crypto);
			
				this.props.fetchCoinData();
		

			
		}
		componentDidMount(){
			console.log('componentDidMount');

		
		}		
		renderCoinCards(){
			const {crypto} = this.props;
			console.log('renderCoinCards')
			console.log(crypto);
			console.log(crypto.data);
			console.log('yo');
			return crypto.data.map((coin) => 
				<CoinCard  
					key = {coin.symbol}
					symbol = {coin.symbol}
					coin_name = {coin.name}
					price_usd = {coin.price_usd}
					percent_change_24h = {coin.percent_change_24h}		
					percent_change_7d = {coin.percent_change_7d}
				/>
				) 
		}
	render(){
		const {crypto} = this.props;
		const { contentContainer } = styles;
			while(crypto.isFetching){
				return(
						<ScrollView>
							<Spinner 
								visible = {crypto.isFetching}
								textContent = {'Loading...'}
								textStyle = {{color: '#253145'}}
								animation = "fade"/>
						</ScrollView>
					)
			}
			if(crypto.hasError == false){
				console.log('crypto has no error')

				return(
			<ScrollView contentContainerStyle={contentContainer}>
					{console.log('render')}
					
			
				
				{this.renderCoinCards()}
			</ScrollView>
		)
			}
		return(
			<View>
				<Text> Here are some coins b</Text>
			</View>
			)
	}


}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
}

function mapStateToProps(state){
	return {
		crypto: state.crypto
	}
	
}

export default connect(mapStateToProps,{fetchCoinData})(CryptoContainer)




