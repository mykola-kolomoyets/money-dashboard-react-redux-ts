/**
 * LOGIN
 */
export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

/**
 * SIGNUP
 */
export type SignUpRequest = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
