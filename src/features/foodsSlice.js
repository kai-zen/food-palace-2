import { createSlice } from "@reduxjs/toolkit";
import { allFoodsInfo } from "../allFoodsInfo";

const initialState = {
    allFoods: allFoodsInfo,
}
export const foodsSlice = createSlice({
    name: 'foods',
    initialState,
    reducers: {}

})

export default foodsSlice.reducer;
// export const {} = foodsSlice.actions;