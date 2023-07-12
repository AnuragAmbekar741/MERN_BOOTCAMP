import { createSlice } from "@reduxjs/toolkit";

const loginToggle = createSlice({
    name: 'loginToggle',
    initialState: {
        isLogin: true,
        token: "",
        currentUser: {}
    },
    reducers: {
        toggleLogin: (state) => {
            state.isLogin = !state.isLogin
        },
        setToken: (state, action) => {
            state.token = action.payload
            sessionStorage.setItem("Token", state.token);
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
            console.log("Redux ", state.currentUser)
        }
    }

})

export const { toggleLogin, setToken, setCurrentUser } = loginToggle.actions
export default loginToggle.reducer