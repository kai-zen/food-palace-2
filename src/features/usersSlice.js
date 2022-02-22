import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [{
        id: 0,
        firstName: 'ali',
        lastName: 'Razipur',
        email: 'razipurali@gmail.com',
        password: '12345678',
        isAdmin: true,
        isDeleted: false
    }],
    loggedInUser: [],
}
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        signUp: (state, payload) => {
            const isEmailInSystem = state.users.filter(theUser => {
                return theUser.email === payload.payload.email
            })
            if (isEmailInSystem[0]) {
                alert('email is already in the system')
            } else {
                state.users.push(payload.payload);
                alert('success')
            }
        },
        signIn: (state, payload) => {
            const user = state.users.filter(theUser => {
                return theUser.email === payload.payload.email
            })
            if (user[0].isDeleted) {
                alert('You\'re banned')
                return
            }
            if (!user[0]) {
                alert('email is not in the system')
                return
            } else {
                const isPasswordTrue = user[0].password === payload.payload.password;
                if (!isPasswordTrue) {
                    alert('password is not true')
                } else {
                    state.loggedInUser[0] = user[0];
                    alert('logged in')
                }
            }
        },
        logout: (state) => {
            state.loggedInUser.length = 0
        }
    }
})

export default usersSlice.reducer;
export const { signUp, signIn, logout } = usersSlice.actions;