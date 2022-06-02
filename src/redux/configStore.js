import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import main from "./modules/main";
import thunk from "redux-thunk";


const middleweares = [thunk];
const rootReducer = combineReducers({main});
const enhancer = applyMiddleware(...middleweares);

const store = createStore(rootReducer, enhancer);

export default store;