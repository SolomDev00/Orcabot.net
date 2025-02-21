import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IToken } from "../../interfaces";
import { RootState } from "../store";
import Cookies from "universal-cookie";

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

interface IUser {
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

interface TokenState {
  access_token: string | null;
  user: IUser;
}

const cookie = new Cookies();

const initialState: TokenState = {
  access_token: cookie.get("userLoggedCIT")?.token || null,
  user: cookie.get("userLoggedCIT")?.user || {
    id: null,
    email: null,
    name: null,
    profile_picture: null,
    phone: null,
    user_type: null,
    client_secret: null,
    created_at: null,
    updated_at: null,
    permissions: null,
  },
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<IToken>) => {
      state.access_token = action.payload.access_token;
      state.user = action.payload.user;
    },
    clearToken: (state) => {
      state.access_token = null;
      state.user = {
        id: null,
        name: null,
        email: null,
        email_verified_at: null,
        phone: null,
        profile_picture: null,
        is_verified: null,
        user_type: null,
        created_at: null,
        updated_at: null,
        business_id: null,
        permissions: null,
        roles: null,
        password: null,
      };
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.name = action.payload;
      }
    },
    updateProfilePicture: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.profile_picture = action.payload;
      }
    },
  },
});

export const { setToken, clearToken, updateUsername, updateProfilePicture} = tokenSlice.actions;

export const tokenSelector = (state: RootState) => state.token;

export default tokenSlice.reducer;
