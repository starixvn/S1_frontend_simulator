import React from "react";
import Select, { SingleValue } from "react-select";

import { useTypedDispatch, useTypedSelector } from "../store";
import { updateSelectedTicketDetails } from "../store/slices/singleBetDetailSlice";
import { updateBetDetailApi } from "../services/api";
import { betLookup } from "../helper";
import { updateCurrentState, updateDisplayData } from "../store/slices/singleBetSlice";

type Option = {
  value: string;
  label: string;
};

type Props = {
  headerText: string;
};

const SabaSportTicketDetailsOption = ({ headerText }: Props) => {
  const dispatch = useTypedDispatch();
  const userId = useTypedSelector((state) => state.userInfo.userId);
  const selectedTicketDetail = useTypedSelector(
    (state) => state.sabasportBetDetails.selectedTicketDetail
  );
  const ticketDetails = useTypedSelector(
    (state) => state.sabasportBetDetails.ticketDetails
  );

  if (!userId) {
    return null;
  }

  const userTickets = ticketDetails?.filter(
    (ticket) => ticket.vendor_member_id == userId
  );

  const ticketOptions = userTickets?.map((ticket) => ({
    value: ticket.trans_id,
    label: ticket.trans_id,
  }));
  
  const handleTicketChange = (selected: SingleValue<Option> | null) => {
    dispatch(updateSelectedTicketDetails(userTickets.find(x => x.trans_id == selected.value)));  
  }

  const onFetchBetDetail = async (keys) => {
    if (!userId) {
      alert("Please insert User Id then click save");
      return;
    }

    dispatch(updateCurrentState({ type: 'ticketDetail', retryId: null }));
    dispatch(updateDisplayData({ type: 'ticketDetail', request: betLookup['ticketDetail'].getSampleData(), response: null }));
  };

  return (
    <div className="button-group">
      <h4 className="header-text">{headerText}</h4>
      <div className="options">
        <Select
          value={ticketOptions.find(
            (item) => item.value == selectedTicketDetail.vendor_member_id
          )}
          options={ticketOptions}
          onChange={handleTicketChange}
        ></Select>
        <button onClick={onFetchBetDetail} className={`next betting-btn`}>Get Detail</button>
      </div>
    </div>
  );
};

export default React.memo(SabaSportTicketDetailsOption);
