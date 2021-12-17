import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    allOrders: [],
}
export const ordersSlice = createSlice({
    name: 'products',
    initialState: { value: initialStateValue },
    reducers: {
        allOrders: (state, action) => {
            state.value.allOrders = action.payload;
        },
    },
});

export const { allOrders } = ordersSlice.actions;
export default ordersSlice.reducer;