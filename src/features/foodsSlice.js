import { createSlice } from "@reduxjs/toolkit";
import { allFoodsInfo } from "../allFoodsInfo";

const initialState = {
    allFoods: allFoodsInfo,
}
export const foodsSlice = createSlice({
    name: 'foods',
    initialState,
    reducers: {
        toggleToFavorites: (state, payload) => {
            if (!state.allFoods[payload.payload.id].isItInFav) {
                state.allFoods[payload.payload.id].isItInFav = true;
            } else {
                state.allFoods[payload.payload.id].isItInFav = false;
            }

        },
        toggleToCart: (state, payload) => {
            if (!state.allFoods[payload.payload.id].isItInCart) {
                state.allFoods[payload.payload.id].isItInCart = true;
            } else {
                state.allFoods[payload.payload.id].isItInCart = false;
            }
        },
        changeCartQuantity: (state, payload) => {
            state.allFoods[payload.payload.index].cartQuantity = payload.payload.quantity;
        }
    }
})

export default foodsSlice.reducer;
export const { toggleToFavorites, toggleToCart, changeCartQuantity } = foodsSlice.actions;