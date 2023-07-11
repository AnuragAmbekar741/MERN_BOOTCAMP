import { configureStore } from "@reduxjs/toolkit"
import loginSlice from "./loginSlice"

const store = configureStore({
    reducer: {
        loginToggle: loginSlice
    }
})

export default store