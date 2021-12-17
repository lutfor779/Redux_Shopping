import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    allProducts: [],
    singleProduct: [],
    addingProductData: {},
}
export const productsSlice = createSlice({
    name: 'products',
    initialState: { value: initialStateValue },
    reducers: {
        allProducts: (state, action) => {
            state.value.allProducts = action.payload;
        },
        singleProduct: (state, action) => {
            state.value.singleProduct = action.payload;
        },
        addingProductData: (state, action) => {
            state.value.addingProductData = action.payload;
        },
        removeProduct: state => {
            state.value.singleProduct = [];
        },
    },
});

export const { allProducts, singleProduct, addingProductData, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;