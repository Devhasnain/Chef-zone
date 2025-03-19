import baseApi from './api';


const SignIn = body => {
  return {
    url: '/SignIn',
    method: 'POST',
    body,
  };
};

export const AuthService = baseApi.injectEndpoints({
  endpoints: builder => ({
    SignIn: builder.mutation({query: SignIn}),
  }),
  overrideExisting: true,
});

export const {useSignInMutation} = AuthService;
