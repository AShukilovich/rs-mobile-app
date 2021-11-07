import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import UIRadio from "../components/ui/form/UIRadio";
import { THEME } from "../theme";
import { ScreenNames } from "../navigation";
import { setCity } from "../store/actions/city";
import HeaderBack from "../components/header/HeaderBack";

const CityScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	const cities = useSelector(state => state.city.cities);
	const currentCityId = useSelector(state => state.city.currentCityId);

	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => currentCityId && <HeaderBack onPress={() => navigation.goBack()} />,
			headerTitle: () => (
				<View style={{ marginHorizontal: THEME.offsetHorizontal }}>
					<Text style={styles.headerTitle}>Выберите город</Text>
				</View>
			),
		});
	});

	const handlerChangeCity = cityId => {
		dispatch(setCity(cityId));
		navigation.navigate(ScreenNames.CATALOG);
	};

	return (
		<View style={styles.container}>
			<UIRadio
				items={cities}
				selectedKey={currentCityId || null}
				itemValue="id"
				itemLabel="name"
				onChange={handlerChangeCity}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: THEME.offsetHorizontal,
		paddingTop: 32,
	},
	headerTitle: {
		...THEME.typography.text.link,
	}
});

export default CityScreen;