import { apiSlice } from './apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (inputData) => ({
        url: "/user/register",
        method: "POST",
        body: inputData
      }),
    }),
    loginUser: builder.mutation({
      query: (inputData) => ({
        url: "/user/login",
        method: "POST",
        body: inputData
      }),
    }),
  }),
});

export const { 
  useRegisterUserMutation, 
  useLoginUserMutation 
} = authApiSlice;