/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRegisterInput {
  name: "name" | "phone" | "password" | "password_confirmation";
  placeholder: string;
  type: string;
  forl: string;
  placel: string;
  validation?: {
    pattern?: RegExp;
    required?: boolean;
    minLength?: number;
  };
}

export interface ILoginInput {
  name: "phone" | "password";
  placeholder: string;
  type: string;
  forl: string;
  placel: string;
  validation: {
    pattern?: RegExp;
    required?: boolean;
    minLength?: number;
  };
}

export interface IForgetInput {
  name: "phone";
  placeholder: string;
  type: string;
  forl: string;
  placel: string;
  validation: {
    pattern?: RegExp;
    required?: boolean;
    minLength?: number;
  };
}

export interface IResetInput {
  name: "password" | "password_confirmation";
  placeholder: string;
  type: string;
  forl: string;
  placel: string;
  validation: {
    pattern?: RegExp;
    required?: boolean;
    minLength?: number;
  };
}

export interface IErrorResponse {
  status?: number;
  message?: string;
  error: {
    message?: string;
    details?: {
      message?: string;
    };
  };
  errors: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    phone?: string[] | undefined;
    country?: string[] | undefined;
    password?: string[] | undefined;
    password_confirmation?: string[] | undefined;
    [key: string]: string[] | undefined;
  };
}

interface IPermission {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
  pivot: {
    role_id: number;
    permission_id: number;
  };
}

interface IRole {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
  pivot: {
    model_type: string;
    model_id: number;
    role_id: number;
  };
  permissions: IPermission[];
}

export interface IUser {
  id: number | null;
  name: string | null;
  email: string | null;
  email_verified_at: string | null;
  phone: string | null;
  profile_picture: string | null;
  is_verified: number | null;
  user_type: string | null;
  created_at: string | null;
  updated_at: string | null;
  business_id: number | null;
  permissions: string[] | null;
  roles: IRole[] | null;
  password: string | null;
}

export interface IToken {
  access_token: string;
  user: IUser;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  image: string;
}
