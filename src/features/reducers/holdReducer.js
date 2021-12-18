import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    loading: false,
}
export const holdSlice = createSlice({
    name: 'hold',
    initialState: { value: initialStateValue },
    reducers: {
        loading: (state, action) => {
            state.value.loading = action.payload;
        },
    },
});

export const { loading } = holdSlice.actions;
export default holdSlice.reducer;