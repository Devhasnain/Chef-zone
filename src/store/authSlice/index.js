import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  socialLoginDetails: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action?.payload;
    },
    setUser: (state, action) => {
      state.user = action?.payload;
    },
    setSocialLoginDetails: (state, action) => {
      state.socialLoginDetails = action?.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const {setToken, setUser, setSocialLoginDetails} = authSlice?.actions;

export const getUser = state => state?.auth?.user;
export const getToken = state => state?.auth?.token;
export const getSocialLoginDetails = state => state?.auth?.socialLoginDetails;

// export default authSlice?.re
export default {initialState, reducer: authSlice?.reducer};
