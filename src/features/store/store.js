import { configureStore } from "@reduxjs/toolkit";
import firebaseReducer from "../reducers/firebaseReducer";
import holdReducer from "../reducers/holdReducer";
import orderReducer from "../reducers/orderReducer";
import productReducer from "../reducers/productReducer";

const store = configureStore({
    reducer: {
        products: productReducer,
        hold: holdReducer,
        orders: orderReducer,
        firebase: firebaseReducer,
    }
})
export default store;