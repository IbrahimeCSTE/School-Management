import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { adminLoginReducer, contuctReducer, imageReducer, noticeReducer, paymentReducer, registerReducer, resultListReducer, resultReducer, videoReducer } from "./reducer";


const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    res:resultReducer,
    resList:resultListReducer,
    auth:registerReducer,
    admin:adminLoginReducer,
    notice:noticeReducer,
    contuct:contuctReducer,
    payment:paymentReducer,
    youtube:videoReducer,
    imageFile:imageReducer
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;