import {Endpoints} from '../config/Endpoints';
import baseApi, {apiMethods} from './api';
// API methods
const {post, patch, get} = apiMethods;
const SignIn = body => {
  return {
    url: '/SignIn',
    method: post,
    body,
  };
};
const getTestingData = () => {
  return {
    url: Endpoints.getTestingData,
    method: get,
  };
};
export const AuthService = baseApi.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation({query: SignIn}),
    testGetApi: builder.query({
      query: getTestingData,
    }),
  }),
  overrideExisting: true,
});

export const {useSignInMutation, useLazyTestGetApiQuery} = AuthService;
