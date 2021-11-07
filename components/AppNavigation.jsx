import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames, screens } from '../navigation';
import HeaderLogo from "./header/HeaderLogo";
import HeaderPhone from "./header/HeaderPhone";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
	const currentCityId = useSelector(state => state.city.currentCityId);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={currentCityId ? ScreenNames.CATALOG : ScreenNames.CITY}>
				{ screens.map(({ name, component }) => (
					<Stack.Screen
						key={name}
						name={name}
						component={component}
						options={{
							headerLeft: () => <HeaderLogo />,
							headerRight: () => <HeaderPhone />,
							headerTitleAlign: 'center'
						}}
					/>
				)) }
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigation;
