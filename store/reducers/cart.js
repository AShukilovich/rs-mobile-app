import { SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR, FETCH_CART } from "../types";

const handlers = {
	[FETCH_CART]: (state, cart) => ({ ...state, cart }),
	[SHOW_LOADER]: state => ({ ...state, isLoading: true }),
	[HIDE_LOADER]: state => ({ ...state, isLoading: false }),
	[SHOW_ERROR]: (state, error) => ({ ...state, error }),
	[CLEAR_ERROR]: state => ({ ...state, error: null }),
	DEFAULT: state => state,
};

const initialState = {
	cart: null,
	isLoading: true,
	error: null,
};

export const cartReducer = (state = initialState, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT;

	return handler(state, action);
}
