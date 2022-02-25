import { createSlice } from "@reduxjs/toolkit";
import { allComments } from "../allCommentsInfo";

const initialState = {
    comments: localStorage.getItem("comments") ?
        JSON.parse(localStorage.getItem("comments")) : allComments,
}
export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, payload) => {
            state.comments.push(payload.payload)
            localStorage.setItem("comments", JSON.stringify(state.comments))
        },
        toggleDeleteComment: (state, payload) => {
            const index = state.comments.findIndex(user => {
                return user.id === payload.payload.id
            });
            state.comments[index].isDeleted = !state.comments[index].isDeleted
            localStorage.setItem("comments", JSON.stringify(state.comments))
        },
    }
})

export default commentsSlice.reducer;
export const { addComment, toggleDeleteComment } = commentsSlice.actions;