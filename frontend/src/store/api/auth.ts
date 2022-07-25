import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  LoginRequest,
  LoginResponse,
  SignUpRequest
} from '../../utils/types/services/auth';
import { VoidResponse } from '../../utils/types/services/common';

const authService = createApi({
  reducerPath: 'api/auth',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/auth/`
  }),
  endpoints: (build) => ({
    /**
     * Login with email and password
     */
    login: build.query<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: 'login',
        body: data
      })
    }),

    /**
     * register in platform
     */
    signUp: build.query<VoidResponse, SignUpRequest>({
      query: (data) => ({
        url: 'register',
        method: 'POST',
        body: data
      })
    })
  })
});

export const { useLoginQuery, useSignUpQuery } = authService;

export default authService;
