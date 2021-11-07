import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux'
import AppLoading from "expo-app-loading";
import AppNavigation from './components/AppNavigation';
import { bootstrap } from './bootstrap';
import store from './store';
import { fetchCities, setCity } from "./store/actions/city";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

const App = () => {
	const [isReady, setIsReady] = useState(false);

	const dispatch = useDispatch();

	useEffect(async () => {
		dispatch(fetchCities());

		const cityId = await AsyncStorage.getItem('@city-id');
		// const apiToken = await AsyncStorage.getItem('@api-token');

		// if (apiToken) {
		// 	dispatch(setCity(apiToken));
		// }

		if (cityId) {
			dispatch(setCity(cityId));
		}
	}, [dispatch]);

	if (!isReady) {
		return (
			<AppLoading
				startAsync={bootstrap}
				onFinish={() => setIsReady(true)}
				onError={(error) => console.log(error)}
			/>
		);
	}

	return (
		<AppNavigation />
	);
};

export default AppWrapper;
