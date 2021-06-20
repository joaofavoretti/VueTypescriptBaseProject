export interface User {
  username: string;
  password: string;
}

export interface AuthenticationTokens {
  accessToken: string;
  refreshToken: string;
  systemClient: string;
}

export enum AuthSessionKeys {
  TOKEN = '@auth/token',
  REFRESH_TOKEN = '@auth/refresh-token',
}

export enum AuthErrors {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403
}
