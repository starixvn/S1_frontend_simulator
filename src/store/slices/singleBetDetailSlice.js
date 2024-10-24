//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const sabasportVersionKey = createSlice({
  name: "sabasportVersionKey",
  initialState: { lastVersionKey: 0 },
  reducers: {
    updateLastVersionKey: (state, action) => {
      state.lastVersionKey = action.payload;
    },
  },
});

const sabasportBetDetails = createSlice({
  name: "sabasportBetDetails",
  initialState: { selectedTicketDetail: {}, ticketDetails: [] },
  reducers: {
    updateTicketDetails: (state, action) => {
      state.ticketDetails = action.payload;
    },
    updateSelectedTicketDetails: (state, action) => {
      state.selectedTicketDetail = action.payload;
    },
  },
});

export const { updateLastVersionKey } = sabasportVersionKey.actions;

export const { updateTicketDetails, updateSelectedTicketDetails } =
  sabasportBetDetails.actions;

export const sabasportVersionKeyReducer = sabasportVersionKey.reducer;
export const sabasportBetDetailsReducer = sabasportBetDetails.reducer;
