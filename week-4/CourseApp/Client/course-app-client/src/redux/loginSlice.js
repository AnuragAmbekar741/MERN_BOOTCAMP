import { createSlice } from "@reduxjs/toolkit";

const loginToggle = createSlice({
    name: 'loginToggle',
    initialState: {
        isLogin: true
    },
    reducers: {
        toggleLogin: (state) => {
            state.isLogin = !state.isLogin
        }
    }

})

export const { toggleLogin } = loginToggle.actions
export default loginToggle.reducer