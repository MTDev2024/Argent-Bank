import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";

const token = localStorage.getItem("token");
const firstName = localStorage.getItem("firstName");

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  preloadedState: {
    auth: { token: token || null },
    user: { firstName: firstName || null, lastName: null, email: null },
  },
});
