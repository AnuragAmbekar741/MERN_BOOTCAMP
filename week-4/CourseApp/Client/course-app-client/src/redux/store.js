import { configureStore } from "@reduxjs/toolkit"
import loginSlice from "./loginSlice"
import courseSlice from "./courseSlice"

const store = configureStore({
    reducer: {
        user: loginSlice,
        course: courseSlice
    }
})

export default store