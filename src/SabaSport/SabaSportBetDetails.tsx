import React, { useEffect, useState } from "react";

import { useTypedDispatch, useTypedSelector } from "../store";
import { getBetDetailApi } from "../services/api";
import { updateLastVersionKey, updateSelectedTicketDetails, updateTicketDetails } from "../store/slices/singleBetDetailSlice";

type Props = {};

const SabaSportBetDetails = (props: Props) => {
  const dispatch = useTypedDispatch();
  const lastVersionKey = useTypedSelector(state => state.sabasportVersionKey.lastVersionKey);
  const userId = useTypedSelector((state) => state.userInfo.userId);
  const tabValue = useTypedSelector((state) => state.tabSimulator.tabValue);

  if (!userId || tabValue != 'manual') {
    return null;
  }

  const onChangeVersionKey = async (e) => {
    dispatch(updateLastVersionKey(Number(e.target.value).toString()))
  };

  const onSyncLastVersionKey = async (e) => {
    e.preventDefault();
    const response = await getBetDetailApi(lastVersionKey);

    dispatch(updateLastVersionKey(response.data?.last_version_key))
  };

  
  const onFetchTickets = async (e) => {
    e.preventDefault();
    const response = await getBetDetailApi(lastVersionKey);

    dispatch(updateTicketDetails(response?.data?.betDetails))
    if (response?.data?.betDetails?.length) {
      dispatch(updateSelectedTicketDetails(response?.data?.betDetails[0]));
    }
  };

  return (
    <div>
      <form onSubmit={onFetchTickets} style={{ display: "flex", width: "max-content", gap: "10px" }}>
        <label
          title="Last Version Key"
          htmlFor="last-version-key"
          style={{ width: "100%", alignSelf: "center", margin: "0px", textAlign: 'end' }}
        >
          Lastest Version Key:
        </label>
        <input
          id="last-version-key"
          defaultValue={lastVersionKey}
          value={lastVersionKey}
          onChange={onChangeVersionKey}
          type="number"
        />
        <button
          type="button"
          onClick={onSyncLastVersionKey}
          style={{ backgroundColor: "#302f59", color: "white" }}
        >
          Sync
        </button>
        <button
          type="submit"
          onClick={onFetchTickets}
          style={{ backgroundColor: "#302f59", color: "white" }}
        >
          Fetch
        </button>
      </form>
    </div>
  );
};

export default React.memo(SabaSportBetDetails);
