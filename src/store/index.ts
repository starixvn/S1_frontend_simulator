import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import singleBetReducer from "./slices/singleBetSlice";
import userInfoReducer from "./slices/userInfoSlice";
import sabaPlusReducer from "./slices/sabaPlusSlice";
import tabReducer from "./slices/tabSlice";
import betResultReducer from "./slices/betResultCheckSlice";
import { sabasportBetDetailsReducer, sabasportVersionKeyReducer } from "./slices/singleBetDetailSlice";

const store = configureStore({
  reducer: {
    singleBet: singleBetReducer,
    userInfo: userInfoReducer,
    tabSimulator: tabReducer,
    sabaPlus: sabaPlusReducer,
    betResultCheck: betResultReducer,
    sabasportVersionKey: sabasportVersionKeyReducer,
    sabasportBetDetails: sabasportBetDetailsReducer, 
  },
});

type DispatchFunction = () => typeof store.dispatch;

export const useTypedDispatch: DispatchFunction = useDispatch;

export const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export default store;
