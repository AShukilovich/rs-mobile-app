import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import { catalogReducer } from "./reducers/catalog";
import { cityReducer } from "./reducers/city";

const rootReducer = combineReducers({
	city: cityReducer,
	catalog: catalogReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));