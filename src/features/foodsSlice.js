import { createSlice } from "@reduxjs/toolkit";
import { allFoodsInfo } from "../allFoodsInfo";

const initialState = {
    allFoods: allFoodsInfo,
    favorites: [],
    cart: []
}
export const foodsSlice = createSlice({
    name: 'foods',
    initialState,
    reducers: {
        toggleToFavorites: (state, payload) => {
            if (!state.allFoods[payload.payload.id].isItInFav) {
                state.favorites.push(payload.payload);
                state.allFoods[payload.payload.id].isItInFav = true;
            } else {
                state.favorites.splice(payload.payload.id, 1);
                state.allFoods[payload.payload.id].isItInFav = false;
            }

        },
    }
})

export default foodsSlice.reducer;
export const { toggleToFavorites } = foodsSlice.actions;