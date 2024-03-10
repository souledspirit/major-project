import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../features/common/headerSlice";
import modalSlice from "../features/common/modalSlice";
import rightDrawerSlice from "../features/common/rightDrawerSlice";
import leadsSlice from "../features/leads/leadSlice";
import authReducer from "../features/auth/authSlice";

const combinedReducer = {
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  modal: modalSlice,
  lead: leadsSlice,
  auth: authReducer,
};

export default configureStore({
  reducer: combinedReducer,
});
