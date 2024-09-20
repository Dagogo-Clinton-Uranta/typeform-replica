import { createSlice } from '@reduxjs/toolkit';

const initialState = {
       user: null,
       recruiter:false,
       demo:false,
       error: '',
       message: '',
      isLoading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
        state.user = action.payload;
        state.error = '';
        state.message = '';
        state.recruiter = false;
        state.demo = false;

      },
    loginFailed: (state, action) => {
        state.error = action.payload;
        state.user = null;
      },
      setRecruiter: (state, action) => {
        state.recruiter = action.payload;
      },
      setDemo: (state, action) => {
        state.demo = action.payload;
      },
      signupFailed: (state, action) => {
        state.error = action.payload;
        state.user = null;
      },
      storeUserData: (state, action) => {
        state.user = action.payload;
        state.recruiter = false;
        state.demo = false;
      },
    clearUser: (state) => {
      return {
        ...initialState,
      };
    },
    logoutFxn: state => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = loginSlice;

export const {
 
 loginSuccess,
 loginFailed,
 signupFailed,
 setRecruiter,
 setDemo,
 storeUserData,
 clearUser,
 logoutFxn,
} = actions;

export default reducer;


