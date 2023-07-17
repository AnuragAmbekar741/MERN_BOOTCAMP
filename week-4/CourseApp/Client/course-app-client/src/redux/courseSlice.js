import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        CourseList: [],
        SelectedCourseId: ''
    },
    reducers: {
        setCourseList: (state, action) => {
            state.CourseList = action.payload
        },

        setCourse: (state, action) => {
            state.SelectedCourseId = action.payload
        }
    }
})

export const { setCourseList, setCourse } = courseSlice.actions

export default courseSlice.reducer





