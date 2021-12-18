import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    allOrders: [],
    condition: '',
}
export const ordersSlice = createSlice({
    name: 'orders',
    initialState: { value: initialStateValue },
    reducers: {
        allOrders: (state, action) => {
            state.value.allOrders = action.payload;
        },
        condition: (state, action) => {
            state.value.condition = action.payload;
        }
    },
});

export const { allOrders, condition } = ordersSlice.actions;
export default ordersSlice.reducer;