import { configureStore } from "@reduxjs/toolkit"
import loginSlice from "./loginSlice"

const store = configureStore({
    reducer: {
        user: loginSlice
    }
})

export default store