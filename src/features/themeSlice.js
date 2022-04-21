import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentTheme: localStorage.getItem("currentTheme") ?
        JSON.parse(localStorage.getItem("currentTheme")) : 'light',
};
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.currentTheme === 'light' ?
                (state.currentTheme = 'dark') :
                (state.currentTheme = 'light');
            localStorage.setItem("currentTheme", JSON.stringify(state.currentTheme))
        },
    },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;