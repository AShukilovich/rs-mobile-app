import http from "../../http";
import { CLEAR_ERROR, HIDE_LOADER, SHOW_ERROR, SHOW_LOADER, FETCH_CART } from "../types";

export const fetchCart = async ({ apiToken, cityId }) => async dispatch => {
	dispatch({ type: SHOW_LOADER });
	dispatch({ type: CLEAR_ERROR });

	try {
		const { data } = await http.get(`/cart?api_token=${apiToken}&city_id=${cityId}`);

		dispatch({ type: FETCH_CART, cart: data.cart });
	} catch (error) {
		dispatch({ type: SHOW_ERROR, error: error.message });
	} finally {
		dispatch({ type: HIDE_LOADER });
	}
};
