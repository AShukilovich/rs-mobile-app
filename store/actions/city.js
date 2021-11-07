import {
	CLEAR_ERROR,
	FETCH_CITIES,
	FETCH_STOCKS,
	GET_CITY_INFO,
	HIDE_LOADER,
	HIDE_STOCK_LOADER, SET_CITY,
	SHOW_ERROR,
	SHOW_LOADER,
	SHOW_STOCK_LOADER
} from "../types";
import http from "../../http";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchCatalog } from "./catalog";
import { fetchCart } from "./cart";

export const fetchCities = () => async dispatch => {
	dispatch({ type: SHOW_LOADER });

	dispatch({ type: CLEAR_ERROR });

	try {
		const { data } = await http.get('/cities/');

		dispatch({ type: FETCH_CITIES, cities: data.cities });
	} catch (error) {
		dispatch({ type: SHOW_ERROR, error: error.message });
	} finally {
		dispatch({ type: HIDE_LOADER });
	}
};

export const getCityInfo = async (cityId) => async dispatch => {
	try {
		const { data } = await http.get(`/cities/${cityId}/`);

		dispatch({ type: GET_CITY_INFO, info: data });
	} catch (error) {
		dispatch({ type: SHOW_ERROR, error: error.message });
	}
};

export const fetchStocks = async () => async dispatch => {
	dispatch({ type: SHOW_STOCK_LOADER });
	dispatch({ type: CLEAR_ERROR });

	try {
		const { data } = await http.get('/bonusactions/');

		dispatch({ type: FETCH_STOCKS, stocks: data });
	} catch (error) {
		dispatch({ type: SHOW_ERROR, error: error.message });
	} finally {
		dispatch({ type: HIDE_STOCK_LOADER });
	}
};

export const setCity = (cityId) => async dispatch => {
	try {
		AsyncStorage.setItem('@city-id', cityId);

		dispatch({ type: SET_CITY, cityId });
	} catch (error) {
		throw error;
	}
};