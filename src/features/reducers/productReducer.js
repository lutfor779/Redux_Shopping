import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    allProducts: [],
    singleProduct: [],
    addingProductData: {},
    update: false,
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
        update: (state, action) => {
            state.value.update = action.payload;
        }
    },
});

export const { allProducts, singleProduct, addingProductData, removeProduct, update } = productsSlice.actions;
export default productsSlice.reducer;