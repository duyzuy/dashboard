import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../app/api/client";
import { StorageKey } from "../../models/common";
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await client.post("auth/signin", {
      body: {
        email: email,
        password: password,
      },
    });

    if (response.status === 200) {
      const { data } = response;

      localStorage.setItem(StorageKey.token, data.data.accessToken);
      return {
        token: data.data.accessToken,
        errors: "",
      };
    } else {
      return {
        token: "",
        errors: response.data.message,
      };
    }
  }
);

export const logout = createAction("auth/signup", () => {
  return {
    payload: {},
  };
});
interface InitialState {
  token: string;
  loading: "idle" | "pending" | "succeeded" | "failed";
  errors: string;
}
export const initialState: InitialState = {
  token: "",
  loading: "idle",
  errors: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      return {
        ...state,
        loading: "pending",
      };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "succeeded",
        token: action.payload.token,
        errors: action.payload.errors,
      };
    });
  },
});
export default authSlice.reducer;
