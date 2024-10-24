import React from "react";
import "./Simulator.css";

import DataDisplay from "../components/DataDisplay/DataDisplay";
import TabContext from "@mui/lab/TabContext";
import SimulatorTab from "../components/Tab/SimulatorTab";
import { TTab } from "../type/StateType";
import { restartSingleBetStore } from "../store/slices/singleBetSlice";
import { updateTabValue } from "../store/slices/tabSlice";
import SabaSportBetDetails from "../SabaSport/SabaSportBetDetails";
import { useTypedDispatch, useTypedSelector } from "../store";
import SabaSportPopup from "../SabaSport/SabaSportPopup";

const SabaSW = () => {
  const dispatch = useTypedDispatch();
  const tabValue = useTypedSelector((state) => state.tabSimulator.tabValue);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: TTab) => {
    dispatch(restartSingleBetStore());
    dispatch(updateTabValue(newValue));
  };

  return (
    <div className="container-root">
      <TabContext value={tabValue}>
        <SabaSportPopup />
        <DataDisplay>
          <div style={{ display: "flex" }}>
            <SimulatorTab handleChange={handleChangeTab}></SimulatorTab>
            <SabaSportBetDetails />
          </div>
        </DataDisplay>
      </TabContext>
    </div>
  );
};

export default SabaSW;
