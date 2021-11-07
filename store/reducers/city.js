import {
	FETCH_CITIES,
	GET_CITY_INFO,
	FETCH_STOCKS,
	SHOW_LOADER,
	HIDE_LOADER,
	SHOW_ERROR,
	CLEAR_ERROR,
	HIDE_STOCK_LOADER,
	SHOW_STOCK_LOADER, SET_CITY
} from '../types';

const handlers = {
	[SET_CITY]: (state, { cityId }) => ({ ...state, currentCityId: cityId }),
	[FETCH_CITIES]: (state, { cities }) => ({ ...state, cities }),
	[GET_CITY_INFO]: (state, { info }) => ({ ...state, currentCityInfo: info }),
	[FETCH_STOCKS]: (state, { stocks }) => ({ ...state, stocks }),
	[SHOW_LOADER]: state => ({ ...state, isLoading: true }),
	[HIDE_LOADER]: state => ({ ...state, isLoading: false }),
	[SHOW_STOCK_LOADER]: state => ({ ...state, isStockLoading: true }),
	[HIDE_STOCK_LOADER]: state => ({ ...state, isStockLoading: false }),
	[SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
	[CLEAR_ERROR]: state => ({ ...state, error: null }),
	DEFAULT: state => state,
};

const initialState = {
	isLoading: true,
	error: null,
	cities: [],
	currentCityId: null,
	currentCityInfo: null,
	stocks: [],
};

export const cityReducer = (state = initialState, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT;

	return handler(state, action);
};