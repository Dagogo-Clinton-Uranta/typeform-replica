import { createSlice } from '@reduxjs/toolkit';

const initialState = {
       students: [],
       teachers: [],
       error: '',
       message: '',
      isLoading: false,
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    fetchStudents: (state, action) => {
        state.students = action.payload;
        state.error = '';
        state.message = '';
      },
    fetchTeachers: (state, action) => {
        state.teachers = action.payload;
        state.error = '';
        state.message = '';
      },
  },
});

const { actions, reducer } = studentSlice;

export const {
  fetchStudents,
  fetchTeachers,
} = actions;

export default reducer;


