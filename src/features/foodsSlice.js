import { createSlice } from "@reduxjs/toolkit";
import { allFoodsInfo } from "../allFoodsInfo";

const initialState = {
    allFoods: localStorage.getItem("allFoods") ?
        JSON.parse(localStorage.getItem("allFoods")) : allFoodsInfo,
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
            localStorage.setItem("allFoods", JSON.stringify(state.allFoods))
        },
        toggleToCart: (state, payload) => {
            if (!state.allFoods[payload.payload.id].isItInCart) {
                state.allFoods[payload.payload.id].isItInCart = true;
            } else {
                state.allFoods[payload.payload.id].isItInCart = false;
            }
            localStorage.setItem("allFoods", JSON.stringify(state.allFoods))
        },
        changeCartQuantity: (state, payload) => {
            state.allFoods[payload.payload.index].cartQuantity = payload.payload.quantity;
            localStorage.setItem("allFoods", JSON.stringify(state.allFoods))
        },
        addFood: (state, payload) => {
            state.allFoods.push(payload.payload);
            localStorage.setItem("allFoods", JSON.stringify(state.allFoods))
        },
        toggleDeleteFood: (state, payload) => {
            const index = state.allFoods.findIndex(food => {
                return food.id === payload.payload.id
            });
            state.allFoods[index].deleted = !state.allFoods[index].deleted;
            localStorage.setItem("allFoods", JSON.stringify(state.allFoods))
        },
        editFood: (state, payload) => {
            const index = state.allFoods.findIndex(food => {
                return food.id === payload.payload.id
            });
            state.allFoods[index] = payload.payload;
            localStorage.setItem("allFoods", JSON.stringify(state.allFoods))
        }
    }
})

export default foodsSlice.reducer;
export const { toggleToFavorites, toggleToCart, changeCartQuantity, addFood, toggleDeleteFood, editFood } = foodsSlice.actions;