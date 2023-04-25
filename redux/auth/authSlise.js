import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  email: null,
  isLogedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});
