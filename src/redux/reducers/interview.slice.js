import { createSlice } from '@reduxjs/toolkit';

const initialState = {
       myGroups: [], 
       allGroups: [], 
       allJobDecks: [],
       publicGroups: [], 
       privateGroups: [],
       groupMembers: [], 
       employeer: {}, 
       message: '',
      isLoading: false,
};

const interviewSlice = createSlice({
  name: 'interview',
  initialState,
  reducers: {
    saveMyGroup: (state, action) => {
        state.myGroups = action.payload;
    },
    saveAllGroup: (state, action) => {
        state.allGroups = action.payload;
    },
    saveAllJobDecks: (state, action) => {
      state.allJobDecks = action.payload;
  },
    savePublicGroup: (state, action) => {
        state.publicGroups = action.payload;
    },
    savePrivateGroup: (state, action) => {
        state.privateGroups = action.payload;
    },
    saveGroupMembers: (state, action) => {
      state.groupMembers = action.payload;
  },
    saveEmployeer: (state, action) => {
      state.employeer = action.payload;
  },
    isItLoading: (state, action) => {
      state.isLoading = action.payload;
  },
    clearGroup: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = interviewSlice;

export const {
 saveMyGroup,
 saveAllGroup,
 saveAllJobDecks,
 savePublicGroup,
 savePrivateGroup,
 saveGroupMembers,
 saveEmployeer,
 isItLoading,
 clearGroup
} = actions;

export default reducer;


