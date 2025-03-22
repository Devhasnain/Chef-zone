import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {navigationRef} from '../navigation/NavigationService';
import {logout} from '../store/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://catfact.ninja/',
  prepareHeaders: (headers, {getState}) => {
    const token = getState()?.auth?.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
      headers.set('Content-type', 'application/json');
      return headers;
    }
  },
});
const baseQueryWithReAuth = async (args, api, extraOptions) => {
  console.log('Request:', args, api);
  let result = await baseQuery(args, api, extraOptions);
  if (result?.data?.status === 401) {
    navigationRef.current.navigate('AuthStack', {screen: 'SignIn'});
    api.dispatch(logout());
  }
  return result;
};

const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});

export default baseApi;
//Methods
export const apiMethods = {
  get: 'GET',
  post: 'POST',
  patch: 'PATCH',
  put: 'PUT',
  delete: 'DELETE',
};
