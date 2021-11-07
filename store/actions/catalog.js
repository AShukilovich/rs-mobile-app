import http from "../../http";
import { CLEAR_ERROR, FETCH_BANNER, FETCH_CATALOG, HIDE_LOADER, PRODUCT_LIKE, SHOW_ERROR, SHOW_LOADER } from "../types";

export const fetchCatalog = async (cityId) => async dispatch => {
    dispatch({ type: SHOW_LOADER });
    dispatch({ type: CLEAR_ERROR });

    try {
        const { data } = await http.get(`/catalog?city_id=${cityId}`);

        debugger;

        dispatch({ type: FETCH_CATALOG, catalog: data.catalog });
        dispatch({ type: FETCH_BANNER, banner: data.catalog.banner });
    } catch (error) {
        dispatch({ type: SHOW_ERROR, error: error.message });
    } finally {
        dispatch({ type: HIDE_LOADER });
    }
};

export const likeProduct = async ({ categoryId, productId, apiToken, like }) => async dispatch => {
    dispatch({ type: SHOW_LOADER });
    dispatch({ type: CLEAR_ERROR });

    try {
        const { data: success } = await http.post(`/catalog/${productId}/like`, {
            apiToken,
        });

        if (success) {
            dispatch({ type: PRODUCT_LIKE, like, categoryId, productId });
        } else {
            throw new Error('Не удалось поставить лайк');
        }
    } catch (error) {
        dispatch({ type: SHOW_ERROR, error: error.message });
    } finally {
        dispatch({ type: HIDE_LOADER });
    }
}
