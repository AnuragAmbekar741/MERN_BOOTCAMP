import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        Courses: []
    },
    reducers: {
        setCourse: (state, action) => {
            state.Courses = action.payload
        },
        filterCourse: (filter, state) => {
            state.Courses.filter(course => course.includes(filter))
        }
    }
})

export const { setCourse, filterCourse } = courseSlice.actions

export default courseSlice.reducer





