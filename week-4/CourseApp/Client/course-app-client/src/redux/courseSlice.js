import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        Courses: [],
        SelectedCourseId: ''
    },
    reducers: {
        setCourses: (state, action) => {
            state.Courses = action.payload
        },
        filterCourses: (filter, state) => {
            state.Courses.filter(course => course.includes(filter))
        },
        setCourse: (state, action) => {
            state.SelectedCourseId = action.payload
        }
    }
})

export const { setCourses, filterCourse, setCourse } = courseSlice.actions

export default courseSlice.reducer





