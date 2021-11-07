import { FETCH_CATALOG, PRODUCT_LIKE, FETCH_BANNER, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR } from "../types";

const handlers = {
    [FETCH_CATALOG]: (state, catalog) => ({ ...state, catalog }),
    [FETCH_BANNER]: (state, banner) => ({ ...state, banner }),
    [SHOW_LOADER]: state => ({ ...state, isLoading: true }),
    [HIDE_LOADER]: state => ({ ...state, isLoading: false }),
    [SHOW_ERROR]: (state, error) => ({ ...state, error }),
    [CLEAR_ERROR]: state => ({ ...state, error: null }),
    [PRODUCT_LIKE]: (state, { like, categoryId, productId }) => ({
        ...state,
        catalog: state.catalog.map((category) => {
            if (+category.categoryId === +categoryId) {
                category.products = category.products.map((p) => {
                    let product = p;

                    if (+p.productId === +productId) {
                        const rating = !!like ? ++p.rating : --p.rating;

                        product = { ...p, isLiked: !!like, rating };
                    }

                    return product;
                });
            }

            return category;
        }),
    }),
    DEFAULT: state => state,
};

const initialState = {
    catalog: [],
    banner: null,
    isLoading: true,
    error: null,
};

export const catalogReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;

    return handler(state, action);
}
