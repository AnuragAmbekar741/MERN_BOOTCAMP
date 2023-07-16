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
        filterCourses: (filter, state) => {
            state.Courses.filter(course => course.includes(filter))
        },
        setCourse: (state, action) => {
            state.SelectedCourseId = action.payload
        }
    }
})

export const { setCourseList, filterCourse, setCourse } = courseSlice.actions

export default courseSlice.reducer





