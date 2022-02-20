import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './../features/themeSlice'
import foodsReducer from './../features/foodsSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        foods: foodsReducer,
    }
})