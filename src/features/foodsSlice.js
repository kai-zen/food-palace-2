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
                state.favorites = state.favorites.filter(food => {
                    return payload.payload.id !== food.id
                });
                state.allFoods[payload.payload.id].isItInFav = false;
            }

        },
        toggleToCart: (state, payload) => {
            if (!state.allFoods[payload.payload.id].isItInCart) {
                state.cart.push(payload.payload);
                state.allFoods[payload.payload.id].isItInCart = true;
            } else {
                state.cart = state.cart.filter(food => {
                    return payload.payload.id !== food.id
                });
                state.allFoods[payload.payload.id].isItInCart = false;
            }
        },
        changeCartQuantity: (state, payload) => {
            state.allFoods[payload.payload.index].cartQuantity = payload.payload.quantity;
            const indexInCart = state.cart.findIndex(food => {
                return food.id === payload.payload.index
            })
            state.cart[indexInCart].cartQuantity = payload.payload.quantity;
        }
    }
})

export default foodsSlice.reducer;
export const { toggleToFavorites, toggleToCart, changeCartQuantity } = foodsSlice.actions;