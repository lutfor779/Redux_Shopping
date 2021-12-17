import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    loading: true,
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