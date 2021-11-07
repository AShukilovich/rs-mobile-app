import React, { useContext } from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from "react-native";
import { THEME } from "../../theme";
import { useSelector } from "react-redux";
import { NavigationContext } from "@react-navigation/native";
import { ScreenNames } from "../../navigation";

const HeaderCityName = () => {
	const cities = useSelector(state => state.city.cities);
	const currentCityId = useSelector(state => state.city.currentCityId);

	const currentCity = cities.find(({ id }) => id === currentCityId);

	const navigation = useContext(NavigationContext);

	if (!currentCity) {
		return (
			<View style={styles.loading}/>
		)
	}

	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={() => navigation.navigate(ScreenNames.CITY)}>
				<View style={styles.button}>
					<Text style={styles.text}>{currentCity.name}</Text>
					<View style={styles.arrow} />
				</View>
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: THEME.offsetHorizontal,
		maxWidth: '100%',
	},
	button: {
		flexDirection: 'row',
	},
	text: {
		...THEME.typography.text.caption2,
	},
	arrow: {
		borderColor: 'transparent',
		borderWidth: 5,
		borderTopColor: '#333333',
		top: 6,
		width: 10,
		height: 10,
		marginLeft: 7,
	},
	loading: {
		backgroundColor: '#eee',
		width: 120,
		height: 15,
		borderRadius: 4,
	}
});

export default HeaderCityName;