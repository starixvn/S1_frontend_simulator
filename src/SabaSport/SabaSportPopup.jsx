//@ts-nocheck
import { useSelector, useDispatch } from "react-redux";
import {
  updateDisplayData,
  updateCurrentState,
  restartSingleBetStore,
} from "../store/slices/singleBetSlice";
import UserInfo from "../components/UserInfo/UserInfo";
import { betLookup } from "../helper";
import { useState } from "react";
import GroupButton from "../components/GroupButton/GroupButton";
import GroupAutoButton from "../components/GroupAutoButton/GroupAutoButton";
import GroupAPIFlowButton from "../components/GroupAPIFlowButton/GroupAPIFlowButton";
import GroupScheduleButton from "../components/GroupScheduleButton/GroupScheduleButton";
import SabaIcon from "../components/SabaIcon/SabaIcon";
import TabPanel from "@mui/lab/TabPanel";
import { useTypedDispatch, useTypedSelector } from "../store";
import SabaSportBetDetails from "./SabaSportBetDetails";
import SabaSportTicketDetailsOption from "./SabaSportTicketDetailsOption";
const SabaSportPopup = () => {
  const dispatch = useTypedDispatch();
  const clickedButtons = useTypedSelector(
    (state) => state.singleBet.clickedButtons
  );
  const nextButtons = useTypedSelector((state) => state.singleBet.nextButtons);
  const userId = useTypedSelector((state) => state.userInfo.userId);

  const handleFlowClick = (key) => {
    dispatch(updateCurrentState({ type: key, retryId: null }));
  };

  const restartProcess = (state) => {
    dispatch(restartSingleBetStore());
  };

  const handleActionClick = async (key) => {
    if (!userId) {
      alert("Please insert User Id then click save");
      return;
    }
    const data = betLookup[key]?.getSampleData();
    dispatch(updateDisplayData({ type: key, request: data, response: null }));
    dispatch(updateCurrentState({ type: key, retryId: null }));
  };

  return (
    <div className="popup">
      <div className="popup-header">
        <SabaIcon
          altText="saba-plus-icon"
          imageName="saba-sports.png"
          className="custom-icon-class"
        ></SabaIcon>
        <UserInfo></UserInfo>
      </div>
      <TabPanel value="manual">
        <div className="popup-body">
          <SabaSportTicketDetailsOption headerText="Ticket Details" />
        </div>
      </TabPanel>
      <div className="popup-body">
        <TabPanel value="automate">
          <GroupAutoButton
            headerText="Playbook"
            className={"next"}
          ></GroupAutoButton>
        </TabPanel>
        <TabPanel value="manual">
          <GroupButton
            headerText="Action"
            buttons={nextButtons}
            handleClick={handleActionClick}
            className={"next"}
          >
            {clickedButtons.length > 0 && (
              <button
                key={`ReStart`}
                className={`next betting-btn`}
                onClick={restartProcess}
              >
                Restart
              </button>
            )}
          </GroupButton>
        </TabPanel>
        <TabPanel value="schedule">
          <GroupScheduleButton
            buttons={nextButtons}
            headerText="Action"
            className={"next"}
            handleClick={handleActionClick}
          >
            {clickedButtons.length > 0 && (
              <button
                key={`ReStart`}
                className={`next betting-btn`}
                onClick={restartProcess}
              >
                Restart
              </button>
            )}
          </GroupScheduleButton>
        </TabPanel>

        <GroupAPIFlowButton
          headerText="API Flow"
          buttons={clickedButtons}
          handleClick={handleFlowClick}
          className={"clicked"}
          isRetry={true}
        ></GroupAPIFlowButton>
      </div>
    </div>
  );
};

export default SabaSportPopup;
