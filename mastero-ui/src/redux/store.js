import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./reducers/auth/authSlice";
import loadReducer from "./reducers/loader/loadSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    loading: loadReducer,
  },
})

