export interface ParseUser {
  objectId: string;
  username: string;
  email?: string;
  emailVerified?: boolean;
  phone?: string;
  name?: string;
  createdAt: string;
  updatedAt?: string;
  sessionToken?: string;
  [key: string]: unknown;
}

export interface SignUpData {
  username: string;
  password: string;
  email?: string;
  phone?: string;
  name?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface ParseSignUpResponse {
  objectId: string;
  createdAt: string;
  sessionToken: string;
}

export interface ParseErrorResponse {
  code: number;
  error: string;
}

