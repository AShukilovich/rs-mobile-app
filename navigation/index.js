import React from 'react';

import CityScreen from '../screens/CityScreen';
import CatalogScreen from '../screens/CatalogScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ContactsScreen from '../screens/ContactsScreen';
import CartScreen from '../screens/CartScreen';

export const ScreenNames = {
	CITY: 'CITY',
	LOGIN: 'LOGIN',
	PROFILE: 'PROFILE',
	CONTACTS: 'CONTACTS',
	CART: 'CART',
	CATALOG: 'CATALOG',
}

export const screens = [
	{ name: ScreenNames.CITY, component: CityScreen },
	{ name: ScreenNames.LOGIN, component: LoginScreen },
	{ name: ScreenNames.PROFILE, component: ProfileScreen },
	{ name: ScreenNames.CONTACTS, component: ContactsScreen },
	{ name: ScreenNames.CART, component: CartScreen },
	{ name: ScreenNames.CATALOG, component: CatalogScreen },
];
