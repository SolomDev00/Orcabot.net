import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProfileState {
  name: string;
  email: string;
  profile_picture: string | null;
}

const initialState: UserProfileState = {
  name: "",
  email: "",
  profile_picture: null,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    updateUserProfile: (state, action: PayloadAction<UserProfileState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.profile_picture = action.payload.profile_picture;
    },
  },
});

export const { updateUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
