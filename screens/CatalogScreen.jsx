import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderCityName from "../components/header/HeaderCityName";
import { THEME } from "../theme";

const CatalogScreen = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerTitle: () => <HeaderCityName />,
		});
	});

	return (
		<View style={styles.container}>
			<Text>Каталог</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: THEME.offsetHorizontal,
	},
});

export default CatalogScreen;