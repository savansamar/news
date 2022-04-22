import React from 'react';
import { View, StatusBar, StyleSheet, ActivityIndicator, Modal, Platform, Dimensions } from 'react-native';


const Loader = ({ isLoading = true }) => {

	return (
		<>



			{
				isLoading ?

					<View style={styles.container}>
						<ActivityIndicator color={"red"} size={'large'} />
					</View>
					: null
			}
		</>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(210, 210, 210, 0.4)',
		//backgroundColor: color.white,
		justifyContent: "center",
		alignItems: "center",
		height:Dimensions.get('screen').height,
		width: Dimensions.get('screen').width,

	}
})

export default Loader;
