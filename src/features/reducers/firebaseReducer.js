import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    user: {},
    error: '',
    isLoading: true,
    admin: false,
};
const firebaseSlice = createSlice({
    name: 'firebase',
    initialState: { value: initialStateValue },
    reducers: {
        user: (state, action) => {
            state.value.user = action.payload;
        },
        error: (state, action) => {
            state.value.error = action.payload;
        },
        isLoading: (state, action) => {
            state.value.isLoading = action.payload;
        },
        admin: (state, action) => {
            state.value.admin = action.payload;
        },
    },
});

export const { user, error, isLoading, admin } = firebaseSlice.actions;
export default firebaseSlice.reducer;