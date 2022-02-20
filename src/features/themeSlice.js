import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentTheme: 'light'
}
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.currentTheme === 'light' ? state.currentTheme = 'dark' : state.currentTheme = 'light'
        }
    }

})

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;